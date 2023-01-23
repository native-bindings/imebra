#ifndef NODE_DICOM_READER_CODECTYPEDEFINITIONS_H_
#define NODE_DICOM_READER_CODECTYPEDEFINITIONS_H_

#include <nan.h>
#include <imebra/definitions.h>
#include <nan.h>
namespace bindings {

class CodecTypeDefinitions {
public:
    static void Init(v8::Local<v8::Object>);
    static bool Decode(v8::Local<v8::Value>,imebra::codecType_t&);
    static v8::Local<v8::Value> Encode(imebra::codecType_t);
};

}
#endif // NODE_DICOM_READER_CODECTYPEDEFINITIONS_H_
