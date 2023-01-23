#ifndef NODE_DICOM_READER_AGEUNITDEFINITIONS_H_
#define NODE_DICOM_READER_AGEUNITDEFINITIONS_H_

#include <nan.h>
#include <imebra/definitions.h>
#include <nan.h>
namespace bindings {

class AgeUnitDefinitions {
public:
    static void Init(v8::Local<v8::Object>);
    static bool Decode(v8::Local<v8::Value>,imebra::ageUnit_t&);
    static v8::Local<v8::Value> Encode(imebra::ageUnit_t);
};

}
#endif // NODE_DICOM_READER_AGEUNITDEFINITIONS_H_
