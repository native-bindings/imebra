#include "Tag.hpp"
#include "Arguments.hpp"
#include "TagVRDefinitions.hpp"
#include "imebra.hpp"

using namespace bindings;

Nan::Persistent<v8::Function> Tag::constructor;

NAN_METHOD(Tag::New) {
    auto tag = new Tag();
    tag->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

void Tag::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("Tag").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getDataType",GetDataType);
    Nan::SetPrototypeMethod(tpl,"bufferExists",BufferExists);
    Nan::SetPrototypeMethod(tpl,"getBufferSize",GetBufferSize);
    Nan::SetPrototypeMethod(tpl,"getBuffersCount",GetBuffersCount);
//    Nan::SetPrototypeMethod(tpl,"getSequenceItem",GetSequenceItem);
    Nan::SetPrototypeMethod(tpl,"sequenceItemExists",SequenceItemExists);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("Tag").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(Tag::SequenceItemExists){
    UNWRAP(info.This(),Tag,tag);
    size_t dataSetId;
    if(!Arguments::GetInt(info[0],dataSetId)){
        Nan::ThrowError("First argument must be a valid integer");
        return;
    }
    info.GetReturnValue().Set(Nan::New(tag->value->sequenceItemExists(dataSetId)));
}

NAN_METHOD(Tag::GetBufferSize){
    UNWRAP(info.This(),Tag,tag);
    size_t bufferId;
    if(!Arguments::GetInt(info[0],bufferId)){
        Nan::ThrowError("First argument must be a valid integer");
        return;
    }
    info.GetReturnValue().Set(Nan::New<v8::Number>(tag->value->getBufferSize(bufferId)));
}

//NAN_METHOD(Tag::GetSequenceItem){
//    UNWRAP(info.This(),Tag,tag);
//    size_t dataSetId;
//    if(!Arguments::GetInt(info[0],dataSetId)){
//        Nan::ThrowError("First argument must be a valid integer");
//        return;
//    }
//    auto dataSet = tag->value->getSequenceItem(dataSetId)
//    info.GetReturnValue().Set(Nan::New<v8::Number>(tag->value->getBufferSize(bufferId)));
//}

NAN_METHOD(Tag::GetBuffersCount){
    UNWRAP(info.This(),Tag,tag);
    info.GetReturnValue().Set(Nan::New<v8::Number>(tag->value->getBuffersCount()));
}

NAN_METHOD(Tag::GetDataType) {
    UNWRAP(info.This(),Tag,tag);
    info.GetReturnValue().Set(TagVRDefinitions::Encode(tag->value->getDataType()));
}

NAN_METHOD(Tag::BufferExists) {
    UNWRAP(info.This(),Tag,tag);
    size_t bufferId;
    if(!Arguments::GetInt(info[0],bufferId)) {
        Nan::ThrowError("First argument must be a valid integer");
        return;
    }
    info.GetReturnValue().Set(Nan::New(tag->value->bufferExists(bufferId)));
}

Tag::Tag() {
}

