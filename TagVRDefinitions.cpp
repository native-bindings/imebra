#include "TagVRDefinitions.hpp"

#include <imebra/definitions.h>
#include <stdexcept>

void bindings::TagVRDefinitions::Init(v8::Local<v8::Object> exports) {
    auto obj = Nan::New<v8::Object>();
    Nan::Set(obj,Nan::New("AE").ToLocalChecked(),Nan::New<v8::Number>(16709));
    Nan::Set(obj,Nan::New("AS").ToLocalChecked(),Nan::New<v8::Number>(16723));
    Nan::Set(obj,Nan::New("AT").ToLocalChecked(),Nan::New<v8::Number>(16724));
    Nan::Set(obj,Nan::New("CS").ToLocalChecked(),Nan::New<v8::Number>(17235));
    Nan::Set(obj,Nan::New("DA").ToLocalChecked(),Nan::New<v8::Number>(17473));
    Nan::Set(obj,Nan::New("DS").ToLocalChecked(),Nan::New<v8::Number>(17491));
    Nan::Set(obj,Nan::New("DT").ToLocalChecked(),Nan::New<v8::Number>(17492));
    Nan::Set(obj,Nan::New("FL").ToLocalChecked(),Nan::New<v8::Number>(17996));
    Nan::Set(obj,Nan::New("FD").ToLocalChecked(),Nan::New<v8::Number>(17988));
    Nan::Set(obj,Nan::New("IS").ToLocalChecked(),Nan::New<v8::Number>(18771));
    Nan::Set(obj,Nan::New("LO").ToLocalChecked(),Nan::New<v8::Number>(19535));
    Nan::Set(obj,Nan::New("LT").ToLocalChecked(),Nan::New<v8::Number>(19540));
    Nan::Set(obj,Nan::New("OB").ToLocalChecked(),Nan::New<v8::Number>(20290));
    Nan::Set(obj,Nan::New("SB").ToLocalChecked(),Nan::New<v8::Number>(21314));
    Nan::Set(obj,Nan::New("OD").ToLocalChecked(),Nan::New<v8::Number>(20292));
    Nan::Set(obj,Nan::New("OF").ToLocalChecked(),Nan::New<v8::Number>(20294));
    Nan::Set(obj,Nan::New("OL").ToLocalChecked(),Nan::New<v8::Number>(20300));
    Nan::Set(obj,Nan::New("OV").ToLocalChecked(),Nan::New<v8::Number>(20310));
    Nan::Set(obj,Nan::New("OW").ToLocalChecked(),Nan::New<v8::Number>(20311));
    Nan::Set(obj,Nan::New("PN").ToLocalChecked(),Nan::New<v8::Number>(20558));
    Nan::Set(obj,Nan::New("SH").ToLocalChecked(),Nan::New<v8::Number>(21320));
    Nan::Set(obj,Nan::New("SL").ToLocalChecked(),Nan::New<v8::Number>(21324));
    Nan::Set(obj,Nan::New("SQ").ToLocalChecked(),Nan::New<v8::Number>(21329));
    Nan::Set(obj,Nan::New("SS").ToLocalChecked(),Nan::New<v8::Number>(21331));
    Nan::Set(obj,Nan::New("ST").ToLocalChecked(),Nan::New<v8::Number>(21332));
    Nan::Set(obj,Nan::New("SV").ToLocalChecked(),Nan::New<v8::Number>(21334));
    Nan::Set(obj,Nan::New("TM").ToLocalChecked(),Nan::New<v8::Number>(21581));
    Nan::Set(obj,Nan::New("UC").ToLocalChecked(),Nan::New<v8::Number>(21827));
    Nan::Set(obj,Nan::New("UI").ToLocalChecked(),Nan::New<v8::Number>(21833));
    Nan::Set(obj,Nan::New("UL").ToLocalChecked(),Nan::New<v8::Number>(21836));
    Nan::Set(obj,Nan::New("UN").ToLocalChecked(),Nan::New<v8::Number>(21838));
    Nan::Set(obj,Nan::New("UR").ToLocalChecked(),Nan::New<v8::Number>(21842));
    Nan::Set(obj,Nan::New("US").ToLocalChecked(),Nan::New<v8::Number>(21843));
    Nan::Set(obj,Nan::New("UT").ToLocalChecked(),Nan::New<v8::Number>(21844));
    Nan::Set(obj,Nan::New("UV").ToLocalChecked(),Nan::New<v8::Number>(21846));
    Nan::Set(exports,Nan::New("tagVR_t").ToLocalChecked(),obj);
}
bool bindings::TagVRDefinitions::Decode(v8::Local<v8::Value> jsValue, imebra::tagVR_t& out) {
    if(!jsValue->IsNumber()) return false;
    const auto value = Nan::To<v8::Number>(jsValue).ToLocalChecked()->Value();
    if(value == 16709) {
        out = imebra::tagVR_t::AE;
        return true;
    }
    if(value == 16723) {
        out = imebra::tagVR_t::AS;
        return true;
    }
    if(value == 16724) {
        out = imebra::tagVR_t::AT;
        return true;
    }
    if(value == 17235) {
        out = imebra::tagVR_t::CS;
        return true;
    }
    if(value == 17473) {
        out = imebra::tagVR_t::DA;
        return true;
    }
    if(value == 17491) {
        out = imebra::tagVR_t::DS;
        return true;
    }
    if(value == 17492) {
        out = imebra::tagVR_t::DT;
        return true;
    }
    if(value == 17996) {
        out = imebra::tagVR_t::FL;
        return true;
    }
    if(value == 17988) {
        out = imebra::tagVR_t::FD;
        return true;
    }
    if(value == 18771) {
        out = imebra::tagVR_t::IS;
        return true;
    }
    if(value == 19535) {
        out = imebra::tagVR_t::LO;
        return true;
    }
    if(value == 19540) {
        out = imebra::tagVR_t::LT;
        return true;
    }
    if(value == 20290) {
        out = imebra::tagVR_t::OB;
        return true;
    }
    if(value == 21314) {
        out = imebra::tagVR_t::SB;
        return true;
    }
    if(value == 20292) {
        out = imebra::tagVR_t::OD;
        return true;
    }
    if(value == 20294) {
        out = imebra::tagVR_t::OF;
        return true;
    }
    if(value == 20300) {
        out = imebra::tagVR_t::OL;
        return true;
    }
    if(value == 20310) {
        out = imebra::tagVR_t::OV;
        return true;
    }
    if(value == 20311) {
        out = imebra::tagVR_t::OW;
        return true;
    }
    if(value == 20558) {
        out = imebra::tagVR_t::PN;
        return true;
    }
    if(value == 21320) {
        out = imebra::tagVR_t::SH;
        return true;
    }
    if(value == 21324) {
        out = imebra::tagVR_t::SL;
        return true;
    }
    if(value == 21329) {
        out = imebra::tagVR_t::SQ;
        return true;
    }
    if(value == 21331) {
        out = imebra::tagVR_t::SS;
        return true;
    }
    if(value == 21332) {
        out = imebra::tagVR_t::ST;
        return true;
    }
    if(value == 21334) {
        out = imebra::tagVR_t::SV;
        return true;
    }
    if(value == 21581) {
        out = imebra::tagVR_t::TM;
        return true;
    }
    if(value == 21827) {
        out = imebra::tagVR_t::UC;
        return true;
    }
    if(value == 21833) {
        out = imebra::tagVR_t::UI;
        return true;
    }
    if(value == 21836) {
        out = imebra::tagVR_t::UL;
        return true;
    }
    if(value == 21838) {
        out = imebra::tagVR_t::UN;
        return true;
    }
    if(value == 21842) {
        out = imebra::tagVR_t::UR;
        return true;
    }
    if(value == 21843) {
        out = imebra::tagVR_t::US;
        return true;
    }
    if(value == 21844) {
        out = imebra::tagVR_t::UT;
        return true;
    }
    if(value == 21846) {
        out = imebra::tagVR_t::UV;
        return true;
    }
    return false;
}
v8::Local<v8::Value> bindings::TagVRDefinitions::Encode(imebra::tagVR_t value) {
    switch(value) {
        case imebra::tagVR_t::AE:
            return Nan::New<v8::Number>(16709);
        case imebra::tagVR_t::AS:
            return Nan::New<v8::Number>(16723);
        case imebra::tagVR_t::AT:
            return Nan::New<v8::Number>(16724);
        case imebra::tagVR_t::CS:
            return Nan::New<v8::Number>(17235);
        case imebra::tagVR_t::DA:
            return Nan::New<v8::Number>(17473);
        case imebra::tagVR_t::DS:
            return Nan::New<v8::Number>(17491);
        case imebra::tagVR_t::DT:
            return Nan::New<v8::Number>(17492);
        case imebra::tagVR_t::FL:
            return Nan::New<v8::Number>(17996);
        case imebra::tagVR_t::FD:
            return Nan::New<v8::Number>(17988);
        case imebra::tagVR_t::IS:
            return Nan::New<v8::Number>(18771);
        case imebra::tagVR_t::LO:
            return Nan::New<v8::Number>(19535);
        case imebra::tagVR_t::LT:
            return Nan::New<v8::Number>(19540);
        case imebra::tagVR_t::OB:
            return Nan::New<v8::Number>(20290);
        case imebra::tagVR_t::SB:
            return Nan::New<v8::Number>(21314);
        case imebra::tagVR_t::OD:
            return Nan::New<v8::Number>(20292);
        case imebra::tagVR_t::OF:
            return Nan::New<v8::Number>(20294);
        case imebra::tagVR_t::OL:
            return Nan::New<v8::Number>(20300);
        case imebra::tagVR_t::OV:
            return Nan::New<v8::Number>(20310);
        case imebra::tagVR_t::OW:
            return Nan::New<v8::Number>(20311);
        case imebra::tagVR_t::PN:
            return Nan::New<v8::Number>(20558);
        case imebra::tagVR_t::SH:
            return Nan::New<v8::Number>(21320);
        case imebra::tagVR_t::SL:
            return Nan::New<v8::Number>(21324);
        case imebra::tagVR_t::SQ:
            return Nan::New<v8::Number>(21329);
        case imebra::tagVR_t::SS:
            return Nan::New<v8::Number>(21331);
        case imebra::tagVR_t::ST:
            return Nan::New<v8::Number>(21332);
        case imebra::tagVR_t::SV:
            return Nan::New<v8::Number>(21334);
        case imebra::tagVR_t::TM:
            return Nan::New<v8::Number>(21581);
        case imebra::tagVR_t::UC:
            return Nan::New<v8::Number>(21827);
        case imebra::tagVR_t::UI:
            return Nan::New<v8::Number>(21833);
        case imebra::tagVR_t::UL:
            return Nan::New<v8::Number>(21836);
        case imebra::tagVR_t::UN:
            return Nan::New<v8::Number>(21838);
        case imebra::tagVR_t::UR:
            return Nan::New<v8::Number>(21842);
        case imebra::tagVR_t::US:
            return Nan::New<v8::Number>(21843);
        case imebra::tagVR_t::UT:
            return Nan::New<v8::Number>(21844);
        case imebra::tagVR_t::UV:
            return Nan::New<v8::Number>(21846);
    }
    throw std::runtime_error("received invalid enum");
}
