option(IMEBRA_TESTS "Enable IMEBRA tests" FALSE)
option(NODE_INSTALL_PATH "Node installation path" "/usr/share/node")

project(node_imebra C CXX)

set(JPEG2000 2)

cmake_minimum_required(VERSION 3.10)

add_definitions(-Wfatal-errors)

add_subdirectory(imebra)

set(CMAKE_CXX_STANDARD 17)

set(
    IMEBRA_SRC DicomDefinitions.hpp DicomDefinitions.cpp
    Constants.cpp Constants.hpp main.cpp
    Arguments.hpp Arguments.cpp CodecFactory.cpp CodecFactory.hpp
    DataSet.cpp DataSet.hpp Tag.cpp Tag.hpp TagVRDefinitions.cpp TagVRDefinitions.hpp
    DicomDir.cpp DicomDir.hpp DicomDirEntry.cpp DicomDirEntry.hpp
    TagId.cpp TagId.hpp PatientName.hpp PatientName.cpp
    Age.cpp Age.hpp AgeUnitDefinitions.cpp AgeUnitDefinitions.hpp
    Date.hpp Date.cpp Image.h Image.cpp CodecTypeDefinitions.hpp CodecTypeDefinitions.cpp
    DicomDictionary.h DicomDictionary.cpp VOIDescription.h VOIDescription.cpp
)
set(IMEBRA_LIBS imebra)

if(DEFINED CMAKE_JS_VERSION)
    add_library(node_imebra SHARED ${IMEBRA_SRC} ${CMAKE_JS_SRC})
    target_include_directories(node_imebra PRIVATE ${CMAKE_JS_INC})
    set_target_properties(node_imebra PROPERTIES PREFIX "" SUFFIX ".node")
    target_link_libraries(node_imebra PRIVATE ${IMEBRA_LIBS} ${CMAKE_JS_LIB})
    target_compile_options(node_imebra PRIVATE -Wfatal-errors -pedantic -Wall -Werror)
else()
    add_executable(imebra_test ${IMEBRA_SRC} test.cpp)
    target_link_libraries(imebra_test PRIVATE ${IMEBRA_LIBS})
    target_include_directories(
        imebra_test PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/node_modules/nan
        ${NODE_INSTALL_PATH}/include/node
    )
    target_compile_options(imebra_test PRIVATE -Wfatal-errors)

    add_executable(dicom_example node_imebra/examples/c++/dicom2jpeg/dicom2jpeg.cpp)
    target_link_libraries(dicom_example PRIVATE node_imebra)
endif()
