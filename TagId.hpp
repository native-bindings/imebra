#ifndef IMEBRA_TAGID_H
#define IMEBRA_TAGID_H

#include <nan.h>
#include <imebra/tagId.h>

namespace bindings {

class TagId : public Nan::ObjectWrap {
public:
    imebra::TagId value;
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
private:
    TagId(uint_fast32_t,uint_fast32_t);
    TagId(uint_fast32_t,uint_fast32_t,uint_fast32_t);
    TagId(imebra::tagId_t);
    static NAN_METHOD(New);
    static NAN_METHOD(GetTagId);
    static NAN_METHOD(GetGroupId);
    static NAN_METHOD(GetGroupOrder);
};

}

#endif //IMEBRA_TAGID_H
