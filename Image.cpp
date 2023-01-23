#include "Image.h"
#include "Arguments.hpp"
#include "imebra.hpp"

using namespace bindings;

Nan::Persistent<v8::Function> Image::constructor;

Image::Image() {

}


void Image::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("Image").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getWidth",GetWidth);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("Image").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}


NAN_METHOD(Image::New) {
    auto img = new Image();
    img->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}


NAN_METHOD(Image::GetWidth) {
    UNWRAP(info.This(),Image,img);
    info.GetReturnValue().Set(Nan::New(img->value->getWidth()));
}
