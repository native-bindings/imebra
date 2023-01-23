# node-imebra

## Installation

```
yarn add node-imebra
```

## Usage

```ts
import imebra from "node-imebra";

CodecFactory.setMaximumImageSize(8000, 8000);
const set = CodecFactory.load(path.resolve(__dirname,'0003.dcm'));
const outFile = path.resolve(__dirname,'out.jpg');
CodecFactory.save(set,outFile,imebra.constants.codecType_t.jpeg)
assert.strict.deepEqual(await fs.promises.readFile(
    path.resolve(__dirname,'expected.out.jpg')
),await fs.promises.readFile(outFile))
```
