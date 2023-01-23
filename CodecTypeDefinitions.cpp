#include "CodecTypeDefinitions.hpp"

#include <imebra/definitions.h>
#include <stdexcept>

void bindings::CodecTypeDefinitions::Init(v8::Local<v8::Object> exports) {
    auto obj = Nan::New<v8::Object>();
    Nan::Set(obj,Nan::New("dicom").ToLocalChecked(),Nan::New<v8::Number>(0));
    Nan::Set(obj,Nan::New("jpeg").ToLocalChecked(),Nan::New<v8::Number>(1));
    Nan::Set(exports,Nan::New("codecType_t").ToLocalChecked(),obj);
}
bool bindings::CodecTypeDefinitions::Decode(v8::Local<v8::Value> jsValue, imebra::codecType_t& out) {
    if(!jsValue->IsNumber()) return false;
    const auto value = Nan::To<v8::Number>(jsValue).ToLocalChecked()->Value();
    if(value == 0) {
        out = imebra::codecType_t::dicom;
        return true;
    }
    if(value == 1) {
        out = imebra::codecType_t::jpeg;
        return true;
    }
    return false;
}
v8::Local<v8::Value> bindings::CodecTypeDefinitions::Encode(imebra::codecType_t value) {
    switch(value) {
        case imebra::codecType_t::dicom:
            return Nan::New<v8::Number>(0);
        case imebra::codecType_t::jpeg:
            return Nan::New<v8::Number>(1);
    }
    throw std::runtime_error("received invalid enum");
}
