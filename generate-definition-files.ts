import path from "path";
import fs from "fs";
import assert from "assert";
import CodeStream from "codestreamjs";

type EnumType = "char" | "int32";

const idExpr = /^[a-zA-Z0-9\_]+$/;

function getEnumValueFromEnumType(enumType: EnumType, value: string) {
  let n: string | number;
  let offset = 0;
  while (offset < value.length && idExpr.test(value[offset])) {
    offset++;
  }
  if (enumType === "int32") {
    if (value.startsWith("0x")) {
      n = parseInt(value.substring(2, offset), 16);
    } else {
      n = parseInt(value.substring(0, offset), 10);
    }
  } else if (enumType === "char") {
    n = value
      .substring(0, value.indexOf("//"))
      .replace(/[,\ ]+$/, "")
      .replace(/\'([a-zA-Z]+)'/, "$1");
  } else {
    console.error("invalid enum type: %s", enumType);
    n = -1;
  }
  return n;
}

function getExpressionFromValue(id: string | number) {
  let value: string;
  if (typeof id === "number") {
    value = `Nan::New<v8::Number>(${id})`;
  } else {
    value = `Nan::New("${id}").ToLocalChecked()`;
  }
  return value;
}

async function createDefinitionsFile({
  file,
  sourceIncludes,
  propertyName,
  enumType,
  outClassName,
  enumExpression,
  headerIncludes,
  outEnumName: outInterfaceName,
  startSlice,
}: {
  file: string;
  outEnumName: string;
  enumExpression: string;
  startSlice: string;
  propertyName: string;
  outClassName: string;
  enumType: EnumType;
  headerIncludes: string[];
  sourceIncludes: string[];
}) {
  const headerIfDef = `NODE_DICOM_READER_${outClassName.toUpperCase()}_H_`;
  const contents = await fs.promises.readFile(file, "utf8");
  const i = contents.indexOf(startSlice);
  assert.strict.ok(i !== -1);
  let offset = i + startSlice.length;
  const eof = contents.indexOf(";", offset);
  assert.strict.ok(eof !== -1);
  let enumIndex = 0;
  const map = new Map<
    string,
    {
      id: number | string;
      name: string;
      comments: string[];
    }
  >(
    contents
      .substring(offset, eof)
      .split("\n")
      .map((l) => {
        if (l.indexOf("=") === -1) {
          const commaIndex = l.indexOf(",");
          let commentIndex = l.indexOf("//");
          if (commaIndex !== -1) {
            commentIndex = commaIndex;
          }
          if (commentIndex !== -1) {
            l = `${l.substring(0, commentIndex)} = ${enumIndex++}${l.substring(
              commentIndex
            )}`;
          }
        }
        return l.split("=").map((x) => x.trim());
      })
      .filter((l) => l.length >= 2)
      .map((l) => {
        const [name] = l;
        let [, value] = l;
        // console.log(value);
        return [
          name,
          {
            id: getEnumValueFromEnumType(enumType, value),
            comments: value
              // .substring(offset)
              .split("\n")
              // .map(l => l.replace(/[^a-zA-Z 0-9\.,]+/g,'').trim())
              // .map(l => l.replace(/^[^a-zA-Z0-9]+/,''))
              .map((l) => l.trim())
              .map((l) => l.substring(l.indexOf("///") + 3))
              .filter((l) => l.trim().length > 0),
            name,
          },
        ] as const;
      })
      .filter((s) => idExpr.test(s[0]))
  );
  let cs = new CodeStream();
  cs.write(`#include "${outClassName}.hpp"\n`);
  cs.write("\n");
  for (const src of [...sourceIncludes, "<stdexcept>"]) {
    cs.write(`#include ${src}\n`);
  }
  cs.write("\n");
  cs.write(
    `void bindings::${outClassName}::Init(v8::Local<v8::Object> exports) {\n`,
    () => {
      cs.write("auto obj = Nan::New<v8::Object>();\n");
      for (const [k, v] of map) {
        cs.write(
          `Nan::Set(obj,Nan::New("${k}").ToLocalChecked(),${getExpressionFromValue(
            v.id
          )});\n`
        );
      }
      cs.write(
        `Nan::Set(exports,Nan::New("${propertyName}").ToLocalChecked(),obj);\n`
      );
    },
    "}\n"
  );
  cs.write(
    `bool bindings::${outClassName}::Decode(v8::Local<v8::Value> jsValue, ${enumExpression}& out) {\n`,
    () => {
      if (enumType === "char") {
        cs.write("if(!jsValue->IsString()) return false;\n");
        cs.write("ssize_t length = Nan::DecodeBytes(jsValue);\n");
        cs.write("std::vector<char> strValue;\n");
        cs.write("strValue.resize(length);\n");
        cs.write(
          "if(Nan::DecodeWrite(strValue.data(),length,jsValue) != length) {\n",
          () => {
            cs.write("return false;\n");
          },
          "}\n"
        );
        cs.write(`auto value = std::string_view(strValue.data(),length);\n`);
      } else {
        cs.write("if(!jsValue->IsNumber()) return false;\n");
        cs.write(
          `const auto value = Nan::To<v8::Number>(jsValue).ToLocalChecked()->Value();\n`
        );
      }
      for (const [, v] of map) {
        cs.write(
          `if(value == ${typeof v.id === "string" ? `"${v.id}"` : v.id}) {\n`,
          () => {
            cs.write(`out = ${enumExpression}::${v.name};\n`);
            cs.write(`return true;\n`);
          },
          "}\n"
        );
      }
      cs.write("return false;\n");
    },
    "}\n"
  );
  cs.write(
    `v8::Local<v8::Value> bindings::${outClassName}::Encode(${enumExpression} value) {\n`,
    () => {
      cs.write(
        `switch(value) {\n`,
        () => {
          for (const v of new Map(
            [...map].map((x) => [x[1].id, x[1]])
          ).values()) {
            cs.write(`case ${enumExpression}::${v.name}:\n`);
            cs.indentBlock(() => {
              cs.write(`return ${getExpressionFromValue(v.id)};\n`);
            });
          }
        },
        "}\n"
      );
      cs.write('throw std::runtime_error("received invalid enum");\n');
    },
    "}\n"
  );
  await fs.promises.writeFile(
    path.resolve(__dirname, `${outClassName}.cpp`),
    cs.value()
  );

  cs = new CodeStream();
  cs.write(
    `export enum ${outInterfaceName} {\n`,
    () => {
      console.log(map);
      for (const [t, v] of map) {
        cs.write("/**\n");
        for (const c of v.comments) {
          cs.write(` * ${c}\n`);
        }
        cs.write(" */\n");
        cs.write(`${t} = ${typeof v.id === "string" ? `"${v.id}"` : v.id},\n`);
      }
    },
    "}\n"
  );
  await fs.promises.writeFile(
    path.resolve(__dirname, `${outClassName}.ts`),
    cs.value()
  );

  cs = new CodeStream();
  cs.write(`#ifndef ${headerIfDef}\n`);
  cs.write(`#define ${headerIfDef}\n\n`);
  for (const src of headerIncludes) {
    cs.write(`#include ${src}\n`);
  }
  cs.write("#include <nan.h>\n");
  cs.write("namespace bindings {\n\n");
  cs.write(`class ${outClassName} {\n`);
  cs.write("public:\n");
  cs.indentBlock(() => {
    cs.write("static void Init(v8::Local<v8::Object>);\n");
    cs.write(`static bool Decode(v8::Local<v8::Value>,${enumExpression}&);\n`);
    cs.write(`static v8::Local<v8::Value> Encode(${enumExpression});\n`);
  });
  cs.write("};\n\n");
  cs.write("}\n");
  cs.write(`#endif // ${headerIfDef}\n`);
  await fs.promises.writeFile(
    path.resolve(__dirname, `${outClassName}.hpp`),
    cs.value()
  );
}

(async () => {
  const imebraDir = path.resolve(__dirname, "imebra-cmake/imebra_5_3_3_0");
  await Promise.all([
    createDefinitionsFile({
      file: path.resolve(
        imebraDir,
        "library/include/imebra/dicomDefinitions.h"
      ),
      outClassName: "DicomDefinitions",
      propertyName: "tagId_t",
      startSlice: "enum class tagId_t: std::uint32_t",
      sourceIncludes: ["<imebra/dicomDefinitions.h>"],
      headerIncludes: ["<nan.h>", "<imebra/dicomDefinitions.h>"],
      outEnumName: "DicomDefinitions",
      enumType: "int32",
      enumExpression: "imebra::tagId_t",
    }),
    createDefinitionsFile({
      file: path.resolve(imebraDir, "library/include/imebra/definitions.h"),
      outClassName: "TagVRDefinitions",
      enumType: "int32",
      propertyName: "tagVR_t",
      startSlice: "enum class tagVR_t: std::uint32_t",
      sourceIncludes: ["<imebra/definitions.h>"],
      headerIncludes: ["<nan.h>", "<imebra/definitions.h>"],
      outEnumName: "TagVRDefinitions",
      enumExpression: "imebra::tagVR_t",
    }),
    createDefinitionsFile({
      file: path.resolve(imebraDir, "library/include/imebra/definitions.h"),
      enumType: "char",
      outClassName: "AgeUnitDefinitions",
      propertyName: "ageUnit_t",
      startSlice: "enum class ageUnit_t: char",
      sourceIncludes: ["<imebra/definitions.h>"],
      headerIncludes: ["<nan.h>", "<imebra/definitions.h>"],
      outEnumName: "AgeUnitDefinitions",
      enumExpression: "imebra::ageUnit_t",
    }),
    createDefinitionsFile({
      file: path.resolve(imebraDir, "library/include/imebra/definitions.h"),
      enumType: "int32",
      outClassName: "CodecTypeDefinitions",
      propertyName: "codecType_t",
      startSlice: "enum class codecType_t: std::uint32_t",
      sourceIncludes: ["<imebra/definitions.h>"],
      headerIncludes: ["<nan.h>", "<imebra/definitions.h>"],
      outEnumName: "CodecTypeDefinitions",
      enumExpression: "imebra::codecType_t",
    }),
  ]);
})().catch((reason) => {
  process.exitCode = 1;
  console.error(reason);
});
