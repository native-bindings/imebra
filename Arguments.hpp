#ifndef IMEBRA_ARGUMENTS_H
#define IMEBRA_ARGUMENTS_H

#include <nan.h>

class Arguments {
public:
    static bool GetInt32(v8::Local<v8::Value>,int32_t&);
    static bool GetInt32(v8::Local<v8::Value>,int_fast32_t &);
    static bool GetUint32(v8::Local<v8::Value>, uint_fast32_t&);
    static bool GetString(v8::Local<v8::Value>, std::string&);
    static bool GetDouble(v8::Local<v8::Value>, double&);
    static bool GetInt(v8::Local<v8::Value>, size_t&);
    static std::string TypeOf(v8::Local<v8::Value>);
    template<typename T> static bool Unwrap(v8::Local<v8::Value> value, T*& out){
        out = nullptr;
        if(!value->IsObject() || value->IsNull()){
            return false;
        }
        out = Nan::ObjectWrap::Unwrap<T>(Nan::To<v8::Object>(value).ToLocalChecked());
        return out != nullptr;
    }
};


#endif //IMEBRA_ARGUMENTS_H
