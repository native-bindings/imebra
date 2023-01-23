#include "DataSet.hpp"
#include "AgeUnitDefinitions.hpp"
#include "Arguments.hpp"
#include "Tag.hpp"
#include "TagId.hpp"
#include "Age.hpp"
#include "PatientName.hpp"
#include "TagVRDefinitions.hpp"
#include "imebra.hpp"
#include "Date.hpp"
#include "Image.h"
#include "VOIDescription.h"

#include <string>
#include <imebra/tag.h>
#include <imebra/patientName.h>
#include <imebra/imebra.h>
#include <imebra/codecFactory.h>

using namespace bindings;

Nan::Persistent<v8::Function> DataSet::constructor;

NAN_METHOD(DataSet::New){
    auto* set = new DataSet();
    set->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}

NAN_METHOD(DataSet::GetPatientName){
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    size_t elementNumber;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    imebra::PatientName out = set->value->getPatientName(tagId->value,elementNumber);
    auto jsName = Nan::NewInstance(Nan::New(PatientName::constructor)).ToLocalChecked();
    PatientName* patientName;
    if(!Arguments::Unwrap(jsName, patientName)){
        Nan::ThrowError(MSG_INTERNAL_FAILURE);
        return;
    }
    try {
        patientName->value = new imebra::PatientName(out);
    } catch(std::exception& e){
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(jsName);
}

NAN_METHOD(DataSet::GetDataType) {
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    info.GetReturnValue().Set(TagVRDefinitions::Encode(set->value->getDataType(tagId->value)));
}

NAN_METHOD(DataSet::GetImage) {
    UNWRAP(info.This(),DataSet,set);
    size_t frameNumber;
    if(!Arguments::GetInt(info[0],frameNumber)){
        Nan::ThrowError("First argument must be a valid integer");
        return;
    }
    auto imgJs = Nan::NewInstance(Nan::New(Image::constructor)).ToLocalChecked();
    UNWRAP(imgJs,Image,img);
    try {
        img->value.emplace(set->value->getImage(frameNumber));
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(imgJs);
}

NAN_METHOD(DataSet::GetImageApplyModalityTransform) {
    UNWRAP(info.This(),DataSet,set);
    size_t frameNumber;
    if(!Arguments::GetInt(info[0],frameNumber)){
        Nan::ThrowError("First argument must be a valid integer");
        return;
    }
    auto imgJs = Nan::NewInstance(Nan::New(Image::constructor)).ToLocalChecked();
    UNWRAP(imgJs,Image,img);
    try {
        img->value.emplace(set->value->getImageApplyModalityTransform(frameNumber));
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(imgJs);
}

NAN_METHOD(DataSet::BufferExists){
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    uint_fast32_t bufferId;
    if(!Arguments::GetUint32(info[1],bufferId)) {
        Nan::ThrowError("Second argument must be a valid unsigned 32-bit integer");
        return;
    }
    info.GetReturnValue().Set(Nan::New(set->value->bufferExists(tagId->value,bufferId)));
}

NAN_METHOD(DataSet::GetDate){
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    size_t elementNumber;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    uint32_t initialYear;
    uint32_t initialMonth;
    uint32_t initialDay;
    uint32_t initialHour;
    uint32_t initialMinutes;
    uint32_t initialSeconds;
    uint32_t initialNanoseconds;
    int32_t initialOffsetHours;
    int32_t initialOffsetMinutes;
    try {
        auto date = set->value->getDate(tagId->value,elementNumber);
        initialYear = date.getYear();
        initialMonth = date.getMonth();
        initialDay = date.getDay();
        initialHour = date.getHour();
        initialMinutes = date.getMinutes();
        initialSeconds = date.getSeconds();
        initialNanoseconds = date.getNanoseconds();
        initialOffsetHours = date.getOffsetHours();
        initialOffsetMinutes = date.getOffsetMinutes();
    } catch(std::exception& e){
        Nan::ThrowError(e.what());
        return;
    }
    v8::Local<v8::Value> argv[] = {
        Nan::New(initialYear),
        Nan::New(initialMonth),
        Nan::New(initialDay),
        Nan::New(initialHour),
        Nan::New(initialMinutes),
        Nan::New(initialSeconds),
        Nan::New(initialNanoseconds),
        Nan::New(initialOffsetHours),
        Nan::New(initialOffsetMinutes)
    };
    auto date = Nan::NewInstance(Nan::New(Date::constructor),9,argv).ToLocalChecked();
    info.GetReturnValue().Set(date);
}

NAN_METHOD(DataSet::GetAge) {
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    size_t elementNumber;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
//    Age* age = nullptr;
//    if(!Arguments::Unwrap(info[2],age) && !info[2]->IsUndefined()){
//        Nan::ThrowError("Third argument must be either a valid Age instance or undefined");
//        return;
//    }
//    if(age) {
//        try {
//            set->value->getAge(tagId->value,elementNumber,age->value);
//        } catch(std::exception& e) {
//            Nan::ThrowError(e.what());
//            return;
//        }
//        info.GetReturnValue().Set(info[2]);
//        return;
//    }
    v8::Local<v8::Value> ageUnit;
    uint32_t ageValue;
    try {
        auto a = set->value->getAge(tagId->value,elementNumber);
        ageUnit = AgeUnitDefinitions::Encode(a.getAgeUnits());
        ageValue = a.getAgeValue();
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
        return;
    }
    v8::Local<v8::Value> argv[] = {
        Nan::New(ageValue),
        ageUnit
    };
    info.GetReturnValue().Set(Nan::NewInstance(Nan::New(Age::constructor),2,argv).ToLocalChecked());
}

NAN_METHOD(DataSet::GetTag) {
    // make sure "this" is a valid DataSet instance
    UNWRAP(info.Holder(),DataSet,set);
    // make sure tag id is a valid TagId instance
    UNWRAP(info[0],TagId,tagId);
    v8::Local<v8::Value> argv[] = {
        info.Holder(),
        info[0]
    };
    auto result = Nan::NewInstance(Nan::New(Tag::constructor),2,argv).ToLocalChecked();
    UNWRAP(result,Tag,tag);
    try {
        tag->value.emplace(set->value->getTag(tagId->value));
    } catch(std::exception& e){
        Nan::ThrowError(e.what());
        return;
    }
    info.GetReturnValue().Set(result);
}

NAN_METHOD(DataSet::GetVOIs){
    UNWRAP(info.This(),DataSet,set);
    auto list = Nan::New<v8::Array>();
    uint32_t i = 0;
    for(auto& v : set->value->getVOIs()){
        auto jsVoi = Nan::NewInstance(Nan::New(VOIDescription::constructor)).ToLocalChecked();
        UNWRAP(jsVoi,VOIDescription,voi);
        voi->value = v;
        Nan::Set(list,Nan::New(i),jsVoi);
    }
    info.GetReturnValue().Set(list);
}

NAN_METHOD(DataSet::GetTags) {
    UNWRAP(info.This(),DataSet,set);
    const auto tags = set->value->getTags();
    auto list = Nan::New<v8::Array>(tags.size());
    size_t i = 0;
    for(auto& t : tags){
        v8::Local<v8::Value> argv[] = {
            Nan::New(t.getGroupId()),
            Nan::New(t.getGroupOrder()),
            Nan::New(t.getTagId())
        };
        auto jsTag = Nan::NewInstance(Nan::New(TagId::constructor),3,argv).ToLocalChecked();
        Nan::Set(list,i,jsTag);
        i++;
    }
    info.GetReturnValue().Set(list);
}

NAN_METHOD(DataSet::GetString){
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    std::string defaultValue, out;
    size_t elementNumber;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    if(!Arguments::GetString(info[2],defaultValue) && !info[2]->IsUndefined()){
        Nan::ThrowError("Third argument must be either a string or undefined");
        return;
    }
    try {
        out = set->value->getString(tagId->value,elementNumber,defaultValue);
    } catch(std::exception& e){
        Nan::ThrowError(Nan::New(std::string("Failed to get string with error: ") + e.what()).ToLocalChecked());
        return;
    }

    info.GetReturnValue().Set(Nan::New(out).ToLocalChecked());
}

NAN_METHOD(DataSet::GetUint32){
    UNWRAP(info.This(),DataSet,set);
    UNWRAP(info[0],TagId,tagId);
    std::string defaultValue;
    size_t elementNumber;
    uint32_t out;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    try {
        out = set->value->getUint32(tagId->value,elementNumber);
    } catch(std::exception& e){
        Nan::ThrowError(Nan::New(std::string("Failed to get unsigned 32-bit integer with error: ") + e.what()).ToLocalChecked());
        return;
    }

    info.GetReturnValue().Set(Nan::New(out));
}

NAN_METHOD(DataSet::GetInt32){
    DataSet* set = nullptr;
    if(!Arguments::Unwrap<DataSet>(info.This(),set)){
        Nan::ThrowError("Method called under invalid context");
        return;
    }
    UNWRAP(info[0],TagId,tagId);
    std::string defaultValue;
    size_t elementNumber;
    int32_t out;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    try {
        out = set->value->getInt32(tagId->value,elementNumber);
    } catch(std::exception& e){
        Nan::ThrowError(Nan::New(std::string("Failed to get unsigned 32-bit integer with error: ") + e.what()).ToLocalChecked());
        return;
    }

    info.GetReturnValue().Set(Nan::New(out));
}

NAN_METHOD(DataSet::GetInt64){
    DataSet* set = nullptr;
    if(!Arguments::Unwrap<DataSet>(info.This(),set)){
        Nan::ThrowError("Method called under invalid context");
        return;
    }
    UNWRAP(info[0],TagId,tagId);
    std::string defaultValue;
    size_t elementNumber;
    int64_t out;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    try {
        out = set->value->getInt64(tagId->value,elementNumber);
    } catch(std::exception& e){
        Nan::ThrowError(Nan::New(std::string("Failed to get unsigned 32-bit integer with error: ") + e.what()).ToLocalChecked());
        return;
    }

    info.GetReturnValue().Set(Nan::New<v8::Number>(out));
}

NAN_METHOD(DataSet::GetFloat){
    DataSet* set = nullptr;
    if(!Arguments::Unwrap<DataSet>(info.This(),set)){
        Nan::ThrowError("Method called under invalid context");
        return;
    }
    UNWRAP(info[0],TagId,tagId);
    std::string defaultValue;
    size_t elementNumber;
    float out;
    if(!Arguments::GetInt(info[1],elementNumber)){
        Nan::ThrowError("Second argument must be a valid integer");
        return;
    }
    try {
        out = set->value->getFloat(tagId->value,elementNumber);
    } catch(std::exception& e){
        Nan::ThrowError(Nan::New(std::string("Failed to get unsigned 32-bit integer with error: ") + e.what()).ToLocalChecked());
        return;
    }

    info.GetReturnValue().Set(Nan::New(out));
}

void DataSet::Init(v8::Local<v8::Object> exports) {
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("DataSet").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getTags",GetTags);
    Nan::SetPrototypeMethod(tpl,"getVOIs",GetVOIs);
    Nan::SetPrototypeMethod(tpl,"getPatientName",GetPatientName);
    Nan::SetPrototypeMethod(tpl,"getTag",GetTag);
    Nan::SetPrototypeMethod(tpl,"getInt32",GetInt32);
    Nan::SetPrototypeMethod(tpl,"getInt64",GetInt64);
    Nan::SetPrototypeMethod(tpl,"getUint32",GetUint32);
    Nan::SetPrototypeMethod(tpl,"getImage",GetImage);
    Nan::SetPrototypeMethod(tpl,"getImageApplyModalityTransform",GetImageApplyModalityTransform);
    Nan::SetPrototypeMethod(tpl,"bufferExists",BufferExists);
    Nan::SetPrototypeMethod(tpl,"getAge",GetAge);
    Nan::SetPrototypeMethod(tpl,"getDate",GetDate);
    Nan::SetPrototypeMethod(tpl,"getFloat",GetFloat);
    Nan::SetPrototypeMethod(tpl,"getString",GetString);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("DataSet").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

DataSet::DataSet() {

}
