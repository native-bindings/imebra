#ifndef IMEBRA_DICOMDIRENTRY_H
#define IMEBRA_DICOMDIRENTRY_H

#include <nan.h>
#include <imebra/dicomDirEntry.h>

namespace bindings {

class DicomDirEntry : public Nan::ObjectWrap {
public:
    imebra::DicomDirEntry* value;
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
private:
    DicomDirEntry();
    ~DicomDirEntry();
    static NAN_METHOD(New);
    static NAN_METHOD(GetNextEntry);
    static NAN_METHOD(HasNextEntry);
};

}

#endif //IMEBRA_DICOMDIRENTRY_H
