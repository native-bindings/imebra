#ifndef NODE_DICOM_READER_DICOMDEFINITIONS_H_
#define NODE_DICOM_READER_DICOMDEFINITIONS_H_

#include <nan.h>
#include <imebra/dicomDefinitions.h>
#include <nan.h>
namespace bindings {

class DicomDefinitions {
public:
    static void Init(v8::Local<v8::Object>);
    static bool Decode(v8::Local<v8::Value>,imebra::tagId_t&);
    static v8::Local<v8::Value> Encode(imebra::tagId_t);
};

}
#endif // NODE_DICOM_READER_DICOMDEFINITIONS_H_
