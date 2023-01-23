#ifndef NODE_DICOM_READER_TAGVRDEFINITIONS_H_
#define NODE_DICOM_READER_TAGVRDEFINITIONS_H_

#include <nan.h>
#include <imebra/definitions.h>
#include <nan.h>
namespace bindings {

class TagVRDefinitions {
public:
    static void Init(v8::Local<v8::Object>);
    static bool Decode(v8::Local<v8::Value>,imebra::tagVR_t&);
    static v8::Local<v8::Value> Encode(imebra::tagVR_t);
};

}
#endif // NODE_DICOM_READER_TAGVRDEFINITIONS_H_
