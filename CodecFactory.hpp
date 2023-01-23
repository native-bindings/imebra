#ifndef IMEBRA_CODECFACTORY_H
#define IMEBRA_CODECFACTORY_H

#include <imebra/codecFactory.h>
#include <nan.h>

namespace bindings {

class CodecFactory {
public:
    static imebra::CodecFactory value;
    static void Init(v8::Local<v8::Object> exports);
private:
    static NAN_METHOD(Save);
    static NAN_METHOD(Load);
    static NAN_METHOD(SetMaximumImageSize);
};


}


#endif //IMEBRA_CODECFACTORY_H
