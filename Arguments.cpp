#include "Arguments.hpp"

#include <iostream>

bool Arguments::GetInt32(v8::Local<v8::Value> value, int_fast32_t& out) {
    if(!value->IsInt32()){
        return false;
    }
    out = Nan::To<v8::Int32>(value).ToLocalChecked()->Value();
    return true;
}

std::string Arguments::TypeOf(v8::Local<v8::Value> val){
    std::string typeName = "";
    if(val->IsNumber()){
        typeName = "number";
    } else if(val->IsInt32()){
        typeName = "int32";
    } else if(val->IsBigInt()){
        typeName = "bigint";
    } else if(val->IsUint32()){
        typeName = "uint32";
    } else if(val->IsString()){
        typeName = "string";
    } else if(val->IsArray()) {
        typeName = "array";
    } else if(!val->IsNull() && val->IsObject()) {
        typeName = "object";
    } else if(val->IsNullOrUndefined()){
        typeName = "null or undefined";
    }
    return typeName;
}

bool Arguments::GetUint32(v8::Local<v8::Value> value, uint_fast32_t& out) {
    if(!value->IsUint32()){
        return false;
    }
    out = Nan::To<v8::Uint32>(value).ToLocalChecked()->Value();
    return true;
}

bool Arguments::GetInt(v8::Local<v8::Value> value, size_t& out) {
    if(!value->IsNumber()) {
        return false;
    }
    out = Nan::To<v8::Number>(value).ToLocalChecked()->Value();
    return true;
}

bool Arguments::GetString(v8::Local<v8::Value> value, std::string& out) {
    if(!value->IsString()) {
        return false;
    }
    auto byteLength = Nan::DecodeBytes(value);
    std::vector<char> buffer;
    buffer.resize(byteLength);
    Nan::DecodeWrite(buffer.data(),byteLength,value);
    out = std::string(buffer.data(),byteLength);
    return true;
}

bool Arguments::GetDouble(v8::Local<v8::Value> value, double & out) {
    if(!value->IsNumber()) {
        return false;
    }
    out = Nan::To<v8::Number>(value).ToLocalChecked()->Value();
    return true;
}

bool Arguments::GetInt32(v8::Local<v8::Value> value, int32_t& out) {
    if(!value->IsInt32()){
        return false;
    }
    out = Nan::To<v8::Int32>(value).ToLocalChecked()->Value();
    return true;
}
