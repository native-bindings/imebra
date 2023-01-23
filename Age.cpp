#include "Age.hpp"
#include "AgeUnitDefinitions.hpp"
#include "Arguments.hpp"
#include "imebra.hpp"

#include <imebra/definitions.h>

using namespace bindings;

Nan::Persistent<v8::Function> Age::constructor;

Age::Age(std::uint32_t initialAge, imebra::ageUnit_t initialUnits): value(initialAge,initialUnits) {

}

void Age::Init(v8::Local<v8::Object>exports){
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("Age").ToLocalChecked());

    Nan::SetPrototypeMethod(tpl,"getAgeValue",GetAgeValue);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("Age").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(Age::GetAgeValue){
    UNWRAP(info.This(),Age,a);
    info.GetReturnValue().Set(Nan::New(a->value.getAgeValue()));
}

NAN_METHOD(Age::New){
    UNWRAP(info.This(),Age,a);
    uint_fast32_t initialAge;
    if(!Arguments::GetUint32(info[0],initialAge)){
        Nan::ThrowError("Second argument must be a valid string");
        return;
    }
    imebra::ageUnit_t ageUnit;
    if(!AgeUnitDefinitions::Decode(info[1],ageUnit)){
        Nan::ThrowError("Second argument must be a valid string");
        return;
    }
    Age* age;
    try {
        age = new Age(initialAge,ageUnit);
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }

    age->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}
