#include "Date.hpp"
#include "Arguments.hpp"
#include "imebra.hpp"

#include <cstdint>
#include <vector>

using namespace bindings;

Nan::Persistent<v8::Function> Date::constructor;

Date::Date(
    uint32_t initialYear,
    uint32_t initialMonth,
    uint32_t initialDay,
    uint32_t initialHour,
    uint32_t initialMinutes,
    uint32_t initialSeconds,
    uint32_t initialNanoseconds,
    int32_t initialOffsetHours,
    int32_t initialOffsetMinutes
):
    value(initialYear,
        initialMonth,
        initialDay,
        initialHour,
        initialMinutes,
        initialSeconds,
        initialNanoseconds,
        initialOffsetHours,
        initialOffsetMinutes
    )
{

}

void Date::Init(v8::Local<v8::Object> exports){
    auto tpl = Nan::New<v8::FunctionTemplate>(New);
    tpl->SetClassName(Nan::New("Date").ToLocalChecked());
    tpl->InstanceTemplate()->SetInternalFieldCount(1);

    Nan::SetPrototypeMethod(tpl,"getYear",GetYear);
    Nan::SetPrototypeMethod(tpl,"getMinutes",GetMinutes);
    Nan::SetPrototypeMethod(tpl,"getDay",GetDay);
    Nan::SetPrototypeMethod(tpl,"getMonth",GetMonth);
    Nan::SetPrototypeMethod(tpl,"getSeconds",GetSeconds);
    Nan::SetPrototypeMethod(tpl,"getNanoseconds",GetNanoseconds);
    Nan::SetPrototypeMethod(tpl,"getOffsetHours",GetOffsetHours);
    Nan::SetPrototypeMethod(tpl,"getOffsetMinutes",GetOffsetMinutes);
    Nan::SetPrototypeMethod(tpl,"getHour",GetHour);

    constructor.Reset(Nan::GetFunction(tpl).ToLocalChecked());

    Nan::Set(exports,Nan::New("Date").ToLocalChecked(),Nan::GetFunction(tpl).ToLocalChecked());
}

NAN_METHOD(Date::New){
    uint_fast32_t initialYear = 0;
    uint_fast32_t initialMonth = 0;
    uint_fast32_t initialDay = 0;
    uint_fast32_t initialHour = 0;
    uint_fast32_t initialMinutes = 0;
    uint_fast32_t initialSeconds = 0;
    uint_fast32_t initialNanoseconds = 0;
    int_fast32_t initialOffsetHours = 0;
    int_fast32_t initialOffsetMinutes = 0;
    std::vector<uint_fast32_t*> unsignedIntegers {
        &initialYear,
        &initialMonth,
        &initialDay,
        &initialHour,
        &initialMinutes,
        &initialSeconds,
        &initialNanoseconds
    };
    std::vector<int_fast32_t*> signedIntegers {
        &initialOffsetHours,
        &initialOffsetMinutes
    };
    uint32_t i,lastIndex;
    for(i = 0; i < unsignedIntegers.size(); i++){
        auto& out = *unsignedIntegers[i];
        if(!Arguments::GetUint32(info[i],out)){
            Nan::ThrowError(std::string("Argument " + std::to_string(i + 1) + " must be a valid 32-bit integer").c_str());
            return;
        }
    }
    lastIndex = i;
    for(i = 0; i < signedIntegers.size(); i++){
        auto& out = *signedIntegers[i];
        if(!Arguments::GetInt32(info[lastIndex + i],out)){
            Nan::ThrowError(std::string("Argument " + std::to_string(lastIndex + i + 1) + " must be a valid 32-bit integer").c_str());
            return;
        }
    }
    Date* date;
    try {
         date = new Date(
            initialYear,
            initialMonth,
            initialDay,
            initialHour,
            initialMinutes,
            initialSeconds,
            initialNanoseconds,
            initialOffsetHours,
            initialOffsetMinutes
        );
    } catch(std::exception&e){
        Nan::ThrowError(e.what());
        return;
    }
    date->Wrap(info.This());
    info.GetReturnValue().Set(info.This());
}


NAN_METHOD(Date::GetYear) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getYear()));
}

NAN_METHOD(Date::GetMonth) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getMonth()));
}

NAN_METHOD(Date::GetDay) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getDay()));
}

NAN_METHOD(Date::GetMinutes) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getMinutes()));
}

NAN_METHOD(Date::GetSeconds) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getSeconds()));
}

NAN_METHOD(Date::GetHour) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getHour()));
}

NAN_METHOD(Date::GetNanoseconds) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getNanoseconds()));
}

NAN_METHOD(Date::GetOffsetHours) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getOffsetHours()));
}

NAN_METHOD(Date::GetOffsetMinutes) {
    UNWRAP(info.This(),Date,d);
    info.GetReturnValue().Set(Nan::New(d->value.getOffsetMinutes()));
}
