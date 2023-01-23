#include "PatientName.hpp"
#include "imebra.hpp"
#include "Arguments.hpp"

using namespace bindings;

Nan::Persistent<v8::Function> PatientName::constructor;

NAN_METHOD(PatientName::New){
    PatientName* p = new PatientName();
    p->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

NAN_METHOD(PatientName::GetAlphabeticRepresentation) {
    UNWRAP(info.This(),PatientName,p);
    info.GetReturnValue().Set(Nan::New(p->value->getAlphabeticRepresentation()).ToLocalChecked());
}

PatientName::PatientName(): value(nullptr){}

PatientName::~PatientName() {
    delete value;
}

void PatientName::Init(v8::Local<v8::Object> exports){
    auto tpl = Nan::New<v8::FunctionTemplate>(New);

    tpl->SetClassName(Nan::New("PatientName").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getAlphabeticRepresentation",GetAlphabeticRepresentation);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("PatientName").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}
