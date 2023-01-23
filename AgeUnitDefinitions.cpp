#include "AgeUnitDefinitions.hpp"

#include <imebra/definitions.h>
#include <stdexcept>

void bindings::AgeUnitDefinitions::Init(v8::Local<v8::Object> exports) {
    auto obj = Nan::New<v8::Object>();
    Nan::Set(obj,Nan::New("days").ToLocalChecked(),Nan::New("D").ToLocalChecked());
    Nan::Set(obj,Nan::New("weeks").ToLocalChecked(),Nan::New("W").ToLocalChecked());
    Nan::Set(obj,Nan::New("months").ToLocalChecked(),Nan::New("M").ToLocalChecked());
    Nan::Set(obj,Nan::New("years").ToLocalChecked(),Nan::New("Y").ToLocalChecked());
    Nan::Set(exports,Nan::New("ageUnit_t").ToLocalChecked(),obj);
}
bool bindings::AgeUnitDefinitions::Decode(v8::Local<v8::Value> jsValue, imebra::ageUnit_t& out) {
    if(!jsValue->IsString()) return false;
    ssize_t length = Nan::DecodeBytes(jsValue);
    std::vector<char> strValue;
    strValue.resize(length);
    if(Nan::DecodeWrite(strValue.data(),length,jsValue) != length) {
        return false;
    }
    auto value = std::string_view(strValue.data(),length);
    if(value == "D") {
        out = imebra::ageUnit_t::days;
        return true;
    }
    if(value == "W") {
        out = imebra::ageUnit_t::weeks;
        return true;
    }
    if(value == "M") {
        out = imebra::ageUnit_t::months;
        return true;
    }
    if(value == "Y") {
        out = imebra::ageUnit_t::years;
        return true;
    }
    return false;
}
v8::Local<v8::Value> bindings::AgeUnitDefinitions::Encode(imebra::ageUnit_t value) {
    switch(value) {
        case imebra::ageUnit_t::days:
            return Nan::New("D").ToLocalChecked();
        case imebra::ageUnit_t::weeks:
            return Nan::New("W").ToLocalChecked();
        case imebra::ageUnit_t::months:
            return Nan::New("M").ToLocalChecked();
        case imebra::ageUnit_t::years:
            return Nan::New("Y").ToLocalChecked();
    }
    throw std::runtime_error("received invalid enum");
}
