#include "CodecFactory.hpp"
#include "DataSet.hpp"
#include "Constants.hpp"
#include "Tag.hpp"
#include "PatientName.hpp"
#include "DicomDirEntry.hpp"
#include "DicomDir.hpp"
#include "TagId.hpp"
#include "Age.hpp"
#include "Date.hpp"
#include "DicomDictionary.h"
#include "VOIDescription.h"
#include "Image.h"

#include <nan.h>

using namespace bindings;

NAN_MODULE_INIT(Init){
    PatientName::Init(target);
    DicomDir::Init(target);
    TagId::Init(target);
    Image::Init(target);
    Tag::Init(target);
    VOIDescription::Init(target);
    Image::Init(target);
    Age::Init(target);
    Date::Init(target);
    Constants::Init(target);
    DataSet::Init(target);
    DicomDirEntry::Init(target);
    CodecFactory::Init(target);
    DicomDictionary::Init(target);
}

NODE_MODULE(imebra,Init)
