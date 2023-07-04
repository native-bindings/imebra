#ifndef DICOMDICTIONARY_H
#define DICOMDICTIONARY_H

#include <nan.h>

class DicomDictionary {
public:
    DicomDictionary();
    static void Init(v8::Local<v8::Object> exports);
private:
    static NAN_METHOD(GetTagDescription);
    static NAN_METHOD(GetTagType);
};

#endif // DICOMDICTIONARY_H
