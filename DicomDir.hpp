#ifndef IMEBRA_DICOMDIR_H
#define IMEBRA_DICOMDIR_H

#include <nan.h>
#include <imebra/dicomDir.h>

namespace bindings {

class DicomDir : public Nan::ObjectWrap {
public:
    static Nan::Persistent<v8::Function> constructor;
    static void Init(v8::Local<v8::Object>);
private:
    imebra::DicomDir value;
    explicit DicomDir(imebra::DataSet&);
    static NAN_METHOD(New);
    static NAN_METHOD(HasRootEntry);
    static NAN_METHOD(GetFirstRootEntry);
};

}

#endif //IMEBRA_DICOMDIR_H
