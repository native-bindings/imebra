#ifndef AGE_H
#define AGE_H

#include <imebra/age.h>
#include <nan.h>

namespace bindings {

class Age : public Nan::ObjectWrap {
public:
    imebra::Age value;
    static Nan::Persistent<v8::Function> constructor;
    Age(std::uint32_t initialAge, imebra::ageUnit_t initialUnits);
    static void Init(v8::Local<v8::Object>);
private:
    static NAN_METHOD(New);
    static NAN_METHOD(GetAgeValue);
};

}

#endif // AGE_H
