import path from "path";
import fs from "fs";
import imebra from "..";
import assert from "assert";

export default (async () => {
  const dataSet = imebra.CodecFactory.load(path.resolve(__dirname, "0002.DCM"));

  const expectedStringOrder = [
    "DERIVED",
    "",
    "XA",
    "",
    "",
    "",
    "01",
    "CARDIO-SMS 1.0",
    "0",
    "0",
    "0",
    "",
    "33",
    "",
    "GR",
    "",
    "-32",
    "2",
    "CARDIO-D.R. 1.0",
    "",
    "1",
    "",
    "",
    "CARDIO-D.R. 1.0",
    "15",
    "MONOCHROME2",
    "96",
    "LIN",
    "NAT",
    "CARDIO-D.R. 1.0",
    "ECG",
    "DPPS",
    "255",
    "0",
  ];

  for (const tagId of dataSet.getTags()) {
    if (!dataSet.bufferExists(tagId, 0)) {
      continue;
    }

    const tag = dataSet.getTag(tagId);

    switch (tag.getDataType()) {
      case imebra.constants.tagVR_t.DA: {
        const date = dataSet.getDate(tagId, 0);
        assert.strict.deepEqual(
          [
            date.getDay(),
            date.getMonth(),
            date.getYear(),
            date.getHour(),
            date.getMinutes(),
            date.getSeconds(),
          ],
          [13, 10, 1994, 0, 0, 0]
        );
        break;
      }
      case imebra.constants.tagVR_t.AS:
      case imebra.constants.tagVR_t.CS:
      case imebra.constants.tagVR_t.DS:
      case imebra.constants.tagVR_t.IS:
      case imebra.constants.tagVR_t.LO:
      case imebra.constants.tagVR_t.OB:
      case imebra.constants.tagVR_t.OD:
      case imebra.constants.tagVR_t.OF:
      case imebra.constants.tagVR_t.OL:
      case imebra.constants.tagVR_t.OW:
      case imebra.constants.tagVR_t.SH:
        assert.strict.equal(
          dataSet.getString(tagId, 0),
          expectedStringOrder.shift()
        );
        break;
    }
  }

  imebra.CodecFactory.save(
    dataSet,
    path.resolve(__dirname, "out.jpeg"),
    imebra.constants.codecType_t.jpeg
  );

  assert.strict.ok(
    (await fs.promises.readFile(path.resolve(__dirname, "out.jpeg"))).equals(
      await fs.promises.readFile(path.resolve(__dirname, "expected.out.jpeg"))
    )
  );
})().catch((reason) => {
  console.error(reason);
  process.exitCode = 1;
});
