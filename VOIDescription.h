#ifndef VOIDESCRIPTION_H
#define VOIDESCRIPTION_H

#include <nan.h>
#include <imebra/VOIDescription.h>

class VOIDescription : public Nan::ObjectWrap {
public:
    imebra::VOIDescription value;
    static Nan::Persistent<v8::Function> constructor;
    VOIDescription();
    static void Init(v8::Local<v8::Object>);
private:
    static NAN_METHOD(New);
    static NAN_METHOD(GetDescription);
};

#endif // VOIDESCRIPTION_H
