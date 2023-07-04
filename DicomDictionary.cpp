#include "DicomDictionary.h"
#include "imebra.hpp"
#include "TagId.hpp"
#include "Arguments.hpp"
#include "TagVRDefinitions.hpp"

#include <imebra/dicomDictionary.h>

using namespace bindings;

DicomDictionary::DicomDictionary()
{

}



void DicomDictionary::Init(v8::Local<v8::Object> exports){
    auto out = Nan::New<v8::Object>();

    Nan::Set(out,Nan::New("getTagDescription").ToLocalChecked(),Nan::New<v8::Function>(GetTagDescription));

    Nan::Set(out,Nan::New("getTagType").ToLocalChecked(),Nan::New<v8::Function>(GetTagType));

    Nan::Set(exports,Nan::New("DicomDictionary").ToLocalChecked(),out);
}

NAN_METHOD(DicomDictionary::GetTagDescription){
    UNWRAP(info[0],TagId,tagId);
    std::string description;
    try {
        description = imebra::DicomDictionary::getTagDescription(tagId->value);
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(Nan::New(description).ToLocalChecked());
}

NAN_METHOD(DicomDictionary::GetTagType){
    UNWRAP(info[0],TagId,tagId);
    v8::Local<v8::Value> result;
    try {
        result = TagVRDefinitions::Encode(imebra::DicomDictionary::getTagType(tagId->value));
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(result);
}
