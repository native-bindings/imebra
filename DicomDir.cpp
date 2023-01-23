#include "DicomDir.hpp"
#include "DataSet.hpp"
#include "Arguments.hpp"
#include "DicomDirEntry.hpp"

#include <imebra/dicomDir.h>

Nan::Persistent<v8::Function> bindings::DicomDir::constructor;

void bindings::DicomDir::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("DicomDir").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"hasRootEntry",HasRootEntry);
    Nan::SetPrototypeMethod(tpl,"getFirstRootEntry",GetFirstRootEntry);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("DicomDir").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(bindings::DicomDir::GetFirstRootEntry) {
    DicomDir* dir;
    if(!Arguments::Unwrap(info.This(),dir)){
        Nan::ThrowError("hasRootEntry method called under invalid context");
        return;
    }
    auto entryJs = Nan::NewInstance(Nan::New(DicomDirEntry::constructor),0,nullptr).ToLocalChecked();
    DicomDirEntry* entry;
    if(!Arguments::Unwrap(entryJs, entry)){
        Nan::ThrowError("Failed to create new instance of DicomDirEntry class");
        return;
    }
    entry->value = new imebra::DicomDirEntry(dir->value.getFirstRootEntry());
    info.GetReturnValue().Set(entryJs);
}

NAN_METHOD(bindings::DicomDir::HasRootEntry) {
    DicomDir* dir;
    if(!Arguments::Unwrap(info.This(),dir)){
        Nan::ThrowError("hasRootEntry method called under invalid context");
        return;
    }
    info.GetReturnValue().Set(Nan::New(dir->value.hasRootEntry()));
}

NAN_METHOD(bindings::DicomDir::New){
    bindings::DataSet* set;
    if(!Arguments::Unwrap(info[0],set)){
        Nan::ThrowError("First argument must be a valid DataSet instance");
        return;
    }
    auto* dir = new DicomDir(*set->value);
    dir->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

bindings::DicomDir::DicomDir(imebra::DataSet& dataSet): value(imebra::DicomDir(dataSet)) {

}

