#ifndef ROOT_IMEBRA_H_
#define ROOT_IMEBRA_H_

enum class result_t {
    ok,
    memoryAllocationFailure
};

#define MSG_INTERNAL_FAILURE "Fatal internal failure. Please contact the maintainer of this library"

#define MSG_CALLED_UNDER_INVALID_CONTEXT "Method called under invalid context"

/**
 * Use the Arguments::Unwrap function with info.This().
 * Throw an error using Nan::ThrowError if the unwrapping fails.
 */
#define UNWRAP(FROM, T, OUT_VAR_NAME) \
    T* OUT_VAR_NAME = nullptr; \
    if(!Arguments::Unwrap<T>(FROM, OUT_VAR_NAME)){ \
        std::string __msg__ = std::string("Failed to unwrap JavaScript object to the native ") + std::string(#T) + std::string(" instance"); \
        Nan::ThrowError(Nan::New(__msg__).ToLocalChecked()); \
        return; \
    } \
    REQUIRE_SEMICOLON

#define REQUIRE_SEMICOLON do{} while(0)

#endif // ROOT_IMEBRA_H_
