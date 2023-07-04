Object.defineProperty(exports, "__esModule", { value: true });

const files = [
  "./build/Release/node_imebra.node",
  "./build/Debug/node_imebra.node",
];
let out = null;
for (const f of files) {
  try {
    const preOut = require(f);
    if (!preOut) {
      throw new Error(`Required ${f}, but it returned null`);
    }
    out = preOut;
  } catch (reason) {}
}

if (out === null) {
  throw new Error(
    `None of the matching .node files were successfully imported`
  );
}

module.exports = out;
