#ifndef DATE_H
#define DATE_H

#include <nan.h>
#include <imebra/date.h>

namespace bindings {

class Date : public Nan::ObjectWrap {
public:
    static Nan::Persistent<v8::Function> constructor;
    imebra::Date value;
    explicit Date(
        uint32_t initialYear,
        uint32_t initialMonth,
        uint32_t initialDay,
        uint32_t initialHour,
        uint32_t initialMinutes,
        uint32_t initialSeconds,
        uint32_t initialNanoseconds,
        int32_t initialOffsetHours,
        int32_t initialOffsetMinutes
    );
    static void Init(v8::Local<v8::Object>);
private:
    static NAN_METHOD(New);
    static NAN_METHOD(GetYear);
    static NAN_METHOD(GetDay);
    static NAN_METHOD(GetMonth);
    static NAN_METHOD(GetSeconds);
    static NAN_METHOD(GetMinutes);
    static NAN_METHOD(GetHour);
    static NAN_METHOD(GetNanoseconds);
    static NAN_METHOD(GetOffsetHours);
    static NAN_METHOD(GetOffsetMinutes);
};

}

#endif // DATE_H
