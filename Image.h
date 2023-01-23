#ifndef IMAGE_H
#define IMAGE_H

#include <nan.h>
#include <imebra/image.h>
#include <optional>

namespace bindings {

class Image : public Nan::ObjectWrap {
public:
    std::optional<imebra::Image> value;
    static Nan::Persistent<v8::Function> constructor;
    Image();
    static void Init(v8::Local<v8::Object>);
private:
    static NAN_METHOD(New);
    static NAN_METHOD(GetWidth);
};

}

#endif // IMAGE_H
