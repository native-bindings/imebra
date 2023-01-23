#ifndef PATIENTNAME_H
#define PATIENTNAME_H

#include <optional>
#include <nan.h>
#include <imebra/patientName.h>

namespace bindings {

class PatientName : public Nan::ObjectWrap {
public:
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
    imebra::PatientName* value;
    PatientName();
    ~PatientName();
private:
    static NAN_METHOD(New);
    static NAN_METHOD(GetAlphabeticRepresentation);
};

}

#endif // PATIENTNAME_H
