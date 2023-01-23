#include "TagId.hpp"
#include "Arguments.hpp"
#include "imebra.hpp"
#include "DicomDefinitions.hpp"

using namespace bindings;

Nan::Persistent<v8::Function> TagId::constructor;

void TagId::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("TagId").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getTagId",GetTagId);
    Nan::SetPrototypeMethod(tpl,"getGroupId",GetGroupId);
    Nan::SetPrototypeMethod(tpl,"getGroupOrder",GetGroupOrder);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("TagId").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(TagId::New) {
    imebra::tagId_t id;
    TagId* t;
    if(DicomDefinitions::Decode(info[0],id)) {
        t = new TagId(id);
    } else {
        uint_fast32_t groupId, groupOrder, tagId;
        if(!Arguments::GetUint32(info[0],groupId)){
            Nan::ThrowError("First argument must be a valid unsigned 32-bit integer");
            return;
        }
        if(!Arguments::GetUint32(info[1],groupOrder)){
            Nan::ThrowError("Second argument must be a valid unsigned 32-bit integer");
            return;
        }
        if(!Arguments::GetUint32(info[2],tagId)){
            Nan::ThrowError("Third argument must be a valid unsigned 32-bit integer");
            return;
        }
        try {
            t = new TagId(groupId,groupOrder,tagId);
        } catch(std::exception& e){
            Nan::ThrowError(e.what());
            return;
        }
    }
    t->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

NAN_METHOD(TagId::GetTagId){
    UNWRAP(info.This(),TagId,tagId);
    info.GetReturnValue().Set(Nan::New(tagId->value.getTagId()));
}

NAN_METHOD(TagId::GetGroupId){
    UNWRAP(info.This(),TagId,tagId);
    info.GetReturnValue().Set(Nan::New(tagId->value.getGroupId()));
}

NAN_METHOD(TagId::GetGroupOrder){
    UNWRAP(info.This(),TagId,tagId);
    info.GetReturnValue().Set(Nan::New(tagId->value.getGroupOrder()));
}

TagId::TagId(uint_fast32_t groupId, uint_fast32_t groupOrder, uint_fast32_t tagId): value(groupId,groupOrder,tagId){}

TagId::TagId(uint_fast32_t groupId, uint_fast32_t tagId): value(uint16_t(groupId),uint16_t(tagId)) {

}

TagId::TagId(imebra::tagId_t id): value(id) {

}
