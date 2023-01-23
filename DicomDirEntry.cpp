#include "DicomDirEntry.hpp"
#include "Arguments.hpp"

Nan::Persistent<v8::Function> bindings::DicomDirEntry::constructor;

void bindings::DicomDirEntry::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("DicomDirEntry").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getNextEntry",GetNextEntry);
    Nan::SetPrototypeMethod(tpl,"hasNextEntry",HasNextEntry);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("DicomDirEntry").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(bindings::DicomDirEntry::New) {
    auto* e = new DicomDirEntry();
    e->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

bindings::DicomDirEntry::DicomDirEntry(): value(nullptr) {

}

bindings::DicomDirEntry::~DicomDirEntry() {
    delete value;
}

NAN_METHOD(bindings::DicomDirEntry::HasNextEntry){
    DicomDirEntry *entry;
    if(!Arguments::Unwrap(info.This(),entry)){
        Nan::ThrowError("Method called under invalid context");
        return;
    }
    info.GetReturnValue().Set(Nan::New(entry->value->hasNextEntry()));
}

NAN_METHOD(bindings::DicomDirEntry::GetNextEntry){
    DicomDirEntry *entry, *nextEntry;
    if(!Arguments::Unwrap(info.This(),entry)){
        Nan::ThrowError("Method called under invalid context");
        return;
    }
    auto nextEntryJs = Nan::NewInstance(Nan::New(bindings::DicomDirEntry::constructor),0,nullptr).ToLocalChecked();
    if(!Arguments::Unwrap(nextEntryJs,nextEntry)){
        Nan::ThrowError("Failed to create new DicomDirEntry instance");
        return;
    }
    nextEntry->value = new imebra::DicomDirEntry(entry->value->getNextEntry());
    info.GetReturnValue().Set(nextEntryJs);
}
