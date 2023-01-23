#include "Constants.hpp"
#include "DicomDefinitions.hpp"
#include "TagVRDefinitions.hpp"
#include "CodecTypeDefinitions.hpp"
#include "AgeUnitDefinitions.hpp"

#include <imebra/codecFactory.h>

using namespace bindings;

void Constants::Init(v8::Local<v8::Object> exports) {
    auto constants = Nan::New<v8::Object>();

    CodecTypeDefinitions::Init(constants);
    DicomDefinitions::Init(constants);
    AgeUnitDefinitions::Init(constants);
    TagVRDefinitions::Init(constants);

    Nan::Set(exports,Nan::New("constants").ToLocalChecked(),constants);
}
