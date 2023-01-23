#ifndef IMEBRA_CONSTANTS_H
#define IMEBRA_CONSTANTS_H

#include <nan.h>

namespace bindings {

class Constants {
public:
    static void Init(v8::Local<v8::Object>);
};

}

#endif //IMEBRA_CONSTANTS_H
