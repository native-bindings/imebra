#ifndef IMEBRA_TAG_HPP
#define IMEBRA_TAG_HPP

#include <nan.h>
#include <imebra/tagId.h>
#include <imebra/tag.h>
#include <optional>

namespace bindings {

class Tag : public Nan::ObjectWrap {
public:
    std::optional<imebra::Tag> value;
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
private:
    Tag();
    static NAN_METHOD(New);
    static NAN_METHOD(GetDataType);
    static NAN_METHOD(GetBufferSize);
    static NAN_METHOD(BufferExists);
    static NAN_METHOD(SequenceItemExists);
    static NAN_METHOD(GetBuffersCount);
};

}

#endif //IMEBRA_TAG_HPP
