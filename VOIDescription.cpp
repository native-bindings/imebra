#include "VOIDescription.h"
#include "imebra.hpp"
#include "Arguments.hpp"

Nan::Persistent<v8::Function> VOIDescription::constructor;

VOIDescription::VOIDescription() {

}


void VOIDescription::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->InstanceTemplate()->SetInternalFieldCount(1);
    tpl->SetClassName(Nan::New("VOIDescription").ToLocalChecked());

    Nan::SetPrototypeMethod(tpl,"getDescription",GetDescription);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("VOIDescription").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}


NAN_METHOD(VOIDescription::New) {
    auto* d = new VOIDescription();
    d->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}


NAN_METHOD(VOIDescription::GetDescription) {
    UNWRAP(info.This(),VOIDescription,v);
    info.GetReturnValue().Set(Nan::New(v->value.getDescription()).ToLocalChecked());
}
