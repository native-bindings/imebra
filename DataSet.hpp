#ifndef IMEBRA_DATASET_HPP
#define IMEBRA_DATASET_HPP

#include <nan.h>
#include <imebra/dataSet.h>
#include <optional>

namespace bindings {

class DataSet : public Nan::ObjectWrap {
public:
    std::optional<imebra::DataSet> value;
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
private:
    DataSet();
    static NAN_METHOD(New);
    static NAN_METHOD(GetTags);
    static NAN_METHOD(GetVOIs);
    static NAN_METHOD(GetTag);
    static NAN_METHOD(GetAge);
    static NAN_METHOD(GetDate);
    static NAN_METHOD(BufferExists);
    static NAN_METHOD(GetImageApplyModalityTransform);
    static NAN_METHOD(GetImage);
    static NAN_METHOD(GetDataType);
    static NAN_METHOD(GetPatientName);
    static NAN_METHOD(GetUint32);
    static NAN_METHOD(GetInt32);
    static NAN_METHOD(GetInt64);
    static NAN_METHOD(GetFloat);
    static NAN_METHOD(GetString);
};

}

#endif //IMEBRA_DATASET_HPP
