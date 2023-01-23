const files = [
    './build/Release/node_imebra',
    './build/Debug/node_imebra'
];
for(const f of files){
    try {
        Object.assign(exports,require(f));
        break;
    }catch(reason) {

    }
}