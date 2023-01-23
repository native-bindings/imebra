#include "CodecFactory.hpp"
#include "DataSet.hpp"
#include "Arguments.hpp"
#include "CodecTypeDefinitions.hpp"
#include "imebra.hpp"

using namespace bindings;

NAN_METHOD(CodecFactory::SetMaximumImageSize){
    uint_fast32_t w,h;
    if(!Arguments::GetUint32(info[0],w) || !Arguments::GetUint32(info[1],h)){
        Nan::ThrowError("First two arguments must be valid unsigned 32-bit values");
        return;
    }
    CodecFactory::value.setMaximumImageSize(w, h);
}

NAN_METHOD(CodecFactory::Load){
    std::string filePath;
    if(!Arguments::GetString(info[0],filePath)){
        Nan::ThrowError("First argument must be a valid string");
        return;
    }
    auto dataSet = Nan::NewInstance(Nan::New(DataSet::constructor)).ToLocalChecked();
    UNWRAP(dataSet,DataSet,set);
    try {
        set->value.emplace(CodecFactory::value.load(filePath));
        info.GetReturnValue().Set(dataSet);
    } catch(std::exception&e){
        Nan::ThrowError(e.what());
    }
}


NAN_METHOD(CodecFactory::Save){
    DataSet* set;
    if(!Arguments::Unwrap(info[0],set)){
        Nan::ThrowError("First argument must be a valid instance of DataSet");
        return;
    }
    std::string outFile;
    if(!Arguments::GetString(info[1],outFile)){
        Nan::ThrowError("Second argument must be a valid string");
        return;
    }
    imebra::codecType_t codecType;
    if(!CodecTypeDefinitions::Decode(info[2],codecType)){
        Nan::ThrowError("Third argument must be a valid signed 32-bit integer");
        return;
    }
    try {
        CodecFactory::value.save(*set->value,outFile, codecType);
    } catch(std::exception& e) {
        Nan::ThrowError(e.what());
    }
}



void CodecFactory::Init(v8::Local<v8::Object> exports) {
    auto out = Nan::New<v8::Object>();
    std::unordered_map<std::string,v8::Local<v8::Function>> keys {
        {"setMaximumImageSize", Nan::New<v8::Function>(SetMaximumImageSize)},
        {"load",Nan::New<v8::Function>(Load)},
        {"save",Nan::New<v8::Function>(Save)}
    };
    for(auto& i : keys){
        Nan::Set(out,Nan::New(i.first).ToLocalChecked(), i.second);
    }
    Nan::Set(exports,Nan::New("CodecFactory").ToLocalChecked(),out);
}
