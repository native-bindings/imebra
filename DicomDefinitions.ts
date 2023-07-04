export enum DicomDefinitions {
    /**
     * < Command Group Length (0000,0000)
     */
    CommandGroupLength_0000_0000 = 0,
    /**
     * < Command Length to End (0000,0001)
     */
    CommandLengthToEnd_0000_0001 = 1,
    /**
     * < Affected SOP Class UID (0000,0002)
     */
    AffectedSOPClassUID_0000_0002 = 2,
    /**
     * < Requested SOP Class UID (0000,0003)
     */
    RequestedSOPClassUID_0000_0003 = 3,
    /**
     * < Command Recognition Code (0000,0010)
     */
    CommandRecognitionCode_0000_0010 = 16,
    /**
     * < Command Field (0000,0100)
     */
    CommandField_0000_0100 = 256,
    /**
     * < Message ID (0000,0110)
     */
    MessageID_0000_0110 = 272,
    /**
     * < Message ID Being Responded To (0000,0120)
     */
    MessageIDBeingRespondedTo_0000_0120 = 288,
    /**
     * < Initiator (0000,0200)
     */
    Initiator_0000_0200 = 512,
    /**
     * < Receiver (0000,0300)
     */
    Receiver_0000_0300 = 768,
    /**
     * < Find Location (0000,0400)
     */
    FindLocation_0000_0400 = 1024,
    /**
     * < Move Destination (0000,0600)
     */
    MoveDestination_0000_0600 = 1536,
    /**
     * < Priority (0000,0700)
     */
    Priority_0000_0700 = 1792,
    /**
     * < Command Data Set Type (0000,0800)
     */
    CommandDataSetType_0000_0800 = 2048,
    /**
     * < Number of Matches (0000,0850)
     */
    NumberOfMatches_0000_0850 = 2128,
    /**
     * < Response Sequence Number (0000,0860)
     */
    ResponseSequenceNumber_0000_0860 = 2144,
    /**
     * < Status (0000,0900)
     */
    Status_0000_0900 = 2304,
    /**
     * < Offending Element (0000,0901)
     */
    OffendingElement_0000_0901 = 2305,
    /**
     * < Error Comment (0000,0902)
     */
    ErrorComment_0000_0902 = 2306,
    /**
     * < Error ID (0000,0903)
     */
    ErrorID_0000_0903 = 2307,
    /**
     * < Affected SOP Instance UID (0000,1000)
     */
    AffectedSOPInstanceUID_0000_1000 = 4096,
    /**
     * < Requested SOP Instance UID (0000,1001)
     */
    RequestedSOPInstanceUID_0000_1001 = 4097,
    /**
     * < Event Type ID (0000,1002)
     */
    EventTypeID_0000_1002 = 4098,
    /**
     * < Attribute Identifier List (0000,1005)
     */
    AttributeIdentifierList_0000_1005 = 4101,
    /**
     * < Action Type ID (0000,1008)
     */
    ActionTypeID_0000_1008 = 4104,
    /**
     * < Number of Remaining Sub-operations (0000,1020)
     */
    NumberOfRemainingSuboperations_0000_1020 = 4128,
    /**
     * < Number of Completed Sub-operations (0000,1021)
     */
    NumberOfCompletedSuboperations_0000_1021 = 4129,
    /**
     * < Number of Failed Sub-operations (0000,1022)
     */
    NumberOfFailedSuboperations_0000_1022 = 4130,
    /**
     * < Number of Warning Sub-operations (0000,1023)
     */
    NumberOfWarningSuboperations_0000_1023 = 4131,
    /**
     * < Move Originator Application Entity Title (0000,1030)
     */
    MoveOriginatorApplicationEntityTitle_0000_1030 = 4144,
    /**
     * < Move Originator Message ID (0000,1031)
     */
    MoveOriginatorMessageID_0000_1031 = 4145,
    /**
     * < Dialog Receiver (0000,4000)
     */
    DialogReceiver_0000_4000 = 16384,
    /**
     * < Terminal Type (0000,4010)
     */
    TerminalType_0000_4010 = 16400,
    /**
     * < Message Set ID (0000,5010)
     */
    MessageSetID_0000_5010 = 20496,
    /**
     * < End Message ID (0000,5020)
     */
    EndMessageID_0000_5020 = 20512,
    /**
     * < Display Format (0000,5110)
     */
    DisplayFormat_0000_5110 = 20752,
    /**
     * < Page Position ID (0000,5120)
     */
    PagePositionID_0000_5120 = 20768,
    /**
     * < Text Format ID (0000,5130)
     */
    TextFormatID_0000_5130 = 20784,
    /**
     * < Normal/Reverse (0000,5140)
     */
    NormalReverse_0000_5140 = 20800,
    /**
     * < Add Gray Scale (0000,5150)
     */
    AddGrayScale_0000_5150 = 20816,
    /**
     * < Borders (0000,5160)
     */
    Borders_0000_5160 = 20832,
    /**
     * < Copies (0000,5170)
     */
    Copies_0000_5170 = 20848,
    /**
     * < Command Magnification Type (0000,5180)
     */
    CommandMagnificationType_0000_5180 = 20864,
    /**
     * < Erase (0000,5190)
     */
    Erase_0000_5190 = 20880,
    /**
     * < Print (0000,51A0)
     */
    Print_0000_51A0 = 20896,
    /**
     * < Overlays (0000,51B0)
     */
    Overlays_0000_51B0 = 20912,
    /**
     * < File Meta Information Group Length (0002,0000)
     */
    FileMetaInformationGroupLength_0002_0000 = 131072,
    /**
     * < File Meta Information Version (0002,0001)
     */
    FileMetaInformationVersion_0002_0001 = 131073,
    /**
     * < Media Storage SOP Class UID (0002,0002)
     */
    MediaStorageSOPClassUID_0002_0002 = 131074,
    /**
     * < Media Storage SOP Instance UID (0002,0003)
     */
    MediaStorageSOPInstanceUID_0002_0003 = 131075,
    /**
     * < Transfer Syntax UID (0002,0010)
     */
    TransferSyntaxUID_0002_0010 = 131088,
    /**
     * < Implementation Class UID (0002,0012)
     */
    ImplementationClassUID_0002_0012 = 131090,
    /**
     * < Implementation Version Name (0002,0013)
     */
    ImplementationVersionName_0002_0013 = 131091,
    /**
     * < Source Application Entity Title (0002,0016)
     */
    SourceApplicationEntityTitle_0002_0016 = 131094,
    /**
     * < Sending Application Entity Title (0002,0017)
     */
    SendingApplicationEntityTitle_0002_0017 = 131095,
    /**
     * < Receiving Application Entity Title (0002,0018)
     */
    ReceivingApplicationEntityTitle_0002_0018 = 131096,
    /**
     * < Private Information Creator UID (0002,0100)
     */
    PrivateInformationCreatorUID_0002_0100 = 131328,
    /**
     * < Private Information (0002,0102)
     */
    PrivateInformation_0002_0102 = 131330,
    /**
     * < File-set ID (0004,1130)
     */
    FileSetID_0004_1130 = 266544,
    /**
     * < File-set Descriptor File ID (0004,1141)
     */
    FileSetDescriptorFileID_0004_1141 = 266561,
    /**
     * < Specific Character Set of File-set Descriptor File (0004,1142)
     */
    SpecificCharacterSetOfFileSetDescriptorFile_0004_1142 = 266562,
    /**
     * < Offset of the First Directory Record of the Root Directory Entity (0004,1200)
     */
    OffsetOfTheFirstDirectoryRecordOfTheRootDirectoryEntity_0004_1200 = 266752,
    /**
     * < Offset of the Last Directory Record of the Root Directory Entity (0004,1202)
     */
    OffsetOfTheLastDirectoryRecordOfTheRootDirectoryEntity_0004_1202 = 266754,
    /**
     * < File-set Consistency Flag (0004,1212)
     */
    FileSetConsistencyFlag_0004_1212 = 266770,
    /**
     * < Directory Record Sequence (0004,1220)
     */
    DirectoryRecordSequence_0004_1220 = 266784,
    /**
     * < Offset of the Next Directory Record (0004,1400)
     */
    OffsetOfTheNextDirectoryRecord_0004_1400 = 267264,
    /**
     * < Record In-use Flag (0004,1410)
     */
    RecordInUseFlag_0004_1410 = 267280,
    /**
     * < Offset of Referenced Lower-Level Directory Entity (0004,1420)
     */
    OffsetOfReferencedLowerLevelDirectoryEntity_0004_1420 = 267296,
    /**
     * < Directory Record Type (0004,1430)
     */
    DirectoryRecordType_0004_1430 = 267312,
    /**
     * < Private Record UID (0004,1432)
     */
    PrivateRecordUID_0004_1432 = 267314,
    /**
     * < Referenced File ID (0004,1500)
     */
    ReferencedFileID_0004_1500 = 267520,
    /**
     * < MRDR Directory Record Offset (0004,1504)
     */
    MRDRDirectoryRecordOffset_0004_1504 = 267524,
    /**
     * < Referenced SOP Class UID in File (0004,1510)
     */
    ReferencedSOPClassUIDInFile_0004_1510 = 267536,
    /**
     * < Referenced SOP Instance UID in File (0004,1511)
     */
    ReferencedSOPInstanceUIDInFile_0004_1511 = 267537,
    /**
     * < Referenced Transfer Syntax UID in File (0004,1512)
     */
    ReferencedTransferSyntaxUIDInFile_0004_1512 = 267538,
    /**
     * < Referenced Related General SOP Class UID in File (0004,151A)
     */
    ReferencedRelatedGeneralSOPClassUIDInFile_0004_151A = 267546,
    /**
     * < Number of References (0004,1600)
     */
    NumberOfReferences_0004_1600 = 267776,
    /**
     * < Length to End (0008,0001)
     */
    LengthToEnd_0008_0001 = 524289,
    /**
     * < Specific Character Set (0008,0005)
     */
    SpecificCharacterSet_0008_0005 = 524293,
    /**
     * < Language Code Sequence (0008,0006)
     */
    LanguageCodeSequence_0008_0006 = 524294,
    /**
     * < Image Type (0008,0008)
     */
    ImageType_0008_0008 = 524296,
    /**
     * < Recognition Code (0008,0010)
     */
    RecognitionCode_0008_0010 = 524304,
    /**
     * < Instance Creation Date (0008,0012)
     */
    InstanceCreationDate_0008_0012 = 524306,
    /**
     * < Instance Creation Time (0008,0013)
     */
    InstanceCreationTime_0008_0013 = 524307,
    /**
     * < Instance Creator UID (0008,0014)
     */
    InstanceCreatorUID_0008_0014 = 524308,
    /**
     * < Instance Coercion DateTime (0008,0015)
     */
    InstanceCoercionDateTime_0008_0015 = 524309,
    /**
     * < SOP Class UID (0008,0016)
     */
    SOPClassUID_0008_0016 = 524310,
    /**
     * < SOP Instance UID (0008,0018)
     */
    SOPInstanceUID_0008_0018 = 524312,
    /**
     * < Related General SOP Class UID (0008,001A)
     */
    RelatedGeneralSOPClassUID_0008_001A = 524314,
    /**
     * < Original Specialized SOP Class UID (0008,001B)
     */
    OriginalSpecializedSOPClassUID_0008_001B = 524315,
    /**
     * < Study Date (0008,0020)
     */
    StudyDate_0008_0020 = 524320,
    /**
     * < Series Date (0008,0021)
     */
    SeriesDate_0008_0021 = 524321,
    /**
     * < Acquisition Date (0008,0022)
     */
    AcquisitionDate_0008_0022 = 524322,
    /**
     * < Content Date (0008,0023)
     */
    ContentDate_0008_0023 = 524323,
    /**
     * < Overlay Date (0008,0024)
     */
    OverlayDate_0008_0024 = 524324,
    /**
     * < Curve Date (0008,0025)
     */
    CurveDate_0008_0025 = 524325,
    /**
     * < Acquisition DateTime (0008,002A)
     */
    AcquisitionDateTime_0008_002A = 524330,
    /**
     * < Study Time (0008,0030)
     */
    StudyTime_0008_0030 = 524336,
    /**
     * < Series Time (0008,0031)
     */
    SeriesTime_0008_0031 = 524337,
    /**
     * < Acquisition Time (0008,0032)
     */
    AcquisitionTime_0008_0032 = 524338,
    /**
     * < Content Time (0008,0033)
     */
    ContentTime_0008_0033 = 524339,
    /**
     * < Overlay Time (0008,0034)
     */
    OverlayTime_0008_0034 = 524340,
    /**
     * < Curve Time (0008,0035)
     */
    CurveTime_0008_0035 = 524341,
    /**
     * < Data Set Type (0008,0040)
     */
    DataSetType_0008_0040 = 524352,
    /**
     * < Data Set Subtype (0008,0041)
     */
    DataSetSubtype_0008_0041 = 524353,
    /**
     * < Nuclear Medicine Series Type (0008,0042)
     */
    NuclearMedicineSeriesType_0008_0042 = 524354,
    /**
     * < Accession Number (0008,0050)
     */
    AccessionNumber_0008_0050 = 524368,
    /**
     * < Issuer of Accession Number Sequence (0008,0051)
     */
    IssuerOfAccessionNumberSequence_0008_0051 = 524369,
    /**
     * < Query/Retrieve Level (0008,0052)
     */
    QueryRetrieveLevel_0008_0052 = 524370,
    /**
     * < Query/Retrieve View (0008,0053)
     */
    QueryRetrieveView_0008_0053 = 524371,
    /**
     * < Retrieve AE Title (0008,0054)
     */
    RetrieveAETitle_0008_0054 = 524372,
    /**
     * < Station  AE Title (0008,0055)
     */
    StationAETitle_0008_0055 = 524373,
    /**
     * < Instance Availability (0008,0056)
     */
    InstanceAvailability_0008_0056 = 524374,
    /**
     * < Failed SOP Instance UID List (0008,0058)
     */
    FailedSOPInstanceUIDList_0008_0058 = 524376,
    /**
     * < Modality (0008,0060)
     */
    Modality_0008_0060 = 524384,
    /**
     * < Modalities in Study (0008,0061)
     */
    ModalitiesInStudy_0008_0061 = 524385,
    /**
     * < SOP Classes in Study (0008,0062)
     */
    SOPClassesInStudy_0008_0062 = 524386,
    /**
     * < Anatomic Regions in Study Code Sequence (0008,0063)
     */
    AnatomicRegionsInStudyCodeSequence_0008_0063 = 524387,
    /**
     * < Conversion Type (0008,0064)
     */
    ConversionType_0008_0064 = 524388,
    /**
     * < Presentation Intent Type (0008,0068)
     */
    PresentationIntentType_0008_0068 = 524392,
    /**
     * < Manufacturer (0008,0070)
     */
    Manufacturer_0008_0070 = 524400,
    /**
     * < Institution Name (0008,0080)
     */
    InstitutionName_0008_0080 = 524416,
    /**
     * < Institution Address (0008,0081)
     */
    InstitutionAddress_0008_0081 = 524417,
    /**
     * < Institution Code Sequence (0008,0082)
     */
    InstitutionCodeSequence_0008_0082 = 524418,
    /**
     * < Referring Physician's Name (0008,0090)
     */
    ReferringPhysicianName_0008_0090 = 524432,
    /**
     * < Referring Physician's Address (0008,0092)
     */
    ReferringPhysicianAddress_0008_0092 = 524434,
    /**
     * < Referring Physician's Telephone Numbers (0008,0094)
     */
    ReferringPhysicianTelephoneNumbers_0008_0094 = 524436,
    /**
     * < Referring Physician Identification Sequence (0008,0096)
     */
    ReferringPhysicianIdentificationSequence_0008_0096 = 524438,
    /**
     * < Consulting Physician's Name (0008,009C)
     */
    ConsultingPhysicianName_0008_009C = 524444,
    /**
     * < Consulting Physician Identification Sequence (0008,009D)
     */
    ConsultingPhysicianIdentificationSequence_0008_009D = 524445,
    /**
     * < Code Value (0008,0100)
     */
    CodeValue_0008_0100 = 524544,
    /**
     * < Extended Code Value (0008,0101)
     */
    ExtendedCodeValue_0008_0101 = 524545,
    /**
     * < Coding Scheme Designator (0008,0102)
     */
    CodingSchemeDesignator_0008_0102 = 524546,
    /**
     * < Coding Scheme Version (0008,0103)
     */
    CodingSchemeVersion_0008_0103 = 524547,
    /**
     * < Code Meaning (0008,0104)
     */
    CodeMeaning_0008_0104 = 524548,
    /**
     * < Mapping Resource (0008,0105)
     */
    MappingResource_0008_0105 = 524549,
    /**
     * < Context Group Version (0008,0106)
     */
    ContextGroupVersion_0008_0106 = 524550,
    /**
     * < Context Group Local Version (0008,0107)
     */
    ContextGroupLocalVersion_0008_0107 = 524551,
    /**
     * < Extended Code Meaning (0008,0108)
     */
    ExtendedCodeMeaning_0008_0108 = 524552,
    /**
     * < Coding Scheme Resources Sequence (0008,0109)
     */
    CodingSchemeResourcesSequence_0008_0109 = 524553,
    /**
     * < Coding Scheme URL Type (0008,010A)
     */
    CodingSchemeURLType_0008_010A = 524554,
    /**
     * < Context Group Extension Flag (0008,010B)
     */
    ContextGroupExtensionFlag_0008_010B = 524555,
    /**
     * < Coding Scheme UID (0008,010C)
     */
    CodingSchemeUID_0008_010C = 524556,
    /**
     * < Context Group Extension Creator UID (0008,010D)
     */
    ContextGroupExtensionCreatorUID_0008_010D = 524557,
    /**
     * < Coding Scheme URL (0008,010E)
     */
    CodingSchemeURL_0008_010E = 524558,
    /**
     * < Context Identifier (0008,010F)
     */
    ContextIdentifier_0008_010F = 524559,
    /**
     * < Coding Scheme Identification Sequence (0008,0110)
     */
    CodingSchemeIdentificationSequence_0008_0110 = 524560,
    /**
     * < Coding Scheme Registry (0008,0112)
     */
    CodingSchemeRegistry_0008_0112 = 524562,
    /**
     * < Coding Scheme External ID (0008,0114)
     */
    CodingSchemeExternalID_0008_0114 = 524564,
    /**
     * < Coding Scheme Name (0008,0115)
     */
    CodingSchemeName_0008_0115 = 524565,
    /**
     * < Coding Scheme Responsible Organization (0008,0116)
     */
    CodingSchemeResponsibleOrganization_0008_0116 = 524566,
    /**
     * < Context UID (0008,0117)
     */
    ContextUID_0008_0117 = 524567,
    /**
     * < Mapping Resource UID (0008,0118)
     */
    MappingResourceUID_0008_0118 = 524568,
    /**
     * < Long Code Value (0008,0119)
     */
    LongCodeValue_0008_0119 = 524569,
    /**
     * < URN Code Value (0008,0120)
     */
    URNCodeValue_0008_0120 = 524576,
    /**
     * < Equivalent Code Sequence (0008,0121)
     */
    EquivalentCodeSequence_0008_0121 = 524577,
    /**
     * < Mapping Resource Name (0008,0122)
     */
    MappingResourceName_0008_0122 = 524578,
    /**
     * < Context Group Identification Sequence (0008,0123)
     */
    ContextGroupIdentificationSequence_0008_0123 = 524579,
    /**
     * < Mapping Resource Identification Sequence (0008,0124)
     */
    MappingResourceIdentificationSequence_0008_0124 = 524580,
    /**
     * < Timezone Offset From UTC (0008,0201)
     */
    TimezoneOffsetFromUTC_0008_0201 = 524801,
    /**
     * < Responsible Group Code Sequence (0008,0220)
     */
    ResponsibleGroupCodeSequence_0008_0220 = 524832,
    /**
     * < Equipment Modality (0008,0221)
     */
    EquipmentModality_0008_0221 = 524833,
    /**
     * < Manufacturer's Related Model Group (0008,0222)
     */
    ManufacturerRelatedModelGroup_0008_0222 = 524834,
    /**
     * < Private Data Element Characteristics Sequence (0008,0300)
     */
    PrivateDataElementCharacteristicsSequence_0008_0300 = 525056,
    /**
     * < Private Group Reference (0008,0301)
     */
    PrivateGroupReference_0008_0301 = 525057,
    /**
     * < Private Creator Reference (0008,0302)
     */
    PrivateCreatorReference_0008_0302 = 525058,
    /**
     * < Block Identifying Information Status (0008,0303)
     */
    BlockIdentifyingInformationStatus_0008_0303 = 525059,
    /**
     * < Nonidentifying Private Elements (0008,0304)
     */
    NonidentifyingPrivateElements_0008_0304 = 525060,
    /**
     * < Deidentification Action Sequence (0008,0305)
     */
    DeidentificationActionSequence_0008_0305 = 525061,
    /**
     * < Identifying Private Elements (0008,0306)
     */
    IdentifyingPrivateElements_0008_0306 = 525062,
    /**
     * < Deidentification Action (0008,0307)
     */
    DeidentificationAction_0008_0307 = 525063,
    /**
     * < Private Data Element (0008,0308)
     */
    PrivateDataElement_0008_0308 = 525064,
    /**
     * < Private Data Element Value Multiplicity (0008,0309)
     */
    PrivateDataElementValueMultiplicity_0008_0309 = 525065,
    /**
     * < Private Data Element Value Representation (0008,030A)
     */
    PrivateDataElementValueRepresentation_0008_030A = 525066,
    /**
     * < Private Data Element Number of Items (0008,030B)
     */
    PrivateDataElementNumberOfItems_0008_030B = 525067,
    /**
     * < Private Data Element Name (0008,030C)
     */
    PrivateDataElementName_0008_030C = 525068,
    /**
     * < Private Data Element Keyword (0008,030D)
     */
    PrivateDataElementKeyword_0008_030D = 525069,
    /**
     * < Private Data Element Description (0008,030E)
     */
    PrivateDataElementDescription_0008_030E = 525070,
    /**
     * < Private Data Element Encoding (0008,030F)
     */
    PrivateDataElementEncoding_0008_030F = 525071,
    /**
     * < Private Data Element Definition Sequence (0008,0310)
     */
    PrivateDataElementDefinitionSequence_0008_0310 = 525072,
    /**
     * < Network ID (0008,1000)
     */
    NetworkID_0008_1000 = 528384,
    /**
     * < Station Name (0008,1010)
     */
    StationName_0008_1010 = 528400,
    /**
     * < Study Description (0008,1030)
     */
    StudyDescription_0008_1030 = 528432,
    /**
     * < Procedure Code Sequence (0008,1032)
     */
    ProcedureCodeSequence_0008_1032 = 528434,
    /**
     * < Series Description (0008,103E)
     */
    SeriesDescription_0008_103E = 528446,
    /**
     * < Series Description Code Sequence (0008,103F)
     */
    SeriesDescriptionCodeSequence_0008_103F = 528447,
    /**
     * < Institutional Department Name (0008,1040)
     */
    InstitutionalDepartmentName_0008_1040 = 528448,
    /**
     * < Institutional Department Type Code Sequence (0008,1041)
     */
    InstitutionalDepartmentTypeCodeSequence_0008_1041 = 528449,
    /**
     * < Physician(s) of Record (0008,1048)
     */
    PhysiciansOfRecord_0008_1048 = 528456,
    /**
     * < Physician(s) of Record Identification Sequence (0008,1049)
     */
    PhysiciansOfRecordIdentificationSequence_0008_1049 = 528457,
    /**
     * < Performing Physician's Name (0008,1050)
     */
    PerformingPhysicianName_0008_1050 = 528464,
    /**
     * < Performing Physician Identification Sequence (0008,1052)
     */
    PerformingPhysicianIdentificationSequence_0008_1052 = 528466,
    /**
     * < Name of Physician(s) Reading Study (0008,1060)
     */
    NameOfPhysiciansReadingStudy_0008_1060 = 528480,
    /**
     * < Physician(s) Reading Study Identification Sequence (0008,1062)
     */
    PhysiciansReadingStudyIdentificationSequence_0008_1062 = 528482,
    /**
     * < Operators' Name (0008,1070)
     */
    OperatorsName_0008_1070 = 528496,
    /**
     * < Operator Identification Sequence (0008,1072)
     */
    OperatorIdentificationSequence_0008_1072 = 528498,
    /**
     * < Admitting Diagnoses Description (0008,1080)
     */
    AdmittingDiagnosesDescription_0008_1080 = 528512,
    /**
     * < Admitting Diagnoses Code Sequence (0008,1084)
     */
    AdmittingDiagnosesCodeSequence_0008_1084 = 528516,
    /**
     * < Manufacturer's Model Name (0008,1090)
     */
    ManufacturerModelName_0008_1090 = 528528,
    /**
     * < Referenced Results Sequence (0008,1100)
     */
    ReferencedResultsSequence_0008_1100 = 528640,
    /**
     * < Referenced Study Sequence (0008,1110)
     */
    ReferencedStudySequence_0008_1110 = 528656,
    /**
     * < Referenced Performed Procedure Step Sequence (0008,1111)
     */
    ReferencedPerformedProcedureStepSequence_0008_1111 = 528657,
    /**
     * < Referenced Series Sequence (0008,1115)
     */
    ReferencedSeriesSequence_0008_1115 = 528661,
    /**
     * < Referenced Patient Sequence (0008,1120)
     */
    ReferencedPatientSequence_0008_1120 = 528672,
    /**
     * < Referenced Visit Sequence (0008,1125)
     */
    ReferencedVisitSequence_0008_1125 = 528677,
    /**
     * < Referenced Overlay Sequence (0008,1130)
     */
    ReferencedOverlaySequence_0008_1130 = 528688,
    /**
     * < Referenced Stereometric Instance Sequence (0008,1134)
     */
    ReferencedStereometricInstanceSequence_0008_1134 = 528692,
    /**
     * < Referenced Waveform Sequence (0008,113A)
     */
    ReferencedWaveformSequence_0008_113A = 528698,
    /**
     * < Referenced Image Sequence (0008,1140)
     */
    ReferencedImageSequence_0008_1140 = 528704,
    /**
     * < Referenced Curve Sequence (0008,1145)
     */
    ReferencedCurveSequence_0008_1145 = 528709,
    /**
     * < Referenced Instance Sequence (0008,114A)
     */
    ReferencedInstanceSequence_0008_114A = 528714,
    /**
     * < Referenced Real World Value Mapping Instance Sequence (0008,114B)
     */
    ReferencedRealWorldValueMappingInstanceSequence_0008_114B = 528715,
    /**
     * < Referenced SOP Class UID (0008,1150)
     */
    ReferencedSOPClassUID_0008_1150 = 528720,
    /**
     * < Referenced SOP Instance UID (0008,1155)
     */
    ReferencedSOPInstanceUID_0008_1155 = 528725,
    /**
     * < Definition Source Sequence (0008,1156)
     */
    DefinitionSourceSequence_0008_1156 = 528726,
    /**
     * < SOP Classes Supported (0008,115A)
     */
    SOPClassesSupported_0008_115A = 528730,
    /**
     * < Referenced Frame Number (0008,1160)
     */
    ReferencedFrameNumber_0008_1160 = 528736,
    /**
     * < Simple Frame List (0008,1161)
     */
    SimpleFrameList_0008_1161 = 528737,
    /**
     * < Calculated Frame List (0008,1162)
     */
    CalculatedFrameList_0008_1162 = 528738,
    /**
     * < Time Range (0008,1163)
     */
    TimeRange_0008_1163 = 528739,
    /**
     * < Frame Extraction Sequence (0008,1164)
     */
    FrameExtractionSequence_0008_1164 = 528740,
    /**
     * < Multi-frame Source SOP Instance UID (0008,1167)
     */
    MultiFrameSourceSOPInstanceUID_0008_1167 = 528743,
    /**
     * < Retrieve URL (0008,1190)
     */
    RetrieveURL_0008_1190 = 528784,
    /**
     * < Transaction UID (0008,1195)
     */
    TransactionUID_0008_1195 = 528789,
    /**
     * < Warning Reason (0008,1196)
     */
    WarningReason_0008_1196 = 528790,
    /**
     * < Failure Reason (0008,1197)
     */
    FailureReason_0008_1197 = 528791,
    /**
     * < Failed SOP Sequence (0008,1198)
     */
    FailedSOPSequence_0008_1198 = 528792,
    /**
     * < Referenced SOP Sequence (0008,1199)
     */
    ReferencedSOPSequence_0008_1199 = 528793,
    /**
     * < Other Failures Sequence (0008,119A)
     */
    OtherFailuresSequence_0008_119A = 528794,
    /**
     * < Studies Containing Other Referenced Instances Sequence (0008,1200)
     */
    StudiesContainingOtherReferencedInstancesSequence_0008_1200 = 528896,
    /**
     * < Related Series Sequence (0008,1250)
     */
    RelatedSeriesSequence_0008_1250 = 528976,
    /**
     * < Derivation Description (0008,2111)
     */
    DerivationDescription_0008_2111 = 532753,
    /**
     * < Source Image Sequence (0008,2112)
     */
    SourceImageSequence_0008_2112 = 532754,
    /**
     * < Stage Name (0008,2120)
     */
    StageName_0008_2120 = 532768,
    /**
     * < Stage Number (0008,2122)
     */
    StageNumber_0008_2122 = 532770,
    /**
     * < Number of Stages (0008,2124)
     */
    NumberOfStages_0008_2124 = 532772,
    /**
     * < View Name (0008,2127)
     */
    ViewName_0008_2127 = 532775,
    /**
     * < View Number (0008,2128)
     */
    ViewNumber_0008_2128 = 532776,
    /**
     * < Number of Event Timers (0008,2129)
     */
    NumberOfEventTimers_0008_2129 = 532777,
    /**
     * < Number of Views in Stage (0008,212A)
     */
    NumberOfViewsInStage_0008_212A = 532778,
    /**
     * < Event Elapsed Time(s) (0008,2130)
     */
    EventElapsedTimes_0008_2130 = 532784,
    /**
     * < Event Timer Name(s) (0008,2132)
     */
    EventTimerNames_0008_2132 = 532786,
    /**
     * < Event Timer Sequence (0008,2133)
     */
    EventTimerSequence_0008_2133 = 532787,
    /**
     * < Event Time Offset (0008,2134)
     */
    EventTimeOffset_0008_2134 = 532788,
    /**
     * < Event Code Sequence (0008,2135)
     */
    EventCodeSequence_0008_2135 = 532789,
    /**
     * < Start Trim (0008,2142)
     */
    StartTrim_0008_2142 = 532802,
    /**
     * < Stop Trim (0008,2143)
     */
    StopTrim_0008_2143 = 532803,
    /**
     * < Recommended Display Frame Rate (0008,2144)
     */
    RecommendedDisplayFrameRate_0008_2144 = 532804,
    /**
     * < Transducer Position (0008,2200)
     */
    TransducerPosition_0008_2200 = 532992,
    /**
     * < Transducer Orientation (0008,2204)
     */
    TransducerOrientation_0008_2204 = 532996,
    /**
     * < Anatomic Structure (0008,2208)
     */
    AnatomicStructure_0008_2208 = 533000,
    /**
     * < Anatomic Region Sequence (0008,2218)
     */
    AnatomicRegionSequence_0008_2218 = 533016,
    /**
     * < Anatomic Region Modifier Sequence (0008,2220)
     */
    AnatomicRegionModifierSequence_0008_2220 = 533024,
    /**
     * < Primary Anatomic Structure Sequence (0008,2228)
     */
    PrimaryAnatomicStructureSequence_0008_2228 = 533032,
    /**
     * < Anatomic Structure, Space or Region Sequence (0008,2229)
     */
    AnatomicStructureSpaceOrRegionSequence_0008_2229 = 533033,
    /**
     * < Primary Anatomic Structure Modifier Sequence (0008,2230)
     */
    PrimaryAnatomicStructureModifierSequence_0008_2230 = 533040,
    /**
     * < Transducer Position Sequence (0008,2240)
     */
    TransducerPositionSequence_0008_2240 = 533056,
    /**
     * < Transducer Position Modifier Sequence (0008,2242)
     */
    TransducerPositionModifierSequence_0008_2242 = 533058,
    /**
     * < Transducer Orientation Sequence (0008,2244)
     */
    TransducerOrientationSequence_0008_2244 = 533060,
    /**
     * < Transducer Orientation Modifier Sequence (0008,2246)
     */
    TransducerOrientationModifierSequence_0008_2246 = 533062,
    /**
     * < Anatomic Structure Space Or Region Code Sequence (Trial) (0008,2251)
     */
    AnatomicStructureSpaceOrRegionCodeSequenceTrial_0008_2251 = 533073,
    /**
     * < Anatomic Portal Of Entrance Code Sequence (Trial) (0008,2253)
     */
    AnatomicPortalOfEntranceCodeSequenceTrial_0008_2253 = 533075,
    /**
     * < Anatomic Approach Direction Code Sequence (Trial) (0008,2255)
     */
    AnatomicApproachDirectionCodeSequenceTrial_0008_2255 = 533077,
    /**
     * < Anatomic Perspective Description (Trial) (0008,2256)
     */
    AnatomicPerspectiveDescriptionTrial_0008_2256 = 533078,
    /**
     * < Anatomic Perspective Code Sequence (Trial) (0008,2257)
     */
    AnatomicPerspectiveCodeSequenceTrial_0008_2257 = 533079,
    /**
     * < Anatomic Location Of Examining Instrument Description (Trial) (0008,2258)
     */
    AnatomicLocationOfExaminingInstrumentDescriptionTrial_0008_2258 = 533080,
    /**
     * < Anatomic Location Of Examining Instrument Code Sequence (Trial) (0008,2259)
     */
    AnatomicLocationOfExaminingInstrumentCodeSequenceTrial_0008_2259 = 533081,
    /**
     * < Anatomic Structure Space Or Region Modifier Code Sequence (Trial) (0008,225A)
     */
    AnatomicStructureSpaceOrRegionModifierCodeSequenceTrial_0008_225A = 533082,
    /**
     * < On Axis Background Anatomic Structure Code Sequence (Trial) (0008,225C)
     */
    OnAxisBackgroundAnatomicStructureCodeSequenceTrial_0008_225C = 533084,
    /**
     * < Alternate Representation Sequence (0008,3001)
     */
    AlternateRepresentationSequence_0008_3001 = 536577,
    /**
     * < Irradiation Event UID (0008,3010)
     */
    IrradiationEventUID_0008_3010 = 536592,
    /**
     * < Source Irradiation Event Sequence (0008,3011)
     */
    SourceIrradiationEventSequence_0008_3011 = 536593,
    /**
     * < Radiopharmaceutical Administration Event UID (0008,3012)
     */
    RadiopharmaceuticalAdministrationEventUID_0008_3012 = 536594,
    /**
     * < Identifying Comments (0008,4000)
     */
    IdentifyingComments_0008_4000 = 540672,
    /**
     * < Frame Type (0008,9007)
     */
    FrameType_0008_9007 = 561159,
    /**
     * < Referenced Image Evidence Sequence (0008,9092)
     */
    ReferencedImageEvidenceSequence_0008_9092 = 561298,
    /**
     * < Referenced Raw Data Sequence (0008,9121)
     */
    ReferencedRawDataSequence_0008_9121 = 561441,
    /**
     * < Creator-Version UID (0008,9123)
     */
    CreatorVersionUID_0008_9123 = 561443,
    /**
     * < Derivation Image Sequence (0008,9124)
     */
    DerivationImageSequence_0008_9124 = 561444,
    /**
     * < Source Image Evidence Sequence (0008,9154)
     */
    SourceImageEvidenceSequence_0008_9154 = 561492,
    /**
     * < Pixel Presentation (0008,9205)
     */
    PixelPresentation_0008_9205 = 561669,
    /**
     * < Volumetric Properties (0008,9206)
     */
    VolumetricProperties_0008_9206 = 561670,
    /**
     * < Volume Based Calculation Technique (0008,9207)
     */
    VolumeBasedCalculationTechnique_0008_9207 = 561671,
    /**
     * < Complex Image Component (0008,9208)
     */
    ComplexImageComponent_0008_9208 = 561672,
    /**
     * < Acquisition Contrast (0008,9209)
     */
    AcquisitionContrast_0008_9209 = 561673,
    /**
     * < Derivation Code Sequence (0008,9215)
     */
    DerivationCodeSequence_0008_9215 = 561685,
    /**
     * < Referenced Presentation State Sequence (0008,9237)
     */
    ReferencedPresentationStateSequence_0008_9237 = 561719,
    /**
     * < Referenced Other Plane Sequence (0008,9410)
     */
    ReferencedOtherPlaneSequence_0008_9410 = 562192,
    /**
     * < Frame Display Sequence (0008,9458)
     */
    FrameDisplaySequence_0008_9458 = 562264,
    /**
     * < Recommended Display Frame Rate in Float (0008,9459)
     */
    RecommendedDisplayFrameRateInFloat_0008_9459 = 562265,
    /**
     * < Skip Frame Range Flag (0008,9460)
     */
    SkipFrameRangeFlag_0008_9460 = 562272,
    /**
     * < Patient's Name (0010,0010)
     */
    PatientName_0010_0010 = 1048592,
    /**
     * < Patient ID (0010,0020)
     */
    PatientID_0010_0020 = 1048608,
    /**
     * < Issuer of Patient ID (0010,0021)
     */
    IssuerOfPatientID_0010_0021 = 1048609,
    /**
     * < Type of Patient ID (0010,0022)
     */
    TypeOfPatientID_0010_0022 = 1048610,
    /**
     * < Issuer of Patient ID Qualifiers Sequence (0010,0024)
     */
    IssuerOfPatientIDQualifiersSequence_0010_0024 = 1048612,
    /**
     * < Source Patient Group Identification Sequence (0010,0026)
     */
    SourcePatientGroupIdentificationSequence_0010_0026 = 1048614,
    /**
     * < Group of Patients Identification Sequence (0010,0027)
     */
    GroupOfPatientsIdentificationSequence_0010_0027 = 1048615,
    /**
     * < Subject Relative Position in Image (0010,0028)
     */
    SubjectRelativePositionInImage_0010_0028 = 1048616,
    /**
     * < Patient's Birth Date (0010,0030)
     */
    PatientBirthDate_0010_0030 = 1048624,
    /**
     * < Patient's Birth Time (0010,0032)
     */
    PatientBirthTime_0010_0032 = 1048626,
    /**
     * < Patient's Birth Date in Alternative Calendar (0010,0033)
     */
    PatientBirthDateInAlternativeCalendar_0010_0033 = 1048627,
    /**
     * < Patient's Death Date in Alternative Calendar (0010,0034)
     */
    PatientDeathDateInAlternativeCalendar_0010_0034 = 1048628,
    /**
     * < Patient's Alternative Calendar (0010,0035)
     */
    PatientAlternativeCalendar_0010_0035 = 1048629,
    /**
     * < Patient's Sex (0010,0040)
     */
    PatientSex_0010_0040 = 1048640,
    /**
     * < Patient's Insurance Plan Code Sequence (0010,0050)
     */
    PatientInsurancePlanCodeSequence_0010_0050 = 1048656,
    /**
     * < Patient's Primary Language Code Sequence (0010,0101)
     */
    PatientPrimaryLanguageCodeSequence_0010_0101 = 1048833,
    /**
     * < Patient's Primary Language Modifier Code Sequence (0010,0102)
     */
    PatientPrimaryLanguageModifierCodeSequence_0010_0102 = 1048834,
    /**
     * < Quality Control Subject (0010,0200)
     */
    QualityControlSubject_0010_0200 = 1049088,
    /**
     * < Quality Control Subject Type Code Sequence (0010,0201)
     */
    QualityControlSubjectTypeCodeSequence_0010_0201 = 1049089,
    /**
     * < Strain Description (0010,0212)
     */
    StrainDescription_0010_0212 = 1049106,
    /**
     * < Strain Nomenclature (0010,0213)
     */
    StrainNomenclature_0010_0213 = 1049107,
    /**
     * < Strain Stock Number (0010,0214)
     */
    StrainStockNumber_0010_0214 = 1049108,
    /**
     * < Strain Source Registry Code Sequence (0010,0215)
     */
    StrainSourceRegistryCodeSequence_0010_0215 = 1049109,
    /**
     * < Strain Stock Sequence (0010,0216)
     */
    StrainStockSequence_0010_0216 = 1049110,
    /**
     * < Strain Source (0010,0217)
     */
    StrainSource_0010_0217 = 1049111,
    /**
     * < Strain Additional Information (0010,0218)
     */
    StrainAdditionalInformation_0010_0218 = 1049112,
    /**
     * < Strain Code Sequence (0010,0219)
     */
    StrainCodeSequence_0010_0219 = 1049113,
    /**
     * < Genetic Modifications Sequence (0010,0221)
     */
    GeneticModificationsSequence_0010_0221 = 1049121,
    /**
     * < Genetic Modifications Description (0010,0222)
     */
    GeneticModificationsDescription_0010_0222 = 1049122,
    /**
     * < Genetic Modifications Nomenclature (0010,0223)
     */
    GeneticModificationsNomenclature_0010_0223 = 1049123,
    /**
     * < Genetic Modifications Code Sequence (0010,0229)
     */
    GeneticModificationsCodeSequence_0010_0229 = 1049129,
    /**
     * < Other Patient IDs (0010,1000)
     */
    OtherPatientIDs_0010_1000 = 1052672,
    /**
     * < Other Patient Names (0010,1001)
     */
    OtherPatientNames_0010_1001 = 1052673,
    /**
     * < Other Patient IDs Sequence (0010,1002)
     */
    OtherPatientIDsSequence_0010_1002 = 1052674,
    /**
     * < Patient's Birth Name (0010,1005)
     */
    PatientBirthName_0010_1005 = 1052677,
    /**
     * < Patient's Age (0010,1010)
     */
    PatientAge_0010_1010 = 1052688,
    /**
     * < Patient's Size (0010,1020)
     */
    PatientSize_0010_1020 = 1052704,
    /**
     * < Patient's Size Code Sequence (0010,1021)
     */
    PatientSizeCodeSequence_0010_1021 = 1052705,
    /**
     * < Patient's Body Mass Index (0010,1022)
     */
    PatientBodyMassIndex_0010_1022 = 1052706,
    /**
     * < Measured AP Dimension (0010,1023)
     */
    MeasuredAPDimension_0010_1023 = 1052707,
    /**
     * < Measured Lateral Dimension (0010,1024)
     */
    MeasuredLateralDimension_0010_1024 = 1052708,
    /**
     * < Patient's Weight (0010,1030)
     */
    PatientWeight_0010_1030 = 1052720,
    /**
     * < Patient's Address (0010,1040)
     */
    PatientAddress_0010_1040 = 1052736,
    /**
     * < Insurance Plan Identification (0010,1050)
     */
    InsurancePlanIdentification_0010_1050 = 1052752,
    /**
     * < Patient's Mother's Birth Name (0010,1060)
     */
    PatientMotherBirthName_0010_1060 = 1052768,
    /**
     * < Military Rank (0010,1080)
     */
    MilitaryRank_0010_1080 = 1052800,
    /**
     * < Branch of Service (0010,1081)
     */
    BranchOfService_0010_1081 = 1052801,
    /**
     * < Medical Record Locator (0010,1090)
     */
    MedicalRecordLocator_0010_1090 = 1052816,
    /**
     * < Referenced Patient Photo Sequence (0010,1100)
     */
    ReferencedPatientPhotoSequence_0010_1100 = 1052928,
    /**
     * < Medical Alerts (0010,2000)
     */
    MedicalAlerts_0010_2000 = 1056768,
    /**
     * < Allergies (0010,2110)
     */
    Allergies_0010_2110 = 1057040,
    /**
     * < Country of Residence (0010,2150)
     */
    CountryOfResidence_0010_2150 = 1057104,
    /**
     * < Region of Residence (0010,2152)
     */
    RegionOfResidence_0010_2152 = 1057106,
    /**
     * < Patient's Telephone Numbers (0010,2154)
     */
    PatientTelephoneNumbers_0010_2154 = 1057108,
    /**
     * < Patient's Telecom Information (0010,2155)
     */
    PatientTelecomInformation_0010_2155 = 1057109,
    /**
     * < Ethnic Group (0010,2160)
     */
    EthnicGroup_0010_2160 = 1057120,
    /**
     * < Occupation (0010,2180)
     */
    Occupation_0010_2180 = 1057152,
    /**
     * < Smoking Status (0010,21A0)
     */
    SmokingStatus_0010_21A0 = 1057184,
    /**
     * < Additional Patient History (0010,21B0)
     */
    AdditionalPatientHistory_0010_21B0 = 1057200,
    /**
     * < Pregnancy Status (0010,21C0)
     */
    PregnancyStatus_0010_21C0 = 1057216,
    /**
     * < Last Menstrual Date (0010,21D0)
     */
    LastMenstrualDate_0010_21D0 = 1057232,
    /**
     * < Patient's Religious Preference (0010,21F0)
     */
    PatientReligiousPreference_0010_21F0 = 1057264,
    /**
     * < Patient Species Description (0010,2201)
     */
    PatientSpeciesDescription_0010_2201 = 1057281,
    /**
     * < Patient Species Code Sequence (0010,2202)
     */
    PatientSpeciesCodeSequence_0010_2202 = 1057282,
    /**
     * < Patient's Sex Neutered (0010,2203)
     */
    PatientSexNeutered_0010_2203 = 1057283,
    /**
     * < Anatomical Orientation Type (0010,2210)
     */
    AnatomicalOrientationType_0010_2210 = 1057296,
    /**
     * < Patient Breed Description (0010,2292)
     */
    PatientBreedDescription_0010_2292 = 1057426,
    /**
     * < Patient Breed Code Sequence (0010,2293)
     */
    PatientBreedCodeSequence_0010_2293 = 1057427,
    /**
     * < Breed Registration Sequence (0010,2294)
     */
    BreedRegistrationSequence_0010_2294 = 1057428,
    /**
     * < Breed Registration Number (0010,2295)
     */
    BreedRegistrationNumber_0010_2295 = 1057429,
    /**
     * < Breed Registry Code Sequence (0010,2296)
     */
    BreedRegistryCodeSequence_0010_2296 = 1057430,
    /**
     * < Responsible Person (0010,2297)
     */
    ResponsiblePerson_0010_2297 = 1057431,
    /**
     * < Responsible Person Role (0010,2298)
     */
    ResponsiblePersonRole_0010_2298 = 1057432,
    /**
     * < Responsible Organization (0010,2299)
     */
    ResponsibleOrganization_0010_2299 = 1057433,
    /**
     * < Patient Comments (0010,4000)
     */
    PatientComments_0010_4000 = 1064960,
    /**
     * < Examined Body Thickness (0010,9431)
     */
    ExaminedBodyThickness_0010_9431 = 1086513,
    /**
     * < Clinical Trial Sponsor Name (0012,0010)
     */
    ClinicalTrialSponsorName_0012_0010 = 1179664,
    /**
     * < Clinical Trial Protocol ID (0012,0020)
     */
    ClinicalTrialProtocolID_0012_0020 = 1179680,
    /**
     * < Clinical Trial Protocol Name (0012,0021)
     */
    ClinicalTrialProtocolName_0012_0021 = 1179681,
    /**
     * < Clinical Trial Site ID (0012,0030)
     */
    ClinicalTrialSiteID_0012_0030 = 1179696,
    /**
     * < Clinical Trial Site Name (0012,0031)
     */
    ClinicalTrialSiteName_0012_0031 = 1179697,
    /**
     * < Clinical Trial Subject ID (0012,0040)
     */
    ClinicalTrialSubjectID_0012_0040 = 1179712,
    /**
     * < Clinical Trial Subject Reading ID (0012,0042)
     */
    ClinicalTrialSubjectReadingID_0012_0042 = 1179714,
    /**
     * < Clinical Trial Time Point ID (0012,0050)
     */
    ClinicalTrialTimePointID_0012_0050 = 1179728,
    /**
     * < Clinical Trial Time Point Description (0012,0051)
     */
    ClinicalTrialTimePointDescription_0012_0051 = 1179729,
    /**
     * < Longitudinal Temporal Offset from Event (0012,0052)
     */
    LongitudinalTemporalOffsetFromEvent_0012_0052 = 1179730,
    /**
     * < Longitudinal Temporal Event Type (0012,0053)
     */
    LongitudinalTemporalEventType_0012_0053 = 1179731,
    /**
     * < Clinical Trial Coordinating Center Name (0012,0060)
     */
    ClinicalTrialCoordinatingCenterName_0012_0060 = 1179744,
    /**
     * < Patient Identity Removed (0012,0062)
     */
    PatientIdentityRemoved_0012_0062 = 1179746,
    /**
     * < De-identification Method (0012,0063)
     */
    DeidentificationMethod_0012_0063 = 1179747,
    /**
     * < De-identification Method Code Sequence (0012,0064)
     */
    DeidentificationMethodCodeSequence_0012_0064 = 1179748,
    /**
     * < Clinical Trial Series ID (0012,0071)
     */
    ClinicalTrialSeriesID_0012_0071 = 1179761,
    /**
     * < Clinical Trial Series Description (0012,0072)
     */
    ClinicalTrialSeriesDescription_0012_0072 = 1179762,
    /**
     * < Clinical Trial Protocol Ethics Committee Name (0012,0081)
     */
    ClinicalTrialProtocolEthicsCommitteeName_0012_0081 = 1179777,
    /**
     * < Clinical Trial Protocol Ethics Committee Approval Number (0012,0082)
     */
    ClinicalTrialProtocolEthicsCommitteeApprovalNumber_0012_0082 = 1179778,
    /**
     * < Consent for Clinical Trial Use Sequence (0012,0083)
     */
    ConsentForClinicalTrialUseSequence_0012_0083 = 1179779,
    /**
     * < Distribution Type (0012,0084)
     */
    DistributionType_0012_0084 = 1179780,
    /**
     * < Consent for Distribution Flag (0012,0085)
     */
    ConsentForDistributionFlag_0012_0085 = 1179781,
    /**
     * < Ethics Committee Approval Effectiveness Start Date (0012,0086)
     */
    EthicsCommitteeApprovalEffectivenessStartDate_0012_0086 = 1179782,
    /**
     * < Ethics Committee Approval Effectiveness End Date (0012,0087)
     */
    EthicsCommitteeApprovalEffectivenessEndDate_0012_0087 = 1179783,
    /**
     * < CAD File Format (0014,0023)
     */
    CADFileFormat_0014_0023 = 1310755,
    /**
     * < Component Reference System (0014,0024)
     */
    ComponentReferenceSystem_0014_0024 = 1310756,
    /**
     * < Component Manufacturing Procedure (0014,0025)
     */
    ComponentManufacturingProcedure_0014_0025 = 1310757,
    /**
     * < Component Manufacturer (0014,0028)
     */
    ComponentManufacturer_0014_0028 = 1310760,
    /**
     * < Material Thickness (0014,0030)
     */
    MaterialThickness_0014_0030 = 1310768,
    /**
     * < Material Pipe Diameter (0014,0032)
     */
    MaterialPipeDiameter_0014_0032 = 1310770,
    /**
     * < Material Isolation Diameter (0014,0034)
     */
    MaterialIsolationDiameter_0014_0034 = 1310772,
    /**
     * < Material Grade (0014,0042)
     */
    MaterialGrade_0014_0042 = 1310786,
    /**
     * < Material Properties Description (0014,0044)
     */
    MaterialPropertiesDescription_0014_0044 = 1310788,
    /**
     * < Material Properties File Format (Retired) (0014,0045)
     */
    MaterialPropertiesFileFormat_0014_0045 = 1310789,
    /**
     * < Material Notes (0014,0046)
     */
    MaterialNotes_0014_0046 = 1310790,
    /**
     * < Component Shape (0014,0050)
     */
    ComponentShape_0014_0050 = 1310800,
    /**
     * < Curvature Type (0014,0052)
     */
    CurvatureType_0014_0052 = 1310802,
    /**
     * < Outer Diameter (0014,0054)
     */
    OuterDiameter_0014_0054 = 1310804,
    /**
     * < Inner Diameter (0014,0056)
     */
    InnerDiameter_0014_0056 = 1310806,
    /**
     * < Component Welder IDs (0014,0100)
     */
    ComponentWelderIDs_0014_0100 = 1310976,
    /**
     * < Secondary Approval Status (0014,0101)
     */
    SecondaryApprovalStatus_0014_0101 = 1310977,
    /**
     * < Secondary Review Date (0014,0102)
     */
    SecondaryReviewDate_0014_0102 = 1310978,
    /**
     * < Secondary Review Time (0014,0103)
     */
    SecondaryReviewTime_0014_0103 = 1310979,
    /**
     * < Secondary Reviewer Name (0014,0104)
     */
    SecondaryReviewerName_0014_0104 = 1310980,
    /**
     * < Repair ID (0014,0105)
     */
    RepairID_0014_0105 = 1310981,
    /**
     * < Multiple Component Approval Sequence (0014,0106)
     */
    MultipleComponentApprovalSequence_0014_0106 = 1310982,
    /**
     * < Other Approval Status (0014,0107)
     */
    OtherApprovalStatus_0014_0107 = 1310983,
    /**
     * < Other Secondary Approval Status (0014,0108)
     */
    OtherSecondaryApprovalStatus_0014_0108 = 1310984,
    /**
     * < Actual Environmental Conditions (0014,1010)
     */
    ActualEnvironmentalConditions_0014_1010 = 1314832,
    /**
     * < Expiry Date (0014,1020)
     */
    ExpiryDate_0014_1020 = 1314848,
    /**
     * < Environmental Conditions (0014,1040)
     */
    EnvironmentalConditions_0014_1040 = 1314880,
    /**
     * < Evaluator Sequence (0014,2002)
     */
    EvaluatorSequence_0014_2002 = 1318914,
    /**
     * < Evaluator Number (0014,2004)
     */
    EvaluatorNumber_0014_2004 = 1318916,
    /**
     * < Evaluator Name (0014,2006)
     */
    EvaluatorName_0014_2006 = 1318918,
    /**
     * < Evaluation Attempt (0014,2008)
     */
    EvaluationAttempt_0014_2008 = 1318920,
    /**
     * < Indication Sequence (0014,2012)
     */
    IndicationSequence_0014_2012 = 1318930,
    /**
     * < Indication Number (0014,2014)
     */
    IndicationNumber_0014_2014 = 1318932,
    /**
     * < Indication Label (0014,2016)
     */
    IndicationLabel_0014_2016 = 1318934,
    /**
     * < Indication Description (0014,2018)
     */
    IndicationDescription_0014_2018 = 1318936,
    /**
     * < Indication Type (0014,201A)
     */
    IndicationType_0014_201A = 1318938,
    /**
     * < Indication Disposition (0014,201C)
     */
    IndicationDisposition_0014_201C = 1318940,
    /**
     * < Indication ROI Sequence (0014,201E)
     */
    IndicationROISequence_0014_201E = 1318942,
    /**
     * < Indication Physical Property Sequence (0014,2030)
     */
    IndicationPhysicalPropertySequence_0014_2030 = 1318960,
    /**
     * < Property Label (0014,2032)
     */
    PropertyLabel_0014_2032 = 1318962,
    /**
     * < Coordinate System Number of Axes (0014,2202)
     */
    CoordinateSystemNumberOfAxes_0014_2202 = 1319426,
    /**
     * < Coordinate System Axes Sequence (0014,2204)
     */
    CoordinateSystemAxesSequence_0014_2204 = 1319428,
    /**
     * < Coordinate System Axis Description (0014,2206)
     */
    CoordinateSystemAxisDescription_0014_2206 = 1319430,
    /**
     * < Coordinate System Data Set Mapping (0014,2208)
     */
    CoordinateSystemDataSetMapping_0014_2208 = 1319432,
    /**
     * < Coordinate System Axis Number (0014,220A)
     */
    CoordinateSystemAxisNumber_0014_220A = 1319434,
    /**
     * < Coordinate System Axis Type (0014,220C)
     */
    CoordinateSystemAxisType_0014_220C = 1319436,
    /**
     * < Coordinate System Axis Units (0014,220E)
     */
    CoordinateSystemAxisUnits_0014_220E = 1319438,
    /**
     * < Coordinate System Axis Values (0014,2210)
     */
    CoordinateSystemAxisValues_0014_2210 = 1319440,
    /**
     * < Coordinate System Transform Sequence (0014,2220)
     */
    CoordinateSystemTransformSequence_0014_2220 = 1319456,
    /**
     * < Transform Description (0014,2222)
     */
    TransformDescription_0014_2222 = 1319458,
    /**
     * < Transform Number of Axes (0014,2224)
     */
    TransformNumberOfAxes_0014_2224 = 1319460,
    /**
     * < Transform Order of Axes (0014,2226)
     */
    TransformOrderOfAxes_0014_2226 = 1319462,
    /**
     * < Transformed Axis Units (0014,2228)
     */
    TransformedAxisUnits_0014_2228 = 1319464,
    /**
     * < Coordinate System Transform Rotation and Scale Matrix (0014,222A)
     */
    CoordinateSystemTransformRotationAndScaleMatrix_0014_222A = 1319466,
    /**
     * < Coordinate System Transform Translation Matrix (0014,222C)
     */
    CoordinateSystemTransformTranslationMatrix_0014_222C = 1319468,
    /**
     * < Internal Detector Frame Time (0014,3011)
     */
    InternalDetectorFrameTime_0014_3011 = 1323025,
    /**
     * < Number of Frames Integrated (0014,3012)
     */
    NumberOfFramesIntegrated_0014_3012 = 1323026,
    /**
     * < Detector Temperature Sequence (0014,3020)
     */
    DetectorTemperatureSequence_0014_3020 = 1323040,
    /**
     * < Sensor Name (0014,3022)
     */
    SensorName_0014_3022 = 1323042,
    /**
     * < Horizontal Offset of Sensor (0014,3024)
     */
    HorizontalOffsetOfSensor_0014_3024 = 1323044,
    /**
     * < Vertical Offset of Sensor (0014,3026)
     */
    VerticalOffsetOfSensor_0014_3026 = 1323046,
    /**
     * < Sensor Temperature (0014,3028)
     */
    SensorTemperature_0014_3028 = 1323048,
    /**
     * < Dark Current Sequence (0014,3040)
     */
    DarkCurrentSequence_0014_3040 = 1323072,
    /**
     * < Dark Current Counts (0014,3050)
     */
    DarkCurrentCounts_0014_3050 = 1323088,
    /**
     * < Gain Correction Reference Sequence (0014,3060)
     */
    GainCorrectionReferenceSequence_0014_3060 = 1323104,
    /**
     * < Air Counts (0014,3070)
     */
    AirCounts_0014_3070 = 1323120,
    /**
     * < KV Used in Gain Calibration (0014,3071)
     */
    KVUsedInGainCalibration_0014_3071 = 1323121,
    /**
     * < MA Used in Gain Calibration (0014,3072)
     */
    MAUsedInGainCalibration_0014_3072 = 1323122,
    /**
     * < Number of Frames Used for Integration (0014,3073)
     */
    NumberOfFramesUsedForIntegration_0014_3073 = 1323123,
    /**
     * < Filter Material Used in Gain Calibration (0014,3074)
     */
    FilterMaterialUsedInGainCalibration_0014_3074 = 1323124,
    /**
     * < Filter Thickness Used in Gain Calibration (0014,3075)
     */
    FilterThicknessUsedInGainCalibration_0014_3075 = 1323125,
    /**
     * < Date of Gain Calibration (0014,3076)
     */
    DateOfGainCalibration_0014_3076 = 1323126,
    /**
     * < Time of Gain Calibration (0014,3077)
     */
    TimeOfGainCalibration_0014_3077 = 1323127,
    /**
     * < Bad Pixel Image (0014,3080)
     */
    BadPixelImage_0014_3080 = 1323136,
    /**
     * < Calibration Notes (0014,3099)
     */
    CalibrationNotes_0014_3099 = 1323161,
    /**
     * < Pulser Equipment Sequence (0014,4002)
     */
    PulserEquipmentSequence_0014_4002 = 1327106,
    /**
     * < Pulser Type (0014,4004)
     */
    PulserType_0014_4004 = 1327108,
    /**
     * < Pulser Notes (0014,4006)
     */
    PulserNotes_0014_4006 = 1327110,
    /**
     * < Receiver Equipment Sequence (0014,4008)
     */
    ReceiverEquipmentSequence_0014_4008 = 1327112,
    /**
     * < Amplifier Type (0014,400A)
     */
    AmplifierType_0014_400A = 1327114,
    /**
     * < Receiver Notes (0014,400C)
     */
    ReceiverNotes_0014_400C = 1327116,
    /**
     * < Pre-Amplifier Equipment Sequence (0014,400E)
     */
    PreAmplifierEquipmentSequence_0014_400E = 1327118,
    /**
     * < Pre-Amplifier Notes (0014,400F)
     */
    PreAmplifierNotes_0014_400F = 1327119,
    /**
     * < Transmit Transducer Sequence (0014,4010)
     */
    TransmitTransducerSequence_0014_4010 = 1327120,
    /**
     * < Receive Transducer Sequence (0014,4011)
     */
    ReceiveTransducerSequence_0014_4011 = 1327121,
    /**
     * < Number of Elements (0014,4012)
     */
    NumberOfElements_0014_4012 = 1327122,
    /**
     * < Element Shape (0014,4013)
     */
    ElementShape_0014_4013 = 1327123,
    /**
     * < Element Dimension A (0014,4014)
     */
    ElementDimensionA_0014_4014 = 1327124,
    /**
     * < Element Dimension B (0014,4015)
     */
    ElementDimensionB_0014_4015 = 1327125,
    /**
     * < Element Pitch A (0014,4016)
     */
    ElementPitchA_0014_4016 = 1327126,
    /**
     * < Measured Beam Dimension A (0014,4017)
     */
    MeasuredBeamDimensionA_0014_4017 = 1327127,
    /**
     * < Measured Beam Dimension B (0014,4018)
     */
    MeasuredBeamDimensionB_0014_4018 = 1327128,
    /**
     * < Location of Measured Beam Diameter (0014,4019)
     */
    LocationOfMeasuredBeamDiameter_0014_4019 = 1327129,
    /**
     * < Nominal Frequency (0014,401A)
     */
    NominalFrequency_0014_401A = 1327130,
    /**
     * < Measured Center Frequency (0014,401B)
     */
    MeasuredCenterFrequency_0014_401B = 1327131,
    /**
     * < Measured Bandwidth (0014,401C)
     */
    MeasuredBandwidth_0014_401C = 1327132,
    /**
     * < Element Pitch B (0014,401D)
     */
    ElementPitchB_0014_401D = 1327133,
    /**
     * < Pulser Settings Sequence (0014,4020)
     */
    PulserSettingsSequence_0014_4020 = 1327136,
    /**
     * < Pulse Width (0014,4022)
     */
    PulseWidth_0014_4022 = 1327138,
    /**
     * < Excitation Frequency (0014,4024)
     */
    ExcitationFrequency_0014_4024 = 1327140,
    /**
     * < Modulation Type (0014,4026)
     */
    ModulationType_0014_4026 = 1327142,
    /**
     * < Damping (0014,4028)
     */
    Damping_0014_4028 = 1327144,
    /**
     * < Receiver Settings Sequence (0014,4030)
     */
    ReceiverSettingsSequence_0014_4030 = 1327152,
    /**
     * < Acquired Soundpath Length (0014,4031)
     */
    AcquiredSoundpathLength_0014_4031 = 1327153,
    /**
     * < Acquisition Compression Type (0014,4032)
     */
    AcquisitionCompressionType_0014_4032 = 1327154,
    /**
     * < Acquisition Sample Size (0014,4033)
     */
    AcquisitionSampleSize_0014_4033 = 1327155,
    /**
     * < Rectifier Smoothing (0014,4034)
     */
    RectifierSmoothing_0014_4034 = 1327156,
    /**
     * < DAC Sequence (0014,4035)
     */
    DACSequence_0014_4035 = 1327157,
    /**
     * < DAC Type (0014,4036)
     */
    DACType_0014_4036 = 1327158,
    /**
     * < DAC Gain Points (0014,4038)
     */
    DACGainPoints_0014_4038 = 1327160,
    /**
     * < DAC Time Points (0014,403A)
     */
    DACTimePoints_0014_403A = 1327162,
    /**
     * < DAC Amplitude (0014,403C)
     */
    DACAmplitude_0014_403C = 1327164,
    /**
     * < Pre-Amplifier Settings Sequence (0014,4040)
     */
    PreAmplifierSettingsSequence_0014_4040 = 1327168,
    /**
     * < Transmit Transducer Settings Sequence (0014,4050)
     */
    TransmitTransducerSettingsSequence_0014_4050 = 1327184,
    /**
     * < Receive Transducer Settings Sequence (0014,4051)
     */
    ReceiveTransducerSettingsSequence_0014_4051 = 1327185,
    /**
     * < Incident Angle (0014,4052)
     */
    IncidentAngle_0014_4052 = 1327186,
    /**
     * < Coupling Technique (0014,4054)
     */
    CouplingTechnique_0014_4054 = 1327188,
    /**
     * < Coupling Medium (0014,4056)
     */
    CouplingMedium_0014_4056 = 1327190,
    /**
     * < Coupling Velocity (0014,4057)
     */
    CouplingVelocity_0014_4057 = 1327191,
    /**
     * < Probe Center Location X (0014,4058)
     */
    ProbeCenterLocationX_0014_4058 = 1327192,
    /**
     * < Probe Center Location Z (0014,4059)
     */
    ProbeCenterLocationZ_0014_4059 = 1327193,
    /**
     * < Sound Path Length (0014,405A)
     */
    SoundPathLength_0014_405A = 1327194,
    /**
     * < Delay Law Identifier (0014,405C)
     */
    DelayLawIdentifier_0014_405C = 1327196,
    /**
     * < Gate Settings Sequence (0014,4060)
     */
    GateSettingsSequence_0014_4060 = 1327200,
    /**
     * < Gate Threshold (0014,4062)
     */
    GateThreshold_0014_4062 = 1327202,
    /**
     * < Velocity of Sound (0014,4064)
     */
    VelocityOfSound_0014_4064 = 1327204,
    /**
     * < Calibration Settings Sequence (0014,4070)
     */
    CalibrationSettingsSequence_0014_4070 = 1327216,
    /**
     * < Calibration Procedure (0014,4072)
     */
    CalibrationProcedure_0014_4072 = 1327218,
    /**
     * < Procedure Version (0014,4074)
     */
    ProcedureVersion_0014_4074 = 1327220,
    /**
     * < Procedure Creation Date (0014,4076)
     */
    ProcedureCreationDate_0014_4076 = 1327222,
    /**
     * < Procedure Expiration Date (0014,4078)
     */
    ProcedureExpirationDate_0014_4078 = 1327224,
    /**
     * < Procedure Last Modified Date (0014,407A)
     */
    ProcedureLastModifiedDate_0014_407A = 1327226,
    /**
     * < Calibration Time (0014,407C)
     */
    CalibrationTime_0014_407C = 1327228,
    /**
     * < Calibration Date (0014,407E)
     */
    CalibrationDate_0014_407E = 1327230,
    /**
     * < Probe Drive Equipment Sequence (0014,4080)
     */
    ProbeDriveEquipmentSequence_0014_4080 = 1327232,
    /**
     * < Drive Type (0014,4081)
     */
    DriveType_0014_4081 = 1327233,
    /**
     * < Probe Drive Notes (0014,4082)
     */
    ProbeDriveNotes_0014_4082 = 1327234,
    /**
     * < Drive Probe Sequence (0014,4083)
     */
    DriveProbeSequence_0014_4083 = 1327235,
    /**
     * < Probe Inductance (0014,4084)
     */
    ProbeInductance_0014_4084 = 1327236,
    /**
     * < Probe Resistance (0014,4085)
     */
    ProbeResistance_0014_4085 = 1327237,
    /**
     * < Receive Probe Sequence (0014,4086)
     */
    ReceiveProbeSequence_0014_4086 = 1327238,
    /**
     * < Probe Drive Settings Sequence (0014,4087)
     */
    ProbeDriveSettingsSequence_0014_4087 = 1327239,
    /**
     * < Bridge Resistors (0014,4088)
     */
    BridgeResistors_0014_4088 = 1327240,
    /**
     * < Probe Orientation Angle (0014,4089)
     */
    ProbeOrientationAngle_0014_4089 = 1327241,
    /**
     * < User Selected Gain Y (0014,408B)
     */
    UserSelectedGainY_0014_408B = 1327243,
    /**
     * < User Selected Phase (0014,408C)
     */
    UserSelectedPhase_0014_408C = 1327244,
    /**
     * < User Selected Offset X (0014,408D)
     */
    UserSelectedOffsetX_0014_408D = 1327245,
    /**
     * < User Selected Offset Y (0014,408E)
     */
    UserSelectedOffsetY_0014_408E = 1327246,
    /**
     * < Channel Settings Sequence (0014,4091)
     */
    ChannelSettingsSequence_0014_4091 = 1327249,
    /**
     * < Channel Threshold (0014,4092)
     */
    ChannelThreshold_0014_4092 = 1327250,
    /**
     * < Scanner Settings Sequence (0014,409A)
     */
    ScannerSettingsSequence_0014_409A = 1327258,
    /**
     * < Scan Procedure (0014,409B)
     */
    ScanProcedure_0014_409B = 1327259,
    /**
     * < Translation Rate X (0014,409C)
     */
    TranslationRateX_0014_409C = 1327260,
    /**
     * < Translation Rate Y (0014,409D)
     */
    TranslationRateY_0014_409D = 1327261,
    /**
     * < Channel Overlap (0014,409F)
     */
    ChannelOverlap_0014_409F = 1327263,
    /**
     * < Image Quality Indicator Type (0014,40A0)
     */
    ImageQualityIndicatorType_0014_40A0 = 1327264,
    /**
     * < Image Quality Indicator Material (0014,40A1)
     */
    ImageQualityIndicatorMaterial_0014_40A1 = 1327265,
    /**
     * < Image Quality Indicator Size (0014,40A2)
     */
    ImageQualityIndicatorSize_0014_40A2 = 1327266,
    /**
     * < LINAC Energy (0014,5002)
     */
    LINACEnergy_0014_5002 = 1331202,
    /**
     * < LINAC Output (0014,5004)
     */
    LINACOutput_0014_5004 = 1331204,
    /**
     * < Active Aperture (0014,5100)
     */
    ActiveAperture_0014_5100 = 1331456,
    /**
     * < Total Aperture (0014,5101)
     */
    TotalAperture_0014_5101 = 1331457,
    /**
     * < Aperture Elevation (0014,5102)
     */
    ApertureElevation_0014_5102 = 1331458,
    /**
     * < Main Lobe Angle (0014,5103)
     */
    MainLobeAngle_0014_5103 = 1331459,
    /**
     * < Main Roof Angle (0014,5104)
     */
    MainRoofAngle_0014_5104 = 1331460,
    /**
     * < Connector Type (0014,5105)
     */
    ConnectorType_0014_5105 = 1331461,
    /**
     * < Wedge Model Number (0014,5106)
     */
    WedgeModelNumber_0014_5106 = 1331462,
    /**
     * < Wedge Angle Float (0014,5107)
     */
    WedgeAngleFloat_0014_5107 = 1331463,
    /**
     * < Wedge Roof Angle (0014,5108)
     */
    WedgeRoofAngle_0014_5108 = 1331464,
    /**
     * < Wedge Element 1 Position (0014,5109)
     */
    WedgeElement1Position_0014_5109 = 1331465,
    /**
     * < Wedge Material Velocity (0014,510A)
     */
    WedgeMaterialVelocity_0014_510A = 1331466,
    /**
     * < Wedge Material (0014,510B)
     */
    WedgeMaterial_0014_510B = 1331467,
    /**
     * < Wedge Offset Z (0014,510C)
     */
    WedgeOffsetZ_0014_510C = 1331468,
    /**
     * < Wedge Origin Offset X (0014,510D)
     */
    WedgeOriginOffsetX_0014_510D = 1331469,
    /**
     * < Wedge Time Delay (0014,510E)
     */
    WedgeTimeDelay_0014_510E = 1331470,
    /**
     * < Wedge Name (0014,510F)
     */
    WedgeName_0014_510F = 1331471,
    /**
     * < Wedge Manufacturer Name (0014,5110)
     */
    WedgeManufacturerName_0014_5110 = 1331472,
    /**
     * < Wedge Description (0014,5111)
     */
    WedgeDescription_0014_5111 = 1331473,
    /**
     * < Nominal Beam Angle (0014,5112)
     */
    NominalBeamAngle_0014_5112 = 1331474,
    /**
     * < Wedge Offset X (0014,5113)
     */
    WedgeOffsetX_0014_5113 = 1331475,
    /**
     * < Wedge Offset Y (0014,5114)
     */
    WedgeOffsetY_0014_5114 = 1331476,
    /**
     * < Wedge Total Length (0014,5115)
     */
    WedgeTotalLength_0014_5115 = 1331477,
    /**
     * < Wedge In Contact Length (0014,5116)
     */
    WedgeInContactLength_0014_5116 = 1331478,
    /**
     * < Wedge Front Gap (0014,5117)
     */
    WedgeFrontGap_0014_5117 = 1331479,
    /**
     * < Wedge Total Height (0014,5118)
     */
    WedgeTotalHeight_0014_5118 = 1331480,
    /**
     * < Wedge Front Height (0014,5119)
     */
    WedgeFrontHeight_0014_5119 = 1331481,
    /**
     * < Wedge Rear Height (0014,511A)
     */
    WedgeRearHeight_0014_511A = 1331482,
    /**
     * < Wedge Total Width (0014,511B)
     */
    WedgeTotalWidth_0014_511B = 1331483,
    /**
     * < Wedge In Contact Width (0014,511C)
     */
    WedgeInContactWidth_0014_511C = 1331484,
    /**
     * < Wedge Chamfer Height (0014,511D)
     */
    WedgeChamferHeight_0014_511D = 1331485,
    /**
     * < Wedge Curve (0014,511E)
     */
    WedgeCurve_0014_511E = 1331486,
    /**
     * < Radius Along the Wedge (0014,511F)
     */
    RadiusAlongWedge_0014_511F = 1331487,
    /**
     * < Contrast/Bolus Agent (0018,0010)
     */
    ContrastBolusAgent_0018_0010 = 1572880,
    /**
     * < Contrast/Bolus Agent Sequence (0018,0012)
     */
    ContrastBolusAgentSequence_0018_0012 = 1572882,
    /**
     * < Contrast/Bolus T1 Relaxivity (0018,0013)
     */
    ContrastBolusT1Relaxivity_0018_0013 = 1572883,
    /**
     * < Contrast/Bolus Administration Route Sequence (0018,0014)
     */
    ContrastBolusAdministrationRouteSequence_0018_0014 = 1572884,
    /**
     * < Body Part Examined (0018,0015)
     */
    BodyPartExamined_0018_0015 = 1572885,
    /**
     * < Scanning Sequence (0018,0020)
     */
    ScanningSequence_0018_0020 = 1572896,
    /**
     * < Sequence Variant (0018,0021)
     */
    SequenceVariant_0018_0021 = 1572897,
    /**
     * < Scan Options (0018,0022)
     */
    ScanOptions_0018_0022 = 1572898,
    /**
     * < MR Acquisition Type (0018,0023)
     */
    MRAcquisitionType_0018_0023 = 1572899,
    /**
     * < Sequence Name (0018,0024)
     */
    SequenceName_0018_0024 = 1572900,
    /**
     * < Angio Flag (0018,0025)
     */
    AngioFlag_0018_0025 = 1572901,
    /**
     * < Intervention Drug Information Sequence (0018,0026)
     */
    InterventionDrugInformationSequence_0018_0026 = 1572902,
    /**
     * < Intervention Drug Stop Time (0018,0027)
     */
    InterventionDrugStopTime_0018_0027 = 1572903,
    /**
     * < Intervention Drug Dose (0018,0028)
     */
    InterventionDrugDose_0018_0028 = 1572904,
    /**
     * < Intervention Drug Code Sequence (0018,0029)
     */
    InterventionDrugCodeSequence_0018_0029 = 1572905,
    /**
     * < Additional Drug Sequence (0018,002A)
     */
    AdditionalDrugSequence_0018_002A = 1572906,
    /**
     * < Radionuclide (0018,0030)
     */
    Radionuclide_0018_0030 = 1572912,
    /**
     * < Radiopharmaceutical (0018,0031)
     */
    Radiopharmaceutical_0018_0031 = 1572913,
    /**
     * < Energy Window Centerline (0018,0032)
     */
    EnergyWindowCenterline_0018_0032 = 1572914,
    /**
     * < Energy Window Total Width (0018,0033)
     */
    EnergyWindowTotalWidth_0018_0033 = 1572915,
    /**
     * < Intervention Drug Name (0018,0034)
     */
    InterventionDrugName_0018_0034 = 1572916,
    /**
     * < Intervention Drug Start Time (0018,0035)
     */
    InterventionDrugStartTime_0018_0035 = 1572917,
    /**
     * < Intervention Sequence (0018,0036)
     */
    InterventionSequence_0018_0036 = 1572918,
    /**
     * < Therapy Type (0018,0037)
     */
    TherapyType_0018_0037 = 1572919,
    /**
     * < Intervention Status (0018,0038)
     */
    InterventionStatus_0018_0038 = 1572920,
    /**
     * < Therapy Description (0018,0039)
     */
    TherapyDescription_0018_0039 = 1572921,
    /**
     * < Intervention Description (0018,003A)
     */
    InterventionDescription_0018_003A = 1572922,
    /**
     * < Cine Rate (0018,0040)
     */
    CineRate_0018_0040 = 1572928,
    /**
     * < Initial Cine Run State (0018,0042)
     */
    InitialCineRunState_0018_0042 = 1572930,
    /**
     * < Slice Thickness (0018,0050)
     */
    SliceThickness_0018_0050 = 1572944,
    /**
     * < KVP (0018,0060)
     */
    KVP_0018_0060 = 1572960,
    /**
     * < Counts Accumulated (0018,0070)
     */
    CountsAccumulated_0018_0070 = 1572976,
    /**
     * < Acquisition Termination Condition (0018,0071)
     */
    AcquisitionTerminationCondition_0018_0071 = 1572977,
    /**
     * < Effective Duration (0018,0072)
     */
    EffectiveDuration_0018_0072 = 1572978,
    /**
     * < Acquisition Start Condition (0018,0073)
     */
    AcquisitionStartCondition_0018_0073 = 1572979,
    /**
     * < Acquisition Start Condition Data (0018,0074)
     */
    AcquisitionStartConditionData_0018_0074 = 1572980,
    /**
     * < Acquisition Termination Condition Data (0018,0075)
     */
    AcquisitionTerminationConditionData_0018_0075 = 1572981,
    /**
     * < Repetition Time (0018,0080)
     */
    RepetitionTime_0018_0080 = 1572992,
    /**
     * < Echo Time (0018,0081)
     */
    EchoTime_0018_0081 = 1572993,
    /**
     * < Inversion Time (0018,0082)
     */
    InversionTime_0018_0082 = 1572994,
    /**
     * < Number of Averages (0018,0083)
     */
    NumberOfAverages_0018_0083 = 1572995,
    /**
     * < Imaging Frequency (0018,0084)
     */
    ImagingFrequency_0018_0084 = 1572996,
    /**
     * < Imaged Nucleus (0018,0085)
     */
    ImagedNucleus_0018_0085 = 1572997,
    /**
     * < Echo Number(s) (0018,0086)
     */
    EchoNumbers_0018_0086 = 1572998,
    /**
     * < Magnetic Field Strength (0018,0087)
     */
    MagneticFieldStrength_0018_0087 = 1572999,
    /**
     * < Spacing Between Slices (0018,0088)
     */
    SpacingBetweenSlices_0018_0088 = 1573000,
    /**
     * < Number of Phase Encoding Steps (0018,0089)
     */
    NumberOfPhaseEncodingSteps_0018_0089 = 1573001,
    /**
     * < Data Collection Diameter (0018,0090)
     */
    DataCollectionDiameter_0018_0090 = 1573008,
    /**
     * < Echo Train Length (0018,0091)
     */
    EchoTrainLength_0018_0091 = 1573009,
    /**
     * < Percent Sampling (0018,0093)
     */
    PercentSampling_0018_0093 = 1573011,
    /**
     * < Percent Phase Field of View (0018,0094)
     */
    PercentPhaseFieldOfView_0018_0094 = 1573012,
    /**
     * < Pixel Bandwidth (0018,0095)
     */
    PixelBandwidth_0018_0095 = 1573013,
    /**
     * < Device Serial Number (0018,1000)
     */
    DeviceSerialNumber_0018_1000 = 1576960,
    /**
     * < Device UID (0018,1002)
     */
    DeviceUID_0018_1002 = 1576962,
    /**
     * < Device ID (0018,1003)
     */
    DeviceID_0018_1003 = 1576963,
    /**
     * < Plate ID (0018,1004)
     */
    PlateID_0018_1004 = 1576964,
    /**
     * < Generator ID (0018,1005)
     */
    GeneratorID_0018_1005 = 1576965,
    /**
     * < Grid ID (0018,1006)
     */
    GridID_0018_1006 = 1576966,
    /**
     * < Cassette ID (0018,1007)
     */
    CassetteID_0018_1007 = 1576967,
    /**
     * < Gantry ID (0018,1008)
     */
    GantryID_0018_1008 = 1576968,
    /**
     * < Unique Device Identifier (0018,1009)
     */
    UniqueDeviceIdentifier_0018_1009 = 1576969,
    /**
     * < UDI Sequence (0018,100A)
     */
    UDISequence_0018_100A = 1576970,
    /**
     * < Secondary Capture Device ID (0018,1010)
     */
    SecondaryCaptureDeviceID_0018_1010 = 1576976,
    /**
     * < Hardcopy Creation Device ID (0018,1011)
     */
    HardcopyCreationDeviceID_0018_1011 = 1576977,
    /**
     * < Date of Secondary Capture (0018,1012)
     */
    DateOfSecondaryCapture_0018_1012 = 1576978,
    /**
     * < Time of Secondary Capture (0018,1014)
     */
    TimeOfSecondaryCapture_0018_1014 = 1576980,
    /**
     * < Secondary Capture Device Manufacturer (0018,1016)
     */
    SecondaryCaptureDeviceManufacturer_0018_1016 = 1576982,
    /**
     * < Hardcopy Device Manufacturer (0018,1017)
     */
    HardcopyDeviceManufacturer_0018_1017 = 1576983,
    /**
     * < Secondary Capture Device Manufacturer's Model Name (0018,1018)
     */
    SecondaryCaptureDeviceManufacturerModelName_0018_1018 = 1576984,
    /**
     * < Secondary Capture Device Software Versions (0018,1019)
     */
    SecondaryCaptureDeviceSoftwareVersions_0018_1019 = 1576985,
    /**
     * < Hardcopy Device Software Version (0018,101A)
     */
    HardcopyDeviceSoftwareVersion_0018_101A = 1576986,
    /**
     * < Hardcopy Device Manufacturer's Model Name (0018,101B)
     */
    HardcopyDeviceManufacturerModelName_0018_101B = 1576987,
    /**
     * < Software Version(s) (0018,1020)
     */
    SoftwareVersions_0018_1020 = 1576992,
    /**
     * < Video Image Format Acquired (0018,1022)
     */
    VideoImageFormatAcquired_0018_1022 = 1576994,
    /**
     * < Digital Image Format Acquired (0018,1023)
     */
    DigitalImageFormatAcquired_0018_1023 = 1576995,
    /**
     * < Protocol Name (0018,1030)
     */
    ProtocolName_0018_1030 = 1577008,
    /**
     * < Contrast/Bolus Route (0018,1040)
     */
    ContrastBolusRoute_0018_1040 = 1577024,
    /**
     * < Contrast/Bolus Volume (0018,1041)
     */
    ContrastBolusVolume_0018_1041 = 1577025,
    /**
     * < Contrast/Bolus Start Time (0018,1042)
     */
    ContrastBolusStartTime_0018_1042 = 1577026,
    /**
     * < Contrast/Bolus Stop Time (0018,1043)
     */
    ContrastBolusStopTime_0018_1043 = 1577027,
    /**
     * < Contrast/Bolus Total Dose (0018,1044)
     */
    ContrastBolusTotalDose_0018_1044 = 1577028,
    /**
     * < Syringe Counts (0018,1045)
     */
    SyringeCounts_0018_1045 = 1577029,
    /**
     * < Contrast Flow Rate (0018,1046)
     */
    ContrastFlowRate_0018_1046 = 1577030,
    /**
     * < Contrast Flow Duration (0018,1047)
     */
    ContrastFlowDuration_0018_1047 = 1577031,
    /**
     * < Contrast/Bolus Ingredient (0018,1048)
     */
    ContrastBolusIngredient_0018_1048 = 1577032,
    /**
     * < Contrast/Bolus Ingredient Concentration (0018,1049)
     */
    ContrastBolusIngredientConcentration_0018_1049 = 1577033,
    /**
     * < Spatial Resolution (0018,1050)
     */
    SpatialResolution_0018_1050 = 1577040,
    /**
     * < Trigger Time (0018,1060)
     */
    TriggerTime_0018_1060 = 1577056,
    /**
     * < Trigger Source or Type (0018,1061)
     */
    TriggerSourceOrType_0018_1061 = 1577057,
    /**
     * < Nominal Interval (0018,1062)
     */
    NominalInterval_0018_1062 = 1577058,
    /**
     * < Frame Time (0018,1063)
     */
    FrameTime_0018_1063 = 1577059,
    /**
     * < Cardiac Framing Type (0018,1064)
     */
    CardiacFramingType_0018_1064 = 1577060,
    /**
     * < Frame Time Vector (0018,1065)
     */
    FrameTimeVector_0018_1065 = 1577061,
    /**
     * < Frame Delay (0018,1066)
     */
    FrameDelay_0018_1066 = 1577062,
    /**
     * < Image Trigger Delay (0018,1067)
     */
    ImageTriggerDelay_0018_1067 = 1577063,
    /**
     * < Multiplex Group Time Offset (0018,1068)
     */
    MultiplexGroupTimeOffset_0018_1068 = 1577064,
    /**
     * < Trigger Time Offset (0018,1069)
     */
    TriggerTimeOffset_0018_1069 = 1577065,
    /**
     * < Synchronization Trigger (0018,106A)
     */
    SynchronizationTrigger_0018_106A = 1577066,
    /**
     * < Synchronization Channel (0018,106C)
     */
    SynchronizationChannel_0018_106C = 1577068,
    /**
     * < Trigger Sample Position (0018,106E)
     */
    TriggerSamplePosition_0018_106E = 1577070,
    /**
     * < Radiopharmaceutical Route (0018,1070)
     */
    RadiopharmaceuticalRoute_0018_1070 = 1577072,
    /**
     * < Radiopharmaceutical Volume (0018,1071)
     */
    RadiopharmaceuticalVolume_0018_1071 = 1577073,
    /**
     * < Radiopharmaceutical Start Time (0018,1072)
     */
    RadiopharmaceuticalStartTime_0018_1072 = 1577074,
    /**
     * < Radiopharmaceutical Stop Time (0018,1073)
     */
    RadiopharmaceuticalStopTime_0018_1073 = 1577075,
    /**
     * < Radionuclide Total Dose (0018,1074)
     */
    RadionuclideTotalDose_0018_1074 = 1577076,
    /**
     * < Radionuclide Half Life (0018,1075)
     */
    RadionuclideHalfLife_0018_1075 = 1577077,
    /**
     * < Radionuclide Positron Fraction (0018,1076)
     */
    RadionuclidePositronFraction_0018_1076 = 1577078,
    /**
     * < Radiopharmaceutical Specific Activity (0018,1077)
     */
    RadiopharmaceuticalSpecificActivity_0018_1077 = 1577079,
    /**
     * < Radiopharmaceutical Start DateTime (0018,1078)
     */
    RadiopharmaceuticalStartDateTime_0018_1078 = 1577080,
    /**
     * < Radiopharmaceutical Stop DateTime (0018,1079)
     */
    RadiopharmaceuticalStopDateTime_0018_1079 = 1577081,
    /**
     * < Beat Rejection Flag (0018,1080)
     */
    BeatRejectionFlag_0018_1080 = 1577088,
    /**
     * < Low R-R Value (0018,1081)
     */
    LowRRValue_0018_1081 = 1577089,
    /**
     * < High R-R Value (0018,1082)
     */
    HighRRValue_0018_1082 = 1577090,
    /**
     * < Intervals Acquired (0018,1083)
     */
    IntervalsAcquired_0018_1083 = 1577091,
    /**
     * < Intervals Rejected (0018,1084)
     */
    IntervalsRejected_0018_1084 = 1577092,
    /**
     * < PVC Rejection (0018,1085)
     */
    PVCRejection_0018_1085 = 1577093,
    /**
     * < Skip Beats (0018,1086)
     */
    SkipBeats_0018_1086 = 1577094,
    /**
     * < Heart Rate (0018,1088)
     */
    HeartRate_0018_1088 = 1577096,
    /**
     * < Cardiac Number of Images (0018,1090)
     */
    CardiacNumberOfImages_0018_1090 = 1577104,
    /**
     * < Trigger Window (0018,1094)
     */
    TriggerWindow_0018_1094 = 1577108,
    /**
     * < Reconstruction Diameter (0018,1100)
     */
    ReconstructionDiameter_0018_1100 = 1577216,
    /**
     * < Distance Source to Detector (0018,1110)
     */
    DistanceSourceToDetector_0018_1110 = 1577232,
    /**
     * < Distance Source to Patient (0018,1111)
     */
    DistanceSourceToPatient_0018_1111 = 1577233,
    /**
     * < Estimated Radiographic Magnification Factor (0018,1114)
     */
    EstimatedRadiographicMagnificationFactor_0018_1114 = 1577236,
    /**
     * < Gantry/Detector Tilt (0018,1120)
     */
    GantryDetectorTilt_0018_1120 = 1577248,
    /**
     * < Gantry/Detector Slew (0018,1121)
     */
    GantryDetectorSlew_0018_1121 = 1577249,
    /**
     * < Table Height (0018,1130)
     */
    TableHeight_0018_1130 = 1577264,
    /**
     * < Table Traverse (0018,1131)
     */
    TableTraverse_0018_1131 = 1577265,
    /**
     * < Table Motion (0018,1134)
     */
    TableMotion_0018_1134 = 1577268,
    /**
     * < Table Vertical Increment (0018,1135)
     */
    TableVerticalIncrement_0018_1135 = 1577269,
    /**
     * < Table Lateral Increment (0018,1136)
     */
    TableLateralIncrement_0018_1136 = 1577270,
    /**
     * < Table Longitudinal Increment (0018,1137)
     */
    TableLongitudinalIncrement_0018_1137 = 1577271,
    /**
     * < Table Angle (0018,1138)
     */
    TableAngle_0018_1138 = 1577272,
    /**
     * < Table Type (0018,113A)
     */
    TableType_0018_113A = 1577274,
    /**
     * < Rotation Direction (0018,1140)
     */
    RotationDirection_0018_1140 = 1577280,
    /**
     * < Angular Position (0018,1141)
     */
    AngularPosition_0018_1141 = 1577281,
    /**
     * < Radial Position (0018,1142)
     */
    RadialPosition_0018_1142 = 1577282,
    /**
     * < Scan Arc (0018,1143)
     */
    ScanArc_0018_1143 = 1577283,
    /**
     * < Angular Step (0018,1144)
     */
    AngularStep_0018_1144 = 1577284,
    /**
     * < Center of Rotation Offset (0018,1145)
     */
    CenterOfRotationOffset_0018_1145 = 1577285,
    /**
     * < Rotation Offset (0018,1146)
     */
    RotationOffset_0018_1146 = 1577286,
    /**
     * < Field of View Shape (0018,1147)
     */
    FieldOfViewShape_0018_1147 = 1577287,
    /**
     * < Field of View Dimension(s) (0018,1149)
     */
    FieldOfViewDimensions_0018_1149 = 1577289,
    /**
     * < Exposure Time (0018,1150)
     */
    ExposureTime_0018_1150 = 1577296,
    /**
     * < X-Ray Tube Current (0018,1151)
     */
    XRayTubeCurrent_0018_1151 = 1577297,
    /**
     * < Exposure (0018,1152)
     */
    Exposure_0018_1152 = 1577298,
    /**
     * < Exposure in uAs (0018,1153)
     */
    ExposureInuAs_0018_1153 = 1577299,
    /**
     * < Average Pulse Width (0018,1154)
     */
    AveragePulseWidth_0018_1154 = 1577300,
    /**
     * < Radiation Setting (0018,1155)
     */
    RadiationSetting_0018_1155 = 1577301,
    /**
     * < Rectification Type (0018,1156)
     */
    RectificationType_0018_1156 = 1577302,
    /**
     * < Radiation Mode (0018,115A)
     */
    RadiationMode_0018_115A = 1577306,
    /**
     * < Image and Fluoroscopy Area Dose Product (0018,115E)
     */
    ImageAndFluoroscopyAreaDoseProduct_0018_115E = 1577310,
    /**
     * < Filter Type (0018,1160)
     */
    FilterType_0018_1160 = 1577312,
    /**
     * < Type of Filters (0018,1161)
     */
    TypeOfFilters_0018_1161 = 1577313,
    /**
     * < Intensifier Size (0018,1162)
     */
    IntensifierSize_0018_1162 = 1577314,
    /**
     * < Imager Pixel Spacing (0018,1164)
     */
    ImagerPixelSpacing_0018_1164 = 1577316,
    /**
     * < Grid (0018,1166)
     */
    Grid_0018_1166 = 1577318,
    /**
     * < Generator Power (0018,1170)
     */
    GeneratorPower_0018_1170 = 1577328,
    /**
     * < Collimator/grid Name (0018,1180)
     */
    CollimatorGridName_0018_1180 = 1577344,
    /**
     * < Collimator Type (0018,1181)
     */
    CollimatorType_0018_1181 = 1577345,
    /**
     * < Focal Distance (0018,1182)
     */
    FocalDistance_0018_1182 = 1577346,
    /**
     * < X Focus Center (0018,1183)
     */
    XFocusCenter_0018_1183 = 1577347,
    /**
     * < Y Focus Center (0018,1184)
     */
    YFocusCenter_0018_1184 = 1577348,
    /**
     * < Focal Spot(s) (0018,1190)
     */
    FocalSpots_0018_1190 = 1577360,
    /**
     * < Anode Target Material (0018,1191)
     */
    AnodeTargetMaterial_0018_1191 = 1577361,
    /**
     * < Body Part Thickness (0018,11A0)
     */
    BodyPartThickness_0018_11A0 = 1577376,
    /**
     * < Compression Force (0018,11A2)
     */
    CompressionForce_0018_11A2 = 1577378,
    /**
     * < Compression Pressure (0018,11A3)
     */
    CompressionPressure_0018_11A3 = 1577379,
    /**
     * < Paddle Description (0018,11A4)
     */
    PaddleDescription_0018_11A4 = 1577380,
    /**
     * < Compression Contact Area (0018,11A5)
     */
    CompressionContactArea_0018_11A5 = 1577381,
    /**
     * < Date of Last Calibration (0018,1200)
     */
    DateOfLastCalibration_0018_1200 = 1577472,
    /**
     * < Time of Last Calibration (0018,1201)
     */
    TimeOfLastCalibration_0018_1201 = 1577473,
    /**
     * < DateTime of Last Calibration (0018,1202)
     */
    DateTimeOfLastCalibration_0018_1202 = 1577474,
    /**
     * < Convolution Kernel (0018,1210)
     */
    ConvolutionKernel_0018_1210 = 1577488,
    /**
     * < Upper/Lower Pixel Values (0018,1240)
     */
    UpperLowerPixelValues_0018_1240 = 1577536,
    /**
     * < Actual Frame Duration (0018,1242)
     */
    ActualFrameDuration_0018_1242 = 1577538,
    /**
     * < Count Rate (0018,1243)
     */
    CountRate_0018_1243 = 1577539,
    /**
     * < Preferred Playback Sequencing (0018,1244)
     */
    PreferredPlaybackSequencing_0018_1244 = 1577540,
    /**
     * < Receive Coil Name (0018,1250)
     */
    ReceiveCoilName_0018_1250 = 1577552,
    /**
     * < Transmit Coil Name (0018,1251)
     */
    TransmitCoilName_0018_1251 = 1577553,
    /**
     * < Plate Type (0018,1260)
     */
    PlateType_0018_1260 = 1577568,
    /**
     * < Phosphor Type (0018,1261)
     */
    PhosphorType_0018_1261 = 1577569,
    /**
     * < Water Equivalent Diameter (0018,1271)
     */
    WaterEquivalentDiameter_0018_1271 = 1577585,
    /**
     * < Water Equivalent Diameter Calculation Method Code Sequence (0018,1272)
     */
    WaterEquivalentDiameterCalculationMethodCodeSequence_0018_1272 = 1577586,
    /**
     * < Scan Velocity (0018,1300)
     */
    ScanVelocity_0018_1300 = 1577728,
    /**
     * < Whole Body Technique (0018,1301)
     */
    WholeBodyTechnique_0018_1301 = 1577729,
    /**
     * < Scan Length (0018,1302)
     */
    ScanLength_0018_1302 = 1577730,
    /**
     * < Acquisition Matrix (0018,1310)
     */
    AcquisitionMatrix_0018_1310 = 1577744,
    /**
     * < In-plane Phase Encoding Direction (0018,1312)
     */
    InPlanePhaseEncodingDirection_0018_1312 = 1577746,
    /**
     * < Flip Angle (0018,1314)
     */
    FlipAngle_0018_1314 = 1577748,
    /**
     * < Variable Flip Angle Flag (0018,1315)
     */
    VariableFlipAngleFlag_0018_1315 = 1577749,
    /**
     * < SAR (0018,1316)
     */
    SAR_0018_1316 = 1577750,
    /**
     * < dB/dt (0018,1318)
     */
    dBdt_0018_1318 = 1577752,
    /**
     * < B1rms (0018,1320)
     */
    B1rms_0018_1320 = 1577760,
    /**
     * < Acquisition Device Processing Description (0018,1400)
     */
    AcquisitionDeviceProcessingDescription_0018_1400 = 1577984,
    /**
     * < Acquisition Device Processing Code (0018,1401)
     */
    AcquisitionDeviceProcessingCode_0018_1401 = 1577985,
    /**
     * < Cassette Orientation (0018,1402)
     */
    CassetteOrientation_0018_1402 = 1577986,
    /**
     * < Cassette Size (0018,1403)
     */
    CassetteSize_0018_1403 = 1577987,
    /**
     * < Exposures on Plate (0018,1404)
     */
    ExposuresOnPlate_0018_1404 = 1577988,
    /**
     * < Relative X-Ray Exposure (0018,1405)
     */
    RelativeXRayExposure_0018_1405 = 1577989,
    /**
     * < Exposure Index (0018,1411)
     */
    ExposureIndex_0018_1411 = 1578001,
    /**
     * < Target Exposure Index (0018,1412)
     */
    TargetExposureIndex_0018_1412 = 1578002,
    /**
     * < Deviation Index (0018,1413)
     */
    DeviationIndex_0018_1413 = 1578003,
    /**
     * < Column Angulation (0018,1450)
     */
    ColumnAngulation_0018_1450 = 1578064,
    /**
     * < Tomo Layer Height (0018,1460)
     */
    TomoLayerHeight_0018_1460 = 1578080,
    /**
     * < Tomo Angle (0018,1470)
     */
    TomoAngle_0018_1470 = 1578096,
    /**
     * < Tomo Time (0018,1480)
     */
    TomoTime_0018_1480 = 1578112,
    /**
     * < Tomo Type (0018,1490)
     */
    TomoType_0018_1490 = 1578128,
    /**
     * < Tomo Class (0018,1491)
     */
    TomoClass_0018_1491 = 1578129,
    /**
     * < Number of Tomosynthesis Source Images (0018,1495)
     */
    NumberOfTomosynthesisSourceImages_0018_1495 = 1578133,
    /**
     * < Positioner Motion (0018,1500)
     */
    PositionerMotion_0018_1500 = 1578240,
    /**
     * < Positioner Type (0018,1508)
     */
    PositionerType_0018_1508 = 1578248,
    /**
     * < Positioner Primary Angle (0018,1510)
     */
    PositionerPrimaryAngle_0018_1510 = 1578256,
    /**
     * < Positioner Secondary Angle (0018,1511)
     */
    PositionerSecondaryAngle_0018_1511 = 1578257,
    /**
     * < Positioner Primary Angle Increment (0018,1520)
     */
    PositionerPrimaryAngleIncrement_0018_1520 = 1578272,
    /**
     * < Positioner Secondary Angle Increment (0018,1521)
     */
    PositionerSecondaryAngleIncrement_0018_1521 = 1578273,
    /**
     * < Detector Primary Angle (0018,1530)
     */
    DetectorPrimaryAngle_0018_1530 = 1578288,
    /**
     * < Detector Secondary Angle (0018,1531)
     */
    DetectorSecondaryAngle_0018_1531 = 1578289,
    /**
     * < Shutter Shape (0018,1600)
     */
    ShutterShape_0018_1600 = 1578496,
    /**
     * < Shutter Left Vertical Edge (0018,1602)
     */
    ShutterLeftVerticalEdge_0018_1602 = 1578498,
    /**
     * < Shutter Right Vertical Edge (0018,1604)
     */
    ShutterRightVerticalEdge_0018_1604 = 1578500,
    /**
     * < Shutter Upper Horizontal Edge (0018,1606)
     */
    ShutterUpperHorizontalEdge_0018_1606 = 1578502,
    /**
     * < Shutter Lower Horizontal Edge (0018,1608)
     */
    ShutterLowerHorizontalEdge_0018_1608 = 1578504,
    /**
     * < Center of Circular Shutter (0018,1610)
     */
    CenterOfCircularShutter_0018_1610 = 1578512,
    /**
     * < Radius of Circular Shutter (0018,1612)
     */
    RadiusOfCircularShutter_0018_1612 = 1578514,
    /**
     * < Vertices of the Polygonal Shutter (0018,1620)
     */
    VerticesOfThePolygonalShutter_0018_1620 = 1578528,
    /**
     * < Shutter Presentation Value (0018,1622)
     */
    ShutterPresentationValue_0018_1622 = 1578530,
    /**
     * < Shutter Overlay Group (0018,1623)
     */
    ShutterOverlayGroup_0018_1623 = 1578531,
    /**
     * < Shutter Presentation Color CIELab Value (0018,1624)
     */
    ShutterPresentationColorCIELabValue_0018_1624 = 1578532,
    /**
     * < Collimator Shape (0018,1700)
     */
    CollimatorShape_0018_1700 = 1578752,
    /**
     * < Collimator Left Vertical Edge (0018,1702)
     */
    CollimatorLeftVerticalEdge_0018_1702 = 1578754,
    /**
     * < Collimator Right Vertical Edge (0018,1704)
     */
    CollimatorRightVerticalEdge_0018_1704 = 1578756,
    /**
     * < Collimator Upper Horizontal Edge (0018,1706)
     */
    CollimatorUpperHorizontalEdge_0018_1706 = 1578758,
    /**
     * < Collimator Lower Horizontal Edge (0018,1708)
     */
    CollimatorLowerHorizontalEdge_0018_1708 = 1578760,
    /**
     * < Center of Circular Collimator (0018,1710)
     */
    CenterOfCircularCollimator_0018_1710 = 1578768,
    /**
     * < Radius of Circular Collimator (0018,1712)
     */
    RadiusOfCircularCollimator_0018_1712 = 1578770,
    /**
     * < Vertices of the Polygonal Collimator (0018,1720)
     */
    VerticesOfThePolygonalCollimator_0018_1720 = 1578784,
    /**
     * < Acquisition Time Synchronized (0018,1800)
     */
    AcquisitionTimeSynchronized_0018_1800 = 1579008,
    /**
     * < Time Source (0018,1801)
     */
    TimeSource_0018_1801 = 1579009,
    /**
     * < Time Distribution Protocol (0018,1802)
     */
    TimeDistributionProtocol_0018_1802 = 1579010,
    /**
     * < NTP Source Address (0018,1803)
     */
    NTPSourceAddress_0018_1803 = 1579011,
    /**
     * < Page Number Vector (0018,2001)
     */
    PageNumberVector_0018_2001 = 1581057,
    /**
     * < Frame Label Vector (0018,2002)
     */
    FrameLabelVector_0018_2002 = 1581058,
    /**
     * < Frame Primary Angle Vector (0018,2003)
     */
    FramePrimaryAngleVector_0018_2003 = 1581059,
    /**
     * < Frame Secondary Angle Vector (0018,2004)
     */
    FrameSecondaryAngleVector_0018_2004 = 1581060,
    /**
     * < Slice Location Vector (0018,2005)
     */
    SliceLocationVector_0018_2005 = 1581061,
    /**
     * < Display Window Label Vector (0018,2006)
     */
    DisplayWindowLabelVector_0018_2006 = 1581062,
    /**
     * < Nominal Scanned Pixel Spacing (0018,2010)
     */
    NominalScannedPixelSpacing_0018_2010 = 1581072,
    /**
     * < Digitizing Device Transport Direction (0018,2020)
     */
    DigitizingDeviceTransportDirection_0018_2020 = 1581088,
    /**
     * < Rotation of Scanned Film (0018,2030)
     */
    RotationOfScannedFilm_0018_2030 = 1581104,
    /**
     * < Biopsy Target Sequence (0018,2041)
     */
    BiopsyTargetSequence_0018_2041 = 1581121,
    /**
     * < Target UID (0018,2042)
     */
    TargetUID_0018_2042 = 1581122,
    /**
     * < Localizing Cursor Position (0018,2043)
     */
    LocalizingCursorPosition_0018_2043 = 1581123,
    /**
     * < Calculated Target Position (0018,2044)
     */
    CalculatedTargetPosition_0018_2044 = 1581124,
    /**
     * < Target Label (0018,2045)
     */
    TargetLabel_0018_2045 = 1581125,
    /**
     * < Displayed Z Value (0018,2046)
     */
    DisplayedZValue_0018_2046 = 1581126,
    /**
     * < IVUS Acquisition (0018,3100)
     */
    IVUSAcquisition_0018_3100 = 1585408,
    /**
     * < IVUS Pullback Rate (0018,3101)
     */
    IVUSPullbackRate_0018_3101 = 1585409,
    /**
     * < IVUS Gated Rate (0018,3102)
     */
    IVUSGatedRate_0018_3102 = 1585410,
    /**
     * < IVUS Pullback Start Frame Number (0018,3103)
     */
    IVUSPullbackStartFrameNumber_0018_3103 = 1585411,
    /**
     * < IVUS Pullback Stop Frame Number (0018,3104)
     */
    IVUSPullbackStopFrameNumber_0018_3104 = 1585412,
    /**
     * < Lesion Number (0018,3105)
     */
    LesionNumber_0018_3105 = 1585413,
    /**
     * < Acquisition Comments (0018,4000)
     */
    AcquisitionComments_0018_4000 = 1589248,
    /**
     * < Output Power (0018,5000)
     */
    OutputPower_0018_5000 = 1593344,
    /**
     * < Transducer Data (0018,5010)
     */
    TransducerData_0018_5010 = 1593360,
    /**
     * < Focus Depth (0018,5012)
     */
    FocusDepth_0018_5012 = 1593362,
    /**
     * < Processing Function (0018,5020)
     */
    ProcessingFunction_0018_5020 = 1593376,
    /**
     * < Postprocessing Function (0018,5021)
     */
    PostprocessingFunction_0018_5021 = 1593377,
    /**
     * < Mechanical Index (0018,5022)
     */
    MechanicalIndex_0018_5022 = 1593378,
    /**
     * < Bone Thermal Index (0018,5024)
     */
    BoneThermalIndex_0018_5024 = 1593380,
    /**
     * < Cranial Thermal Index (0018,5026)
     */
    CranialThermalIndex_0018_5026 = 1593382,
    /**
     * < Soft Tissue Thermal Index (0018,5027)
     */
    SoftTissueThermalIndex_0018_5027 = 1593383,
    /**
     * < Soft Tissue-focus Thermal Index (0018,5028)
     */
    SoftTissueFocusThermalIndex_0018_5028 = 1593384,
    /**
     * < Soft Tissue-surface Thermal Index (0018,5029)
     */
    SoftTissueSurfaceThermalIndex_0018_5029 = 1593385,
    /**
     * < Dynamic Range (0018,5030)
     */
    DynamicRange_0018_5030 = 1593392,
    /**
     * < Total Gain (0018,5040)
     */
    TotalGain_0018_5040 = 1593408,
    /**
     * < Depth of Scan Field (0018,5050)
     */
    DepthOfScanField_0018_5050 = 1593424,
    /**
     * < Patient Position (0018,5100)
     */
    PatientPosition_0018_5100 = 1593600,
    /**
     * < View Position (0018,5101)
     */
    ViewPosition_0018_5101 = 1593601,
    /**
     * < Projection Eponymous Name Code Sequence (0018,5104)
     */
    ProjectionEponymousNameCodeSequence_0018_5104 = 1593604,
    /**
     * < Image Transformation Matrix (0018,5210)
     */
    ImageTransformationMatrix_0018_5210 = 1593872,
    /**
     * < Image Translation Vector (0018,5212)
     */
    ImageTranslationVector_0018_5212 = 1593874,
    /**
     * < Sensitivity (0018,6000)
     */
    Sensitivity_0018_6000 = 1597440,
    /**
     * < Sequence of Ultrasound Regions (0018,6011)
     */
    SequenceOfUltrasoundRegions_0018_6011 = 1597457,
    /**
     * < Region Spatial Format (0018,6012)
     */
    RegionSpatialFormat_0018_6012 = 1597458,
    /**
     * < Region Data Type (0018,6014)
     */
    RegionDataType_0018_6014 = 1597460,
    /**
     * < Region Flags (0018,6016)
     */
    RegionFlags_0018_6016 = 1597462,
    /**
     * < Region Location Min X0 (0018,6018)
     */
    RegionLocationMinX0_0018_6018 = 1597464,
    /**
     * < Region Location Min Y0 (0018,601A)
     */
    RegionLocationMinY0_0018_601A = 1597466,
    /**
     * < Region Location Max X1 (0018,601C)
     */
    RegionLocationMaxX1_0018_601C = 1597468,
    /**
     * < Region Location Max Y1 (0018,601E)
     */
    RegionLocationMaxY1_0018_601E = 1597470,
    /**
     * < Reference Pixel X0 (0018,6020)
     */
    ReferencePixelX0_0018_6020 = 1597472,
    /**
     * < Reference Pixel Y0 (0018,6022)
     */
    ReferencePixelY0_0018_6022 = 1597474,
    /**
     * < Physical Units X Direction (0018,6024)
     */
    PhysicalUnitsXDirection_0018_6024 = 1597476,
    /**
     * < Physical Units Y Direction (0018,6026)
     */
    PhysicalUnitsYDirection_0018_6026 = 1597478,
    /**
     * < Reference Pixel Physical Value X (0018,6028)
     */
    ReferencePixelPhysicalValueX_0018_6028 = 1597480,
    /**
     * < Reference Pixel Physical Value Y (0018,602A)
     */
    ReferencePixelPhysicalValueY_0018_602A = 1597482,
    /**
     * < Physical Delta X (0018,602C)
     */
    PhysicalDeltaX_0018_602C = 1597484,
    /**
     * < Physical Delta Y (0018,602E)
     */
    PhysicalDeltaY_0018_602E = 1597486,
    /**
     * < Transducer Frequency (0018,6030)
     */
    TransducerFrequency_0018_6030 = 1597488,
    /**
     * < Transducer Type (0018,6031)
     */
    TransducerType_0018_6031 = 1597489,
    /**
     * < Pulse Repetition Frequency (0018,6032)
     */
    PulseRepetitionFrequency_0018_6032 = 1597490,
    /**
     * < Doppler Correction Angle (0018,6034)
     */
    DopplerCorrectionAngle_0018_6034 = 1597492,
    /**
     * < Steering Angle (0018,6036)
     */
    SteeringAngle_0018_6036 = 1597494,
    /**
     * < Doppler Sample Volume X Position (Retired) (0018,6038)
     */
    DopplerSampleVolumeXPositionRetired_0018_6038 = 1597496,
    /**
     * < Doppler Sample Volume X Position (0018,6039)
     */
    DopplerSampleVolumeXPosition_0018_6039 = 1597497,
    /**
     * < Doppler Sample Volume Y Position (Retired) (0018,603A)
     */
    DopplerSampleVolumeYPositionRetired_0018_603A = 1597498,
    /**
     * < Doppler Sample Volume Y Position (0018,603B)
     */
    DopplerSampleVolumeYPosition_0018_603B = 1597499,
    /**
     * < TM-Line Position X0 (Retired) (0018,603C)
     */
    TMLinePositionX0Retired_0018_603C = 1597500,
    /**
     * < TM-Line Position X0 (0018,603D)
     */
    TMLinePositionX0_0018_603D = 1597501,
    /**
     * < TM-Line Position Y0 (Retired) (0018,603E)
     */
    TMLinePositionY0Retired_0018_603E = 1597502,
    /**
     * < TM-Line Position Y0 (0018,603F)
     */
    TMLinePositionY0_0018_603F = 1597503,
    /**
     * < TM-Line Position X1 (Retired) (0018,6040)
     */
    TMLinePositionX1Retired_0018_6040 = 1597504,
    /**
     * < TM-Line Position X1 (0018,6041)
     */
    TMLinePositionX1_0018_6041 = 1597505,
    /**
     * < TM-Line Position Y1 (Retired) (0018,6042)
     */
    TMLinePositionY1Retired_0018_6042 = 1597506,
    /**
     * < TM-Line Position Y1 (0018,6043)
     */
    TMLinePositionY1_0018_6043 = 1597507,
    /**
     * < Pixel Component Organization (0018,6044)
     */
    PixelComponentOrganization_0018_6044 = 1597508,
    /**
     * < Pixel Component Mask (0018,6046)
     */
    PixelComponentMask_0018_6046 = 1597510,
    /**
     * < Pixel Component Range Start (0018,6048)
     */
    PixelComponentRangeStart_0018_6048 = 1597512,
    /**
     * < Pixel Component Range Stop (0018,604A)
     */
    PixelComponentRangeStop_0018_604A = 1597514,
    /**
     * < Pixel Component Physical Units (0018,604C)
     */
    PixelComponentPhysicalUnits_0018_604C = 1597516,
    /**
     * < Pixel Component Data Type (0018,604E)
     */
    PixelComponentDataType_0018_604E = 1597518,
    /**
     * < Number of Table Break Points (0018,6050)
     */
    NumberOfTableBreakPoints_0018_6050 = 1597520,
    /**
     * < Table of X Break Points (0018,6052)
     */
    TableOfXBreakPoints_0018_6052 = 1597522,
    /**
     * < Table of Y Break Points (0018,6054)
     */
    TableOfYBreakPoints_0018_6054 = 1597524,
    /**
     * < Number of Table Entries (0018,6056)
     */
    NumberOfTableEntries_0018_6056 = 1597526,
    /**
     * < Table of Pixel Values (0018,6058)
     */
    TableOfPixelValues_0018_6058 = 1597528,
    /**
     * < Table of Parameter Values (0018,605A)
     */
    TableOfParameterValues_0018_605A = 1597530,
    /**
     * < R Wave Time Vector (0018,6060)
     */
    RWaveTimeVector_0018_6060 = 1597536,
    /**
     * < Detector Conditions Nominal Flag (0018,7000)
     */
    DetectorConditionsNominalFlag_0018_7000 = 1601536,
    /**
     * < Detector Temperature (0018,7001)
     */
    DetectorTemperature_0018_7001 = 1601537,
    /**
     * < Detector Type (0018,7004)
     */
    DetectorType_0018_7004 = 1601540,
    /**
     * < Detector Configuration (0018,7005)
     */
    DetectorConfiguration_0018_7005 = 1601541,
    /**
     * < Detector Description (0018,7006)
     */
    DetectorDescription_0018_7006 = 1601542,
    /**
     * < Detector Mode (0018,7008)
     */
    DetectorMode_0018_7008 = 1601544,
    /**
     * < Detector ID (0018,700A)
     */
    DetectorID_0018_700A = 1601546,
    /**
     * < Date of Last Detector Calibration (0018,700C)
     */
    DateOfLastDetectorCalibration_0018_700C = 1601548,
    /**
     * < Time of Last Detector Calibration (0018,700E)
     */
    TimeOfLastDetectorCalibration_0018_700E = 1601550,
    /**
     * < Exposures on Detector Since Last Calibration (0018,7010)
     */
    ExposuresOnDetectorSinceLastCalibration_0018_7010 = 1601552,
    /**
     * < Exposures on Detector Since Manufactured (0018,7011)
     */
    ExposuresOnDetectorSinceManufactured_0018_7011 = 1601553,
    /**
     * < Detector Time Since Last Exposure (0018,7012)
     */
    DetectorTimeSinceLastExposure_0018_7012 = 1601554,
    /**
     * < Detector Active Time (0018,7014)
     */
    DetectorActiveTime_0018_7014 = 1601556,
    /**
     * < Detector Activation Offset From Exposure (0018,7016)
     */
    DetectorActivationOffsetFromExposure_0018_7016 = 1601558,
    /**
     * < Detector Binning (0018,701A)
     */
    DetectorBinning_0018_701A = 1601562,
    /**
     * < Detector Element Physical Size (0018,7020)
     */
    DetectorElementPhysicalSize_0018_7020 = 1601568,
    /**
     * < Detector Element Spacing (0018,7022)
     */
    DetectorElementSpacing_0018_7022 = 1601570,
    /**
     * < Detector Active Shape (0018,7024)
     */
    DetectorActiveShape_0018_7024 = 1601572,
    /**
     * < Detector Active Dimension(s) (0018,7026)
     */
    DetectorActiveDimensions_0018_7026 = 1601574,
    /**
     * < Detector Active Origin (0018,7028)
     */
    DetectorActiveOrigin_0018_7028 = 1601576,
    /**
     * < Detector Manufacturer Name (0018,702A)
     */
    DetectorManufacturerName_0018_702A = 1601578,
    /**
     * < Detector Manufacturer's Model Name (0018,702B)
     */
    DetectorManufacturerModelName_0018_702B = 1601579,
    /**
     * < Field of View Origin (0018,7030)
     */
    FieldOfViewOrigin_0018_7030 = 1601584,
    /**
     * < Field of View Rotation (0018,7032)
     */
    FieldOfViewRotation_0018_7032 = 1601586,
    /**
     * < Field of View Horizontal Flip (0018,7034)
     */
    FieldOfViewHorizontalFlip_0018_7034 = 1601588,
    /**
     * < Pixel Data Area Origin Relative To FOV (0018,7036)
     */
    PixelDataAreaOriginRelativeToFOV_0018_7036 = 1601590,
    /**
     * < Pixel Data Area Rotation Angle Relative To FOV (0018,7038)
     */
    PixelDataAreaRotationAngleRelativeToFOV_0018_7038 = 1601592,
    /**
     * < Grid Absorbing Material (0018,7040)
     */
    GridAbsorbingMaterial_0018_7040 = 1601600,
    /**
     * < Grid Spacing Material (0018,7041)
     */
    GridSpacingMaterial_0018_7041 = 1601601,
    /**
     * < Grid Thickness (0018,7042)
     */
    GridThickness_0018_7042 = 1601602,
    /**
     * < Grid Pitch (0018,7044)
     */
    GridPitch_0018_7044 = 1601604,
    /**
     * < Grid Aspect Ratio (0018,7046)
     */
    GridAspectRatio_0018_7046 = 1601606,
    /**
     * < Grid Period (0018,7048)
     */
    GridPeriod_0018_7048 = 1601608,
    /**
     * < Grid Focal Distance (0018,704C)
     */
    GridFocalDistance_0018_704C = 1601612,
    /**
     * < Filter Material (0018,7050)
     */
    FilterMaterial_0018_7050 = 1601616,
    /**
     * < Filter Thickness Minimum (0018,7052)
     */
    FilterThicknessMinimum_0018_7052 = 1601618,
    /**
     * < Filter Thickness Maximum (0018,7054)
     */
    FilterThicknessMaximum_0018_7054 = 1601620,
    /**
     * < Filter Beam Path Length Minimum (0018,7056)
     */
    FilterBeamPathLengthMinimum_0018_7056 = 1601622,
    /**
     * < Filter Beam Path Length Maximum (0018,7058)
     */
    FilterBeamPathLengthMaximum_0018_7058 = 1601624,
    /**
     * < Exposure Control Mode (0018,7060)
     */
    ExposureControlMode_0018_7060 = 1601632,
    /**
     * < Exposure Control Mode Description (0018,7062)
     */
    ExposureControlModeDescription_0018_7062 = 1601634,
    /**
     * < Exposure Status (0018,7064)
     */
    ExposureStatus_0018_7064 = 1601636,
    /**
     * < Phototimer Setting (0018,7065)
     */
    PhototimerSetting_0018_7065 = 1601637,
    /**
     * < Exposure Time in uS (0018,8150)
     */
    ExposureTimeInuS_0018_8150 = 1605968,
    /**
     * < X-Ray Tube Current in uA (0018,8151)
     */
    XRayTubeCurrentInuA_0018_8151 = 1605969,
    /**
     * < Content Qualification (0018,9004)
     */
    ContentQualification_0018_9004 = 1609732,
    /**
     * < Pulse Sequence Name (0018,9005)
     */
    PulseSequenceName_0018_9005 = 1609733,
    /**
     * < MR Imaging Modifier Sequence (0018,9006)
     */
    MRImagingModifierSequence_0018_9006 = 1609734,
    /**
     * < Echo Pulse Sequence (0018,9008)
     */
    EchoPulseSequence_0018_9008 = 1609736,
    /**
     * < Inversion Recovery (0018,9009)
     */
    InversionRecovery_0018_9009 = 1609737,
    /**
     * < Flow Compensation (0018,9010)
     */
    FlowCompensation_0018_9010 = 1609744,
    /**
     * < Multiple Spin Echo (0018,9011)
     */
    MultipleSpinEcho_0018_9011 = 1609745,
    /**
     * < Multi-planar Excitation (0018,9012)
     */
    MultiPlanarExcitation_0018_9012 = 1609746,
    /**
     * < Phase Contrast (0018,9014)
     */
    PhaseContrast_0018_9014 = 1609748,
    /**
     * < Time of Flight Contrast (0018,9015)
     */
    TimeOfFlightContrast_0018_9015 = 1609749,
    /**
     * < Spoiling (0018,9016)
     */
    Spoiling_0018_9016 = 1609750,
    /**
     * < Steady State Pulse Sequence (0018,9017)
     */
    SteadyStatePulseSequence_0018_9017 = 1609751,
    /**
     * < Echo Planar Pulse Sequence (0018,9018)
     */
    EchoPlanarPulseSequence_0018_9018 = 1609752,
    /**
     * < Tag Angle First Axis (0018,9019)
     */
    TagAngleFirstAxis_0018_9019 = 1609753,
    /**
     * < Magnetization Transfer (0018,9020)
     */
    MagnetizationTransfer_0018_9020 = 1609760,
    /**
     * < T2 Preparation (0018,9021)
     */
    T2Preparation_0018_9021 = 1609761,
    /**
     * < Blood Signal Nulling (0018,9022)
     */
    BloodSignalNulling_0018_9022 = 1609762,
    /**
     * < Saturation Recovery (0018,9024)
     */
    SaturationRecovery_0018_9024 = 1609764,
    /**
     * < Spectrally Selected Suppression (0018,9025)
     */
    SpectrallySelectedSuppression_0018_9025 = 1609765,
    /**
     * < Spectrally Selected Excitation (0018,9026)
     */
    SpectrallySelectedExcitation_0018_9026 = 1609766,
    /**
     * < Spatial Pre-saturation (0018,9027)
     */
    SpatialPresaturation_0018_9027 = 1609767,
    /**
     * < Tagging (0018,9028)
     */
    Tagging_0018_9028 = 1609768,
    /**
     * < Oversampling Phase (0018,9029)
     */
    OversamplingPhase_0018_9029 = 1609769,
    /**
     * < Tag Spacing First Dimension (0018,9030)
     */
    TagSpacingFirstDimension_0018_9030 = 1609776,
    /**
     * < Geometry of k-Space Traversal (0018,9032)
     */
    GeometryOfKSpaceTraversal_0018_9032 = 1609778,
    /**
     * < Segmented k-Space Traversal (0018,9033)
     */
    SegmentedKSpaceTraversal_0018_9033 = 1609779,
    /**
     * < Rectilinear Phase Encode Reordering (0018,9034)
     */
    RectilinearPhaseEncodeReordering_0018_9034 = 1609780,
    /**
     * < Tag Thickness (0018,9035)
     */
    TagThickness_0018_9035 = 1609781,
    /**
     * < Partial Fourier Direction (0018,9036)
     */
    PartialFourierDirection_0018_9036 = 1609782,
    /**
     * < Cardiac Synchronization Technique (0018,9037)
     */
    CardiacSynchronizationTechnique_0018_9037 = 1609783,
    /**
     * < Receive Coil Manufacturer Name (0018,9041)
     */
    ReceiveCoilManufacturerName_0018_9041 = 1609793,
    /**
     * < MR Receive Coil Sequence (0018,9042)
     */
    MRReceiveCoilSequence_0018_9042 = 1609794,
    /**
     * < Receive Coil Type (0018,9043)
     */
    ReceiveCoilType_0018_9043 = 1609795,
    /**
     * < Quadrature Receive Coil (0018,9044)
     */
    QuadratureReceiveCoil_0018_9044 = 1609796,
    /**
     * < Multi-Coil Definition Sequence (0018,9045)
     */
    MultiCoilDefinitionSequence_0018_9045 = 1609797,
    /**
     * < Multi-Coil Configuration (0018,9046)
     */
    MultiCoilConfiguration_0018_9046 = 1609798,
    /**
     * < Multi-Coil Element Name (0018,9047)
     */
    MultiCoilElementName_0018_9047 = 1609799,
    /**
     * < Multi-Coil Element Used (0018,9048)
     */
    MultiCoilElementUsed_0018_9048 = 1609800,
    /**
     * < MR Transmit Coil Sequence (0018,9049)
     */
    MRTransmitCoilSequence_0018_9049 = 1609801,
    /**
     * < Transmit Coil Manufacturer Name (0018,9050)
     */
    TransmitCoilManufacturerName_0018_9050 = 1609808,
    /**
     * < Transmit Coil Type (0018,9051)
     */
    TransmitCoilType_0018_9051 = 1609809,
    /**
     * < Spectral Width (0018,9052)
     */
    SpectralWidth_0018_9052 = 1609810,
    /**
     * < Chemical Shift Reference (0018,9053)
     */
    ChemicalShiftReference_0018_9053 = 1609811,
    /**
     * < Volume Localization Technique (0018,9054)
     */
    VolumeLocalizationTechnique_0018_9054 = 1609812,
    /**
     * < MR Acquisition Frequency Encoding Steps (0018,9058)
     */
    MRAcquisitionFrequencyEncodingSteps_0018_9058 = 1609816,
    /**
     * < De-coupling (0018,9059)
     */
    Decoupling_0018_9059 = 1609817,
    /**
     * < De-coupled Nucleus (0018,9060)
     */
    DecoupledNucleus_0018_9060 = 1609824,
    /**
     * < De-coupling Frequency (0018,9061)
     */
    DecouplingFrequency_0018_9061 = 1609825,
    /**
     * < De-coupling Method (0018,9062)
     */
    DecouplingMethod_0018_9062 = 1609826,
    /**
     * < De-coupling Chemical Shift Reference (0018,9063)
     */
    DecouplingChemicalShiftReference_0018_9063 = 1609827,
    /**
     * < k-space Filtering (0018,9064)
     */
    KSpaceFiltering_0018_9064 = 1609828,
    /**
     * < Time Domain Filtering (0018,9065)
     */
    TimeDomainFiltering_0018_9065 = 1609829,
    /**
     * < Number of Zero Fills (0018,9066)
     */
    NumberOfZeroFills_0018_9066 = 1609830,
    /**
     * < Baseline Correction (0018,9067)
     */
    BaselineCorrection_0018_9067 = 1609831,
    /**
     * < Parallel Reduction Factor In-plane (0018,9069)
     */
    ParallelReductionFactorInPlane_0018_9069 = 1609833,
    /**
     * < Cardiac R-R Interval Specified (0018,9070)
     */
    CardiacRRIntervalSpecified_0018_9070 = 1609840,
    /**
     * < Acquisition Duration (0018,9073)
     */
    AcquisitionDuration_0018_9073 = 1609843,
    /**
     * < Frame Acquisition DateTime (0018,9074)
     */
    FrameAcquisitionDateTime_0018_9074 = 1609844,
    /**
     * < Diffusion Directionality (0018,9075)
     */
    DiffusionDirectionality_0018_9075 = 1609845,
    /**
     * < Diffusion Gradient Direction Sequence (0018,9076)
     */
    DiffusionGradientDirectionSequence_0018_9076 = 1609846,
    /**
     * < Parallel Acquisition (0018,9077)
     */
    ParallelAcquisition_0018_9077 = 1609847,
    /**
     * < Parallel Acquisition Technique (0018,9078)
     */
    ParallelAcquisitionTechnique_0018_9078 = 1609848,
    /**
     * < Inversion Times (0018,9079)
     */
    InversionTimes_0018_9079 = 1609849,
    /**
     * < Metabolite Map Description (0018,9080)
     */
    MetaboliteMapDescription_0018_9080 = 1609856,
    /**
     * < Partial Fourier (0018,9081)
     */
    PartialFourier_0018_9081 = 1609857,
    /**
     * < Effective Echo Time (0018,9082)
     */
    EffectiveEchoTime_0018_9082 = 1609858,
    /**
     * < Metabolite Map Code Sequence (0018,9083)
     */
    MetaboliteMapCodeSequence_0018_9083 = 1609859,
    /**
     * < Chemical Shift Sequence (0018,9084)
     */
    ChemicalShiftSequence_0018_9084 = 1609860,
    /**
     * < Cardiac Signal Source (0018,9085)
     */
    CardiacSignalSource_0018_9085 = 1609861,
    /**
     * < Diffusion b-value (0018,9087)
     */
    DiffusionBValue_0018_9087 = 1609863,
    /**
     * < Diffusion Gradient Orientation (0018,9089)
     */
    DiffusionGradientOrientation_0018_9089 = 1609865,
    /**
     * < Velocity Encoding Direction (0018,9090)
     */
    VelocityEncodingDirection_0018_9090 = 1609872,
    /**
     * < Velocity Encoding Minimum Value (0018,9091)
     */
    VelocityEncodingMinimumValue_0018_9091 = 1609873,
    /**
     * < Velocity Encoding Acquisition Sequence (0018,9092)
     */
    VelocityEncodingAcquisitionSequence_0018_9092 = 1609874,
    /**
     * < Number of k-Space Trajectories (0018,9093)
     */
    NumberOfKSpaceTrajectories_0018_9093 = 1609875,
    /**
     * < Coverage of k-Space (0018,9094)
     */
    CoverageOfKSpace_0018_9094 = 1609876,
    /**
     * < Spectroscopy Acquisition Phase Rows (0018,9095)
     */
    SpectroscopyAcquisitionPhaseRows_0018_9095 = 1609877,
    /**
     * < Parallel Reduction Factor In-plane (Retired) (0018,9096)
     */
    ParallelReductionFactorInPlaneRetired_0018_9096 = 1609878,
    /**
     * < Transmitter Frequency (0018,9098)
     */
    TransmitterFrequency_0018_9098 = 1609880,
    /**
     * < Resonant Nucleus (0018,9100)
     */
    ResonantNucleus_0018_9100 = 1609984,
    /**
     * < Frequency Correction (0018,9101)
     */
    FrequencyCorrection_0018_9101 = 1609985,
    /**
     * < MR Spectroscopy FOV/Geometry Sequence (0018,9103)
     */
    MRSpectroscopyFOVGeometrySequence_0018_9103 = 1609987,
    /**
     * < Slab Thickness (0018,9104)
     */
    SlabThickness_0018_9104 = 1609988,
    /**
     * < Slab Orientation (0018,9105)
     */
    SlabOrientation_0018_9105 = 1609989,
    /**
     * < Mid Slab Position (0018,9106)
     */
    MidSlabPosition_0018_9106 = 1609990,
    /**
     * < MR Spatial Saturation Sequence (0018,9107)
     */
    MRSpatialSaturationSequence_0018_9107 = 1609991,
    /**
     * < MR Timing and Related Parameters Sequence (0018,9112)
     */
    MRTimingAndRelatedParametersSequence_0018_9112 = 1610002,
    /**
     * < MR Echo Sequence (0018,9114)
     */
    MREchoSequence_0018_9114 = 1610004,
    /**
     * < MR Modifier Sequence (0018,9115)
     */
    MRModifierSequence_0018_9115 = 1610005,
    /**
     * < MR Diffusion Sequence (0018,9117)
     */
    MRDiffusionSequence_0018_9117 = 1610007,
    /**
     * < Cardiac Synchronization Sequence (0018,9118)
     */
    CardiacSynchronizationSequence_0018_9118 = 1610008,
    /**
     * < MR Averages Sequence (0018,9119)
     */
    MRAveragesSequence_0018_9119 = 1610009,
    /**
     * < MR FOV/Geometry Sequence (0018,9125)
     */
    MRFOVGeometrySequence_0018_9125 = 1610021,
    /**
     * < Volume Localization Sequence (0018,9126)
     */
    VolumeLocalizationSequence_0018_9126 = 1610022,
    /**
     * < Spectroscopy Acquisition Data Columns (0018,9127)
     */
    SpectroscopyAcquisitionDataColumns_0018_9127 = 1610023,
    /**
     * < Diffusion Anisotropy Type (0018,9147)
     */
    DiffusionAnisotropyType_0018_9147 = 1610055,
    /**
     * < Frame Reference DateTime (0018,9151)
     */
    FrameReferenceDateTime_0018_9151 = 1610065,
    /**
     * < MR Metabolite Map Sequence (0018,9152)
     */
    MRMetaboliteMapSequence_0018_9152 = 1610066,
    /**
     * < Parallel Reduction Factor out-of-plane (0018,9155)
     */
    ParallelReductionFactorOutOfPlane_0018_9155 = 1610069,
    /**
     * < Spectroscopy Acquisition Out-of-plane Phase Steps (0018,9159)
     */
    SpectroscopyAcquisitionOutOfPlanePhaseSteps_0018_9159 = 1610073,
    /**
     * < Bulk Motion Status (0018,9166)
     */
    BulkMotionStatus_0018_9166 = 1610086,
    /**
     * < Parallel Reduction Factor Second In-plane (0018,9168)
     */
    ParallelReductionFactorSecondInPlane_0018_9168 = 1610088,
    /**
     * < Cardiac Beat Rejection Technique (0018,9169)
     */
    CardiacBeatRejectionTechnique_0018_9169 = 1610089,
    /**
     * < Respiratory Motion Compensation Technique (0018,9170)
     */
    RespiratoryMotionCompensationTechnique_0018_9170 = 1610096,
    /**
     * < Respiratory Signal Source (0018,9171)
     */
    RespiratorySignalSource_0018_9171 = 1610097,
    /**
     * < Bulk Motion Compensation Technique (0018,9172)
     */
    BulkMotionCompensationTechnique_0018_9172 = 1610098,
    /**
     * < Bulk Motion Signal Source (0018,9173)
     */
    BulkMotionSignalSource_0018_9173 = 1610099,
    /**
     * < Applicable Safety Standard Agency (0018,9174)
     */
    ApplicableSafetyStandardAgency_0018_9174 = 1610100,
    /**
     * < Applicable Safety Standard Description (0018,9175)
     */
    ApplicableSafetyStandardDescription_0018_9175 = 1610101,
    /**
     * < Operating Mode Sequence (0018,9176)
     */
    OperatingModeSequence_0018_9176 = 1610102,
    /**
     * < Operating Mode Type (0018,9177)
     */
    OperatingModeType_0018_9177 = 1610103,
    /**
     * < Operating Mode (0018,9178)
     */
    OperatingMode_0018_9178 = 1610104,
    /**
     * < Specific Absorption Rate Definition (0018,9179)
     */
    SpecificAbsorptionRateDefinition_0018_9179 = 1610105,
    /**
     * < Gradient Output Type (0018,9180)
     */
    GradientOutputType_0018_9180 = 1610112,
    /**
     * < Specific Absorption Rate Value (0018,9181)
     */
    SpecificAbsorptionRateValue_0018_9181 = 1610113,
    /**
     * < Gradient Output (0018,9182)
     */
    GradientOutput_0018_9182 = 1610114,
    /**
     * < Flow Compensation Direction (0018,9183)
     */
    FlowCompensationDirection_0018_9183 = 1610115,
    /**
     * < Tagging Delay (0018,9184)
     */
    TaggingDelay_0018_9184 = 1610116,
    /**
     * < Respiratory Motion Compensation Technique Description (0018,9185)
     */
    RespiratoryMotionCompensationTechniqueDescription_0018_9185 = 1610117,
    /**
     * < Respiratory Signal Source ID (0018,9186)
     */
    RespiratorySignalSourceID_0018_9186 = 1610118,
    /**
     * < Chemical Shift Minimum Integration Limit in Hz (0018,9195)
     */
    ChemicalShiftMinimumIntegrationLimitInHz_0018_9195 = 1610133,
    /**
     * < Chemical Shift Maximum Integration Limit in Hz (0018,9196)
     */
    ChemicalShiftMaximumIntegrationLimitInHz_0018_9196 = 1610134,
    /**
     * < MR Velocity Encoding Sequence (0018,9197)
     */
    MRVelocityEncodingSequence_0018_9197 = 1610135,
    /**
     * < First Order Phase Correction (0018,9198)
     */
    FirstOrderPhaseCorrection_0018_9198 = 1610136,
    /**
     * < Water Referenced Phase Correction (0018,9199)
     */
    WaterReferencedPhaseCorrection_0018_9199 = 1610137,
    /**
     * < MR Spectroscopy Acquisition Type (0018,9200)
     */
    MRSpectroscopyAcquisitionType_0018_9200 = 1610240,
    /**
     * < Respiratory Cycle Position (0018,9214)
     */
    RespiratoryCyclePosition_0018_9214 = 1610260,
    /**
     * < Velocity Encoding Maximum Value (0018,9217)
     */
    VelocityEncodingMaximumValue_0018_9217 = 1610263,
    /**
     * < Tag Spacing Second Dimension (0018,9218)
     */
    TagSpacingSecondDimension_0018_9218 = 1610264,
    /**
     * < Tag Angle Second Axis (0018,9219)
     */
    TagAngleSecondAxis_0018_9219 = 1610265,
    /**
     * < Frame Acquisition Duration (0018,9220)
     */
    FrameAcquisitionDuration_0018_9220 = 1610272,
    /**
     * < MR Image Frame Type Sequence (0018,9226)
     */
    MRImageFrameTypeSequence_0018_9226 = 1610278,
    /**
     * < MR Spectroscopy Frame Type Sequence (0018,9227)
     */
    MRSpectroscopyFrameTypeSequence_0018_9227 = 1610279,
    /**
     * < MR Acquisition Phase Encoding Steps in-plane (0018,9231)
     */
    MRAcquisitionPhaseEncodingStepsInPlane_0018_9231 = 1610289,
    /**
     * < MR Acquisition Phase Encoding Steps out-of-plane (0018,9232)
     */
    MRAcquisitionPhaseEncodingStepsOutOfPlane_0018_9232 = 1610290,
    /**
     * < Spectroscopy Acquisition Phase Columns (0018,9234)
     */
    SpectroscopyAcquisitionPhaseColumns_0018_9234 = 1610292,
    /**
     * < Cardiac Cycle Position (0018,9236)
     */
    CardiacCyclePosition_0018_9236 = 1610294,
    /**
     * < Specific Absorption Rate Sequence (0018,9239)
     */
    SpecificAbsorptionRateSequence_0018_9239 = 1610297,
    /**
     * < RF Echo Train Length (0018,9240)
     */
    RFEchoTrainLength_0018_9240 = 1610304,
    /**
     * < Gradient Echo Train Length (0018,9241)
     */
    GradientEchoTrainLength_0018_9241 = 1610305,
    /**
     * < Arterial Spin Labeling Contrast (0018,9250)
     */
    ArterialSpinLabelingContrast_0018_9250 = 1610320,
    /**
     * < MR Arterial Spin Labeling Sequence (0018,9251)
     */
    MRArterialSpinLabelingSequence_0018_9251 = 1610321,
    /**
     * < ASL Technique Description (0018,9252)
     */
    ASLTechniqueDescription_0018_9252 = 1610322,
    /**
     * < ASL Slab Number (0018,9253)
     */
    ASLSlabNumber_0018_9253 = 1610323,
    /**
     * < ASL Slab Thickness (0018,9254)
     */
    ASLSlabThickness_0018_9254 = 1610324,
    /**
     * < ASL Slab Orientation (0018,9255)
     */
    ASLSlabOrientation_0018_9255 = 1610325,
    /**
     * < ASL Mid Slab Position (0018,9256)
     */
    ASLMidSlabPosition_0018_9256 = 1610326,
    /**
     * < ASL Context (0018,9257)
     */
    ASLContext_0018_9257 = 1610327,
    /**
     * < ASL Pulse Train Duration (0018,9258)
     */
    ASLPulseTrainDuration_0018_9258 = 1610328,
    /**
     * < ASL Crusher Flag (0018,9259)
     */
    ASLCrusherFlag_0018_9259 = 1610329,
    /**
     * < ASL Crusher Flow Limit (0018,925A)
     */
    ASLCrusherFlowLimit_0018_925A = 1610330,
    /**
     * < ASL Crusher Description (0018,925B)
     */
    ASLCrusherDescription_0018_925B = 1610331,
    /**
     * < ASL Bolus Cut-off Flag (0018,925C)
     */
    ASLBolusCutoffFlag_0018_925C = 1610332,
    /**
     * < ASL Bolus Cut-off Timing Sequence (0018,925D)
     */
    ASLBolusCutoffTimingSequence_0018_925D = 1610333,
    /**
     * < ASL Bolus Cut-off Technique (0018,925E)
     */
    ASLBolusCutoffTechnique_0018_925E = 1610334,
    /**
     * < ASL Bolus Cut-off Delay Time (0018,925F)
     */
    ASLBolusCutoffDelayTime_0018_925F = 1610335,
    /**
     * < ASL Slab Sequence (0018,9260)
     */
    ASLSlabSequence_0018_9260 = 1610336,
    /**
     * < Chemical Shift Minimum Integration Limit in ppm (0018,9295)
     */
    ChemicalShiftMinimumIntegrationLimitInppm_0018_9295 = 1610389,
    /**
     * < Chemical Shift Maximum Integration Limit in ppm (0018,9296)
     */
    ChemicalShiftMaximumIntegrationLimitInppm_0018_9296 = 1610390,
    /**
     * < Water Reference Acquisition (0018,9297)
     */
    WaterReferenceAcquisition_0018_9297 = 1610391,
    /**
     * < Echo Peak Position (0018,9298)
     */
    EchoPeakPosition_0018_9298 = 1610392,
    /**
     * < CT Acquisition Type Sequence (0018,9301)
     */
    CTAcquisitionTypeSequence_0018_9301 = 1610497,
    /**
     * < Acquisition Type (0018,9302)
     */
    AcquisitionType_0018_9302 = 1610498,
    /**
     * < Tube Angle (0018,9303)
     */
    TubeAngle_0018_9303 = 1610499,
    /**
     * < CT Acquisition Details Sequence (0018,9304)
     */
    CTAcquisitionDetailsSequence_0018_9304 = 1610500,
    /**
     * < Revolution Time (0018,9305)
     */
    RevolutionTime_0018_9305 = 1610501,
    /**
     * < Single Collimation Width (0018,9306)
     */
    SingleCollimationWidth_0018_9306 = 1610502,
    /**
     * < Total Collimation Width (0018,9307)
     */
    TotalCollimationWidth_0018_9307 = 1610503,
    /**
     * < CT Table Dynamics Sequence (0018,9308)
     */
    CTTableDynamicsSequence_0018_9308 = 1610504,
    /**
     * < Table Speed (0018,9309)
     */
    TableSpeed_0018_9309 = 1610505,
    /**
     * < Table Feed per Rotation (0018,9310)
     */
    TableFeedPerRotation_0018_9310 = 1610512,
    /**
     * < Spiral Pitch Factor (0018,9311)
     */
    SpiralPitchFactor_0018_9311 = 1610513,
    /**
     * < CT Geometry Sequence (0018,9312)
     */
    CTGeometrySequence_0018_9312 = 1610514,
    /**
     * < Data Collection Center (Patient) (0018,9313)
     */
    DataCollectionCenterPatient_0018_9313 = 1610515,
    /**
     * < CT Reconstruction Sequence (0018,9314)
     */
    CTReconstructionSequence_0018_9314 = 1610516,
    /**
     * < Reconstruction Algorithm (0018,9315)
     */
    ReconstructionAlgorithm_0018_9315 = 1610517,
    /**
     * < Convolution Kernel Group (0018,9316)
     */
    ConvolutionKernelGroup_0018_9316 = 1610518,
    /**
     * < Reconstruction Field of View (0018,9317)
     */
    ReconstructionFieldOfView_0018_9317 = 1610519,
    /**
     * < Reconstruction Target Center (Patient) (0018,9318)
     */
    ReconstructionTargetCenterPatient_0018_9318 = 1610520,
    /**
     * < Reconstruction Angle (0018,9319)
     */
    ReconstructionAngle_0018_9319 = 1610521,
    /**
     * < Image Filter (0018,9320)
     */
    ImageFilter_0018_9320 = 1610528,
    /**
     * < CT Exposure Sequence (0018,9321)
     */
    CTExposureSequence_0018_9321 = 1610529,
    /**
     * < Reconstruction Pixel Spacing (0018,9322)
     */
    ReconstructionPixelSpacing_0018_9322 = 1610530,
    /**
     * < Exposure Modulation Type (0018,9323)
     */
    ExposureModulationType_0018_9323 = 1610531,
    /**
     * < Estimated Dose Saving (0018,9324)
     */
    EstimatedDoseSaving_0018_9324 = 1610532,
    /**
     * < CT X-Ray Details Sequence (0018,9325)
     */
    CTXRayDetailsSequence_0018_9325 = 1610533,
    /**
     * < CT Position Sequence (0018,9326)
     */
    CTPositionSequence_0018_9326 = 1610534,
    /**
     * < Table Position (0018,9327)
     */
    TablePosition_0018_9327 = 1610535,
    /**
     * < Exposure Time in ms (0018,9328)
     */
    ExposureTimeInms_0018_9328 = 1610536,
    /**
     * < CT Image Frame Type Sequence (0018,9329)
     */
    CTImageFrameTypeSequence_0018_9329 = 1610537,
    /**
     * < X-Ray Tube Current in mA (0018,9330)
     */
    XRayTubeCurrentInmA_0018_9330 = 1610544,
    /**
     * < Exposure in mAs (0018,9332)
     */
    ExposureInmAs_0018_9332 = 1610546,
    /**
     * < Constant Volume Flag (0018,9333)
     */
    ConstantVolumeFlag_0018_9333 = 1610547,
    /**
     * < Fluoroscopy Flag (0018,9334)
     */
    FluoroscopyFlag_0018_9334 = 1610548,
    /**
     * < Distance Source to Data Collection Center (0018,9335)
     */
    DistanceSourceToDataCollectionCenter_0018_9335 = 1610549,
    /**
     * < Contrast/Bolus Agent Number (0018,9337)
     */
    ContrastBolusAgentNumber_0018_9337 = 1610551,
    /**
     * < Contrast/Bolus Ingredient Code Sequence (0018,9338)
     */
    ContrastBolusIngredientCodeSequence_0018_9338 = 1610552,
    /**
     * < Contrast Administration Profile Sequence (0018,9340)
     */
    ContrastAdministrationProfileSequence_0018_9340 = 1610560,
    /**
     * < Contrast/Bolus Usage Sequence (0018,9341)
     */
    ContrastBolusUsageSequence_0018_9341 = 1610561,
    /**
     * < Contrast/Bolus Agent Administered (0018,9342)
     */
    ContrastBolusAgentAdministered_0018_9342 = 1610562,
    /**
     * < Contrast/Bolus Agent Detected (0018,9343)
     */
    ContrastBolusAgentDetected_0018_9343 = 1610563,
    /**
     * < Contrast/Bolus Agent Phase (0018,9344)
     */
    ContrastBolusAgentPhase_0018_9344 = 1610564,
    /**
     * < CTDIvol (0018,9345)
     */
    CTDIvol_0018_9345 = 1610565,
    /**
     * < CTDI Phantom Type Code Sequence (0018,9346)
     */
    CTDIPhantomTypeCodeSequence_0018_9346 = 1610566,
    /**
     * < Calcium Scoring Mass Factor Patient (0018,9351)
     */
    CalciumScoringMassFactorPatient_0018_9351 = 1610577,
    /**
     * < Calcium Scoring Mass Factor Device (0018,9352)
     */
    CalciumScoringMassFactorDevice_0018_9352 = 1610578,
    /**
     * < Energy Weighting Factor (0018,9353)
     */
    EnergyWeightingFactor_0018_9353 = 1610579,
    /**
     * < CT Additional X-Ray Source Sequence (0018,9360)
     */
    CTAdditionalXRaySourceSequence_0018_9360 = 1610592,
    /**
     * < Multi-energy CT Acquisition (0018,9361)
     */
    MultienergyCTAcquisition_0018_9361 = 1610593,
    /**
     * < Multi-energy CT Acquisition Sequence (0018,9362)
     */
    MultienergyCTAcquisitionSequence_0018_9362 = 1610594,
    /**
     * < Multi-energy CT Processing Sequence (0018,9363)
     */
    MultienergyCTProcessingSequence_0018_9363 = 1610595,
    /**
     * < Multi-energy CT Characteristics Sequence (0018,9364)
     */
    MultienergyCTCharacteristicsSequence_0018_9364 = 1610596,
    /**
     * < Multi-energy CT X-Ray Source Sequence (0018,9365)
     */
    MultienergyCTXRaySourceSequence_0018_9365 = 1610597,
    /**
     * < X-Ray Source Index (0018,9366)
     */
    XRaySourceIndex_0018_9366 = 1610598,
    /**
     * < X-Ray Source ID (0018,9367)
     */
    XRaySourceID_0018_9367 = 1610599,
    /**
     * < Multi-energy Source Technique (0018,9368)
     */
    MultienergySourceTechnique_0018_9368 = 1610600,
    /**
     * < Source Start Date Time (0018,9369)
     */
    SourceStartDateTime_0018_9369 = 1610601,
    /**
     * < Source End Date Time (0018,936A)
     */
    SourceEndDateTime_0018_936A = 1610602,
    /**
     * < Switching Phase Number (0018,936B)
     */
    SwitchingPhaseNumber_0018_936B = 1610603,
    /**
     * < Switching Phase Nominal Duration (0018,936C)
     */
    SwitchingPhaseNominalDuration_0018_936C = 1610604,
    /**
     * < Switching Phase Transition Duration (0018,936D)
     */
    SwitchingPhaseTransitionDuration_0018_936D = 1610605,
    /**
     * < Effective Bin Energy (0018,936E)
     */
    EffectiveBinEnergy_0018_936E = 1610606,
    /**
     * < Multi-energy CT X-Ray Detector Sequence (0018,936F)
     */
    MultienergyCTXRayDetectorSequence_0018_936F = 1610607,
    /**
     * < X-Ray Detector Index (0018,9370)
     */
    XRayDetectorIndex_0018_9370 = 1610608,
    /**
     * < X-Ray Detector ID (0018,9371)
     */
    XRayDetectorID_0018_9371 = 1610609,
    /**
     * < Multi-energy Detector Type (0018,9372)
     */
    MultienergyDetectorType_0018_9372 = 1610610,
    /**
     * < X-Ray Detector Label (0018,9373)
     */
    XRayDetectorLabel_0018_9373 = 1610611,
    /**
     * < Nominal Max Energy (0018,9374)
     */
    NominalMaxEnergy_0018_9374 = 1610612,
    /**
     * < Nominal Min Energy (0018,9375)
     */
    NominalMinEnergy_0018_9375 = 1610613,
    /**
     * < Referenced X-Ray Detector Index (0018,9376)
     */
    ReferencedXRayDetectorIndex_0018_9376 = 1610614,
    /**
     * < Referenced X-Ray Source Index (0018,9377)
     */
    ReferencedXRaySourceIndex_0018_9377 = 1610615,
    /**
     * < Referenced Path Index (0018,9378)
     */
    ReferencedPathIndex_0018_9378 = 1610616,
    /**
     * < Multi-energy CT Path Sequence (0018,9379)
     */
    MultienergyCTPathSequence_0018_9379 = 1610617,
    /**
     * < Multi-energy CT Path Index (0018,937A)
     */
    MultienergyCTPathIndex_0018_937A = 1610618,
    /**
     * < Multi-energy Acquisition Description (0018,937B)
     */
    MultienergyAcquisitionDescription_0018_937B = 1610619,
    /**
     * < Monoenergetic Energy Equivalent (0018,937C)
     */
    MonoenergeticEnergyEquivalent_0018_937C = 1610620,
    /**
     * < Material Code Sequence (0018,937D)
     */
    MaterialCodeSequence_0018_937D = 1610621,
    /**
     * < Decomposition Method (0018,937E)
     */
    DecompositionMethod_0018_937E = 1610622,
    /**
     * < Decomposition Description (0018,937F)
     */
    DecompositionDescription_0018_937F = 1610623,
    /**
     * < Decomposition Algorithm Identification Sequence (0018,9380)
     */
    DecompositionAlgorithmIdentificationSequence_0018_9380 = 1610624,
    /**
     * < Decomposition Material Sequence (0018,9381)
     */
    DecompositionMaterialSequence_0018_9381 = 1610625,
    /**
     * < Material Attenuation Sequence (0018,9382)
     */
    MaterialAttenuationSequence_0018_9382 = 1610626,
    /**
     * < Photon Energy (0018,9383)
     */
    PhotonEnergy_0018_9383 = 1610627,
    /**
     * < X-Ray Mass Attenuation Coefficient (0018,9384)
     */
    XRayMassAttenuationCoefficient_0018_9384 = 1610628,
    /**
     * < Projection Pixel Calibration Sequence (0018,9401)
     */
    ProjectionPixelCalibrationSequence_0018_9401 = 1610753,
    /**
     * < Distance Source to Isocenter (0018,9402)
     */
    DistanceSourceToIsocenter_0018_9402 = 1610754,
    /**
     * < Distance Object to Table Top (0018,9403)
     */
    DistanceObjectToTableTop_0018_9403 = 1610755,
    /**
     * < Object Pixel Spacing in Center of Beam (0018,9404)
     */
    ObjectPixelSpacingInCenterOfBeam_0018_9404 = 1610756,
    /**
     * < Positioner Position Sequence (0018,9405)
     */
    PositionerPositionSequence_0018_9405 = 1610757,
    /**
     * < Table Position Sequence (0018,9406)
     */
    TablePositionSequence_0018_9406 = 1610758,
    /**
     * < Collimator Shape Sequence (0018,9407)
     */
    CollimatorShapeSequence_0018_9407 = 1610759,
    /**
     * < Planes in Acquisition (0018,9410)
     */
    PlanesInAcquisition_0018_9410 = 1610768,
    /**
     * < XA/XRF Frame Characteristics Sequence (0018,9412)
     */
    XAXRFFrameCharacteristicsSequence_0018_9412 = 1610770,
    /**
     * < Frame Acquisition Sequence (0018,9417)
     */
    FrameAcquisitionSequence_0018_9417 = 1610775,
    /**
     * < X-Ray Receptor Type (0018,9420)
     */
    XRayReceptorType_0018_9420 = 1610784,
    /**
     * < Acquisition Protocol Name (0018,9423)
     */
    AcquisitionProtocolName_0018_9423 = 1610787,
    /**
     * < Acquisition Protocol Description (0018,9424)
     */
    AcquisitionProtocolDescription_0018_9424 = 1610788,
    /**
     * < Contrast/Bolus Ingredient Opaque (0018,9425)
     */
    ContrastBolusIngredientOpaque_0018_9425 = 1610789,
    /**
     * < Distance Receptor Plane to Detector Housing (0018,9426)
     */
    DistanceReceptorPlaneToDetectorHousing_0018_9426 = 1610790,
    /**
     * < Intensifier Active Shape (0018,9427)
     */
    IntensifierActiveShape_0018_9427 = 1610791,
    /**
     * < Intensifier Active Dimension(s) (0018,9428)
     */
    IntensifierActiveDimensions_0018_9428 = 1610792,
    /**
     * < Physical Detector Size (0018,9429)
     */
    PhysicalDetectorSize_0018_9429 = 1610793,
    /**
     * < Position of Isocenter Projection (0018,9430)
     */
    PositionOfIsocenterProjection_0018_9430 = 1610800,
    /**
     * < Field of View Sequence (0018,9432)
     */
    FieldOfViewSequence_0018_9432 = 1610802,
    /**
     * < Field of View Description (0018,9433)
     */
    FieldOfViewDescription_0018_9433 = 1610803,
    /**
     * < Exposure Control Sensing Regions Sequence (0018,9434)
     */
    ExposureControlSensingRegionsSequence_0018_9434 = 1610804,
    /**
     * < Exposure Control Sensing Region Shape (0018,9435)
     */
    ExposureControlSensingRegionShape_0018_9435 = 1610805,
    /**
     * < Exposure Control Sensing Region Left Vertical Edge (0018,9436)
     */
    ExposureControlSensingRegionLeftVerticalEdge_0018_9436 = 1610806,
    /**
     * < Exposure Control Sensing Region Right Vertical Edge (0018,9437)
     */
    ExposureControlSensingRegionRightVerticalEdge_0018_9437 = 1610807,
    /**
     * < Exposure Control Sensing Region Upper Horizontal Edge (0018,9438)
     */
    ExposureControlSensingRegionUpperHorizontalEdge_0018_9438 = 1610808,
    /**
     * < Exposure Control Sensing Region Lower Horizontal Edge (0018,9439)
     */
    ExposureControlSensingRegionLowerHorizontalEdge_0018_9439 = 1610809,
    /**
     * < Center of Circular Exposure Control Sensing Region (0018,9440)
     */
    CenterOfCircularExposureControlSensingRegion_0018_9440 = 1610816,
    /**
     * < Radius of Circular Exposure Control Sensing Region (0018,9441)
     */
    RadiusOfCircularExposureControlSensingRegion_0018_9441 = 1610817,
    /**
     * < Vertices of the Polygonal Exposure Control Sensing Region (0018,9442)
     */
    VerticesOfThePolygonalExposureControlSensingRegion_0018_9442 = 1610818,
    /**
     * < Column Angulation (Patient) (0018,9447)
     */
    ColumnAngulationPatient_0018_9447 = 1610823,
    /**
     * < Beam Angle (0018,9449)
     */
    BeamAngle_0018_9449 = 1610825,
    /**
     * < Frame Detector Parameters Sequence (0018,9451)
     */
    FrameDetectorParametersSequence_0018_9451 = 1610833,
    /**
     * < Calculated Anatomy Thickness (0018,9452)
     */
    CalculatedAnatomyThickness_0018_9452 = 1610834,
    /**
     * < Calibration Sequence (0018,9455)
     */
    CalibrationSequence_0018_9455 = 1610837,
    /**
     * < Object Thickness Sequence (0018,9456)
     */
    ObjectThicknessSequence_0018_9456 = 1610838,
    /**
     * < Plane Identification (0018,9457)
     */
    PlaneIdentification_0018_9457 = 1610839,
    /**
     * < Field of View Dimension(s) in Float (0018,9461)
     */
    FieldOfViewDimensionsInFloat_0018_9461 = 1610849,
    /**
     * < Isocenter Reference System Sequence (0018,9462)
     */
    IsocenterReferenceSystemSequence_0018_9462 = 1610850,
    /**
     * < Positioner Isocenter Primary Angle (0018,9463)
     */
    PositionerIsocenterPrimaryAngle_0018_9463 = 1610851,
    /**
     * < Positioner Isocenter Secondary Angle (0018,9464)
     */
    PositionerIsocenterSecondaryAngle_0018_9464 = 1610852,
    /**
     * < Positioner Isocenter Detector Rotation Angle (0018,9465)
     */
    PositionerIsocenterDetectorRotationAngle_0018_9465 = 1610853,
    /**
     * < Table X Position to Isocenter (0018,9466)
     */
    TableXPositionToIsocenter_0018_9466 = 1610854,
    /**
     * < Table Y Position to Isocenter (0018,9467)
     */
    TableYPositionToIsocenter_0018_9467 = 1610855,
    /**
     * < Table Z Position to Isocenter (0018,9468)
     */
    TableZPositionToIsocenter_0018_9468 = 1610856,
    /**
     * < Table Horizontal Rotation Angle (0018,9469)
     */
    TableHorizontalRotationAngle_0018_9469 = 1610857,
    /**
     * < Table Head Tilt Angle (0018,9470)
     */
    TableHeadTiltAngle_0018_9470 = 1610864,
    /**
     * < Table Cradle Tilt Angle (0018,9471)
     */
    TableCradleTiltAngle_0018_9471 = 1610865,
    /**
     * < Frame Display Shutter Sequence (0018,9472)
     */
    FrameDisplayShutterSequence_0018_9472 = 1610866,
    /**
     * < Acquired Image Area Dose Product (0018,9473)
     */
    AcquiredImageAreaDoseProduct_0018_9473 = 1610867,
    /**
     * < C-arm Positioner Tabletop Relationship (0018,9474)
     */
    CArmPositionerTabletopRelationship_0018_9474 = 1610868,
    /**
     * < X-Ray Geometry Sequence (0018,9476)
     */
    XRayGeometrySequence_0018_9476 = 1610870,
    /**
     * < Irradiation Event Identification Sequence (0018,9477)
     */
    IrradiationEventIdentificationSequence_0018_9477 = 1610871,
    /**
     * < X-Ray 3D Frame Type Sequence (0018,9504)
     */
    XRay3DFrameTypeSequence_0018_9504 = 1611012,
    /**
     * < Contributing Sources Sequence (0018,9506)
     */
    ContributingSourcesSequence_0018_9506 = 1611014,
    /**
     * < X-Ray 3D Acquisition Sequence (0018,9507)
     */
    XRay3DAcquisitionSequence_0018_9507 = 1611015,
    /**
     * < Primary Positioner Scan Arc (0018,9508)
     */
    PrimaryPositionerScanArc_0018_9508 = 1611016,
    /**
     * < Secondary Positioner Scan Arc (0018,9509)
     */
    SecondaryPositionerScanArc_0018_9509 = 1611017,
    /**
     * < Primary Positioner Scan Start Angle (0018,9510)
     */
    PrimaryPositionerScanStartAngle_0018_9510 = 1611024,
    /**
     * < Secondary Positioner Scan Start Angle (0018,9511)
     */
    SecondaryPositionerScanStartAngle_0018_9511 = 1611025,
    /**
     * < Primary Positioner Increment (0018,9514)
     */
    PrimaryPositionerIncrement_0018_9514 = 1611028,
    /**
     * < Secondary Positioner Increment (0018,9515)
     */
    SecondaryPositionerIncrement_0018_9515 = 1611029,
    /**
     * < Start Acquisition DateTime (0018,9516)
     */
    StartAcquisitionDateTime_0018_9516 = 1611030,
    /**
     * < End Acquisition DateTime (0018,9517)
     */
    EndAcquisitionDateTime_0018_9517 = 1611031,
    /**
     * < Primary Positioner Increment Sign (0018,9518)
     */
    PrimaryPositionerIncrementSign_0018_9518 = 1611032,
    /**
     * < Secondary Positioner Increment Sign (0018,9519)
     */
    SecondaryPositionerIncrementSign_0018_9519 = 1611033,
    /**
     * < Application Name (0018,9524)
     */
    ApplicationName_0018_9524 = 1611044,
    /**
     * < Application Version (0018,9525)
     */
    ApplicationVersion_0018_9525 = 1611045,
    /**
     * < Application Manufacturer (0018,9526)
     */
    ApplicationManufacturer_0018_9526 = 1611046,
    /**
     * < Algorithm Type (0018,9527)
     */
    AlgorithmType_0018_9527 = 1611047,
    /**
     * < Algorithm Description (0018,9528)
     */
    AlgorithmDescription_0018_9528 = 1611048,
    /**
     * < X-Ray 3D Reconstruction Sequence (0018,9530)
     */
    XRay3DReconstructionSequence_0018_9530 = 1611056,
    /**
     * < Reconstruction Description (0018,9531)
     */
    ReconstructionDescription_0018_9531 = 1611057,
    /**
     * < Per Projection Acquisition Sequence (0018,9538)
     */
    PerProjectionAcquisitionSequence_0018_9538 = 1611064,
    /**
     * < Detector Position Sequence (0018,9541)
     */
    DetectorPositionSequence_0018_9541 = 1611073,
    /**
     * < X-Ray Acquisition Dose Sequence (0018,9542)
     */
    XRayAcquisitionDoseSequence_0018_9542 = 1611074,
    /**
     * < X-Ray Source Isocenter Primary Angle (0018,9543)
     */
    XRaySourceIsocenterPrimaryAngle_0018_9543 = 1611075,
    /**
     * < X-Ray Source Isocenter Secondary Angle (0018,9544)
     */
    XRaySourceIsocenterSecondaryAngle_0018_9544 = 1611076,
    /**
     * < Breast Support Isocenter Primary Angle (0018,9545)
     */
    BreastSupportIsocenterPrimaryAngle_0018_9545 = 1611077,
    /**
     * < Breast Support Isocenter Secondary Angle (0018,9546)
     */
    BreastSupportIsocenterSecondaryAngle_0018_9546 = 1611078,
    /**
     * < Breast Support X Position to Isocenter (0018,9547)
     */
    BreastSupportXPositionToIsocenter_0018_9547 = 1611079,
    /**
     * < Breast Support Y Position to Isocenter (0018,9548)
     */
    BreastSupportYPositionToIsocenter_0018_9548 = 1611080,
    /**
     * < Breast Support Z Position to Isocenter (0018,9549)
     */
    BreastSupportZPositionToIsocenter_0018_9549 = 1611081,
    /**
     * < Detector Isocenter Primary Angle (0018,9550)
     */
    DetectorIsocenterPrimaryAngle_0018_9550 = 1611088,
    /**
     * < Detector Isocenter Secondary Angle (0018,9551)
     */
    DetectorIsocenterSecondaryAngle_0018_9551 = 1611089,
    /**
     * < Detector X Position to Isocenter (0018,9552)
     */
    DetectorXPositionToIsocenter_0018_9552 = 1611090,
    /**
     * < Detector Y Position to Isocenter (0018,9553)
     */
    DetectorYPositionToIsocenter_0018_9553 = 1611091,
    /**
     * < Detector Z Position to Isocenter (0018,9554)
     */
    DetectorZPositionToIsocenter_0018_9554 = 1611092,
    /**
     * < X-Ray Grid Sequence (0018,9555)
     */
    XRayGridSequence_0018_9555 = 1611093,
    /**
     * < X-Ray Filter Sequence (0018,9556)
     */
    XRayFilterSequence_0018_9556 = 1611094,
    /**
     * < Detector Active Area TLHC Position (0018,9557)
     */
    DetectorActiveAreaTLHCPosition_0018_9557 = 1611095,
    /**
     * < Detector Active Area Orientation (0018,9558)
     */
    DetectorActiveAreaOrientation_0018_9558 = 1611096,
    /**
     * < Positioner Primary Angle Direction (0018,9559)
     */
    PositionerPrimaryAngleDirection_0018_9559 = 1611097,
    /**
     * < Diffusion b-matrix Sequence (0018,9601)
     */
    DiffusionBMatrixSequence_0018_9601 = 1611265,
    /**
     * < Diffusion b-value XX (0018,9602)
     */
    DiffusionBValueXX_0018_9602 = 1611266,
    /**
     * < Diffusion b-value XY (0018,9603)
     */
    DiffusionBValueXY_0018_9603 = 1611267,
    /**
     * < Diffusion b-value XZ (0018,9604)
     */
    DiffusionBValueXZ_0018_9604 = 1611268,
    /**
     * < Diffusion b-value YY (0018,9605)
     */
    DiffusionBValueYY_0018_9605 = 1611269,
    /**
     * < Diffusion b-value YZ (0018,9606)
     */
    DiffusionBValueYZ_0018_9606 = 1611270,
    /**
     * < Diffusion b-value ZZ (0018,9607)
     */
    DiffusionBValueZZ_0018_9607 = 1611271,
    /**
     * < Functional MR Sequence (0018,9621)
     */
    FunctionalMRSequence_0018_9621 = 1611297,
    /**
     * < Functional Settling Phase Frames Present (0018,9622)
     */
    FunctionalSettlingPhaseFramesPresent_0018_9622 = 1611298,
    /**
     * < Functional Sync Pulse (0018,9623)
     */
    FunctionalSyncPulse_0018_9623 = 1611299,
    /**
     * < Settling Phase Frame (0018,9624)
     */
    SettlingPhaseFrame_0018_9624 = 1611300,
    /**
     * < Decay Correction DateTime (0018,9701)
     */
    DecayCorrectionDateTime_0018_9701 = 1611521,
    /**
     * < Start Density Threshold (0018,9715)
     */
    StartDensityThreshold_0018_9715 = 1611541,
    /**
     * < Start Relative Density Difference Threshold (0018,9716)
     */
    StartRelativeDensityDifferenceThreshold_0018_9716 = 1611542,
    /**
     * < Start Cardiac Trigger Count Threshold (0018,9717)
     */
    StartCardiacTriggerCountThreshold_0018_9717 = 1611543,
    /**
     * < Start Respiratory Trigger Count Threshold (0018,9718)
     */
    StartRespiratoryTriggerCountThreshold_0018_9718 = 1611544,
    /**
     * < Termination Counts Threshold (0018,9719)
     */
    TerminationCountsThreshold_0018_9719 = 1611545,
    /**
     * < Termination Density Threshold (0018,9720)
     */
    TerminationDensityThreshold_0018_9720 = 1611552,
    /**
     * < Termination Relative Density Threshold (0018,9721)
     */
    TerminationRelativeDensityThreshold_0018_9721 = 1611553,
    /**
     * < Termination Time Threshold (0018,9722)
     */
    TerminationTimeThreshold_0018_9722 = 1611554,
    /**
     * < Termination Cardiac Trigger Count Threshold (0018,9723)
     */
    TerminationCardiacTriggerCountThreshold_0018_9723 = 1611555,
    /**
     * < Termination Respiratory Trigger Count Threshold (0018,9724)
     */
    TerminationRespiratoryTriggerCountThreshold_0018_9724 = 1611556,
    /**
     * < Detector Geometry (0018,9725)
     */
    DetectorGeometry_0018_9725 = 1611557,
    /**
     * < Transverse Detector Separation (0018,9726)
     */
    TransverseDetectorSeparation_0018_9726 = 1611558,
    /**
     * < Axial Detector Dimension (0018,9727)
     */
    AxialDetectorDimension_0018_9727 = 1611559,
    /**
     * < Radiopharmaceutical Agent Number (0018,9729)
     */
    RadiopharmaceuticalAgentNumber_0018_9729 = 1611561,
    /**
     * < PET Frame Acquisition Sequence (0018,9732)
     */
    PETFrameAcquisitionSequence_0018_9732 = 1611570,
    /**
     * < PET Detector Motion Details Sequence (0018,9733)
     */
    PETDetectorMotionDetailsSequence_0018_9733 = 1611571,
    /**
     * < PET Table Dynamics Sequence (0018,9734)
     */
    PETTableDynamicsSequence_0018_9734 = 1611572,
    /**
     * < PET Position Sequence (0018,9735)
     */
    PETPositionSequence_0018_9735 = 1611573,
    /**
     * < PET Frame Correction Factors Sequence (0018,9736)
     */
    PETFrameCorrectionFactorsSequence_0018_9736 = 1611574,
    /**
     * < Radiopharmaceutical Usage Sequence (0018,9737)
     */
    RadiopharmaceuticalUsageSequence_0018_9737 = 1611575,
    /**
     * < Attenuation Correction Source (0018,9738)
     */
    AttenuationCorrectionSource_0018_9738 = 1611576,
    /**
     * < Number of Iterations (0018,9739)
     */
    NumberOfIterations_0018_9739 = 1611577,
    /**
     * < Number of Subsets (0018,9740)
     */
    NumberOfSubsets_0018_9740 = 1611584,
    /**
     * < PET Reconstruction Sequence (0018,9749)
     */
    PETReconstructionSequence_0018_9749 = 1611593,
    /**
     * < PET Frame Type Sequence (0018,9751)
     */
    PETFrameTypeSequence_0018_9751 = 1611601,
    /**
     * < Time of Flight Information Used (0018,9755)
     */
    TimeOfFlightInformationUsed_0018_9755 = 1611605,
    /**
     * < Reconstruction Type (0018,9756)
     */
    ReconstructionType_0018_9756 = 1611606,
    /**
     * < Decay Corrected (0018,9758)
     */
    DecayCorrected_0018_9758 = 1611608,
    /**
     * < Attenuation Corrected (0018,9759)
     */
    AttenuationCorrected_0018_9759 = 1611609,
    /**
     * < Scatter Corrected (0018,9760)
     */
    ScatterCorrected_0018_9760 = 1611616,
    /**
     * < Dead Time Corrected (0018,9761)
     */
    DeadTimeCorrected_0018_9761 = 1611617,
    /**
     * < Gantry Motion Corrected (0018,9762)
     */
    GantryMotionCorrected_0018_9762 = 1611618,
    /**
     * < Patient Motion Corrected (0018,9763)
     */
    PatientMotionCorrected_0018_9763 = 1611619,
    /**
     * < Count Loss Normalization Corrected (0018,9764)
     */
    CountLossNormalizationCorrected_0018_9764 = 1611620,
    /**
     * < Randoms Corrected (0018,9765)
     */
    RandomsCorrected_0018_9765 = 1611621,
    /**
     * < Non-uniform Radial Sampling Corrected (0018,9766)
     */
    NonUniformRadialSamplingCorrected_0018_9766 = 1611622,
    /**
     * < Sensitivity Calibrated (0018,9767)
     */
    SensitivityCalibrated_0018_9767 = 1611623,
    /**
     * < Detector Normalization Correction (0018,9768)
     */
    DetectorNormalizationCorrection_0018_9768 = 1611624,
    /**
     * < Iterative Reconstruction Method (0018,9769)
     */
    IterativeReconstructionMethod_0018_9769 = 1611625,
    /**
     * < Attenuation Correction Temporal Relationship (0018,9770)
     */
    AttenuationCorrectionTemporalRelationship_0018_9770 = 1611632,
    /**
     * < Patient Physiological State Sequence (0018,9771)
     */
    PatientPhysiologicalStateSequence_0018_9771 = 1611633,
    /**
     * < Patient Physiological State Code Sequence (0018,9772)
     */
    PatientPhysiologicalStateCodeSequence_0018_9772 = 1611634,
    /**
     * < Depth(s) of Focus (0018,9801)
     */
    DepthsOfFocus_0018_9801 = 1611777,
    /**
     * < Excluded Intervals Sequence (0018,9803)
     */
    ExcludedIntervalsSequence_0018_9803 = 1611779,
    /**
     * < Exclusion Start DateTime (0018,9804)
     */
    ExclusionStartDateTime_0018_9804 = 1611780,
    /**
     * < Exclusion Duration (0018,9805)
     */
    ExclusionDuration_0018_9805 = 1611781,
    /**
     * < US Image Description Sequence (0018,9806)
     */
    USImageDescriptionSequence_0018_9806 = 1611782,
    /**
     * < Image Data Type Sequence (0018,9807)
     */
    ImageDataTypeSequence_0018_9807 = 1611783,
    /**
     * < Data Type (0018,9808)
     */
    DataType_0018_9808 = 1611784,
    /**
     * < Transducer Scan Pattern Code Sequence (0018,9809)
     */
    TransducerScanPatternCodeSequence_0018_9809 = 1611785,
    /**
     * < Aliased Data Type (0018,980B)
     */
    AliasedDataType_0018_980B = 1611787,
    /**
     * < Position Measuring Device Used (0018,980C)
     */
    PositionMeasuringDeviceUsed_0018_980C = 1611788,
    /**
     * < Transducer Geometry Code Sequence (0018,980D)
     */
    TransducerGeometryCodeSequence_0018_980D = 1611789,
    /**
     * < Transducer Beam Steering Code Sequence (0018,980E)
     */
    TransducerBeamSteeringCodeSequence_0018_980E = 1611790,
    /**
     * < Transducer Application Code Sequence (0018,980F)
     */
    TransducerApplicationCodeSequence_0018_980F = 1611791,
    /**
     * < Zero Velocity Pixel Value (0018,9810)
     */
    ZeroVelocityPixelValue_0018_9810 = 1611792,
    /**
     * < Reference Location Label (0018,9900)
     */
    ReferenceLocationLabel_0018_9900 = 1612032,
    /**
     * < Reference Location Description (0018,9901)
     */
    ReferenceLocationDescription_0018_9901 = 1612033,
    /**
     * < Reference Basis Code Sequence (0018,9902)
     */
    ReferenceBasisCodeSequence_0018_9902 = 1612034,
    /**
     * < Reference Geometry Code Sequence (0018,9903)
     */
    ReferenceGeometryCodeSequence_0018_9903 = 1612035,
    /**
     * < Offset Distance (0018,9904)
     */
    OffsetDistance_0018_9904 = 1612036,
    /**
     * < Offset Direction (0018,9905)
     */
    OffsetDirection_0018_9905 = 1612037,
    /**
     * < Potential Scheduled Protocol Code Sequence (0018,9906)
     */
    PotentialScheduledProtocolCodeSequence_0018_9906 = 1612038,
    /**
     * < Potential Requested Procedure Code Sequence (0018,9907)
     */
    PotentialRequestedProcedureCodeSequence_0018_9907 = 1612039,
    /**
     * < Potential Reasons for Procedure (0018,9908)
     */
    PotentialReasonsForProcedure_0018_9908 = 1612040,
    /**
     * < Potential Reasons for Procedure Code Sequence (0018,9909)
     */
    PotentialReasonsForProcedureCodeSequence_0018_9909 = 1612041,
    /**
     * < Potential Diagnostic Tasks (0018,990A)
     */
    PotentialDiagnosticTasks_0018_990A = 1612042,
    /**
     * < Contraindications Code Sequence (0018,990B)
     */
    ContraindicationsCodeSequence_0018_990B = 1612043,
    /**
     * < Referenced Defined Protocol Sequence (0018,990C)
     */
    ReferencedDefinedProtocolSequence_0018_990C = 1612044,
    /**
     * < Referenced Performed Protocol Sequence (0018,990D)
     */
    ReferencedPerformedProtocolSequence_0018_990D = 1612045,
    /**
     * < Predecessor Protocol Sequence (0018,990E)
     */
    PredecessorProtocolSequence_0018_990E = 1612046,
    /**
     * < Protocol Planning Information (0018,990F)
     */
    ProtocolPlanningInformation_0018_990F = 1612047,
    /**
     * < Protocol Design Rationale (0018,9910)
     */
    ProtocolDesignRationale_0018_9910 = 1612048,
    /**
     * < Patient Specification Sequence (0018,9911)
     */
    PatientSpecificationSequence_0018_9911 = 1612049,
    /**
     * < Model Specification Sequence (0018,9912)
     */
    ModelSpecificationSequence_0018_9912 = 1612050,
    /**
     * < Parameters Specification Sequence (0018,9913)
     */
    ParametersSpecificationSequence_0018_9913 = 1612051,
    /**
     * < Instruction Sequence (0018,9914)
     */
    InstructionSequence_0018_9914 = 1612052,
    /**
     * < Instruction Index (0018,9915)
     */
    InstructionIndex_0018_9915 = 1612053,
    /**
     * < Instruction Text (0018,9916)
     */
    InstructionText_0018_9916 = 1612054,
    /**
     * < Instruction Description (0018,9917)
     */
    InstructionDescription_0018_9917 = 1612055,
    /**
     * < Instruction Performed Flag (0018,9918)
     */
    InstructionPerformedFlag_0018_9918 = 1612056,
    /**
     * < Instruction Performed DateTime (0018,9919)
     */
    InstructionPerformedDateTime_0018_9919 = 1612057,
    /**
     * < Instruction Performance Comment (0018,991A)
     */
    InstructionPerformanceComment_0018_991A = 1612058,
    /**
     * < Patient Positioning Instruction Sequence (0018,991B)
     */
    PatientPositioningInstructionSequence_0018_991B = 1612059,
    /**
     * < Positioning Method Code Sequence (0018,991C)
     */
    PositioningMethodCodeSequence_0018_991C = 1612060,
    /**
     * < Positioning Landmark Sequence (0018,991D)
     */
    PositioningLandmarkSequence_0018_991D = 1612061,
    /**
     * < Target Frame of Reference UID (0018,991E)
     */
    TargetFrameOfReferenceUID_0018_991E = 1612062,
    /**
     * < Acquisition Protocol Element Specification Sequence (0018,991F)
     */
    AcquisitionProtocolElementSpecificationSequence_0018_991F = 1612063,
    /**
     * < Acquisition Protocol Element Sequence (0018,9920)
     */
    AcquisitionProtocolElementSequence_0018_9920 = 1612064,
    /**
     * < Protocol Element Number (0018,9921)
     */
    ProtocolElementNumber_0018_9921 = 1612065,
    /**
     * < Protocol Element Name (0018,9922)
     */
    ProtocolElementName_0018_9922 = 1612066,
    /**
     * < Protocol Element Characteristics Summary (0018,9923)
     */
    ProtocolElementCharacteristicsSummary_0018_9923 = 1612067,
    /**
     * < Protocol Element Purpose (0018,9924)
     */
    ProtocolElementPurpose_0018_9924 = 1612068,
    /**
     * < Acquisition Motion (0018,9930)
     */
    AcquisitionMotion_0018_9930 = 1612080,
    /**
     * < Acquisition Start Location Sequence (0018,9931)
     */
    AcquisitionStartLocationSequence_0018_9931 = 1612081,
    /**
     * < Acquisition End Location Sequence (0018,9932)
     */
    AcquisitionEndLocationSequence_0018_9932 = 1612082,
    /**
     * < Reconstruction Protocol Element Specification Sequence (0018,9933)
     */
    ReconstructionProtocolElementSpecificationSequence_0018_9933 = 1612083,
    /**
     * < Reconstruction Protocol Element Sequence (0018,9934)
     */
    ReconstructionProtocolElementSequence_0018_9934 = 1612084,
    /**
     * < Storage Protocol Element Specification Sequence (0018,9935)
     */
    StorageProtocolElementSpecificationSequence_0018_9935 = 1612085,
    /**
     * < Storage Protocol Element Sequence (0018,9936)
     */
    StorageProtocolElementSequence_0018_9936 = 1612086,
    /**
     * < Requested Series Description (0018,9937)
     */
    RequestedSeriesDescription_0018_9937 = 1612087,
    /**
     * < Source Acquisition Protocol Element Number (0018,9938)
     */
    SourceAcquisitionProtocolElementNumber_0018_9938 = 1612088,
    /**
     * < Source Acquisition Beam Number (0018,9939)
     */
    SourceAcquisitionBeamNumber_0018_9939 = 1612089,
    /**
     * < Source Reconstruction Protocol Element Number (0018,993A)
     */
    SourceReconstructionProtocolElementNumber_0018_993A = 1612090,
    /**
     * < Reconstruction Start Location Sequence (0018,993B)
     */
    ReconstructionStartLocationSequence_0018_993B = 1612091,
    /**
     * < Reconstruction End Location Sequence (0018,993C)
     */
    ReconstructionEndLocationSequence_0018_993C = 1612092,
    /**
     * < Reconstruction Algorithm Sequence (0018,993D)
     */
    ReconstructionAlgorithmSequence_0018_993D = 1612093,
    /**
     * < Reconstruction Target Center Location Sequence (0018,993E)
     */
    ReconstructionTargetCenterLocationSequence_0018_993E = 1612094,
    /**
     * < Image Filter Description (0018,9941)
     */
    ImageFilterDescription_0018_9941 = 1612097,
    /**
     * < CTDIvol Notification Trigger (0018,9942)
     */
    CTDIvolNotificationTrigger_0018_9942 = 1612098,
    /**
     * < DLP Notification Trigger (0018,9943)
     */
    DLPNotificationTrigger_0018_9943 = 1612099,
    /**
     * < Auto KVP Selection Type (0018,9944)
     */
    AutoKVPSelectionType_0018_9944 = 1612100,
    /**
     * < Auto KVP Upper Bound (0018,9945)
     */
    AutoKVPUpperBound_0018_9945 = 1612101,
    /**
     * < Auto KVP Lower Bound (0018,9946)
     */
    AutoKVPLowerBound_0018_9946 = 1612102,
    /**
     * < Protocol Defined Patient Position (0018,9947)
     */
    ProtocolDefinedPatientPosition_0018_9947 = 1612103,
    /**
     * < Contributing Equipment Sequence (0018,A001)
     */
    ContributingEquipmentSequence_0018_A001 = 1613825,
    /**
     * < Contribution DateTime (0018,A002)
     */
    ContributionDateTime_0018_A002 = 1613826,
    /**
     * < Contribution Description (0018,A003)
     */
    ContributionDescription_0018_A003 = 1613827,
    /**
     * < Study Instance UID (0020,000D)
     */
    StudyInstanceUID_0020_000D = 2097165,
    /**
     * < Series Instance UID (0020,000E)
     */
    SeriesInstanceUID_0020_000E = 2097166,
    /**
     * < Study ID (0020,0010)
     */
    StudyID_0020_0010 = 2097168,
    /**
     * < Series Number (0020,0011)
     */
    SeriesNumber_0020_0011 = 2097169,
    /**
     * < Acquisition Number (0020,0012)
     */
    AcquisitionNumber_0020_0012 = 2097170,
    /**
     * < Instance Number (0020,0013)
     */
    InstanceNumber_0020_0013 = 2097171,
    /**
     * < Isotope Number (0020,0014)
     */
    IsotopeNumber_0020_0014 = 2097172,
    /**
     * < Phase Number (0020,0015)
     */
    PhaseNumber_0020_0015 = 2097173,
    /**
     * < Interval Number (0020,0016)
     */
    IntervalNumber_0020_0016 = 2097174,
    /**
     * < Time Slot Number (0020,0017)
     */
    TimeSlotNumber_0020_0017 = 2097175,
    /**
     * < Angle Number (0020,0018)
     */
    AngleNumber_0020_0018 = 2097176,
    /**
     * < Item Number (0020,0019)
     */
    ItemNumber_0020_0019 = 2097177,
    /**
     * < Patient Orientation (0020,0020)
     */
    PatientOrientation_0020_0020 = 2097184,
    /**
     * < Overlay Number (0020,0022)
     */
    OverlayNumber_0020_0022 = 2097186,
    /**
     * < Curve Number (0020,0024)
     */
    CurveNumber_0020_0024 = 2097188,
    /**
     * < LUT Number (0020,0026)
     */
    LUTNumber_0020_0026 = 2097190,
    /**
     * < Image Position (0020,0030)
     */
    ImagePosition_0020_0030 = 2097200,
    /**
     * < Image Position (Patient) (0020,0032)
     */
    ImagePositionPatient_0020_0032 = 2097202,
    /**
     * < Image Orientation (0020,0035)
     */
    ImageOrientation_0020_0035 = 2097205,
    /**
     * < Image Orientation (Patient) (0020,0037)
     */
    ImageOrientationPatient_0020_0037 = 2097207,
    /**
     * < Location (0020,0050)
     */
    Location_0020_0050 = 2097232,
    /**
     * < Frame of Reference UID (0020,0052)
     */
    FrameOfReferenceUID_0020_0052 = 2097234,
    /**
     * < Laterality (0020,0060)
     */
    Laterality_0020_0060 = 2097248,
    /**
     * < Image Laterality (0020,0062)
     */
    ImageLaterality_0020_0062 = 2097250,
    /**
     * < Image Geometry Type (0020,0070)
     */
    ImageGeometryType_0020_0070 = 2097264,
    /**
     * < Masking Image (0020,0080)
     */
    MaskingImage_0020_0080 = 2097280,
    /**
     * < Report Number (0020,00AA)
     */
    ReportNumber_0020_00AA = 2097322,
    /**
     * < Temporal Position Identifier (0020,0100)
     */
    TemporalPositionIdentifier_0020_0100 = 2097408,
    /**
     * < Number of Temporal Positions (0020,0105)
     */
    NumberOfTemporalPositions_0020_0105 = 2097413,
    /**
     * < Temporal Resolution (0020,0110)
     */
    TemporalResolution_0020_0110 = 2097424,
    /**
     * < Synchronization Frame of Reference UID (0020,0200)
     */
    SynchronizationFrameOfReferenceUID_0020_0200 = 2097664,
    /**
     * < SOP Instance UID of Concatenation Source (0020,0242)
     */
    SOPInstanceUIDOfConcatenationSource_0020_0242 = 2097730,
    /**
     * < Series in Study (0020,1000)
     */
    SeriesInStudy_0020_1000 = 2101248,
    /**
     * < Acquisitions in Series (0020,1001)
     */
    AcquisitionsInSeries_0020_1001 = 2101249,
    /**
     * < Images in Acquisition (0020,1002)
     */
    ImagesInAcquisition_0020_1002 = 2101250,
    /**
     * < Images in Series (0020,1003)
     */
    ImagesInSeries_0020_1003 = 2101251,
    /**
     * < Acquisitions in Study (0020,1004)
     */
    AcquisitionsInStudy_0020_1004 = 2101252,
    /**
     * < Images in Study (0020,1005)
     */
    ImagesInStudy_0020_1005 = 2101253,
    /**
     * < Reference (0020,1020)
     */
    Reference_0020_1020 = 2101280,
    /**
     * < Target Position Reference Indicator (0020,103F)
     */
    TargetPositionReferenceIndicator_0020_103F = 2101311,
    /**
     * < Position Reference Indicator (0020,1040)
     */
    PositionReferenceIndicator_0020_1040 = 2101312,
    /**
     * < Slice Location (0020,1041)
     */
    SliceLocation_0020_1041 = 2101313,
    /**
     * < Other Study Numbers (0020,1070)
     */
    OtherStudyNumbers_0020_1070 = 2101360,
    /**
     * < Number of Patient Related Studies (0020,1200)
     */
    NumberOfPatientRelatedStudies_0020_1200 = 2101760,
    /**
     * < Number of Patient Related Series (0020,1202)
     */
    NumberOfPatientRelatedSeries_0020_1202 = 2101762,
    /**
     * < Number of Patient Related Instances (0020,1204)
     */
    NumberOfPatientRelatedInstances_0020_1204 = 2101764,
    /**
     * < Number of Study Related Series (0020,1206)
     */
    NumberOfStudyRelatedSeries_0020_1206 = 2101766,
    /**
     * < Number of Study Related Instances (0020,1208)
     */
    NumberOfStudyRelatedInstances_0020_1208 = 2101768,
    /**
     * < Number of Series Related Instances (0020,1209)
     */
    NumberOfSeriesRelatedInstances_0020_1209 = 2101769,
    /**
     * < Source Image IDs (0020,3100)
     */
    SourceImageIDs_0020_3100 = 2109696,
    /**
     * < Modifying Device ID (0020,3401)
     */
    ModifyingDeviceID_0020_3401 = 2110465,
    /**
     * < Modified Image ID (0020,3402)
     */
    ModifiedImageID_0020_3402 = 2110466,
    /**
     * < Modified Image Date (0020,3403)
     */
    ModifiedImageDate_0020_3403 = 2110467,
    /**
     * < Modifying Device Manufacturer (0020,3404)
     */
    ModifyingDeviceManufacturer_0020_3404 = 2110468,
    /**
     * < Modified Image Time (0020,3405)
     */
    ModifiedImageTime_0020_3405 = 2110469,
    /**
     * < Modified Image Description (0020,3406)
     */
    ModifiedImageDescription_0020_3406 = 2110470,
    /**
     * < Image Comments (0020,4000)
     */
    ImageComments_0020_4000 = 2113536,
    /**
     * < Original Image Identification (0020,5000)
     */
    OriginalImageIdentification_0020_5000 = 2117632,
    /**
     * < Original Image Identification Nomenclature (0020,5002)
     */
    OriginalImageIdentificationNomenclature_0020_5002 = 2117634,
    /**
     * < Stack ID (0020,9056)
     */
    StackID_0020_9056 = 2134102,
    /**
     * < In-Stack Position Number (0020,9057)
     */
    InStackPositionNumber_0020_9057 = 2134103,
    /**
     * < Frame Anatomy Sequence (0020,9071)
     */
    FrameAnatomySequence_0020_9071 = 2134129,
    /**
     * < Frame Laterality (0020,9072)
     */
    FrameLaterality_0020_9072 = 2134130,
    /**
     * < Frame Content Sequence (0020,9111)
     */
    FrameContentSequence_0020_9111 = 2134289,
    /**
     * < Plane Position Sequence (0020,9113)
     */
    PlanePositionSequence_0020_9113 = 2134291,
    /**
     * < Plane Orientation Sequence (0020,9116)
     */
    PlaneOrientationSequence_0020_9116 = 2134294,
    /**
     * < Temporal Position Index (0020,9128)
     */
    TemporalPositionIndex_0020_9128 = 2134312,
    /**
     * < Nominal Cardiac Trigger Delay Time (0020,9153)
     */
    NominalCardiacTriggerDelayTime_0020_9153 = 2134355,
    /**
     * < Nominal Cardiac Trigger Time Prior To R-Peak (0020,9154)
     */
    NominalCardiacTriggerTimePriorToRPeak_0020_9154 = 2134356,
    /**
     * < Actual Cardiac Trigger Time Prior To R-Peak (0020,9155)
     */
    ActualCardiacTriggerTimePriorToRPeak_0020_9155 = 2134357,
    /**
     * < Frame Acquisition Number (0020,9156)
     */
    FrameAcquisitionNumber_0020_9156 = 2134358,
    /**
     * < Dimension Index Values (0020,9157)
     */
    DimensionIndexValues_0020_9157 = 2134359,
    /**
     * < Frame Comments (0020,9158)
     */
    FrameComments_0020_9158 = 2134360,
    /**
     * < Concatenation UID (0020,9161)
     */
    ConcatenationUID_0020_9161 = 2134369,
    /**
     * < In-concatenation Number (0020,9162)
     */
    InConcatenationNumber_0020_9162 = 2134370,
    /**
     * < In-concatenation Total Number (0020,9163)
     */
    InConcatenationTotalNumber_0020_9163 = 2134371,
    /**
     * < Dimension Organization UID (0020,9164)
     */
    DimensionOrganizationUID_0020_9164 = 2134372,
    /**
     * < Dimension Index Pointer (0020,9165)
     */
    DimensionIndexPointer_0020_9165 = 2134373,
    /**
     * < Functional Group Pointer (0020,9167)
     */
    FunctionalGroupPointer_0020_9167 = 2134375,
    /**
     * < Unassigned Shared Converted Attributes Sequence (0020,9170)
     */
    UnassignedSharedConvertedAttributesSequence_0020_9170 = 2134384,
    /**
     * < Unassigned Per-Frame Converted Attributes Sequence (0020,9171)
     */
    UnassignedPerFrameConvertedAttributesSequence_0020_9171 = 2134385,
    /**
     * < Conversion Source Attributes Sequence (0020,9172)
     */
    ConversionSourceAttributesSequence_0020_9172 = 2134386,
    /**
     * < Dimension Index Private Creator (0020,9213)
     */
    DimensionIndexPrivateCreator_0020_9213 = 2134547,
    /**
     * < Dimension Organization Sequence (0020,9221)
     */
    DimensionOrganizationSequence_0020_9221 = 2134561,
    /**
     * < Dimension Index Sequence (0020,9222)
     */
    DimensionIndexSequence_0020_9222 = 2134562,
    /**
     * < Concatenation Frame Offset Number (0020,9228)
     */
    ConcatenationFrameOffsetNumber_0020_9228 = 2134568,
    /**
     * < Functional Group Private Creator (0020,9238)
     */
    FunctionalGroupPrivateCreator_0020_9238 = 2134584,
    /**
     * < Nominal Percentage of Cardiac Phase (0020,9241)
     */
    NominalPercentageOfCardiacPhase_0020_9241 = 2134593,
    /**
     * < Nominal Percentage of Respiratory Phase (0020,9245)
     */
    NominalPercentageOfRespiratoryPhase_0020_9245 = 2134597,
    /**
     * < Starting Respiratory Amplitude (0020,9246)
     */
    StartingRespiratoryAmplitude_0020_9246 = 2134598,
    /**
     * < Starting Respiratory Phase (0020,9247)
     */
    StartingRespiratoryPhase_0020_9247 = 2134599,
    /**
     * < Ending Respiratory Amplitude (0020,9248)
     */
    EndingRespiratoryAmplitude_0020_9248 = 2134600,
    /**
     * < Ending Respiratory Phase (0020,9249)
     */
    EndingRespiratoryPhase_0020_9249 = 2134601,
    /**
     * < Respiratory Trigger Type (0020,9250)
     */
    RespiratoryTriggerType_0020_9250 = 2134608,
    /**
     * < R-R Interval Time Nominal (0020,9251)
     */
    RRIntervalTimeNominal_0020_9251 = 2134609,
    /**
     * < Actual Cardiac Trigger Delay Time (0020,9252)
     */
    ActualCardiacTriggerDelayTime_0020_9252 = 2134610,
    /**
     * < Respiratory Synchronization Sequence (0020,9253)
     */
    RespiratorySynchronizationSequence_0020_9253 = 2134611,
    /**
     * < Respiratory Interval Time (0020,9254)
     */
    RespiratoryIntervalTime_0020_9254 = 2134612,
    /**
     * < Nominal Respiratory Trigger Delay Time (0020,9255)
     */
    NominalRespiratoryTriggerDelayTime_0020_9255 = 2134613,
    /**
     * < Respiratory Trigger Delay Threshold (0020,9256)
     */
    RespiratoryTriggerDelayThreshold_0020_9256 = 2134614,
    /**
     * < Actual Respiratory Trigger Delay Time (0020,9257)
     */
    ActualRespiratoryTriggerDelayTime_0020_9257 = 2134615,
    /**
     * < Image Position (Volume) (0020,9301)
     */
    ImagePositionVolume_0020_9301 = 2134785,
    /**
     * < Image Orientation (Volume) (0020,9302)
     */
    ImageOrientationVolume_0020_9302 = 2134786,
    /**
     * < Ultrasound Acquisition Geometry (0020,9307)
     */
    UltrasoundAcquisitionGeometry_0020_9307 = 2134791,
    /**
     * < Apex Position (0020,9308)
     */
    ApexPosition_0020_9308 = 2134792,
    /**
     * < Volume to Transducer Mapping Matrix (0020,9309)
     */
    VolumeToTransducerMappingMatrix_0020_9309 = 2134793,
    /**
     * < Volume to Table Mapping Matrix (0020,930A)
     */
    VolumeToTableMappingMatrix_0020_930A = 2134794,
    /**
     * < Volume to Transducer Relationship (0020,930B)
     */
    VolumeToTransducerRelationship_0020_930B = 2134795,
    /**
     * < Patient Frame of Reference Source (0020,930C)
     */
    PatientFrameOfReferenceSource_0020_930C = 2134796,
    /**
     * < Temporal Position Time Offset (0020,930D)
     */
    TemporalPositionTimeOffset_0020_930D = 2134797,
    /**
     * < Plane Position (Volume) Sequence (0020,930E)
     */
    PlanePositionVolumeSequence_0020_930E = 2134798,
    /**
     * < Plane Orientation (Volume) Sequence (0020,930F)
     */
    PlaneOrientationVolumeSequence_0020_930F = 2134799,
    /**
     * < Temporal Position Sequence (0020,9310)
     */
    TemporalPositionSequence_0020_9310 = 2134800,
    /**
     * < Dimension Organization Type (0020,9311)
     */
    DimensionOrganizationType_0020_9311 = 2134801,
    /**
     * < Volume Frame of Reference UID (0020,9312)
     */
    VolumeFrameOfReferenceUID_0020_9312 = 2134802,
    /**
     * < Table Frame of Reference UID (0020,9313)
     */
    TableFrameOfReferenceUID_0020_9313 = 2134803,
    /**
     * < Dimension Description Label (0020,9421)
     */
    DimensionDescriptionLabel_0020_9421 = 2135073,
    /**
     * < Patient Orientation in Frame Sequence (0020,9450)
     */
    PatientOrientationInFrameSequence_0020_9450 = 2135120,
    /**
     * < Frame Label (0020,9453)
     */
    FrameLabel_0020_9453 = 2135123,
    /**
     * < Acquisition Index (0020,9518)
     */
    AcquisitionIndex_0020_9518 = 2135320,
    /**
     * < Contributing SOP Instances Reference Sequence (0020,9529)
     */
    ContributingSOPInstancesReferenceSequence_0020_9529 = 2135337,
    /**
     * < Reconstruction Index (0020,9536)
     */
    ReconstructionIndex_0020_9536 = 2135350,
    /**
     * < Light Path Filter Pass-Through Wavelength (0022,0001)
     */
    LightPathFilterPassThroughWavelength_0022_0001 = 2228225,
    /**
     * < Light Path Filter Pass Band (0022,0002)
     */
    LightPathFilterPassBand_0022_0002 = 2228226,
    /**
     * < Image Path Filter Pass-Through Wavelength (0022,0003)
     */
    ImagePathFilterPassThroughWavelength_0022_0003 = 2228227,
    /**
     * < Image Path Filter Pass Band (0022,0004)
     */
    ImagePathFilterPassBand_0022_0004 = 2228228,
    /**
     * < Patient Eye Movement Commanded (0022,0005)
     */
    PatientEyeMovementCommanded_0022_0005 = 2228229,
    /**
     * < Patient Eye Movement Command Code Sequence (0022,0006)
     */
    PatientEyeMovementCommandCodeSequence_0022_0006 = 2228230,
    /**
     * < Spherical Lens Power (0022,0007)
     */
    SphericalLensPower_0022_0007 = 2228231,
    /**
     * < Cylinder Lens Power (0022,0008)
     */
    CylinderLensPower_0022_0008 = 2228232,
    /**
     * < Cylinder Axis (0022,0009)
     */
    CylinderAxis_0022_0009 = 2228233,
    /**
     * < Emmetropic Magnification (0022,000A)
     */
    EmmetropicMagnification_0022_000A = 2228234,
    /**
     * < Intra Ocular Pressure (0022,000B)
     */
    IntraOcularPressure_0022_000B = 2228235,
    /**
     * < Horizontal Field of View (0022,000C)
     */
    HorizontalFieldOfView_0022_000C = 2228236,
    /**
     * < Pupil Dilated (0022,000D)
     */
    PupilDilated_0022_000D = 2228237,
    /**
     * < Degree of Dilation (0022,000E)
     */
    DegreeOfDilation_0022_000E = 2228238,
    /**
     * < Stereo Baseline Angle (0022,0010)
     */
    StereoBaselineAngle_0022_0010 = 2228240,
    /**
     * < Stereo Baseline Displacement (0022,0011)
     */
    StereoBaselineDisplacement_0022_0011 = 2228241,
    /**
     * < Stereo Horizontal Pixel Offset (0022,0012)
     */
    StereoHorizontalPixelOffset_0022_0012 = 2228242,
    /**
     * < Stereo Vertical Pixel Offset (0022,0013)
     */
    StereoVerticalPixelOffset_0022_0013 = 2228243,
    /**
     * < Stereo Rotation (0022,0014)
     */
    StereoRotation_0022_0014 = 2228244,
    /**
     * < Acquisition Device Type Code Sequence (0022,0015)
     */
    AcquisitionDeviceTypeCodeSequence_0022_0015 = 2228245,
    /**
     * < Illumination Type Code Sequence (0022,0016)
     */
    IlluminationTypeCodeSequence_0022_0016 = 2228246,
    /**
     * < Light Path Filter Type Stack Code Sequence (0022,0017)
     */
    LightPathFilterTypeStackCodeSequence_0022_0017 = 2228247,
    /**
     * < Image Path Filter Type Stack Code Sequence (0022,0018)
     */
    ImagePathFilterTypeStackCodeSequence_0022_0018 = 2228248,
    /**
     * < Lenses Code Sequence (0022,0019)
     */
    LensesCodeSequence_0022_0019 = 2228249,
    /**
     * < Channel Description Code Sequence (0022,001A)
     */
    ChannelDescriptionCodeSequence_0022_001A = 2228250,
    /**
     * < Refractive State Sequence (0022,001B)
     */
    RefractiveStateSequence_0022_001B = 2228251,
    /**
     * < Mydriatic Agent Code Sequence (0022,001C)
     */
    MydriaticAgentCodeSequence_0022_001C = 2228252,
    /**
     * < Relative Image Position Code Sequence (0022,001D)
     */
    RelativeImagePositionCodeSequence_0022_001D = 2228253,
    /**
     * < Camera Angle of View (0022,001E)
     */
    CameraAngleOfView_0022_001E = 2228254,
    /**
     * < Stereo Pairs Sequence (0022,0020)
     */
    StereoPairsSequence_0022_0020 = 2228256,
    /**
     * < Left Image Sequence (0022,0021)
     */
    LeftImageSequence_0022_0021 = 2228257,
    /**
     * < Right Image Sequence (0022,0022)
     */
    RightImageSequence_0022_0022 = 2228258,
    /**
     * < Stereo Pairs Present (0022,0028)
     */
    StereoPairsPresent_0022_0028 = 2228264,
    /**
     * < Axial Length of the Eye (0022,0030)
     */
    AxialLengthOfTheEye_0022_0030 = 2228272,
    /**
     * < Ophthalmic Frame Location Sequence (0022,0031)
     */
    OphthalmicFrameLocationSequence_0022_0031 = 2228273,
    /**
     * < Reference Coordinates (0022,0032)
     */
    ReferenceCoordinates_0022_0032 = 2228274,
    /**
     * < Depth Spatial Resolution (0022,0035)
     */
    DepthSpatialResolution_0022_0035 = 2228277,
    /**
     * < Maximum Depth Distortion (0022,0036)
     */
    MaximumDepthDistortion_0022_0036 = 2228278,
    /**
     * < Along-scan Spatial Resolution (0022,0037)
     */
    AlongScanSpatialResolution_0022_0037 = 2228279,
    /**
     * < Maximum Along-scan Distortion (0022,0038)
     */
    MaximumAlongScanDistortion_0022_0038 = 2228280,
    /**
     * < Ophthalmic Image Orientation (0022,0039)
     */
    OphthalmicImageOrientation_0022_0039 = 2228281,
    /**
     * < Depth of Transverse Image (0022,0041)
     */
    DepthOfTransverseImage_0022_0041 = 2228289,
    /**
     * < Mydriatic Agent Concentration Units Sequence (0022,0042)
     */
    MydriaticAgentConcentrationUnitsSequence_0022_0042 = 2228290,
    /**
     * < Across-scan Spatial Resolution (0022,0048)
     */
    AcrossScanSpatialResolution_0022_0048 = 2228296,
    /**
     * < Maximum Across-scan Distortion (0022,0049)
     */
    MaximumAcrossScanDistortion_0022_0049 = 2228297,
    /**
     * < Mydriatic Agent Concentration (0022,004E)
     */
    MydriaticAgentConcentration_0022_004E = 2228302,
    /**
     * < Illumination Wave Length (0022,0055)
     */
    IlluminationWaveLength_0022_0055 = 2228309,
    /**
     * < Illumination Power (0022,0056)
     */
    IlluminationPower_0022_0056 = 2228310,
    /**
     * < Illumination Bandwidth (0022,0057)
     */
    IlluminationBandwidth_0022_0057 = 2228311,
    /**
     * < Mydriatic Agent Sequence (0022,0058)
     */
    MydriaticAgentSequence_0022_0058 = 2228312,
    /**
     * < Ophthalmic Axial Measurements Right Eye Sequence (0022,1007)
     */
    OphthalmicAxialMeasurementsRightEyeSequence_0022_1007 = 2232327,
    /**
     * < Ophthalmic Axial Measurements Left Eye Sequence (0022,1008)
     */
    OphthalmicAxialMeasurementsLeftEyeSequence_0022_1008 = 2232328,
    /**
     * < Ophthalmic Axial Measurements Device Type (0022,1009)
     */
    OphthalmicAxialMeasurementsDeviceType_0022_1009 = 2232329,
    /**
     * < Ophthalmic Axial Length Measurements Type (0022,1010)
     */
    OphthalmicAxialLengthMeasurementsType_0022_1010 = 2232336,
    /**
     * < Ophthalmic Axial Length Sequence (0022,1012)
     */
    OphthalmicAxialLengthSequence_0022_1012 = 2232338,
    /**
     * < Ophthalmic Axial Length (0022,1019)
     */
    OphthalmicAxialLength_0022_1019 = 2232345,
    /**
     * < Lens Status Code Sequence (0022,1024)
     */
    LensStatusCodeSequence_0022_1024 = 2232356,
    /**
     * < Vitreous Status Code Sequence (0022,1025)
     */
    VitreousStatusCodeSequence_0022_1025 = 2232357,
    /**
     * < IOL Formula Code Sequence (0022,1028)
     */
    IOLFormulaCodeSequence_0022_1028 = 2232360,
    /**
     * < IOL Formula Detail (0022,1029)
     */
    IOLFormulaDetail_0022_1029 = 2232361,
    /**
     * < Keratometer Index (0022,1033)
     */
    KeratometerIndex_0022_1033 = 2232371,
    /**
     * < Source of Ophthalmic Axial Length Code Sequence (0022,1035)
     */
    SourceOfOphthalmicAxialLengthCodeSequence_0022_1035 = 2232373,
    /**
     * < Source of Corneal Size Data Code Sequence (0022,1036)
     */
    SourceOfCornealSizeDataCodeSequence_0022_1036 = 2232374,
    /**
     * < Target Refraction (0022,1037)
     */
    TargetRefraction_0022_1037 = 2232375,
    /**
     * < Refractive Procedure Occurred (0022,1039)
     */
    RefractiveProcedureOccurred_0022_1039 = 2232377,
    /**
     * < Refractive Surgery Type Code Sequence (0022,1040)
     */
    RefractiveSurgeryTypeCodeSequence_0022_1040 = 2232384,
    /**
     * < Ophthalmic Ultrasound Method Code Sequence (0022,1044)
     */
    OphthalmicUltrasoundMethodCodeSequence_0022_1044 = 2232388,
    /**
     * < Ophthalmic Axial Length Measurements Sequence (0022,1050)
     */
    OphthalmicAxialLengthMeasurementsSequence_0022_1050 = 2232400,
    /**
     * < IOL Power (0022,1053)
     */
    IOLPower_0022_1053 = 2232403,
    /**
     * < Predicted Refractive Error (0022,1054)
     */
    PredictedRefractiveError_0022_1054 = 2232404,
    /**
     * < Ophthalmic Axial Length Velocity (0022,1059)
     */
    OphthalmicAxialLengthVelocity_0022_1059 = 2232409,
    /**
     * < Lens Status Description (0022,1065)
     */
    LensStatusDescription_0022_1065 = 2232421,
    /**
     * < Vitreous Status Description (0022,1066)
     */
    VitreousStatusDescription_0022_1066 = 2232422,
    /**
     * < IOL Power Sequence (0022,1090)
     */
    IOLPowerSequence_0022_1090 = 2232464,
    /**
     * < Lens Constant Sequence (0022,1092)
     */
    LensConstantSequence_0022_1092 = 2232466,
    /**
     * < IOL Manufacturer (0022,1093)
     */
    IOLManufacturer_0022_1093 = 2232467,
    /**
     * < Lens Constant Description (0022,1094)
     */
    LensConstantDescription_0022_1094 = 2232468,
    /**
     * < Implant Name (0022,1095)
     */
    ImplantName_0022_1095 = 2232469,
    /**
     * < Keratometry Measurement Type Code Sequence (0022,1096)
     */
    KeratometryMeasurementTypeCodeSequence_0022_1096 = 2232470,
    /**
     * < Implant Part Number (0022,1097)
     */
    ImplantPartNumber_0022_1097 = 2232471,
    /**
     * < Referenced Ophthalmic Axial Measurements Sequence (0022,1100)
     */
    ReferencedOphthalmicAxialMeasurementsSequence_0022_1100 = 2232576,
    /**
     * < Ophthalmic Axial Length Measurements Segment Name Code Sequence (0022,1101)
     */
    OphthalmicAxialLengthMeasurementsSegmentNameCodeSequence_0022_1101 = 2232577,
    /**
     * < Refractive Error Before Refractive Surgery Code Sequence (0022,1103)
     */
    RefractiveErrorBeforeRefractiveSurgeryCodeSequence_0022_1103 = 2232579,
    /**
     * < IOL Power For Exact Emmetropia (0022,1121)
     */
    IOLPowerForExactEmmetropia_0022_1121 = 2232609,
    /**
     * < IOL Power For Exact Target Refraction (0022,1122)
     */
    IOLPowerForExactTargetRefraction_0022_1122 = 2232610,
    /**
     * < Anterior Chamber Depth Definition Code Sequence (0022,1125)
     */
    AnteriorChamberDepthDefinitionCodeSequence_0022_1125 = 2232613,
    /**
     * < Lens Thickness Sequence (0022,1127)
     */
    LensThicknessSequence_0022_1127 = 2232615,
    /**
     * < Anterior Chamber Depth Sequence (0022,1128)
     */
    AnteriorChamberDepthSequence_0022_1128 = 2232616,
    /**
     * < Lens Thickness (0022,1130)
     */
    LensThickness_0022_1130 = 2232624,
    /**
     * < Anterior Chamber Depth (0022,1131)
     */
    AnteriorChamberDepth_0022_1131 = 2232625,
    /**
     * < Source of Lens Thickness Data Code Sequence (0022,1132)
     */
    SourceOfLensThicknessDataCodeSequence_0022_1132 = 2232626,
    /**
     * < Source of Anterior Chamber Depth Data Code Sequence (0022,1133)
     */
    SourceOfAnteriorChamberDepthDataCodeSequence_0022_1133 = 2232627,
    /**
     * < Source of Refractive Measurements Sequence (0022,1134)
     */
    SourceOfRefractiveMeasurementsSequence_0022_1134 = 2232628,
    /**
     * < Source of Refractive Measurements Code Sequence (0022,1135)
     */
    SourceOfRefractiveMeasurementsCodeSequence_0022_1135 = 2232629,
    /**
     * < Ophthalmic Axial Length Measurement Modified (0022,1140)
     */
    OphthalmicAxialLengthMeasurementModified_0022_1140 = 2232640,
    /**
     * < Ophthalmic Axial Length Data Source Code Sequence (0022,1150)
     */
    OphthalmicAxialLengthDataSourceCodeSequence_0022_1150 = 2232656,
    /**
     * < Ophthalmic Axial Length Acquisition Method Code Sequence (0022,1153)
     */
    OphthalmicAxialLengthAcquisitionMethodCodeSequence_0022_1153 = 2232659,
    /**
     * < Signal to Noise Ratio (0022,1155)
     */
    SignalToNoiseRatio_0022_1155 = 2232661,
    /**
     * < Ophthalmic Axial Length Data Source Description (0022,1159)
     */
    OphthalmicAxialLengthDataSourceDescription_0022_1159 = 2232665,
    /**
     * < Ophthalmic Axial Length Measurements Total Length Sequence (0022,1210)
     */
    OphthalmicAxialLengthMeasurementsTotalLengthSequence_0022_1210 = 2232848,
    /**
     * < Ophthalmic Axial Length Measurements Segmental Length Sequence (0022,1211)
     */
    OphthalmicAxialLengthMeasurementsSegmentalLengthSequence_0022_1211 = 2232849,
    /**
     * < Ophthalmic Axial Length Measurements Length Summation Sequence (0022,1212)
     */
    OphthalmicAxialLengthMeasurementsLengthSummationSequence_0022_1212 = 2232850,
    /**
     * < Ultrasound Ophthalmic Axial Length Measurements Sequence (0022,1220)
     */
    UltrasoundOphthalmicAxialLengthMeasurementsSequence_0022_1220 = 2232864,
    /**
     * < Optical Ophthalmic Axial Length Measurements Sequence (0022,1225)
     */
    OpticalOphthalmicAxialLengthMeasurementsSequence_0022_1225 = 2232869,
    /**
     * < Ultrasound Selected Ophthalmic Axial Length Sequence (0022,1230)
     */
    UltrasoundSelectedOphthalmicAxialLengthSequence_0022_1230 = 2232880,
    /**
     * < Ophthalmic Axial Length Selection Method Code Sequence (0022,1250)
     */
    OphthalmicAxialLengthSelectionMethodCodeSequence_0022_1250 = 2232912,
    /**
     * < Optical Selected Ophthalmic Axial Length Sequence (0022,1255)
     */
    OpticalSelectedOphthalmicAxialLengthSequence_0022_1255 = 2232917,
    /**
     * < Selected Segmental Ophthalmic Axial Length Sequence (0022,1257)
     */
    SelectedSegmentalOphthalmicAxialLengthSequence_0022_1257 = 2232919,
    /**
     * < Selected Total Ophthalmic Axial Length Sequence (0022,1260)
     */
    SelectedTotalOphthalmicAxialLengthSequence_0022_1260 = 2232928,
    /**
     * < Ophthalmic Axial Length Quality Metric Sequence (0022,1262)
     */
    OphthalmicAxialLengthQualityMetricSequence_0022_1262 = 2232930,
    /**
     * < Ophthalmic Axial Length Quality Metric Type Code Sequence (0022,1265)
     */
    OphthalmicAxialLengthQualityMetricTypeCodeSequence_0022_1265 = 2232933,
    /**
     * < Ophthalmic Axial Length Quality Metric Type Description (0022,1273)
     */
    OphthalmicAxialLengthQualityMetricTypeDescription_0022_1273 = 2232947,
    /**
     * < Intraocular Lens Calculations Right Eye Sequence (0022,1300)
     */
    IntraocularLensCalculationsRightEyeSequence_0022_1300 = 2233088,
    /**
     * < Intraocular Lens Calculations Left Eye Sequence (0022,1310)
     */
    IntraocularLensCalculationsLeftEyeSequence_0022_1310 = 2233104,
    /**
     * < Referenced Ophthalmic Axial Length Measurement QC Image Sequence (0022,1330)
     */
    ReferencedOphthalmicAxialLengthMeasurementQCImageSequence_0022_1330 = 2233136,
    /**
     * < Ophthalmic Mapping Device Type (0022,1415)
     */
    OphthalmicMappingDeviceType_0022_1415 = 2233365,
    /**
     * < Acquisition Method Code Sequence (0022,1420)
     */
    AcquisitionMethodCodeSequence_0022_1420 = 2233376,
    /**
     * < Acquisition Method Algorithm Sequence (0022,1423)
     */
    AcquisitionMethodAlgorithmSequence_0022_1423 = 2233379,
    /**
     * < Ophthalmic Thickness Map Type Code Sequence (0022,1436)
     */
    OphthalmicThicknessMapTypeCodeSequence_0022_1436 = 2233398,
    /**
     * < Ophthalmic Thickness Mapping Normals Sequence (0022,1443)
     */
    OphthalmicThicknessMappingNormalsSequence_0022_1443 = 2233411,
    /**
     * < Retinal Thickness Definition Code Sequence (0022,1445)
     */
    RetinalThicknessDefinitionCodeSequence_0022_1445 = 2233413,
    /**
     * < Pixel Value Mapping to Coded Concept Sequence (0022,1450)
     */
    PixelValueMappingToCodedConceptSequence_0022_1450 = 2233424,
    /**
     * < Mapped Pixel Value (0022,1452)
     */
    MappedPixelValue_0022_1452 = 2233426,
    /**
     * < Pixel Value Mapping Explanation (0022,1454)
     */
    PixelValueMappingExplanation_0022_1454 = 2233428,
    /**
     * < Ophthalmic Thickness Map Quality Threshold Sequence (0022,1458)
     */
    OphthalmicThicknessMapQualityThresholdSequence_0022_1458 = 2233432,
    /**
     * < Ophthalmic Thickness Map Threshold Quality Rating (0022,1460)
     */
    OphthalmicThicknessMapThresholdQualityRating_0022_1460 = 2233440,
    /**
     * < Anatomic Structure Reference Point (0022,1463)
     */
    AnatomicStructureReferencePoint_0022_1463 = 2233443,
    /**
     * < Registration to Localizer Sequence (0022,1465)
     */
    RegistrationToLocalizerSequence_0022_1465 = 2233445,
    /**
     * < Registered Localizer Units (0022,1466)
     */
    RegisteredLocalizerUnits_0022_1466 = 2233446,
    /**
     * < Registered Localizer Top Left Hand Corner (0022,1467)
     */
    RegisteredLocalizerTopLeftHandCorner_0022_1467 = 2233447,
    /**
     * < Registered Localizer Bottom Right Hand Corner (0022,1468)
     */
    RegisteredLocalizerBottomRightHandCorner_0022_1468 = 2233448,
    /**
     * < Ophthalmic Thickness Map Quality Rating Sequence (0022,1470)
     */
    OphthalmicThicknessMapQualityRatingSequence_0022_1470 = 2233456,
    /**
     * < Relevant OPT Attributes Sequence (0022,1472)
     */
    RelevantOPTAttributesSequence_0022_1472 = 2233458,
    /**
     * < Transformation Method Code Sequence (0022,1512)
     */
    TransformationMethodCodeSequence_0022_1512 = 2233618,
    /**
     * < Transformation Algorithm Sequence (0022,1513)
     */
    TransformationAlgorithmSequence_0022_1513 = 2233619,
    /**
     * < Ophthalmic Axial Length Method (0022,1515)
     */
    OphthalmicAxialLengthMethod_0022_1515 = 2233621,
    /**
     * < Ophthalmic FOV (0022,1517)
     */
    OphthalmicFOV_0022_1517 = 2233623,
    /**
     * < Two Dimensional to Three Dimensional Map Sequence (0022,1518)
     */
    TwoDimensionalToThreeDimensionalMapSequence_0022_1518 = 2233624,
    /**
     * < Wide Field Ophthalmic Photography Quality Rating Sequence (0022,1525)
     */
    WideFieldOphthalmicPhotographyQualityRatingSequence_0022_1525 = 2233637,
    /**
     * < Wide Field Ophthalmic Photography Quality Threshold Sequence (0022,1526)
     */
    WideFieldOphthalmicPhotographyQualityThresholdSequence_0022_1526 = 2233638,
    /**
     * < Wide Field Ophthalmic Photography Threshold Quality Rating (0022,1527)
     */
    WideFieldOphthalmicPhotographyThresholdQualityRating_0022_1527 = 2233639,
    /**
     * < X Coordinates Center Pixel View Angle (0022,1528)
     */
    XCoordinatesCenterPixelViewAngle_0022_1528 = 2233640,
    /**
     * < Y Coordinates Center Pixel View Angle (0022,1529)
     */
    YCoordinatesCenterPixelViewAngle_0022_1529 = 2233641,
    /**
     * < Number of Map Points (0022,1530)
     */
    NumberOfMapPoints_0022_1530 = 2233648,
    /**
     * < Two Dimensional to Three Dimensional Map Data (0022,1531)
     */
    TwoDimensionalToThreeDimensionalMapData_0022_1531 = 2233649,
    /**
     * < Derivation Algorithm Sequence (0022,1612)
     */
    DerivationAlgorithmSequence_0022_1612 = 2233874,
    /**
     * < Ophthalmic Image Type Code Sequence (0022,1615)
     */
    OphthalmicImageTypeCodeSequence_0022_1615 = 2233877,
    /**
     * < Ophthalmic Image Type Description (0022,1616)
     */
    OphthalmicImageTypeDescription_0022_1616 = 2233878,
    /**
     * < Scan Pattern Type Code Sequence (0022,1618)
     */
    ScanPatternTypeCodeSequence_0022_1618 = 2233880,
    /**
     * < Referenced Surface Mesh Identification Sequence (0022,1620)
     */
    ReferencedSurfaceMeshIdentificationSequence_0022_1620 = 2233888,
    /**
     * < Ophthalmic Volumetric Properties Flag (0022,1622)
     */
    OphthalmicVolumetricPropertiesFlag_0022_1622 = 2233890,
    /**
     * < Ophthalmic Anatomic Reference Point X-Coordinate (0022,1624)
     */
    OphthalmicAnatomicReferencePointXCoordinate_0022_1624 = 2233892,
    /**
     * < Ophthalmic Anatomic Reference Point Y-Coordinate (0022,1626)
     */
    OphthalmicAnatomicReferencePointYCoordinate_0022_1626 = 2233894,
    /**
     * < Ophthalmic En Face Image Quality Rating Sequence (0022,1628)
     */
    OphthalmicEnFaceImageQualityRatingSequence_0022_1628 = 2233896,
    /**
     * < Quality Threshold (0022,1630)
     */
    QualityThreshold_0022_1630 = 2233904,
    /**
     * < OCT B-scan Analysis Acquisition Parameters Sequence (0022,1640)
     */
    OCTBscanAnalysisAcquisitionParametersSequence_0022_1640 = 2233920,
    /**
     * < Number of B-scans Per Frame (0022,1642)
     */
    NumberofBscansPerFrame_0022_1642 = 2233922,
    /**
     * < B-scan Slab Thickness (0022,1643)
     */
    BscanSlabThickness_0022_1643 = 2233923,
    /**
     * < Distance Between B-scan Slabs (0022,1644)
     */
    DistanceBetweenBscanSlabs_0022_1644 = 2233924,
    /**
     * < B-scan Cycle Time (0022,1645)
     */
    BscanCycleTime_0022_1645 = 2233925,
    /**
     * < B-scan Cycle Time Vector (0022,1646)
     */
    BscanCycleTimeVector_0022_1646 = 2233926,
    /**
     * < A-scan Rate (0022,1649)
     */
    AscanRate_0022_1649 = 2233929,
    /**
     * < B-scan Rate (0022,1650)
     */
    BscanRate_0022_1650 = 2233936,
    /**
     * < Surface Mesh Z-Pixel Offset (0022,1658)
     */
    SurfaceMeshZPixelOffset_0022_1658 = 2233944,
    /**
     * < Visual Field Horizontal Extent (0024,0010)
     */
    VisualFieldHorizontalExtent_0024_0010 = 2359312,
    /**
     * < Visual Field Vertical Extent (0024,0011)
     */
    VisualFieldVerticalExtent_0024_0011 = 2359313,
    /**
     * < Visual Field Shape (0024,0012)
     */
    VisualFieldShape_0024_0012 = 2359314,
    /**
     * < Screening Test Mode Code Sequence (0024,0016)
     */
    ScreeningTestModeCodeSequence_0024_0016 = 2359318,
    /**
     * < Maximum Stimulus Luminance (0024,0018)
     */
    MaximumStimulusLuminance_0024_0018 = 2359320,
    /**
     * < Background Luminance (0024,0020)
     */
    BackgroundLuminance_0024_0020 = 2359328,
    /**
     * < Stimulus Color Code Sequence (0024,0021)
     */
    StimulusColorCodeSequence_0024_0021 = 2359329,
    /**
     * < Background Illumination Color Code Sequence (0024,0024)
     */
    BackgroundIlluminationColorCodeSequence_0024_0024 = 2359332,
    /**
     * < Stimulus Area (0024,0025)
     */
    StimulusArea_0024_0025 = 2359333,
    /**
     * < Stimulus Presentation Time (0024,0028)
     */
    StimulusPresentationTime_0024_0028 = 2359336,
    /**
     * < Fixation Sequence (0024,0032)
     */
    FixationSequence_0024_0032 = 2359346,
    /**
     * < Fixation Monitoring Code Sequence (0024,0033)
     */
    FixationMonitoringCodeSequence_0024_0033 = 2359347,
    /**
     * < Visual Field Catch Trial Sequence (0024,0034)
     */
    VisualFieldCatchTrialSequence_0024_0034 = 2359348,
    /**
     * < Fixation Checked Quantity (0024,0035)
     */
    FixationCheckedQuantity_0024_0035 = 2359349,
    /**
     * < Patient Not Properly Fixated Quantity (0024,0036)
     */
    PatientNotProperlyFixatedQuantity_0024_0036 = 2359350,
    /**
     * < Presented Visual Stimuli Data Flag (0024,0037)
     */
    PresentedVisualStimuliDataFlag_0024_0037 = 2359351,
    /**
     * < Number of Visual Stimuli (0024,0038)
     */
    NumberOfVisualStimuli_0024_0038 = 2359352,
    /**
     * < Excessive Fixation Losses Data Flag (0024,0039)
     */
    ExcessiveFixationLossesDataFlag_0024_0039 = 2359353,
    /**
     * < Excessive Fixation Losses (0024,0040)
     */
    ExcessiveFixationLosses_0024_0040 = 2359360,
    /**
     * < Stimuli Retesting Quantity (0024,0042)
     */
    StimuliRetestingQuantity_0024_0042 = 2359362,
    /**
     * < Comments on Patient's Performance of Visual Field (0024,0044)
     */
    CommentsOnPatientPerformanceOfVisualField_0024_0044 = 2359364,
    /**
     * < False Negatives Estimate Flag (0024,0045)
     */
    FalseNegativesEstimateFlag_0024_0045 = 2359365,
    /**
     * < False Negatives Estimate (0024,0046)
     */
    FalseNegativesEstimate_0024_0046 = 2359366,
    /**
     * < Negative Catch Trials Quantity (0024,0048)
     */
    NegativeCatchTrialsQuantity_0024_0048 = 2359368,
    /**
     * < False Negatives Quantity (0024,0050)
     */
    FalseNegativesQuantity_0024_0050 = 2359376,
    /**
     * < Excessive False Negatives Data Flag (0024,0051)
     */
    ExcessiveFalseNegativesDataFlag_0024_0051 = 2359377,
    /**
     * < Excessive False Negatives (0024,0052)
     */
    ExcessiveFalseNegatives_0024_0052 = 2359378,
    /**
     * < False Positives Estimate Flag (0024,0053)
     */
    FalsePositivesEstimateFlag_0024_0053 = 2359379,
    /**
     * < False Positives Estimate (0024,0054)
     */
    FalsePositivesEstimate_0024_0054 = 2359380,
    /**
     * < Catch Trials Data Flag (0024,0055)
     */
    CatchTrialsDataFlag_0024_0055 = 2359381,
    /**
     * < Positive Catch Trials Quantity (0024,0056)
     */
    PositiveCatchTrialsQuantity_0024_0056 = 2359382,
    /**
     * < Test Point Normals Data Flag (0024,0057)
     */
    TestPointNormalsDataFlag_0024_0057 = 2359383,
    /**
     * < Test Point Normals Sequence (0024,0058)
     */
    TestPointNormalsSequence_0024_0058 = 2359384,
    /**
     * < Global Deviation Probability Normals Flag (0024,0059)
     */
    GlobalDeviationProbabilityNormalsFlag_0024_0059 = 2359385,
    /**
     * < False Positives Quantity (0024,0060)
     */
    FalsePositivesQuantity_0024_0060 = 2359392,
    /**
     * < Excessive False Positives Data Flag (0024,0061)
     */
    ExcessiveFalsePositivesDataFlag_0024_0061 = 2359393,
    /**
     * < Excessive False Positives (0024,0062)
     */
    ExcessiveFalsePositives_0024_0062 = 2359394,
    /**
     * < Visual Field Test Normals Flag (0024,0063)
     */
    VisualFieldTestNormalsFlag_0024_0063 = 2359395,
    /**
     * < Results Normals Sequence (0024,0064)
     */
    ResultsNormalsSequence_0024_0064 = 2359396,
    /**
     * < Age Corrected Sensitivity Deviation Algorithm Sequence (0024,0065)
     */
    AgeCorrectedSensitivityDeviationAlgorithmSequence_0024_0065 = 2359397,
    /**
     * < Global Deviation From Normal (0024,0066)
     */
    GlobalDeviationFromNormal_0024_0066 = 2359398,
    /**
     * < Generalized Defect Sensitivity Deviation Algorithm Sequence (0024,0067)
     */
    GeneralizedDefectSensitivityDeviationAlgorithmSequence_0024_0067 = 2359399,
    /**
     * < Localized Deviation From Normal (0024,0068)
     */
    LocalizedDeviationFromNormal_0024_0068 = 2359400,
    /**
     * < Patient Reliability Indicator (0024,0069)
     */
    PatientReliabilityIndicator_0024_0069 = 2359401,
    /**
     * < Visual Field Mean Sensitivity (0024,0070)
     */
    VisualFieldMeanSensitivity_0024_0070 = 2359408,
    /**
     * < Global Deviation Probability (0024,0071)
     */
    GlobalDeviationProbability_0024_0071 = 2359409,
    /**
     * < Local Deviation Probability Normals Flag (0024,0072)
     */
    LocalDeviationProbabilityNormalsFlag_0024_0072 = 2359410,
    /**
     * < Localized Deviation Probability (0024,0073)
     */
    LocalizedDeviationProbability_0024_0073 = 2359411,
    /**
     * < Short Term Fluctuation Calculated (0024,0074)
     */
    ShortTermFluctuationCalculated_0024_0074 = 2359412,
    /**
     * < Short Term Fluctuation (0024,0075)
     */
    ShortTermFluctuation_0024_0075 = 2359413,
    /**
     * < Short Term Fluctuation Probability Calculated (0024,0076)
     */
    ShortTermFluctuationProbabilityCalculated_0024_0076 = 2359414,
    /**
     * < Short Term Fluctuation Probability (0024,0077)
     */
    ShortTermFluctuationProbability_0024_0077 = 2359415,
    /**
     * < Corrected Localized Deviation From Normal Calculated (0024,0078)
     */
    CorrectedLocalizedDeviationFromNormalCalculated_0024_0078 = 2359416,
    /**
     * < Corrected Localized Deviation From Normal (0024,0079)
     */
    CorrectedLocalizedDeviationFromNormal_0024_0079 = 2359417,
    /**
     * < Corrected Localized Deviation From Normal Probability Calculated (0024,0080)
     */
    CorrectedLocalizedDeviationFromNormalProbabilityCalculated_0024_0080 = 2359424,
    /**
     * < Corrected Localized Deviation From Normal Probability (0024,0081)
     */
    CorrectedLocalizedDeviationFromNormalProbability_0024_0081 = 2359425,
    /**
     * < Global Deviation Probability Sequence (0024,0083)
     */
    GlobalDeviationProbabilitySequence_0024_0083 = 2359427,
    /**
     * < Localized Deviation Probability Sequence (0024,0085)
     */
    LocalizedDeviationProbabilitySequence_0024_0085 = 2359429,
    /**
     * < Foveal Sensitivity Measured (0024,0086)
     */
    FovealSensitivityMeasured_0024_0086 = 2359430,
    /**
     * < Foveal Sensitivity (0024,0087)
     */
    FovealSensitivity_0024_0087 = 2359431,
    /**
     * < Visual Field Test Duration (0024,0088)
     */
    VisualFieldTestDuration_0024_0088 = 2359432,
    /**
     * < Visual Field Test Point Sequence (0024,0089)
     */
    VisualFieldTestPointSequence_0024_0089 = 2359433,
    /**
     * < Visual Field Test Point X-Coordinate (0024,0090)
     */
    VisualFieldTestPointXCoordinate_0024_0090 = 2359440,
    /**
     * < Visual Field Test Point Y-Coordinate (0024,0091)
     */
    VisualFieldTestPointYCoordinate_0024_0091 = 2359441,
    /**
     * < Age Corrected Sensitivity Deviation Value (0024,0092)
     */
    AgeCorrectedSensitivityDeviationValue_0024_0092 = 2359442,
    /**
     * < Stimulus Results (0024,0093)
     */
    StimulusResults_0024_0093 = 2359443,
    /**
     * < Sensitivity Value (0024,0094)
     */
    SensitivityValue_0024_0094 = 2359444,
    /**
     * < Retest Stimulus Seen (0024,0095)
     */
    RetestStimulusSeen_0024_0095 = 2359445,
    /**
     * < Retest Sensitivity Value (0024,0096)
     */
    RetestSensitivityValue_0024_0096 = 2359446,
    /**
     * < Visual Field Test Point Normals Sequence (0024,0097)
     */
    VisualFieldTestPointNormalsSequence_0024_0097 = 2359447,
    /**
     * < Quantified Defect (0024,0098)
     */
    QuantifiedDefect_0024_0098 = 2359448,
    /**
     * < Age Corrected Sensitivity Deviation Probability Value (0024,0100)
     */
    AgeCorrectedSensitivityDeviationProbabilityValue_0024_0100 = 2359552,
    /**
     * < Generalized Defect Corrected Sensitivity Deviation Flag (0024,0102)
     */
    GeneralizedDefectCorrectedSensitivityDeviationFlag_0024_0102 = 2359554,
    /**
     * < Generalized Defect Corrected Sensitivity Deviation Value (0024,0103)
     */
    GeneralizedDefectCorrectedSensitivityDeviationValue_0024_0103 = 2359555,
    /**
     * < Generalized Defect Corrected Sensitivity Deviation Probability Value (0024,0104)
     */
    GeneralizedDefectCorrectedSensitivityDeviationProbabilityValue_0024_0104 = 2359556,
    /**
     * < Minimum Sensitivity Value (0024,0105)
     */
    MinimumSensitivityValue_0024_0105 = 2359557,
    /**
     * < Blind Spot Localized (0024,0106)
     */
    BlindSpotLocalized_0024_0106 = 2359558,
    /**
     * < Blind Spot X-Coordinate (0024,0107)
     */
    BlindSpotXCoordinate_0024_0107 = 2359559,
    /**
     * < Blind Spot Y-Coordinate (0024,0108)
     */
    BlindSpotYCoordinate_0024_0108 = 2359560,
    /**
     * < Visual Acuity Measurement Sequence (0024,0110)
     */
    VisualAcuityMeasurementSequence_0024_0110 = 2359568,
    /**
     * < Refractive Parameters Used on Patient Sequence (0024,0112)
     */
    RefractiveParametersUsedOnPatientSequence_0024_0112 = 2359570,
    /**
     * < Measurement Laterality (0024,0113)
     */
    MeasurementLaterality_0024_0113 = 2359571,
    /**
     * < Ophthalmic Patient Clinical Information Left Eye Sequence (0024,0114)
     */
    OphthalmicPatientClinicalInformationLeftEyeSequence_0024_0114 = 2359572,
    /**
     * < Ophthalmic Patient Clinical Information Right Eye Sequence (0024,0115)
     */
    OphthalmicPatientClinicalInformationRightEyeSequence_0024_0115 = 2359573,
    /**
     * < Foveal Point Normative Data Flag (0024,0117)
     */
    FovealPointNormativeDataFlag_0024_0117 = 2359575,
    /**
     * < Foveal Point Probability Value (0024,0118)
     */
    FovealPointProbabilityValue_0024_0118 = 2359576,
    /**
     * < Screening Baseline Measured (0024,0120)
     */
    ScreeningBaselineMeasured_0024_0120 = 2359584,
    /**
     * < Screening Baseline Measured Sequence (0024,0122)
     */
    ScreeningBaselineMeasuredSequence_0024_0122 = 2359586,
    /**
     * < Screening Baseline Type (0024,0124)
     */
    ScreeningBaselineType_0024_0124 = 2359588,
    /**
     * < Screening Baseline Value (0024,0126)
     */
    ScreeningBaselineValue_0024_0126 = 2359590,
    /**
     * < Algorithm Source (0024,0202)
     */
    AlgorithmSource_0024_0202 = 2359810,
    /**
     * < Data Set Name (0024,0306)
     */
    DataSetName_0024_0306 = 2360070,
    /**
     * < Data Set Version (0024,0307)
     */
    DataSetVersion_0024_0307 = 2360071,
    /**
     * < Data Set Source (0024,0308)
     */
    DataSetSource_0024_0308 = 2360072,
    /**
     * < Data Set Description (0024,0309)
     */
    DataSetDescription_0024_0309 = 2360073,
    /**
     * < Visual Field Test Reliability Global Index Sequence (0024,0317)
     */
    VisualFieldTestReliabilityGlobalIndexSequence_0024_0317 = 2360087,
    /**
     * < Visual Field Global Results Index Sequence (0024,0320)
     */
    VisualFieldGlobalResultsIndexSequence_0024_0320 = 2360096,
    /**
     * < Data Observation Sequence (0024,0325)
     */
    DataObservationSequence_0024_0325 = 2360101,
    /**
     * < Index Normals Flag (0024,0338)
     */
    IndexNormalsFlag_0024_0338 = 2360120,
    /**
     * < Index Probability (0024,0341)
     */
    IndexProbability_0024_0341 = 2360129,
    /**
     * < Index Probability Sequence (0024,0344)
     */
    IndexProbabilitySequence_0024_0344 = 2360132,
    /**
     * < Samples per Pixel (0028,0002)
     */
    SamplesPerPixel_0028_0002 = 2621442,
    /**
     * < Samples per Pixel Used (0028,0003)
     */
    SamplesPerPixelUsed_0028_0003 = 2621443,
    /**
     * < Photometric Interpretation (0028,0004)
     */
    PhotometricInterpretation_0028_0004 = 2621444,
    /**
     * < Image Dimensions (0028,0005)
     */
    ImageDimensions_0028_0005 = 2621445,
    /**
     * < Planar Configuration (0028,0006)
     */
    PlanarConfiguration_0028_0006 = 2621446,
    /**
     * < Number of Frames (0028,0008)
     */
    NumberOfFrames_0028_0008 = 2621448,
    /**
     * < Frame Increment Pointer (0028,0009)
     */
    FrameIncrementPointer_0028_0009 = 2621449,
    /**
     * < Frame Dimension Pointer (0028,000A)
     */
    FrameDimensionPointer_0028_000A = 2621450,
    /**
     * < Rows (0028,0010)
     */
    Rows_0028_0010 = 2621456,
    /**
     * < Columns (0028,0011)
     */
    Columns_0028_0011 = 2621457,
    /**
     * < Planes (0028,0012)
     */
    Planes_0028_0012 = 2621458,
    /**
     * < Ultrasound Color Data Present (0028,0014)
     */
    UltrasoundColorDataPresent_0028_0014 = 2621460,
    /**
     * < Pixel Spacing (0028,0030)
     */
    PixelSpacing_0028_0030 = 2621488,
    /**
     * < Zoom Factor (0028,0031)
     */
    ZoomFactor_0028_0031 = 2621489,
    /**
     * < Zoom Center (0028,0032)
     */
    ZoomCenter_0028_0032 = 2621490,
    /**
     * < Pixel Aspect Ratio (0028,0034)
     */
    PixelAspectRatio_0028_0034 = 2621492,
    /**
     * < Image Format (0028,0040)
     */
    ImageFormat_0028_0040 = 2621504,
    /**
     * < Manipulated Image (0028,0050)
     */
    ManipulatedImage_0028_0050 = 2621520,
    /**
     * < Corrected Image (0028,0051)
     */
    CorrectedImage_0028_0051 = 2621521,
    /**
     * < Compression Recognition Code (0028,005F)
     */
    CompressionRecognitionCode_0028_005F = 2621535,
    /**
     * < Compression Code (0028,0060)
     */
    CompressionCode_0028_0060 = 2621536,
    /**
     * < Compression Originator (0028,0061)
     */
    CompressionOriginator_0028_0061 = 2621537,
    /**
     * < Compression Label (0028,0062)
     */
    CompressionLabel_0028_0062 = 2621538,
    /**
     * < Compression Description (0028,0063)
     */
    CompressionDescription_0028_0063 = 2621539,
    /**
     * < Compression Sequence (0028,0065)
     */
    CompressionSequence_0028_0065 = 2621541,
    /**
     * < Compression Step Pointers (0028,0066)
     */
    CompressionStepPointers_0028_0066 = 2621542,
    /**
     * < Repeat Interval (0028,0068)
     */
    RepeatInterval_0028_0068 = 2621544,
    /**
     * < Bits Grouped (0028,0069)
     */
    BitsGrouped_0028_0069 = 2621545,
    /**
     * < Perimeter Table (0028,0070)
     */
    PerimeterTable_0028_0070 = 2621552,
    /**
     * < Perimeter Value (0028,0071)
     */
    PerimeterValue_0028_0071 = 2621553,
    /**
     * < Predictor Rows (0028,0080)
     */
    PredictorRows_0028_0080 = 2621568,
    /**
     * < Predictor Columns (0028,0081)
     */
    PredictorColumns_0028_0081 = 2621569,
    /**
     * < Predictor Constants (0028,0082)
     */
    PredictorConstants_0028_0082 = 2621570,
    /**
     * < Blocked Pixels (0028,0090)
     */
    BlockedPixels_0028_0090 = 2621584,
    /**
     * < Block Rows (0028,0091)
     */
    BlockRows_0028_0091 = 2621585,
    /**
     * < Block Columns (0028,0092)
     */
    BlockColumns_0028_0092 = 2621586,
    /**
     * < Row Overlap (0028,0093)
     */
    RowOverlap_0028_0093 = 2621587,
    /**
     * < Column Overlap (0028,0094)
     */
    ColumnOverlap_0028_0094 = 2621588,
    /**
     * < Bits Allocated (0028,0100)
     */
    BitsAllocated_0028_0100 = 2621696,
    /**
     * < Bits Stored (0028,0101)
     */
    BitsStored_0028_0101 = 2621697,
    /**
     * < High Bit (0028,0102)
     */
    HighBit_0028_0102 = 2621698,
    /**
     * < Pixel Representation (0028,0103)
     */
    PixelRepresentation_0028_0103 = 2621699,
    /**
     * < Smallest Valid Pixel Value (0028,0104)
     */
    SmallestValidPixelValue_0028_0104 = 2621700,
    /**
     * < Largest Valid Pixel Value (0028,0105)
     */
    LargestValidPixelValue_0028_0105 = 2621701,
    /**
     * < Smallest Image Pixel Value (0028,0106)
     */
    SmallestImagePixelValue_0028_0106 = 2621702,
    /**
     * < Largest Image Pixel Value (0028,0107)
     */
    LargestImagePixelValue_0028_0107 = 2621703,
    /**
     * < Smallest Pixel Value in Series (0028,0108)
     */
    SmallestPixelValueInSeries_0028_0108 = 2621704,
    /**
     * < Largest Pixel Value in Series (0028,0109)
     */
    LargestPixelValueInSeries_0028_0109 = 2621705,
    /**
     * < Smallest Image Pixel Value in Plane (0028,0110)
     */
    SmallestImagePixelValueInPlane_0028_0110 = 2621712,
    /**
     * < Largest Image Pixel Value in Plane (0028,0111)
     */
    LargestImagePixelValueInPlane_0028_0111 = 2621713,
    /**
     * < Pixel Padding Value (0028,0120)
     */
    PixelPaddingValue_0028_0120 = 2621728,
    /**
     * < Pixel Padding Range Limit (0028,0121)
     */
    PixelPaddingRangeLimit_0028_0121 = 2621729,
    /**
     * < Float Pixel Padding Value (0028,0122)
     */
    FloatPixelPaddingValue_0028_0122 = 2621730,
    /**
     * < Double Float Pixel Padding Value (0028,0123)
     */
    DoubleFloatPixelPaddingValue_0028_0123 = 2621731,
    /**
     * < Float Pixel Padding Range Limit (0028,0124)
     */
    FloatPixelPaddingRangeLimit_0028_0124 = 2621732,
    /**
     * < Double Float Pixel Padding Range Limit (0028,0125)
     */
    DoubleFloatPixelPaddingRangeLimit_0028_0125 = 2621733,
    /**
     * < Image Location (0028,0200)
     */
    ImageLocation_0028_0200 = 2621952,
    /**
     * < Quality Control Image (0028,0300)
     */
    QualityControlImage_0028_0300 = 2622208,
    /**
     * < Burned In Annotation (0028,0301)
     */
    BurnedInAnnotation_0028_0301 = 2622209,
    /**
     * < Recognizable Visual Features (0028,0302)
     */
    RecognizableVisualFeatures_0028_0302 = 2622210,
    /**
     * < Longitudinal Temporal Information Modified (0028,0303)
     */
    LongitudinalTemporalInformationModified_0028_0303 = 2622211,
    /**
     * < Referenced Color Palette Instance UID (0028,0304)
     */
    ReferencedColorPaletteInstanceUID_0028_0304 = 2622212,
    /**
     * < Rows For Nth Order Coefficients (0028,0400)
     */
    RowsForNthOrderCoefficients_0028_0400 = 2622464,
    /**
     * < Columns For Nth Order Coefficients (0028,0401)
     */
    ColumnsForNthOrderCoefficients_0028_0401 = 2622465,
    /**
     * < Coefficient Coding (0028,0402)
     */
    CoefficientCoding_0028_0402 = 2622466,
    /**
     * < Coefficient Coding Pointers (0028,0403)
     */
    CoefficientCodingPointers_0028_0403 = 2622467,
    /**
     * < Details of Coefficients (0028,0404)
     */
    DetailsOfCoefficients_0028_0404 = 2622468,
    /**
     * < DCT Label (0028,0700)
     */
    DCTLabel_0028_0700 = 2623232,
    /**
     * < Data Block Description (0028,0701)
     */
    DataBlockDescription_0028_0701 = 2623233,
    /**
     * < Data Block (0028,0702)
     */
    DataBlock_0028_0702 = 2623234,
    /**
     * < Normalization Factor Format (0028,0710)
     */
    NormalizationFactorFormat_0028_0710 = 2623248,
    /**
     * < Zonal Map Number Format (0028,0720)
     */
    ZonalMapNumberFormat_0028_0720 = 2623264,
    /**
     * < Zonal Map Location (0028,0721)
     */
    ZonalMapLocation_0028_0721 = 2623265,
    /**
     * < Zonal Map Format (0028,0722)
     */
    ZonalMapFormat_0028_0722 = 2623266,
    /**
     * < Adaptive Map Format (0028,0730)
     */
    AdaptiveMapFormat_0028_0730 = 2623280,
    /**
     * < Code Number Format (0028,0740)
     */
    CodeNumberFormat_0028_0740 = 2623296,
    /**
     * < Code Label (0028,0800)
     */
    CodeLabel_0028_0800 = 2623488,
    /**
     * < Number of Tables (0028,0802)
     */
    NumberOfTables_0028_0802 = 2623490,
    /**
     * < Code Table Location (0028,0803)
     */
    CodeTableLocation_0028_0803 = 2623491,
    /**
     * < Bits For Code Word (0028,0804)
     */
    BitsForCodeWord_0028_0804 = 2623492,
    /**
     * < Image Data Location (0028,0808)
     */
    ImageDataLocation_0028_0808 = 2623496,
    /**
     * < Pixel Spacing Calibration Type (0028,0A02)
     */
    PixelSpacingCalibrationType_0028_0A02 = 2624002,
    /**
     * < Pixel Spacing Calibration Description (0028,0A04)
     */
    PixelSpacingCalibrationDescription_0028_0A04 = 2624004,
    /**
     * < Pixel Intensity Relationship (0028,1040)
     */
    PixelIntensityRelationship_0028_1040 = 2625600,
    /**
     * < Pixel Intensity Relationship Sign (0028,1041)
     */
    PixelIntensityRelationshipSign_0028_1041 = 2625601,
    /**
     * < Window Center (0028,1050)
     */
    WindowCenter_0028_1050 = 2625616,
    /**
     * < Window Width (0028,1051)
     */
    WindowWidth_0028_1051 = 2625617,
    /**
     * < Rescale Intercept (0028,1052)
     */
    RescaleIntercept_0028_1052 = 2625618,
    /**
     * < Rescale Slope (0028,1053)
     */
    RescaleSlope_0028_1053 = 2625619,
    /**
     * < Rescale Type (0028,1054)
     */
    RescaleType_0028_1054 = 2625620,
    /**
     * < Window Center & Width Explanation (0028,1055)
     */
    WindowCenterWidthExplanation_0028_1055 = 2625621,
    /**
     * < VOI LUT Function (0028,1056)
     */
    VOILUTFunction_0028_1056 = 2625622,
    /**
     * < Gray Scale (0028,1080)
     */
    GrayScale_0028_1080 = 2625664,
    /**
     * < Recommended Viewing Mode (0028,1090)
     */
    RecommendedViewingMode_0028_1090 = 2625680,
    /**
     * < Gray Lookup Table Descriptor (0028,1100)
     */
    GrayLookupTableDescriptor_0028_1100 = 2625792,
    /**
     * < Red Palette Color Lookup Table Descriptor (0028,1101)
     */
    RedPaletteColorLookupTableDescriptor_0028_1101 = 2625793,
    /**
     * < Green Palette Color Lookup Table Descriptor (0028,1102)
     */
    GreenPaletteColorLookupTableDescriptor_0028_1102 = 2625794,
    /**
     * < Blue Palette Color Lookup Table Descriptor (0028,1103)
     */
    BluePaletteColorLookupTableDescriptor_0028_1103 = 2625795,
    /**
     * < Alpha Palette Color Lookup Table Descriptor (0028,1104)
     */
    AlphaPaletteColorLookupTableDescriptor_0028_1104 = 2625796,
    /**
     * < Large Red Palette Color Lookup Table Descriptor (0028,1111)
     */
    LargeRedPaletteColorLookupTableDescriptor_0028_1111 = 2625809,
    /**
     * < Large Green Palette Color Lookup Table Descriptor (0028,1112)
     */
    LargeGreenPaletteColorLookupTableDescriptor_0028_1112 = 2625810,
    /**
     * < Large Blue Palette Color Lookup Table Descriptor (0028,1113)
     */
    LargeBluePaletteColorLookupTableDescriptor_0028_1113 = 2625811,
    /**
     * < Palette Color Lookup Table UID (0028,1199)
     */
    PaletteColorLookupTableUID_0028_1199 = 2625945,
    /**
     * < Gray Lookup Table Data (0028,1200)
     */
    GrayLookupTableData_0028_1200 = 2626048,
    /**
     * < Red Palette Color Lookup Table Data (0028,1201)
     */
    RedPaletteColorLookupTableData_0028_1201 = 2626049,
    /**
     * < Green Palette Color Lookup Table Data (0028,1202)
     */
    GreenPaletteColorLookupTableData_0028_1202 = 2626050,
    /**
     * < Blue Palette Color Lookup Table Data (0028,1203)
     */
    BluePaletteColorLookupTableData_0028_1203 = 2626051,
    /**
     * < Alpha Palette Color Lookup Table Data (0028,1204)
     */
    AlphaPaletteColorLookupTableData_0028_1204 = 2626052,
    /**
     * < Large Red Palette Color Lookup Table Data (0028,1211)
     */
    LargeRedPaletteColorLookupTableData_0028_1211 = 2626065,
    /**
     * < Large Green Palette Color Lookup Table Data (0028,1212)
     */
    LargeGreenPaletteColorLookupTableData_0028_1212 = 2626066,
    /**
     * < Large Blue Palette Color Lookup Table Data (0028,1213)
     */
    LargeBluePaletteColorLookupTableData_0028_1213 = 2626067,
    /**
     * < Large Palette Color Lookup Table UID (0028,1214)
     */
    LargePaletteColorLookupTableUID_0028_1214 = 2626068,
    /**
     * < Segmented Red Palette Color Lookup Table Data (0028,1221)
     */
    SegmentedRedPaletteColorLookupTableData_0028_1221 = 2626081,
    /**
     * < Segmented Green Palette Color Lookup Table Data (0028,1222)
     */
    SegmentedGreenPaletteColorLookupTableData_0028_1222 = 2626082,
    /**
     * < Segmented Blue Palette Color Lookup Table Data (0028,1223)
     */
    SegmentedBluePaletteColorLookupTableData_0028_1223 = 2626083,
    /**
     * < Segmented Alpha Palette Color Lookup Table Data (0028,1224)
     */
    SegmentedAlphaPaletteColorLookupTableData_0028_1224 = 2626084,
    /**
     * < Stored Value Color Range Sequence (0028,1230)
     */
    StoredValueColorRangeSequence_0028_1230 = 2626096,
    /**
     * < Minimum Stored Value Mapped (0028,1231)
     */
    MinimumStoredValueMapped_0028_1231 = 2626097,
    /**
     * < Maximum Stored Value Mapped (0028,1232)
     */
    MaximumStoredValueMapped_0028_1232 = 2626098,
    /**
     * < Breast Implant Present (0028,1300)
     */
    BreastImplantPresent_0028_1300 = 2626304,
    /**
     * < Partial View (0028,1350)
     */
    PartialView_0028_1350 = 2626384,
    /**
     * < Partial View Description (0028,1351)
     */
    PartialViewDescription_0028_1351 = 2626385,
    /**
     * < Partial View Code Sequence (0028,1352)
     */
    PartialViewCodeSequence_0028_1352 = 2626386,
    /**
     * < Spatial Locations Preserved (0028,135A)
     */
    SpatialLocationsPreserved_0028_135A = 2626394,
    /**
     * < Data Frame Assignment Sequence (0028,1401)
     */
    DataFrameAssignmentSequence_0028_1401 = 2626561,
    /**
     * < Data Path Assignment (0028,1402)
     */
    DataPathAssignment_0028_1402 = 2626562,
    /**
     * < Bits Mapped to Color Lookup Table (0028,1403)
     */
    BitsMappedToColorLookupTable_0028_1403 = 2626563,
    /**
     * < Blending LUT 1 Sequence (0028,1404)
     */
    BlendingLUT1Sequence_0028_1404 = 2626564,
    /**
     * < Blending LUT 1 Transfer Function (0028,1405)
     */
    BlendingLUT1TransferFunction_0028_1405 = 2626565,
    /**
     * < Blending Weight Constant (0028,1406)
     */
    BlendingWeightConstant_0028_1406 = 2626566,
    /**
     * < Blending Lookup Table Descriptor (0028,1407)
     */
    BlendingLookupTableDescriptor_0028_1407 = 2626567,
    /**
     * < Blending Lookup Table Data (0028,1408)
     */
    BlendingLookupTableData_0028_1408 = 2626568,
    /**
     * < Enhanced Palette Color Lookup Table Sequence (0028,140B)
     */
    EnhancedPaletteColorLookupTableSequence_0028_140B = 2626571,
    /**
     * < Blending LUT 2 Sequence (0028,140C)
     */
    BlendingLUT2Sequence_0028_140C = 2626572,
    /**
     * < Blending LUT 2 Transfer Function (0028,140D)
     */
    BlendingLUT2TransferFunction_0028_140D = 2626573,
    /**
     * < Data Path ID (0028,140E)
     */
    DataPathID_0028_140E = 2626574,
    /**
     * < RGB LUT Transfer Function (0028,140F)
     */
    RGBLUTTransferFunction_0028_140F = 2626575,
    /**
     * < Alpha LUT Transfer Function (0028,1410)
     */
    AlphaLUTTransferFunction_0028_1410 = 2626576,
    /**
     * < ICC Profile (0028,2000)
     */
    ICCProfile_0028_2000 = 2629632,
    /**
     * < Color Space (0028,2002)
     */
    ColorSpace_0028_2002 = 2629634,
    /**
     * < Lossy Image Compression (Retired) (0008,2110)
     */
    LossyImageCompressionRetired_0008_2110 = 532752,
    /**
     * < Lossy Image Compression (0028,2110)
     */
    LossyImageCompression_0028_2110 = 2629904,
    /**
     * < Lossy Image Compression Ratio (0028,2112)
     */
    LossyImageCompressionRatio_0028_2112 = 2629906,
    /**
     * < Lossy Image Compression Method (0028,2114)
     */
    LossyImageCompressionMethod_0028_2114 = 2629908,
    /**
     * < Modality LUT Sequence (0028,3000)
     */
    ModalityLUTSequence_0028_3000 = 2633728,
    /**
     * < LUT Descriptor (0028,3002)
     */
    LUTDescriptor_0028_3002 = 2633730,
    /**
     * < LUT Explanation (0028,3003)
     */
    LUTExplanation_0028_3003 = 2633731,
    /**
     * < Modality LUT Type (0028,3004)
     */
    ModalityLUTType_0028_3004 = 2633732,
    /**
     * < LUT Data (0028,3006)
     */
    LUTData_0028_3006 = 2633734,
    /**
     * < VOI LUT Sequence (0028,3010)
     */
    VOILUTSequence_0028_3010 = 2633744,
    /**
     * < Softcopy VOI LUT Sequence (0028,3110)
     */
    SoftcopyVOILUTSequence_0028_3110 = 2634000,
    /**
     * < Image Presentation Comments (0028,4000)
     */
    ImagePresentationComments_0028_4000 = 2637824,
    /**
     * < Bi-Plane Acquisition Sequence (0028,5000)
     */
    BiPlaneAcquisitionSequence_0028_5000 = 2641920,
    /**
     * < Representative Frame Number (0028,6010)
     */
    RepresentativeFrameNumber_0028_6010 = 2646032,
    /**
     * < Frame Numbers of Interest (FOI) (0028,6020)
     */
    FrameNumbersOfInterest_0028_6020 = 2646048,
    /**
     * < Frame of Interest Description (0028,6022)
     */
    FrameOfInterestDescription_0028_6022 = 2646050,
    /**
     * < Frame of Interest Type (0028,6023)
     */
    FrameOfInterestType_0028_6023 = 2646051,
    /**
     * < Mask Pointer(s) (0028,6030)
     */
    MaskPointers_0028_6030 = 2646064,
    /**
     * < R Wave Pointer (0028,6040)
     */
    RWavePointer_0028_6040 = 2646080,
    /**
     * < Mask Subtraction Sequence (0028,6100)
     */
    MaskSubtractionSequence_0028_6100 = 2646272,
    /**
     * < Mask Operation (0028,6101)
     */
    MaskOperation_0028_6101 = 2646273,
    /**
     * < Applicable Frame Range (0028,6102)
     */
    ApplicableFrameRange_0028_6102 = 2646274,
    /**
     * < Mask Frame Numbers (0028,6110)
     */
    MaskFrameNumbers_0028_6110 = 2646288,
    /**
     * < Contrast Frame Averaging (0028,6112)
     */
    ContrastFrameAveraging_0028_6112 = 2646290,
    /**
     * < Mask Sub-pixel Shift (0028,6114)
     */
    MaskSubPixelShift_0028_6114 = 2646292,
    /**
     * < TID Offset (0028,6120)
     */
    TIDOffset_0028_6120 = 2646304,
    /**
     * < Mask Operation Explanation (0028,6190)
     */
    MaskOperationExplanation_0028_6190 = 2646416,
    /**
     * < Equipment Administrator Sequence (0028,7000)
     */
    EquipmentAdministratorSequence_0028_7000 = 2650112,
    /**
     * < Number of Display Subsystems (0028,7001)
     */
    NumberOfDisplaySubsystems_0028_7001 = 2650113,
    /**
     * < Current Configuration ID (0028,7002)
     */
    CurrentConfigurationID_0028_7002 = 2650114,
    /**
     * < Display Subsystem ID (0028,7003)
     */
    DisplaySubsystemID_0028_7003 = 2650115,
    /**
     * < Display Subsystem Name (0028,7004)
     */
    DisplaySubsystemName_0028_7004 = 2650116,
    /**
     * < Display Subsystem Description (0028,7005)
     */
    DisplaySubsystemDescription_0028_7005 = 2650117,
    /**
     * < System Status (0028,7006)
     */
    SystemStatus_0028_7006 = 2650118,
    /**
     * < System Status Comment (0028,7007)
     */
    SystemStatusComment_0028_7007 = 2650119,
    /**
     * < Target Luminance Characteristics Sequence (0028,7008)
     */
    TargetLuminanceCharacteristicsSequence_0028_7008 = 2650120,
    /**
     * < Luminance Characteristics ID (0028,7009)
     */
    LuminanceCharacteristicsID_0028_7009 = 2650121,
    /**
     * < Display Subsystem Configuration Sequence (0028,700A)
     */
    DisplaySubsystemConfigurationSequence_0028_700A = 2650122,
    /**
     * < Configuration ID (0028,700B)
     */
    ConfigurationID_0028_700B = 2650123,
    /**
     * < Configuration Name (0028,700C)
     */
    ConfigurationName_0028_700C = 2650124,
    /**
     * < Configuration Description (0028,700D)
     */
    ConfigurationDescription_0028_700D = 2650125,
    /**
     * < Referenced Target Luminance Characteristics ID (0028,700E)
     */
    ReferencedTargetLuminanceCharacteristicsID_0028_700E = 2650126,
    /**
     * < QA Results Sequence (0028,700F)
     */
    QAResultsSequence_0028_700F = 2650127,
    /**
     * < Display Subsystem QA Results Sequence (0028,7010)
     */
    DisplaySubsystemQAResultsSequence_0028_7010 = 2650128,
    /**
     * < Configuration QA Results Sequence (0028,7011)
     */
    ConfigurationQAResultsSequence_0028_7011 = 2650129,
    /**
     * < Measurement Equipment Sequence (0028,7012)
     */
    MeasurementEquipmentSequence_0028_7012 = 2650130,
    /**
     * < Measurement Functions (0028,7013)
     */
    MeasurementFunctions_0028_7013 = 2650131,
    /**
     * < Measurement Equipment Type (0028,7014)
     */
    MeasurementEquipmentType_0028_7014 = 2650132,
    /**
     * < Visual Evaluation Result Sequence (0028,7015)
     */
    VisualEvaluationResultSequence_0028_7015 = 2650133,
    /**
     * < Display Calibration Result Sequence (0028,7016)
     */
    DisplayCalibrationResultSequence_0028_7016 = 2650134,
    /**
     * < DDL Value (0028,7017)
     */
    DDLValue_0028_7017 = 2650135,
    /**
     * < CIExy White Point (0028,7018)
     */
    CIExyWhitePoint_0028_7018 = 2650136,
    /**
     * < Display Function Type (0028,7019)
     */
    DisplayFunctionType_0028_7019 = 2650137,
    /**
     * < Gamma Value (0028,701A)
     */
    GammaValue_0028_701A = 2650138,
    /**
     * < Number of Luminance Points (0028,701B)
     */
    NumberOfLuminancePoints_0028_701B = 2650139,
    /**
     * < Luminance Response Sequence (0028,701C)
     */
    LuminanceResponseSequence_0028_701C = 2650140,
    /**
     * < Target Minimum Luminance (0028,701D)
     */
    TargetMinimumLuminance_0028_701D = 2650141,
    /**
     * < Target Maximum Luminance (0028,701E)
     */
    TargetMaximumLuminance_0028_701E = 2650142,
    /**
     * < Luminance Value (0028,701F)
     */
    LuminanceValue_0028_701F = 2650143,
    /**
     * < Luminance Response Description (0028,7020)
     */
    LuminanceResponseDescription_0028_7020 = 2650144,
    /**
     * < White Point Flag (0028,7021)
     */
    WhitePointFlag_0028_7021 = 2650145,
    /**
     * < Display Device Type Code Sequence (0028,7022)
     */
    DisplayDeviceTypeCodeSequence_0028_7022 = 2650146,
    /**
     * < Display Subsystem Sequence (0028,7023)
     */
    DisplaySubsystemSequence_0028_7023 = 2650147,
    /**
     * < Luminance Result Sequence (0028,7024)
     */
    LuminanceResultSequence_0028_7024 = 2650148,
    /**
     * < Ambient Light Value Source (0028,7025)
     */
    AmbientLightValueSource_0028_7025 = 2650149,
    /**
     * < Measured Characteristics (0028,7026)
     */
    MeasuredCharacteristics_0028_7026 = 2650150,
    /**
     * < Luminance Uniformity Result Sequence (0028,7027)
     */
    LuminanceUniformityResultSequence_0028_7027 = 2650151,
    /**
     * < Visual Evaluation Test Sequence (0028,7028)
     */
    VisualEvaluationTestSequence_0028_7028 = 2650152,
    /**
     * < Test Result (0028,7029)
     */
    TestResult_0028_7029 = 2650153,
    /**
     * < Test Result Comment (0028,702A)
     */
    TestResultComment_0028_702A = 2650154,
    /**
     * < Test Image Validation (0028,702B)
     */
    TestImageValidation_0028_702B = 2650155,
    /**
     * < Test Pattern Code Sequence (0028,702C)
     */
    TestPatternCodeSequence_0028_702C = 2650156,
    /**
     * < Measurement Pattern Code Sequence (0028,702D)
     */
    MeasurementPatternCodeSequence_0028_702D = 2650157,
    /**
     * < Visual Evaluation Method Code Sequence (0028,702E)
     */
    VisualEvaluationMethodCodeSequence_0028_702E = 2650158,
    /**
     * < Pixel Data Provider URL (0028,7FE0)
     */
    PixelDataProviderURL_0028_7FE0 = 2654176,
    /**
     * < Data Point Rows (0028,9001)
     */
    DataPointRows_0028_9001 = 2658305,
    /**
     * < Data Point Columns (0028,9002)
     */
    DataPointColumns_0028_9002 = 2658306,
    /**
     * < Signal Domain Columns (0028,9003)
     */
    SignalDomainColumns_0028_9003 = 2658307,
    /**
     * < Largest Monochrome Pixel Value (0028,9099)
     */
    LargestMonochromePixelValue_0028_9099 = 2658457,
    /**
     * < Data Representation (0028,9108)
     */
    DataRepresentation_0028_9108 = 2658568,
    /**
     * < Pixel Measures Sequence (0028,9110)
     */
    PixelMeasuresSequence_0028_9110 = 2658576,
    /**
     * < Frame VOI LUT Sequence (0028,9132)
     */
    FrameVOILUTSequence_0028_9132 = 2658610,
    /**
     * < Pixel Value Transformation Sequence (0028,9145)
     */
    PixelValueTransformationSequence_0028_9145 = 2658629,
    /**
     * < Signal Domain Rows (0028,9235)
     */
    SignalDomainRows_0028_9235 = 2658869,
    /**
     * < Display Filter Percentage (0028,9411)
     */
    DisplayFilterPercentage_0028_9411 = 2659345,
    /**
     * < Frame Pixel Shift Sequence (0028,9415)
     */
    FramePixelShiftSequence_0028_9415 = 2659349,
    /**
     * < Subtraction Item ID (0028,9416)
     */
    SubtractionItemID_0028_9416 = 2659350,
    /**
     * < Pixel Intensity Relationship LUT Sequence (0028,9422)
     */
    PixelIntensityRelationshipLUTSequence_0028_9422 = 2659362,
    /**
     * < Frame Pixel Data Properties Sequence (0028,9443)
     */
    FramePixelDataPropertiesSequence_0028_9443 = 2659395,
    /**
     * < Geometrical Properties (0028,9444)
     */
    GeometricalProperties_0028_9444 = 2659396,
    /**
     * < Geometric Maximum Distortion (0028,9445)
     */
    GeometricMaximumDistortion_0028_9445 = 2659397,
    /**
     * < Image Processing Applied (0028,9446)
     */
    ImageProcessingApplied_0028_9446 = 2659398,
    /**
     * < Mask Selection Mode (0028,9454)
     */
    MaskSelectionMode_0028_9454 = 2659412,
    /**
     * < LUT Function (0028,9474)
     */
    LUTFunction_0028_9474 = 2659444,
    /**
     * < Mask Visibility Percentage (0028,9478)
     */
    MaskVisibilityPercentage_0028_9478 = 2659448,
    /**
     * < Pixel Shift Sequence (0028,9501)
     */
    PixelShiftSequence_0028_9501 = 2659585,
    /**
     * < Region Pixel Shift Sequence (0028,9502)
     */
    RegionPixelShiftSequence_0028_9502 = 2659586,
    /**
     * < Vertices of the Region (0028,9503)
     */
    VerticesOfTheRegion_0028_9503 = 2659587,
    /**
     * < Multi-frame Presentation Sequence (0028,9505)
     */
    MultiFramePresentationSequence_0028_9505 = 2659589,
    /**
     * < Pixel Shift Frame Range (0028,9506)
     */
    PixelShiftFrameRange_0028_9506 = 2659590,
    /**
     * < LUT Frame Range (0028,9507)
     */
    LUTFrameRange_0028_9507 = 2659591,
    /**
     * < Image to Equipment Mapping Matrix (0028,9520)
     */
    ImageToEquipmentMappingMatrix_0028_9520 = 2659616,
    /**
     * < Equipment Coordinate System Identification (0028,9537)
     */
    EquipmentCoordinateSystemIdentification_0028_9537 = 2659639,
    /**
     * < Study Status ID (0032,000A)
     */
    StudyStatusID_0032_000A = 3276810,
    /**
     * < Study Priority ID (0032,000C)
     */
    StudyPriorityID_0032_000C = 3276812,
    /**
     * < Study ID Issuer (0032,0012)
     */
    StudyIDIssuer_0032_0012 = 3276818,
    /**
     * < Study Verified Date (0032,0032)
     */
    StudyVerifiedDate_0032_0032 = 3276850,
    /**
     * < Study Verified Time (0032,0033)
     */
    StudyVerifiedTime_0032_0033 = 3276851,
    /**
     * < Study Read Date (0032,0034)
     */
    StudyReadDate_0032_0034 = 3276852,
    /**
     * < Study Read Time (0032,0035)
     */
    StudyReadTime_0032_0035 = 3276853,
    /**
     * < Scheduled Study Start Date (0032,1000)
     */
    ScheduledStudyStartDate_0032_1000 = 3280896,
    /**
     * < Scheduled Study Start Time (0032,1001)
     */
    ScheduledStudyStartTime_0032_1001 = 3280897,
    /**
     * < Scheduled Study Stop Date (0032,1010)
     */
    ScheduledStudyStopDate_0032_1010 = 3280912,
    /**
     * < Scheduled Study Stop Time (0032,1011)
     */
    ScheduledStudyStopTime_0032_1011 = 3280913,
    /**
     * < Scheduled Study Location (0032,1020)
     */
    ScheduledStudyLocation_0032_1020 = 3280928,
    /**
     * < Scheduled Study Location AE Title (0032,1021)
     */
    ScheduledStudyLocationAETitle_0032_1021 = 3280929,
    /**
     * < Reason for Study (0032,1030)
     */
    ReasonForStudy_0032_1030 = 3280944,
    /**
     * < Requesting Physician Identification Sequence (0032,1031)
     */
    RequestingPhysicianIdentificationSequence_0032_1031 = 3280945,
    /**
     * < Requesting Physician (0032,1032)
     */
    RequestingPhysician_0032_1032 = 3280946,
    /**
     * < Requesting Service (0032,1033)
     */
    RequestingService_0032_1033 = 3280947,
    /**
     * < Requesting Service Code Sequence (0032,1034)
     */
    RequestingServiceCodeSequence_0032_1034 = 3280948,
    /**
     * < Study Arrival Date (0032,1040)
     */
    StudyArrivalDate_0032_1040 = 3280960,
    /**
     * < Study Arrival Time (0032,1041)
     */
    StudyArrivalTime_0032_1041 = 3280961,
    /**
     * < Study Completion Date (0032,1050)
     */
    StudyCompletionDate_0032_1050 = 3280976,
    /**
     * < Study Completion Time (0032,1051)
     */
    StudyCompletionTime_0032_1051 = 3280977,
    /**
     * < Study Component Status ID (0032,1055)
     */
    StudyComponentStatusID_0032_1055 = 3280981,
    /**
     * < Requested Procedure Description (0032,1060)
     */
    RequestedProcedureDescription_0032_1060 = 3280992,
    /**
     * < Requested Procedure Code Sequence (0032,1064)
     */
    RequestedProcedureCodeSequence_0032_1064 = 3280996,
    /**
     * < Requested Contrast Agent (0032,1070)
     */
    RequestedContrastAgent_0032_1070 = 3281008,
    /**
     * < Study Comments (0032,4000)
     */
    StudyComments_0032_4000 = 3293184,
    /**
     * < Referenced Patient Alias Sequence (0038,0004)
     */
    ReferencedPatientAliasSequence_0038_0004 = 3670020,
    /**
     * < Visit Status ID (0038,0008)
     */
    VisitStatusID_0038_0008 = 3670024,
    /**
     * < Admission ID (0038,0010)
     */
    AdmissionID_0038_0010 = 3670032,
    /**
     * < Issuer of Admission ID (0038,0011)
     */
    IssuerOfAdmissionID_0038_0011 = 3670033,
    /**
     * < Issuer of Admission ID Sequence (0038,0014)
     */
    IssuerOfAdmissionIDSequence_0038_0014 = 3670036,
    /**
     * < Route of Admissions (0038,0016)
     */
    RouteOfAdmissions_0038_0016 = 3670038,
    /**
     * < Scheduled Admission Date (0038,001A)
     */
    ScheduledAdmissionDate_0038_001A = 3670042,
    /**
     * < Scheduled Admission Time (0038,001B)
     */
    ScheduledAdmissionTime_0038_001B = 3670043,
    /**
     * < Scheduled Discharge Date (0038,001C)
     */
    ScheduledDischargeDate_0038_001C = 3670044,
    /**
     * < Scheduled Discharge Time (0038,001D)
     */
    ScheduledDischargeTime_0038_001D = 3670045,
    /**
     * < Scheduled Patient Institution Residence (0038,001E)
     */
    ScheduledPatientInstitutionResidence_0038_001E = 3670046,
    /**
     * < Admitting Date (0038,0020)
     */
    AdmittingDate_0038_0020 = 3670048,
    /**
     * < Admitting Time (0038,0021)
     */
    AdmittingTime_0038_0021 = 3670049,
    /**
     * < Discharge Date (0038,0030)
     */
    DischargeDate_0038_0030 = 3670064,
    /**
     * < Discharge Time (0038,0032)
     */
    DischargeTime_0038_0032 = 3670066,
    /**
     * < Discharge Diagnosis Description (0038,0040)
     */
    DischargeDiagnosisDescription_0038_0040 = 3670080,
    /**
     * < Discharge Diagnosis Code Sequence (0038,0044)
     */
    DischargeDiagnosisCodeSequence_0038_0044 = 3670084,
    /**
     * < Special Needs (0038,0050)
     */
    SpecialNeeds_0038_0050 = 3670096,
    /**
     * < Service Episode ID (0038,0060)
     */
    ServiceEpisodeID_0038_0060 = 3670112,
    /**
     * < Issuer of Service Episode ID (0038,0061)
     */
    IssuerOfServiceEpisodeID_0038_0061 = 3670113,
    /**
     * < Service Episode Description (0038,0062)
     */
    ServiceEpisodeDescription_0038_0062 = 3670114,
    /**
     * < Issuer of Service Episode ID Sequence (0038,0064)
     */
    IssuerOfServiceEpisodeIDSequence_0038_0064 = 3670116,
    /**
     * < Pertinent Documents Sequence (0038,0100)
     */
    PertinentDocumentsSequence_0038_0100 = 3670272,
    /**
     * < Pertinent Resources Sequence (0038,0101)
     */
    PertinentResourcesSequence_0038_0101 = 3670273,
    /**
     * < Resource Description (0038,0102)
     */
    ResourceDescription_0038_0102 = 3670274,
    /**
     * < Current Patient Location (0038,0300)
     */
    CurrentPatientLocation_0038_0300 = 3670784,
    /**
     * < Patient's Institution Residence (0038,0400)
     */
    PatientInstitutionResidence_0038_0400 = 3671040,
    /**
     * < Patient State (0038,0500)
     */
    PatientState_0038_0500 = 3671296,
    /**
     * < Patient Clinical Trial Participation Sequence (0038,0502)
     */
    PatientClinicalTrialParticipationSequence_0038_0502 = 3671298,
    /**
     * < Visit Comments (0038,4000)
     */
    VisitComments_0038_4000 = 3686400,
    /**
     * < Waveform Originality (003A,0004)
     */
    WaveformOriginality_003A_0004 = 3801092,
    /**
     * < Number of Waveform Channels (003A,0005)
     */
    NumberOfWaveformChannels_003A_0005 = 3801093,
    /**
     * < Number of Waveform Samples (003A,0010)
     */
    NumberOfWaveformSamples_003A_0010 = 3801104,
    /**
     * < Sampling Frequency (003A,001A)
     */
    SamplingFrequency_003A_001A = 3801114,
    /**
     * < Multiplex Group Label (003A,0020)
     */
    MultiplexGroupLabel_003A_0020 = 3801120,
    /**
     * < Channel Definition Sequence (003A,0200)
     */
    ChannelDefinitionSequence_003A_0200 = 3801600,
    /**
     * < Waveform Channel Number (003A,0202)
     */
    WaveformChannelNumber_003A_0202 = 3801602,
    /**
     * < Channel Label (003A,0203)
     */
    ChannelLabel_003A_0203 = 3801603,
    /**
     * < Channel Status (003A,0205)
     */
    ChannelStatus_003A_0205 = 3801605,
    /**
     * < Channel Source Sequence (003A,0208)
     */
    ChannelSourceSequence_003A_0208 = 3801608,
    /**
     * < Channel Source Modifiers Sequence (003A,0209)
     */
    ChannelSourceModifiersSequence_003A_0209 = 3801609,
    /**
     * < Source Waveform Sequence (003A,020A)
     */
    SourceWaveformSequence_003A_020A = 3801610,
    /**
     * < Channel Derivation Description (003A,020C)
     */
    ChannelDerivationDescription_003A_020C = 3801612,
    /**
     * < Channel Sensitivity (003A,0210)
     */
    ChannelSensitivity_003A_0210 = 3801616,
    /**
     * < Channel Sensitivity Units Sequence (003A,0211)
     */
    ChannelSensitivityUnitsSequence_003A_0211 = 3801617,
    /**
     * < Channel Sensitivity Correction Factor (003A,0212)
     */
    ChannelSensitivityCorrectionFactor_003A_0212 = 3801618,
    /**
     * < Channel Baseline (003A,0213)
     */
    ChannelBaseline_003A_0213 = 3801619,
    /**
     * < Channel Time Skew (003A,0214)
     */
    ChannelTimeSkew_003A_0214 = 3801620,
    /**
     * < Channel Sample Skew (003A,0215)
     */
    ChannelSampleSkew_003A_0215 = 3801621,
    /**
     * < Channel Offset (003A,0218)
     */
    ChannelOffset_003A_0218 = 3801624,
    /**
     * < Waveform Bits Stored (003A,021A)
     */
    WaveformBitsStored_003A_021A = 3801626,
    /**
     * < Filter Low Frequency (003A,0220)
     */
    FilterLowFrequency_003A_0220 = 3801632,
    /**
     * < Filter High Frequency (003A,0221)
     */
    FilterHighFrequency_003A_0221 = 3801633,
    /**
     * < Notch Filter Frequency (003A,0222)
     */
    NotchFilterFrequency_003A_0222 = 3801634,
    /**
     * < Notch Filter Bandwidth (003A,0223)
     */
    NotchFilterBandwidth_003A_0223 = 3801635,
    /**
     * < Waveform Data Display Scale (003A,0230)
     */
    WaveformDataDisplayScale_003A_0230 = 3801648,
    /**
     * < Waveform Display Background CIELab Value (003A,0231)
     */
    WaveformDisplayBackgroundCIELabValue_003A_0231 = 3801649,
    /**
     * < Waveform Presentation Group Sequence (003A,0240)
     */
    WaveformPresentationGroupSequence_003A_0240 = 3801664,
    /**
     * < Presentation Group Number (003A,0241)
     */
    PresentationGroupNumber_003A_0241 = 3801665,
    /**
     * < Channel Display Sequence (003A,0242)
     */
    ChannelDisplaySequence_003A_0242 = 3801666,
    /**
     * < Channel Recommended Display CIELab Value (003A,0244)
     */
    ChannelRecommendedDisplayCIELabValue_003A_0244 = 3801668,
    /**
     * < Channel Position (003A,0245)
     */
    ChannelPosition_003A_0245 = 3801669,
    /**
     * < Display Shading Flag (003A,0246)
     */
    DisplayShadingFlag_003A_0246 = 3801670,
    /**
     * < Fractional Channel Display Scale (003A,0247)
     */
    FractionalChannelDisplayScale_003A_0247 = 3801671,
    /**
     * < Absolute Channel Display Scale (003A,0248)
     */
    AbsoluteChannelDisplayScale_003A_0248 = 3801672,
    /**
     * < Multiplexed Audio Channels Description Code Sequence (003A,0300)
     */
    MultiplexedAudioChannelsDescriptionCodeSequence_003A_0300 = 3801856,
    /**
     * < Channel Identification Code (003A,0301)
     */
    ChannelIdentificationCode_003A_0301 = 3801857,
    /**
     * < Channel Mode (003A,0302)
     */
    ChannelMode_003A_0302 = 3801858,
    /**
     * < Scheduled Station AE Title (0040,0001)
     */
    ScheduledStationAETitle_0040_0001 = 4194305,
    /**
     * < Scheduled Procedure Step Start Date (0040,0002)
     */
    ScheduledProcedureStepStartDate_0040_0002 = 4194306,
    /**
     * < Scheduled Procedure Step Start Time (0040,0003)
     */
    ScheduledProcedureStepStartTime_0040_0003 = 4194307,
    /**
     * < Scheduled Procedure Step End Date (0040,0004)
     */
    ScheduledProcedureStepEndDate_0040_0004 = 4194308,
    /**
     * < Scheduled Procedure Step End Time (0040,0005)
     */
    ScheduledProcedureStepEndTime_0040_0005 = 4194309,
    /**
     * < Scheduled Performing Physician's Name (0040,0006)
     */
    ScheduledPerformingPhysicianName_0040_0006 = 4194310,
    /**
     * < Scheduled Procedure Step Description (0040,0007)
     */
    ScheduledProcedureStepDescription_0040_0007 = 4194311,
    /**
     * < Scheduled Protocol Code Sequence (0040,0008)
     */
    ScheduledProtocolCodeSequence_0040_0008 = 4194312,
    /**
     * < Scheduled Procedure Step ID (0040,0009)
     */
    ScheduledProcedureStepID_0040_0009 = 4194313,
    /**
     * < Stage Code Sequence (0040,000A)
     */
    StageCodeSequence_0040_000A = 4194314,
    /**
     * < Scheduled Performing Physician Identification Sequence (0040,000B)
     */
    ScheduledPerformingPhysicianIdentificationSequence_0040_000B = 4194315,
    /**
     * < Scheduled Station Name (0040,0010)
     */
    ScheduledStationName_0040_0010 = 4194320,
    /**
     * < Scheduled Procedure Step Location (0040,0011)
     */
    ScheduledProcedureStepLocation_0040_0011 = 4194321,
    /**
     * < Pre-Medication (0040,0012)
     */
    PreMedication_0040_0012 = 4194322,
    /**
     * < Scheduled Procedure Step Status (0040,0020)
     */
    ScheduledProcedureStepStatus_0040_0020 = 4194336,
    /**
     * < Order Placer Identifier Sequence (0040,0026)
     */
    OrderPlacerIdentifierSequence_0040_0026 = 4194342,
    /**
     * < Order Filler Identifier Sequence (0040,0027)
     */
    OrderFillerIdentifierSequence_0040_0027 = 4194343,
    /**
     * < Local Namespace Entity ID (0040,0031)
     */
    LocalNamespaceEntityID_0040_0031 = 4194353,
    /**
     * < Universal Entity ID (0040,0032)
     */
    UniversalEntityID_0040_0032 = 4194354,
    /**
     * < Universal Entity ID Type (0040,0033)
     */
    UniversalEntityIDType_0040_0033 = 4194355,
    /**
     * < Identifier Type Code (0040,0035)
     */
    IdentifierTypeCode_0040_0035 = 4194357,
    /**
     * < Assigning Facility Sequence (0040,0036)
     */
    AssigningFacilitySequence_0040_0036 = 4194358,
    /**
     * < Assigning Jurisdiction Code Sequence (0040,0039)
     */
    AssigningJurisdictionCodeSequence_0040_0039 = 4194361,
    /**
     * < Assigning Agency or Department Code Sequence (0040,003A)
     */
    AssigningAgencyOrDepartmentCodeSequence_0040_003A = 4194362,
    /**
     * < Scheduled Procedure Step Sequence (0040,0100)
     */
    ScheduledProcedureStepSequence_0040_0100 = 4194560,
    /**
     * < Referenced Non-Image Composite SOP Instance Sequence (0040,0220)
     */
    ReferencedNonImageCompositeSOPInstanceSequence_0040_0220 = 4194848,
    /**
     * < Performed Station AE Title (0040,0241)
     */
    PerformedStationAETitle_0040_0241 = 4194881,
    /**
     * < Performed Station Name (0040,0242)
     */
    PerformedStationName_0040_0242 = 4194882,
    /**
     * < Performed Location (0040,0243)
     */
    PerformedLocation_0040_0243 = 4194883,
    /**
     * < Performed Procedure Step Start Date (0040,0244)
     */
    PerformedProcedureStepStartDate_0040_0244 = 4194884,
    /**
     * < Performed Procedure Step Start Time (0040,0245)
     */
    PerformedProcedureStepStartTime_0040_0245 = 4194885,
    /**
     * < Performed Procedure Step End Date (0040,0250)
     */
    PerformedProcedureStepEndDate_0040_0250 = 4194896,
    /**
     * < Performed Procedure Step End Time (0040,0251)
     */
    PerformedProcedureStepEndTime_0040_0251 = 4194897,
    /**
     * < Performed Procedure Step Status (0040,0252)
     */
    PerformedProcedureStepStatus_0040_0252 = 4194898,
    /**
     * < Performed Procedure Step ID (0040,0253)
     */
    PerformedProcedureStepID_0040_0253 = 4194899,
    /**
     * < Performed Procedure Step Description (0040,0254)
     */
    PerformedProcedureStepDescription_0040_0254 = 4194900,
    /**
     * < Performed Procedure Type Description (0040,0255)
     */
    PerformedProcedureTypeDescription_0040_0255 = 4194901,
    /**
     * < Performed Protocol Code Sequence (0040,0260)
     */
    PerformedProtocolCodeSequence_0040_0260 = 4194912,
    /**
     * < Performed Protocol Type (0040,0261)
     */
    PerformedProtocolType_0040_0261 = 4194913,
    /**
     * < Scheduled Step Attributes Sequence (0040,0270)
     */
    ScheduledStepAttributesSequence_0040_0270 = 4194928,
    /**
     * < Request Attributes Sequence (0040,0275)
     */
    RequestAttributesSequence_0040_0275 = 4194933,
    /**
     * < Comments on the Performed Procedure Step (0040,0280)
     */
    CommentsOnThePerformedProcedureStep_0040_0280 = 4194944,
    /**
     * < Performed Procedure Step Discontinuation Reason Code Sequence (0040,0281)
     */
    PerformedProcedureStepDiscontinuationReasonCodeSequence_0040_0281 = 4194945,
    /**
     * < Quantity Sequence (0040,0293)
     */
    QuantitySequence_0040_0293 = 4194963,
    /**
     * < Quantity (0040,0294)
     */
    Quantity_0040_0294 = 4194964,
    /**
     * < Measuring Units Sequence (0040,0295)
     */
    MeasuringUnitsSequence_0040_0295 = 4194965,
    /**
     * < Billing Item Sequence (0040,0296)
     */
    BillingItemSequence_0040_0296 = 4194966,
    /**
     * < Total Time of Fluoroscopy (0040,0300)
     */
    TotalTimeOfFluoroscopy_0040_0300 = 4195072,
    /**
     * < Total Number of Exposures (0040,0301)
     */
    TotalNumberOfExposures_0040_0301 = 4195073,
    /**
     * < Entrance Dose (0040,0302)
     */
    EntranceDose_0040_0302 = 4195074,
    /**
     * < Exposed Area (0040,0303)
     */
    ExposedArea_0040_0303 = 4195075,
    /**
     * < Distance Source to Entrance (0040,0306)
     */
    DistanceSourceToEntrance_0040_0306 = 4195078,
    /**
     * < Distance Source to Support (0040,0307)
     */
    DistanceSourceToSupport_0040_0307 = 4195079,
    /**
     * < Exposure Dose Sequence (0040,030E)
     */
    ExposureDoseSequence_0040_030E = 4195086,
    /**
     * < Comments on Radiation Dose (0040,0310)
     */
    CommentsOnRadiationDose_0040_0310 = 4195088,
    /**
     * < X-Ray Output (0040,0312)
     */
    XRayOutput_0040_0312 = 4195090,
    /**
     * < Half Value Layer (0040,0314)
     */
    HalfValueLayer_0040_0314 = 4195092,
    /**
     * < Organ Dose (0040,0316)
     */
    OrganDose_0040_0316 = 4195094,
    /**
     * < Organ Exposed (0040,0318)
     */
    OrganExposed_0040_0318 = 4195096,
    /**
     * < Billing Procedure Step Sequence (0040,0320)
     */
    BillingProcedureStepSequence_0040_0320 = 4195104,
    /**
     * < Film Consumption Sequence (0040,0321)
     */
    FilmConsumptionSequence_0040_0321 = 4195105,
    /**
     * < Billing Supplies and Devices Sequence (0040,0324)
     */
    BillingSuppliesAndDevicesSequence_0040_0324 = 4195108,
    /**
     * < Referenced Procedure Step Sequence (0040,0330)
     */
    ReferencedProcedureStepSequence_0040_0330 = 4195120,
    /**
     * < Performed Series Sequence (0040,0340)
     */
    PerformedSeriesSequence_0040_0340 = 4195136,
    /**
     * < Comments on the Scheduled Procedure Step (0040,0400)
     */
    CommentsOnTheScheduledProcedureStep_0040_0400 = 4195328,
    /**
     * < Protocol Context Sequence (0040,0440)
     */
    ProtocolContextSequence_0040_0440 = 4195392,
    /**
     * < Content Item Modifier Sequence (0040,0441)
     */
    ContentItemModifierSequence_0040_0441 = 4195393,
    /**
     * < Scheduled Specimen Sequence (0040,0500)
     */
    ScheduledSpecimenSequence_0040_0500 = 4195584,
    /**
     * < Specimen Accession Number (0040,050A)
     */
    SpecimenAccessionNumber_0040_050A = 4195594,
    /**
     * < Container Identifier (0040,0512)
     */
    ContainerIdentifier_0040_0512 = 4195602,
    /**
     * < Issuer of the Container Identifier Sequence (0040,0513)
     */
    IssuerOfTheContainerIdentifierSequence_0040_0513 = 4195603,
    /**
     * < Alternate Container Identifier Sequence (0040,0515)
     */
    AlternateContainerIdentifierSequence_0040_0515 = 4195605,
    /**
     * < Container Type Code Sequence (0040,0518)
     */
    ContainerTypeCodeSequence_0040_0518 = 4195608,
    /**
     * < Container Description (0040,051A)
     */
    ContainerDescription_0040_051A = 4195610,
    /**
     * < Container Component Sequence (0040,0520)
     */
    ContainerComponentSequence_0040_0520 = 4195616,
    /**
     * < Specimen Sequence (0040,0550)
     */
    SpecimenSequence_0040_0550 = 4195664,
    /**
     * < Specimen Identifier (0040,0551)
     */
    SpecimenIdentifier_0040_0551 = 4195665,
    /**
     * < Specimen Description Sequence (Trial) (0040,0552)
     */
    SpecimenDescriptionSequenceTrial_0040_0552 = 4195666,
    /**
     * < Specimen Description (Trial) (0040,0553)
     */
    SpecimenDescriptionTrial_0040_0553 = 4195667,
    /**
     * < Specimen UID (0040,0554)
     */
    SpecimenUID_0040_0554 = 4195668,
    /**
     * < Acquisition Context Sequence (0040,0555)
     */
    AcquisitionContextSequence_0040_0555 = 4195669,
    /**
     * < Acquisition Context Description (0040,0556)
     */
    AcquisitionContextDescription_0040_0556 = 4195670,
    /**
     * < Specimen Description Sequence (0040,0560)
     */
    SpecimenDescriptionSequence_0040_0560 = 4195680,
    /**
     * < Issuer of the Specimen Identifier Sequence (0040,0562)
     */
    IssuerOfTheSpecimenIdentifierSequence_0040_0562 = 4195682,
    /**
     * < Specimen Type Code Sequence (0040,059A)
     */
    SpecimenTypeCodeSequence_0040_059A = 4195738,
    /**
     * < Specimen Short Description (0040,0600)
     */
    SpecimenShortDescription_0040_0600 = 4195840,
    /**
     * < Specimen Detailed Description (0040,0602)
     */
    SpecimenDetailedDescription_0040_0602 = 4195842,
    /**
     * < Specimen Preparation Sequence (0040,0610)
     */
    SpecimenPreparationSequence_0040_0610 = 4195856,
    /**
     * < Specimen Preparation Step Content Item Sequence (0040,0612)
     */
    SpecimenPreparationStepContentItemSequence_0040_0612 = 4195858,
    /**
     * < Specimen Localization Content Item Sequence (0040,0620)
     */
    SpecimenLocalizationContentItemSequence_0040_0620 = 4195872,
    /**
     * < Slide Identifier (0040,06FA)
     */
    SlideIdentifier_0040_06FA = 4196090,
    /**
     * < Whole Slide Microscopy Image Frame Type Sequence (0040,0710)
     */
    WholeSlideMicroscopyImageFrameTypeSequence_0040_0710 = 4196112,
    /**
     * < Image Center Point Coordinates Sequence (0040,071A)
     */
    ImageCenterPointCoordinatesSequence_0040_071A = 4196122,
    /**
     * < X Offset in Slide Coordinate System (0040,072A)
     */
    XOffsetInSlideCoordinateSystem_0040_072A = 4196138,
    /**
     * < Y Offset in Slide Coordinate System (0040,073A)
     */
    YOffsetInSlideCoordinateSystem_0040_073A = 4196154,
    /**
     * < Z Offset in Slide Coordinate System (0040,074A)
     */
    ZOffsetInSlideCoordinateSystem_0040_074A = 4196170,
    /**
     * < Pixel Spacing Sequence (0040,08D8)
     */
    PixelSpacingSequence_0040_08D8 = 4196568,
    /**
     * < Coordinate System Axis Code Sequence (0040,08DA)
     */
    CoordinateSystemAxisCodeSequence_0040_08DA = 4196570,
    /**
     * < Measurement Units Code Sequence (0040,08EA)
     */
    MeasurementUnitsCodeSequence_0040_08EA = 4196586,
    /**
     * < Vital Stain Code Sequence (Trial) (0040,09F8)
     */
    VitalStainCodeSequenceTrial_0040_09F8 = 4196856,
    /**
     * < Requested Procedure ID (0040,1001)
     */
    RequestedProcedureID_0040_1001 = 4198401,
    /**
     * < Reason for the Requested Procedure (0040,1002)
     */
    ReasonForTheRequestedProcedure_0040_1002 = 4198402,
    /**
     * < Requested Procedure Priority (0040,1003)
     */
    RequestedProcedurePriority_0040_1003 = 4198403,
    /**
     * < Patient Transport Arrangements (0040,1004)
     */
    PatientTransportArrangements_0040_1004 = 4198404,
    /**
     * < Requested Procedure Location (0040,1005)
     */
    RequestedProcedureLocation_0040_1005 = 4198405,
    /**
     * < Placer Order Number / Procedure (0040,1006)
     */
    PlacerOrderNumberProcedure_0040_1006 = 4198406,
    /**
     * < Filler Order Number / Procedure (0040,1007)
     */
    FillerOrderNumberProcedure_0040_1007 = 4198407,
    /**
     * < Confidentiality Code (0040,1008)
     */
    ConfidentialityCode_0040_1008 = 4198408,
    /**
     * < Reporting Priority (0040,1009)
     */
    ReportingPriority_0040_1009 = 4198409,
    /**
     * < Reason for Requested Procedure Code Sequence (0040,100A)
     */
    ReasonForRequestedProcedureCodeSequence_0040_100A = 4198410,
    /**
     * < Names of Intended Recipients of Results (0040,1010)
     */
    NamesOfIntendedRecipientsOfResults_0040_1010 = 4198416,
    /**
     * < Intended Recipients of Results Identification Sequence (0040,1011)
     */
    IntendedRecipientsOfResultsIdentificationSequence_0040_1011 = 4198417,
    /**
     * < Reason For Performed Procedure Code Sequence (0040,1012)
     */
    ReasonForPerformedProcedureCodeSequence_0040_1012 = 4198418,
    /**
     * < Requested Procedure Description (Trial) (0040,1060)
     */
    RequestedProcedureDescriptionTrial_0040_1060 = 4198496,
    /**
     * < Person Identification Code Sequence (0040,1101)
     */
    PersonIdentificationCodeSequence_0040_1101 = 4198657,
    /**
     * < Person's Address (0040,1102)
     */
    PersonAddress_0040_1102 = 4198658,
    /**
     * < Person's Telephone Numbers (0040,1103)
     */
    PersonTelephoneNumbers_0040_1103 = 4198659,
    /**
     * < Person's Telecom Information (0040,1104)
     */
    PersonTelecomInformation_0040_1104 = 4198660,
    /**
     * < Requested Procedure Comments (0040,1400)
     */
    RequestedProcedureComments_0040_1400 = 4199424,
    /**
     * < Reason for the Imaging Service Request (0040,2001)
     */
    ReasonForTheImagingServiceRequest_0040_2001 = 4202497,
    /**
     * < Issue Date of Imaging Service Request (0040,2004)
     */
    IssueDateOfImagingServiceRequest_0040_2004 = 4202500,
    /**
     * < Issue Time of Imaging Service Request (0040,2005)
     */
    IssueTimeOfImagingServiceRequest_0040_2005 = 4202501,
    /**
     * < Order Entered By (0040,2008)
     */
    OrderEnteredBy_0040_2008 = 4202504,
    /**
     * < Order Enterer's Location (0040,2009)
     */
    OrderEntererLocation_0040_2009 = 4202505,
    /**
     * < Order Callback Phone Number (0040,2010)
     */
    OrderCallbackPhoneNumber_0040_2010 = 4202512,
    /**
     * < Order Callback Telecom Information (0040,2011)
     */
    OrderCallbackTelecomInformation_0040_2011 = 4202513,
    /**
     * < Placer Order Number / Imaging Service Request (Retired) (0040,2006)
     */
    PlacerOrderNumberImagingServiceRequestRetired_0040_2006 = 4202502,
    /**
     * < Placer Order Number / Imaging Service Request (0040,2016)
     */
    PlacerOrderNumberImagingServiceRequest_0040_2016 = 4202518,
    /**
     * < Filler Order Number / Imaging Service Request (Retired) (0040,2007)
     */
    FillerOrderNumberImagingServiceRequestRetired_0040_2007 = 4202503,
    /**
     * < Filler Order Number / Imaging Service Request (0040,2017)
     */
    FillerOrderNumberImagingServiceRequest_0040_2017 = 4202519,
    /**
     * < Imaging Service Request Comments (0040,2400)
     */
    ImagingServiceRequestComments_0040_2400 = 4203520,
    /**
     * < Confidentiality Constraint on Patient Data Description (0040,3001)
     */
    ConfidentialityConstraintOnPatientDataDescription_0040_3001 = 4206593,
    /**
     * < General Purpose Scheduled Procedure Step Status (0040,4001)
     */
    GeneralPurposeScheduledProcedureStepStatus_0040_4001 = 4210689,
    /**
     * < General Purpose Performed Procedure Step Status (0040,4002)
     */
    GeneralPurposePerformedProcedureStepStatus_0040_4002 = 4210690,
    /**
     * < General Purpose Scheduled Procedure Step Priority (0040,4003)
     */
    GeneralPurposeScheduledProcedureStepPriority_0040_4003 = 4210691,
    /**
     * < Scheduled Processing Applications Code Sequence (0040,4004)
     */
    ScheduledProcessingApplicationsCodeSequence_0040_4004 = 4210692,
    /**
     * < Scheduled Procedure Step Start DateTime (0040,4005)
     */
    ScheduledProcedureStepStartDateTime_0040_4005 = 4210693,
    /**
     * < Multiple Copies Flag (0040,4006)
     */
    MultipleCopiesFlag_0040_4006 = 4210694,
    /**
     * < Performed Processing Applications Code Sequence (0040,4007)
     */
    PerformedProcessingApplicationsCodeSequence_0040_4007 = 4210695,
    /**
     * < Scheduled Procedure Step Expiration DateTime (0040,4008)
     */
    ScheduledProcedureStepExpirationDateTime_0040_4008 = 4210696,
    /**
     * < Human Performer Code Sequence (0040,4009)
     */
    HumanPerformerCodeSequence_0040_4009 = 4210697,
    /**
     * < Scheduled Procedure Step Modification DateTime (0040,4010)
     */
    ScheduledProcedureStepModificationDateTime_0040_4010 = 4210704,
    /**
     * < Expected Completion DateTime (0040,4011)
     */
    ExpectedCompletionDateTime_0040_4011 = 4210705,
    /**
     * < Resulting General Purpose Performed Procedure Steps Sequence (0040,4015)
     */
    ResultingGeneralPurposePerformedProcedureStepsSequence_0040_4015 = 4210709,
    /**
     * < Referenced General Purpose Scheduled Procedure Step Sequence (0040,4016)
     */
    ReferencedGeneralPurposeScheduledProcedureStepSequence_0040_4016 = 4210710,
    /**
     * < Scheduled Workitem Code Sequence (0040,4018)
     */
    ScheduledWorkitemCodeSequence_0040_4018 = 4210712,
    /**
     * < Performed Workitem Code Sequence (0040,4019)
     */
    PerformedWorkitemCodeSequence_0040_4019 = 4210713,
    /**
     * < Input Availability Flag (0040,4020)
     */
    InputAvailabilityFlag_0040_4020 = 4210720,
    /**
     * < Input Information Sequence (0040,4021)
     */
    InputInformationSequence_0040_4021 = 4210721,
    /**
     * < Relevant Information Sequence (0040,4022)
     */
    RelevantInformationSequence_0040_4022 = 4210722,
    /**
     * < Referenced General Purpose Scheduled Procedure Step Transaction UID (0040,4023)
     */
    ReferencedGeneralPurposeScheduledProcedureStepTransactionUID_0040_4023 = 4210723,
    /**
     * < Scheduled Station Name Code Sequence (0040,4025)
     */
    ScheduledStationNameCodeSequence_0040_4025 = 4210725,
    /**
     * < Scheduled Station Class Code Sequence (0040,4026)
     */
    ScheduledStationClassCodeSequence_0040_4026 = 4210726,
    /**
     * < Scheduled Station Geographic Location Code Sequence (0040,4027)
     */
    ScheduledStationGeographicLocationCodeSequence_0040_4027 = 4210727,
    /**
     * < Performed Station Name Code Sequence (0040,4028)
     */
    PerformedStationNameCodeSequence_0040_4028 = 4210728,
    /**
     * < Performed Station Class Code Sequence (0040,4029)
     */
    PerformedStationClassCodeSequence_0040_4029 = 4210729,
    /**
     * < Performed Station Geographic Location Code Sequence (0040,4030)
     */
    PerformedStationGeographicLocationCodeSequence_0040_4030 = 4210736,
    /**
     * < Requested Subsequent Workitem Code Sequence (0040,4031)
     */
    RequestedSubsequentWorkitemCodeSequence_0040_4031 = 4210737,
    /**
     * < Non-DICOM Output Code Sequence (0040,4032)
     */
    NonDICOMOutputCodeSequence_0040_4032 = 4210738,
    /**
     * < Output Information Sequence (0040,4033)
     */
    OutputInformationSequence_0040_4033 = 4210739,
    /**
     * < Scheduled Human Performers Sequence (0040,4034)
     */
    ScheduledHumanPerformersSequence_0040_4034 = 4210740,
    /**
     * < Actual Human Performers Sequence (0040,4035)
     */
    ActualHumanPerformersSequence_0040_4035 = 4210741,
    /**
     * < Human Performer's Organization (0040,4036)
     */
    HumanPerformerOrganization_0040_4036 = 4210742,
    /**
     * < Human Performer's Name (0040,4037)
     */
    HumanPerformerName_0040_4037 = 4210743,
    /**
     * < Raw Data Handling (0040,4040)
     */
    RawDataHandling_0040_4040 = 4210752,
    /**
     * < Input Readiness State (0040,4041)
     */
    InputReadinessState_0040_4041 = 4210753,
    /**
     * < Performed Procedure Step Start DateTime (0040,4050)
     */
    PerformedProcedureStepStartDateTime_0040_4050 = 4210768,
    /**
     * < Performed Procedure Step End DateTime (0040,4051)
     */
    PerformedProcedureStepEndDateTime_0040_4051 = 4210769,
    /**
     * < Procedure Step Cancellation DateTime (0040,4052)
     */
    ProcedureStepCancellationDateTime_0040_4052 = 4210770,
    /**
     * < Output Destination Sequence (0040,4070)
     */
    OutputDestinationSequence_0040_4070 = 4210800,
    /**
     * < DICOM Storage Sequence (0040,4071)
     */
    DICOMStorageSequence_0040_4071 = 4210801,
    /**
     * < STOW-RS Storage Sequence (0040,4072)
     */
    STOWRSStorageSequence_0040_4072 = 4210802,
    /**
     * < Storage URL (0040,4073)
     */
    StorageURL_0040_4073 = 4210803,
    /**
     * < XDS Storage Sequence (0040,4074)
     */
    XDSStorageSequence_0040_4074 = 4210804,
    /**
     * < Entrance Dose in mGy (0040,8302)
     */
    EntranceDoseInmGy_0040_8302 = 4227842,
    /**
     * < Entrance Dose Derivation (0040,8303)
     */
    EntranceDoseDerivation_0040_8303 = 4227843,
    /**
     * < Parametric Map Frame Type Sequence (0040,9092)
     */
    ParametricMapFrameTypeSequence_0040_9092 = 4231314,
    /**
     * < Referenced Image Real World Value Mapping Sequence (0040,9094)
     */
    ReferencedImageRealWorldValueMappingSequence_0040_9094 = 4231316,
    /**
     * < Real World Value Mapping Sequence (0040,9096)
     */
    RealWorldValueMappingSequence_0040_9096 = 4231318,
    /**
     * < Pixel Value Mapping Code Sequence (0040,9098)
     */
    PixelValueMappingCodeSequence_0040_9098 = 4231320,
    /**
     * < LUT Label (0040,9210)
     */
    LUTLabel_0040_9210 = 4231696,
    /**
     * < Real World Value Last Value Mapped (0040,9211)
     */
    RealWorldValueLastValueMapped_0040_9211 = 4231697,
    /**
     * < Real World Value LUT Data (0040,9212)
     */
    RealWorldValueLUTData_0040_9212 = 4231698,
    /**
     * < Double Float Real World Value Last Value Mapped (0040,9213)
     */
    DoubleFloatRealWorldValueLastValueMapped_0040_9213 = 4231699,
    /**
     * < Double Float Real World Value First Value Mapped (0040,9214)
     */
    DoubleFloatRealWorldValueFirstValueMapped_0040_9214 = 4231700,
    /**
     * < Real World Value First Value Mapped (0040,9216)
     */
    RealWorldValueFirstValueMapped_0040_9216 = 4231702,
    /**
     * < Quantity Definition Sequence (0040,9220)
     */
    QuantityDefinitionSequence_0040_9220 = 4231712,
    /**
     * < Real World Value Intercept (0040,9224)
     */
    RealWorldValueIntercept_0040_9224 = 4231716,
    /**
     * < Real World Value Slope (0040,9225)
     */
    RealWorldValueSlope_0040_9225 = 4231717,
    /**
     * < Findings Flag (Trial) (0040,A007)
     */
    FindingsFlagTrial_0040_A007 = 4235271,
    /**
     * < Relationship Type (0040,A010)
     */
    RelationshipType_0040_A010 = 4235280,
    /**
     * < Findings Sequence (Trial) (0040,A020)
     */
    FindingsSequenceTrial_0040_A020 = 4235296,
    /**
     * < Findings Group UID (Trial) (0040,A021)
     */
    FindingsGroupUIDTrial_0040_A021 = 4235297,
    /**
     * < Referenced Findings Group UID (Trial) (0040,A022)
     */
    ReferencedFindingsGroupUIDTrial_0040_A022 = 4235298,
    /**
     * < Findings Group Recording Date (Trial) (0040,A023)
     */
    FindingsGroupRecordingDateTrial_0040_A023 = 4235299,
    /**
     * < Findings Group Recording Time (Trial) (0040,A024)
     */
    FindingsGroupRecordingTimeTrial_0040_A024 = 4235300,
    /**
     * < Findings Source Category Code Sequence (Trial) (0040,A026)
     */
    FindingsSourceCategoryCodeSequenceTrial_0040_A026 = 4235302,
    /**
     * < Verifying Organization (0040,A027)
     */
    VerifyingOrganization_0040_A027 = 4235303,
    /**
     * < Documenting Organization Identifier Code Sequence (Trial) (0040,A028)
     */
    DocumentingOrganizationIdentifierCodeSequenceTrial_0040_A028 = 4235304,
    /**
     * < Verification DateTime (0040,A030)
     */
    VerificationDateTime_0040_A030 = 4235312,
    /**
     * < Observation DateTime (0040,A032)
     */
    ObservationDateTime_0040_A032 = 4235314,
    /**
     * < Value Type (0040,A040)
     */
    ValueType_0040_A040 = 4235328,
    /**
     * < Concept Name Code Sequence (0040,A043)
     */
    ConceptNameCodeSequence_0040_A043 = 4235331,
    /**
     * < Measurement Precision Description (Trial) (0040,A047)
     */
    MeasurementPrecisionDescriptionTrial_0040_A047 = 4235335,
    /**
     * < Continuity Of Content (0040,A050)
     */
    ContinuityOfContent_0040_A050 = 4235344,
    /**
     * < Urgency or Priority Alerts (Trial) (0040,A057)
     */
    UrgencyOrPriorityAlertsTrial_0040_A057 = 4235351,
    /**
     * < Sequencing Indicator (Trial) (0040,A060)
     */
    SequencingIndicatorTrial_0040_A060 = 4235360,
    /**
     * < Document Identifier Code Sequence (Trial) (0040,A066)
     */
    DocumentIdentifierCodeSequenceTrial_0040_A066 = 4235366,
    /**
     * < Document Author (Trial) (0040,A067)
     */
    DocumentAuthorTrial_0040_A067 = 4235367,
    /**
     * < Document Author Identifier Code Sequence (Trial) (0040,A068)
     */
    DocumentAuthorIdentifierCodeSequenceTrial_0040_A068 = 4235368,
    /**
     * < Identifier Code Sequence (Trial) (0040,A070)
     */
    IdentifierCodeSequenceTrial_0040_A070 = 4235376,
    /**
     * < Verifying Observer Sequence (0040,A073)
     */
    VerifyingObserverSequence_0040_A073 = 4235379,
    /**
     * < Object Binary Identifier (Trial) (0040,A074)
     */
    ObjectBinaryIdentifierTrial_0040_A074 = 4235380,
    /**
     * < Verifying Observer Name (0040,A075)
     */
    VerifyingObserverName_0040_A075 = 4235381,
    /**
     * < Documenting Observer Identifier Code Sequence (Trial) (0040,A076)
     */
    DocumentingObserverIdentifierCodeSequenceTrial_0040_A076 = 4235382,
    /**
     * < Author Observer Sequence (0040,A078)
     */
    AuthorObserverSequence_0040_A078 = 4235384,
    /**
     * < Participant Sequence (0040,A07A)
     */
    ParticipantSequence_0040_A07A = 4235386,
    /**
     * < Custodial Organization Sequence (0040,A07C)
     */
    CustodialOrganizationSequence_0040_A07C = 4235388,
    /**
     * < Participation Type (0040,A080)
     */
    ParticipationType_0040_A080 = 4235392,
    /**
     * < Participation DateTime (0040,A082)
     */
    ParticipationDateTime_0040_A082 = 4235394,
    /**
     * < Observer Type (0040,A084)
     */
    ObserverType_0040_A084 = 4235396,
    /**
     * < Procedure Identifier Code Sequence (Trial) (0040,A085)
     */
    ProcedureIdentifierCodeSequenceTrial_0040_A085 = 4235397,
    /**
     * < Verifying Observer Identification Code Sequence (0040,A088)
     */
    VerifyingObserverIdentificationCodeSequence_0040_A088 = 4235400,
    /**
     * < Object Directory Binary Identifier (Trial) (0040,A089)
     */
    ObjectDirectoryBinaryIdentifierTrial_0040_A089 = 4235401,
    /**
     * < Equivalent CDA Document Sequence (0040,A090)
     */
    EquivalentCDADocumentSequence_0040_A090 = 4235408,
    /**
     * < Referenced Waveform Channels (0040,A0B0)
     */
    ReferencedWaveformChannels_0040_A0B0 = 4235440,
    /**
     * < Date of Document or Verbal Transaction (Trial) (0040,A110)
     */
    DateOfDocumentOrVerbalTransactionTrial_0040_A110 = 4235536,
    /**
     * < Time of Document Creation or Verbal Transaction (Trial) (0040,A112)
     */
    TimeOfDocumentCreationOrVerbalTransactionTrial_0040_A112 = 4235538,
    /**
     * < DateTime (0040,A120)
     */
    DateTime_0040_A120 = 4235552,
    /**
     * < Date (0040,A121)
     */
    Date_0040_A121 = 4235553,
    /**
     * < Time (0040,A122)
     */
    Time_0040_A122 = 4235554,
    /**
     * < Person Name (0040,A123)
     */
    PersonName_0040_A123 = 4235555,
    /**
     * < UID (0040,A124)
     */
    UID_0040_A124 = 4235556,
    /**
     * < Report Status ID (Trial) (0040,A125)
     */
    ReportStatusIDTrial_0040_A125 = 4235557,
    /**
     * < Temporal Range Type (0040,A130)
     */
    TemporalRangeType_0040_A130 = 4235568,
    /**
     * < Referenced Sample Positions (0040,A132)
     */
    ReferencedSamplePositions_0040_A132 = 4235570,
    /**
     * < Referenced Frame Numbers (0040,A136)
     */
    ReferencedFrameNumbers_0040_A136 = 4235574,
    /**
     * < Referenced Time Offsets (0040,A138)
     */
    ReferencedTimeOffsets_0040_A138 = 4235576,
    /**
     * < Referenced DateTime (0040,A13A)
     */
    ReferencedDateTime_0040_A13A = 4235578,
    /**
     * < Text Value (0040,A160)
     */
    TextValue_0040_A160 = 4235616,
    /**
     * < Floating Point Value (0040,A161)
     */
    FloatingPointValue_0040_A161 = 4235617,
    /**
     * < Rational Numerator Value (0040,A162)
     */
    RationalNumeratorValue_0040_A162 = 4235618,
    /**
     * < Rational Denominator Value (0040,A163)
     */
    RationalDenominatorValue_0040_A163 = 4235619,
    /**
     * < Observation Category Code Sequence (Trial) (0040,A167)
     */
    ObservationCategoryCodeSequenceTrial_0040_A167 = 4235623,
    /**
     * < Concept Code Sequence (0040,A168)
     */
    ConceptCodeSequence_0040_A168 = 4235624,
    /**
     * < Bibliographic Citation (Trial) (0040,A16A)
     */
    BibliographicCitationTrial_0040_A16A = 4235626,
    /**
     * < Purpose of Reference Code Sequence (0040,A170)
     */
    PurposeOfReferenceCodeSequence_0040_A170 = 4235632,
    /**
     * < Observation UID (0040,A171)
     */
    ObservationUID_0040_A171 = 4235633,
    /**
     * < Referenced Observation UID (Trial) (0040,A172)
     */
    ReferencedObservationUIDTrial_0040_A172 = 4235634,
    /**
     * < Referenced Observation Class (Trial) (0040,A173)
     */
    ReferencedObservationClassTrial_0040_A173 = 4235635,
    /**
     * < Referenced Object Observation Class (Trial) (0040,A174)
     */
    ReferencedObjectObservationClassTrial_0040_A174 = 4235636,
    /**
     * < Annotation Group Number (0040,A180)
     */
    AnnotationGroupNumber_0040_A180 = 4235648,
    /**
     * < Observation Date (Trial) (0040,A192)
     */
    ObservationDateTrial_0040_A192 = 4235666,
    /**
     * < Observation Time (Trial) (0040,A193)
     */
    ObservationTimeTrial_0040_A193 = 4235667,
    /**
     * < Measurement Automation (Trial) (0040,A194)
     */
    MeasurementAutomationTrial_0040_A194 = 4235668,
    /**
     * < Modifier Code Sequence (0040,A195)
     */
    ModifierCodeSequence_0040_A195 = 4235669,
    /**
     * < Identification Description (Trial) (0040,A224)
     */
    IdentificationDescriptionTrial_0040_A224 = 4235812,
    /**
     * < Coordinates Set Geometric Type (Trial) (0040,A290)
     */
    CoordinatesSetGeometricTypeTrial_0040_A290 = 4235920,
    /**
     * < Algorithm Code Sequence (Trial) (0040,A296)
     */
    AlgorithmCodeSequenceTrial_0040_A296 = 4235926,
    /**
     * < Algorithm Description (Trial) (0040,A297)
     */
    AlgorithmDescriptionTrial_0040_A297 = 4235927,
    /**
     * < Pixel Coordinates Set (Trial) (0040,A29A)
     */
    PixelCoordinatesSetTrial_0040_A29A = 4235930,
    /**
     * < Measured Value Sequence (0040,A300)
     */
    MeasuredValueSequence_0040_A300 = 4236032,
    /**
     * < Numeric Value Qualifier Code Sequence (0040,A301)
     */
    NumericValueQualifierCodeSequence_0040_A301 = 4236033,
    /**
     * < Current Observer (Trial) (0040,A307)
     */
    CurrentObserverTrial_0040_A307 = 4236039,
    /**
     * < Numeric Value (0040,A30A)
     */
    NumericValue_0040_A30A = 4236042,
    /**
     * < Referenced Accession Sequence (Trial) (0040,A313)
     */
    ReferencedAccessionSequenceTrial_0040_A313 = 4236051,
    /**
     * < Report Status Comment (Trial) (0040,A33A)
     */
    ReportStatusCommentTrial_0040_A33A = 4236090,
    /**
     * < Procedure Context Sequence (Trial) (0040,A340)
     */
    ProcedureContextSequenceTrial_0040_A340 = 4236096,
    /**
     * < Verbal Source (Trial) (0040,A352)
     */
    VerbalSourceTrial_0040_A352 = 4236114,
    /**
     * < Address (Trial) (0040,A353)
     */
    AddressTrial_0040_A353 = 4236115,
    /**
     * < Telephone Number (Trial) (0040,A354)
     */
    TelephoneNumberTrial_0040_A354 = 4236116,
    /**
     * < Verbal Source Identifier Code Sequence (Trial) (0040,A358)
     */
    VerbalSourceIdentifierCodeSequenceTrial_0040_A358 = 4236120,
    /**
     * < Predecessor Documents Sequence (0040,A360)
     */
    PredecessorDocumentsSequence_0040_A360 = 4236128,
    /**
     * < Referenced Request Sequence (0040,A370)
     */
    ReferencedRequestSequence_0040_A370 = 4236144,
    /**
     * < Performed Procedure Code Sequence (0040,A372)
     */
    PerformedProcedureCodeSequence_0040_A372 = 4236146,
    /**
     * < Current Requested Procedure Evidence Sequence (0040,A375)
     */
    CurrentRequestedProcedureEvidenceSequence_0040_A375 = 4236149,
    /**
     * < Report Detail Sequence (Trial) (0040,A380)
     */
    ReportDetailSequenceTrial_0040_A380 = 4236160,
    /**
     * < Pertinent Other Evidence Sequence (0040,A385)
     */
    PertinentOtherEvidenceSequence_0040_A385 = 4236165,
    /**
     * < HL7 Structured Document Reference Sequence (0040,A390)
     */
    HL7StructuredDocumentReferenceSequence_0040_A390 = 4236176,
    /**
     * < Observation Subject UID (Trial) (0040,A402)
     */
    ObservationSubjectUIDTrial_0040_A402 = 4236290,
    /**
     * < Observation Subject Class (Trial) (0040,A403)
     */
    ObservationSubjectClassTrial_0040_A403 = 4236291,
    /**
     * < Observation Subject Type Code Sequence (Trial) (0040,A404)
     */
    ObservationSubjectTypeCodeSequenceTrial_0040_A404 = 4236292,
    /**
     * < Completion Flag (0040,A491)
     */
    CompletionFlag_0040_A491 = 4236433,
    /**
     * < Completion Flag Description (0040,A492)
     */
    CompletionFlagDescription_0040_A492 = 4236434,
    /**
     * < Verification Flag (0040,A493)
     */
    VerificationFlag_0040_A493 = 4236435,
    /**
     * < Archive Requested (0040,A494)
     */
    ArchiveRequested_0040_A494 = 4236436,
    /**
     * < Preliminary Flag (0040,A496)
     */
    PreliminaryFlag_0040_A496 = 4236438,
    /**
     * < Content Template Sequence (0040,A504)
     */
    ContentTemplateSequence_0040_A504 = 4236548,
    /**
     * < Identical Documents Sequence (0040,A525)
     */
    IdenticalDocumentsSequence_0040_A525 = 4236581,
    /**
     * < Observation Subject Context Flag (Trial) (0040,A600)
     */
    ObservationSubjectContextFlagTrial_0040_A600 = 4236800,
    /**
     * < Observer Context Flag (Trial) (0040,A601)
     */
    ObserverContextFlagTrial_0040_A601 = 4236801,
    /**
     * < Procedure Context Flag (Trial) (0040,A603)
     */
    ProcedureContextFlagTrial_0040_A603 = 4236803,
    /**
     * < Content Sequence (0040,A730)
     */
    ContentSequence_0040_A730 = 4237104,
    /**
     * < Relationship Sequence (Trial) (0040,A731)
     */
    RelationshipSequenceTrial_0040_A731 = 4237105,
    /**
     * < Relationship Type Code Sequence (Trial) (0040,A732)
     */
    RelationshipTypeCodeSequenceTrial_0040_A732 = 4237106,
    /**
     * < Language Code Sequence (Trial) (0040,A744)
     */
    LanguageCodeSequenceTrial_0040_A744 = 4237124,
    /**
     * < Uniform Resource Locator (Trial) (0040,A992)
     */
    UniformResourceLocatorTrial_0040_A992 = 4237714,
    /**
     * < Waveform Annotation Sequence (0040,B020)
     */
    WaveformAnnotationSequence_0040_B020 = 4239392,
    /**
     * < Template Identifier (0040,DB00)
     */
    TemplateIdentifier_0040_DB00 = 4250368,
    /**
     * < Template Version (0040,DB06)
     */
    TemplateVersion_0040_DB06 = 4250374,
    /**
     * < Template Local Version (0040,DB07)
     */
    TemplateLocalVersion_0040_DB07 = 4250375,
    /**
     * < Template Extension Flag (0040,DB0B)
     */
    TemplateExtensionFlag_0040_DB0B = 4250379,
    /**
     * < Template Extension Organization UID (0040,DB0C)
     */
    TemplateExtensionOrganizationUID_0040_DB0C = 4250380,
    /**
     * < Template Extension Creator UID (0040,DB0D)
     */
    TemplateExtensionCreatorUID_0040_DB0D = 4250381,
    /**
     * < Referenced Content Item Identifier (0040,DB73)
     */
    ReferencedContentItemIdentifier_0040_DB73 = 4250483,
    /**
     * < HL7 Instance Identifier (0040,E001)
     */
    HL7InstanceIdentifier_0040_E001 = 4251649,
    /**
     * < HL7 Document Effective Time (0040,E004)
     */
    HL7DocumentEffectiveTime_0040_E004 = 4251652,
    /**
     * < HL7 Document Type Code Sequence (0040,E006)
     */
    HL7DocumentTypeCodeSequence_0040_E006 = 4251654,
    /**
     * < Document Class Code Sequence (0040,E008)
     */
    DocumentClassCodeSequence_0040_E008 = 4251656,
    /**
     * < Retrieve URI (0040,E010)
     */
    RetrieveURI_0040_E010 = 4251664,
    /**
     * < Retrieve Location UID (0040,E011)
     */
    RetrieveLocationUID_0040_E011 = 4251665,
    /**
     * < Type of Instances (0040,E020)
     */
    TypeOfInstances_0040_E020 = 4251680,
    /**
     * < DICOM Retrieval Sequence (0040,E021)
     */
    DICOMRetrievalSequence_0040_E021 = 4251681,
    /**
     * < DICOM Media Retrieval Sequence (0040,E022)
     */
    DICOMMediaRetrievalSequence_0040_E022 = 4251682,
    /**
     * < WADO Retrieval Sequence (0040,E023)
     */
    WADORetrievalSequence_0040_E023 = 4251683,
    /**
     * < XDS Retrieval Sequence (0040,E024)
     */
    XDSRetrievalSequence_0040_E024 = 4251684,
    /**
     * < WADO-RS Retrieval Sequence (0040,E025)
     */
    WADORSRetrievalSequence_0040_E025 = 4251685,
    /**
     * < Repository Unique ID (0040,E030)
     */
    RepositoryUniqueID_0040_E030 = 4251696,
    /**
     * < Home Community ID (0040,E031)
     */
    HomeCommunityID_0040_E031 = 4251697,
    /**
     * < Document Title (0042,0010)
     */
    DocumentTitle_0042_0010 = 4325392,
    /**
     * < Encapsulated Document (0042,0011)
     */
    EncapsulatedDocument_0042_0011 = 4325393,
    /**
     * < MIME Type of Encapsulated Document (0042,0012)
     */
    MIMETypeOfEncapsulatedDocument_0042_0012 = 4325394,
    /**
     * < Source Instance Sequence (0042,0013)
     */
    SourceInstanceSequence_0042_0013 = 4325395,
    /**
     * < List of MIME Types (0042,0014)
     */
    ListOfMIMETypes_0042_0014 = 4325396,
    /**
     * < Product Package Identifier (0044,0001)
     */
    ProductPackageIdentifier_0044_0001 = 4456449,
    /**
     * < Substance Administration Approval (0044,0002)
     */
    SubstanceAdministrationApproval_0044_0002 = 4456450,
    /**
     * < Approval Status Further Description (0044,0003)
     */
    ApprovalStatusFurtherDescription_0044_0003 = 4456451,
    /**
     * < Approval Status DateTime (0044,0004)
     */
    ApprovalStatusDateTime_0044_0004 = 4456452,
    /**
     * < Product Type Code Sequence (0044,0007)
     */
    ProductTypeCodeSequence_0044_0007 = 4456455,
    /**
     * < Product Name (0044,0008)
     */
    ProductName_0044_0008 = 4456456,
    /**
     * < Product Description (0044,0009)
     */
    ProductDescription_0044_0009 = 4456457,
    /**
     * < Product Lot Identifier (0044,000A)
     */
    ProductLotIdentifier_0044_000A = 4456458,
    /**
     * < Product Expiration DateTime (0044,000B)
     */
    ProductExpirationDateTime_0044_000B = 4456459,
    /**
     * < Substance Administration DateTime (0044,0010)
     */
    SubstanceAdministrationDateTime_0044_0010 = 4456464,
    /**
     * < Substance Administration Notes (0044,0011)
     */
    SubstanceAdministrationNotes_0044_0011 = 4456465,
    /**
     * < Substance Administration Device ID (0044,0012)
     */
    SubstanceAdministrationDeviceID_0044_0012 = 4456466,
    /**
     * < Product Parameter Sequence (0044,0013)
     */
    ProductParameterSequence_0044_0013 = 4456467,
    /**
     * < Substance Administration Parameter Sequence (0044,0019)
     */
    SubstanceAdministrationParameterSequence_0044_0019 = 4456473,
    /**
     * < Approval Sequence (0044,0100)
     */
    ApprovalSequence_0044_0100 = 4456704,
    /**
     * < Assertion Code Sequence (0044,0101)
     */
    AssertionCodeSequence_0044_0101 = 4456705,
    /**
     * < Assertion UID (0044,0102)
     */
    AssertionUID_0044_0102 = 4456706,
    /**
     * < Asserter Identification Sequence (0044,0103)
     */
    AsserterIdentificationSequence_0044_0103 = 4456707,
    /**
     * < Assertion DateTime (0044,0104)
     */
    AssertionDateTime_0044_0104 = 4456708,
    /**
     * < Assertion Expiration DateTime (0044,0105)
     */
    AssertionExpirationDateTime_0044_0105 = 4456709,
    /**
     * < Assertion Comments (0044,0106)
     */
    AssertionComments_0044_0106 = 4456710,
    /**
     * < Related Assertion Sequence (0044,0107)
     */
    RelatedAssertionSequence_0044_0107 = 4456711,
    /**
     * < Referenced Assertion UID (0044,0108)
     */
    ReferencedAssertionUID_0044_0108 = 4456712,
    /**
     * < Approval Subject Sequence (0044,0109)
     */
    ApprovalSubjectSequence_0044_0109 = 4456713,
    /**
     * < Organizational Role Code Sequence (0044,010A)
     */
    OrganizationalRoleCodeSequence_0044_010A = 4456714,
    /**
     * < Lens Description (0046,0012)
     */
    LensDescription_0046_0012 = 4587538,
    /**
     * < Right Lens Sequence (0046,0014)
     */
    RightLensSequence_0046_0014 = 4587540,
    /**
     * < Left Lens Sequence (0046,0015)
     */
    LeftLensSequence_0046_0015 = 4587541,
    /**
     * < Unspecified Laterality Lens Sequence (0046,0016)
     */
    UnspecifiedLateralityLensSequence_0046_0016 = 4587542,
    /**
     * < Cylinder Sequence (0046,0018)
     */
    CylinderSequence_0046_0018 = 4587544,
    /**
     * < Prism Sequence (0046,0028)
     */
    PrismSequence_0046_0028 = 4587560,
    /**
     * < Horizontal Prism Power (0046,0030)
     */
    HorizontalPrismPower_0046_0030 = 4587568,
    /**
     * < Horizontal Prism Base (0046,0032)
     */
    HorizontalPrismBase_0046_0032 = 4587570,
    /**
     * < Vertical Prism Power (0046,0034)
     */
    VerticalPrismPower_0046_0034 = 4587572,
    /**
     * < Vertical Prism Base (0046,0036)
     */
    VerticalPrismBase_0046_0036 = 4587574,
    /**
     * < Lens Segment Type (0046,0038)
     */
    LensSegmentType_0046_0038 = 4587576,
    /**
     * < Optical Transmittance (0046,0040)
     */
    OpticalTransmittance_0046_0040 = 4587584,
    /**
     * < Channel Width (0046,0042)
     */
    ChannelWidth_0046_0042 = 4587586,
    /**
     * < Pupil Size (0046,0044)
     */
    PupilSize_0046_0044 = 4587588,
    /**
     * < Corneal Size (0046,0046)
     */
    CornealSize_0046_0046 = 4587590,
    /**
     * < Corneal Size Sequence (0046,0047)
     */
    CornealSizeSequence_0046_0047 = 4587591,
    /**
     * < Autorefraction Right Eye Sequence (0046,0050)
     */
    AutorefractionRightEyeSequence_0046_0050 = 4587600,
    /**
     * < Autorefraction Left Eye Sequence (0046,0052)
     */
    AutorefractionLeftEyeSequence_0046_0052 = 4587602,
    /**
     * < Distance Pupillary Distance (0046,0060)
     */
    DistancePupillaryDistance_0046_0060 = 4587616,
    /**
     * < Near Pupillary Distance (0046,0062)
     */
    NearPupillaryDistance_0046_0062 = 4587618,
    /**
     * < Intermediate Pupillary Distance (0046,0063)
     */
    IntermediatePupillaryDistance_0046_0063 = 4587619,
    /**
     * < Other Pupillary Distance (0046,0064)
     */
    OtherPupillaryDistance_0046_0064 = 4587620,
    /**
     * < Keratometry Right Eye Sequence (0046,0070)
     */
    KeratometryRightEyeSequence_0046_0070 = 4587632,
    /**
     * < Keratometry Left Eye Sequence (0046,0071)
     */
    KeratometryLeftEyeSequence_0046_0071 = 4587633,
    /**
     * < Steep Keratometric Axis Sequence (0046,0074)
     */
    SteepKeratometricAxisSequence_0046_0074 = 4587636,
    /**
     * < Radius of Curvature (0046,0075)
     */
    RadiusOfCurvature_0046_0075 = 4587637,
    /**
     * < Keratometric Power (0046,0076)
     */
    KeratometricPower_0046_0076 = 4587638,
    /**
     * < Keratometric Axis (0046,0077)
     */
    KeratometricAxis_0046_0077 = 4587639,
    /**
     * < Flat Keratometric Axis Sequence (0046,0080)
     */
    FlatKeratometricAxisSequence_0046_0080 = 4587648,
    /**
     * < Background Color (0046,0092)
     */
    BackgroundColor_0046_0092 = 4587666,
    /**
     * < Optotype (0046,0094)
     */
    Optotype_0046_0094 = 4587668,
    /**
     * < Optotype Presentation (0046,0095)
     */
    OptotypePresentation_0046_0095 = 4587669,
    /**
     * < Subjective Refraction Right Eye Sequence (0046,0097)
     */
    SubjectiveRefractionRightEyeSequence_0046_0097 = 4587671,
    /**
     * < Subjective Refraction Left Eye Sequence (0046,0098)
     */
    SubjectiveRefractionLeftEyeSequence_0046_0098 = 4587672,
    /**
     * < Add Near Sequence (0046,0100)
     */
    AddNearSequence_0046_0100 = 4587776,
    /**
     * < Add Intermediate Sequence (0046,0101)
     */
    AddIntermediateSequence_0046_0101 = 4587777,
    /**
     * < Add Other Sequence (0046,0102)
     */
    AddOtherSequence_0046_0102 = 4587778,
    /**
     * < Add Power (0046,0104)
     */
    AddPower_0046_0104 = 4587780,
    /**
     * < Viewing Distance (0046,0106)
     */
    ViewingDistance_0046_0106 = 4587782,
    /**
     * < Visual Acuity Type Code Sequence (0046,0121)
     */
    VisualAcuityTypeCodeSequence_0046_0121 = 4587809,
    /**
     * < Visual Acuity Right Eye Sequence (0046,0122)
     */
    VisualAcuityRightEyeSequence_0046_0122 = 4587810,
    /**
     * < Visual Acuity Left Eye Sequence (0046,0123)
     */
    VisualAcuityLeftEyeSequence_0046_0123 = 4587811,
    /**
     * < Visual Acuity Both Eyes Open Sequence (0046,0124)
     */
    VisualAcuityBothEyesOpenSequence_0046_0124 = 4587812,
    /**
     * < Viewing Distance Type (0046,0125)
     */
    ViewingDistanceType_0046_0125 = 4587813,
    /**
     * < Visual Acuity Modifiers (0046,0135)
     */
    VisualAcuityModifiers_0046_0135 = 4587829,
    /**
     * < Decimal Visual Acuity (0046,0137)
     */
    DecimalVisualAcuity_0046_0137 = 4587831,
    /**
     * < Optotype Detailed Definition (0046,0139)
     */
    OptotypeDetailedDefinition_0046_0139 = 4587833,
    /**
     * < Referenced Refractive Measurements Sequence (0046,0145)
     */
    ReferencedRefractiveMeasurementsSequence_0046_0145 = 4587845,
    /**
     * < Sphere Power (0046,0146)
     */
    SpherePower_0046_0146 = 4587846,
    /**
     * < Cylinder Power (0046,0147)
     */
    CylinderPower_0046_0147 = 4587847,
    /**
     * < Corneal Topography Surface (0046,0201)
     */
    CornealTopographySurface_0046_0201 = 4588033,
    /**
     * < Corneal Vertex Location (0046,0202)
     */
    CornealVertexLocation_0046_0202 = 4588034,
    /**
     * < Pupil Centroid X-Coordinate (0046,0203)
     */
    PupilCentroidXCoordinate_0046_0203 = 4588035,
    /**
     * < Pupil Centroid Y-Coordinate (0046,0204)
     */
    PupilCentroidYCoordinate_0046_0204 = 4588036,
    /**
     * < Equivalent Pupil Radius (0046,0205)
     */
    EquivalentPupilRadius_0046_0205 = 4588037,
    /**
     * < Corneal Topography Map Type Code Sequence (0046,0207)
     */
    CornealTopographyMapTypeCodeSequence_0046_0207 = 4588039,
    /**
     * < Vertices of the Outline of Pupil (0046,0208)
     */
    VerticesOfTheOutlineOfPupil_0046_0208 = 4588040,
    /**
     * < Corneal Topography Mapping Normals Sequence (0046,0210)
     */
    CornealTopographyMappingNormalsSequence_0046_0210 = 4588048,
    /**
     * < Maximum Corneal Curvature Sequence (0046,0211)
     */
    MaximumCornealCurvatureSequence_0046_0211 = 4588049,
    /**
     * < Maximum Corneal Curvature (0046,0212)
     */
    MaximumCornealCurvature_0046_0212 = 4588050,
    /**
     * < Maximum Corneal Curvature Location (0046,0213)
     */
    MaximumCornealCurvatureLocation_0046_0213 = 4588051,
    /**
     * < Minimum Keratometric Sequence (0046,0215)
     */
    MinimumKeratometricSequence_0046_0215 = 4588053,
    /**
     * < Simulated Keratometric Cylinder Sequence (0046,0218)
     */
    SimulatedKeratometricCylinderSequence_0046_0218 = 4588056,
    /**
     * < Average Corneal Power (0046,0220)
     */
    AverageCornealPower_0046_0220 = 4588064,
    /**
     * < Corneal I-S Value (0046,0224)
     */
    CornealISValue_0046_0224 = 4588068,
    /**
     * < Analyzed Area (0046,0227)
     */
    AnalyzedArea_0046_0227 = 4588071,
    /**
     * < Surface Regularity Index (0046,0230)
     */
    SurfaceRegularityIndex_0046_0230 = 4588080,
    /**
     * < Surface Asymmetry Index (0046,0232)
     */
    SurfaceAsymmetryIndex_0046_0232 = 4588082,
    /**
     * < Corneal Eccentricity Index (0046,0234)
     */
    CornealEccentricityIndex_0046_0234 = 4588084,
    /**
     * < Keratoconus Prediction Index (0046,0236)
     */
    KeratoconusPredictionIndex_0046_0236 = 4588086,
    /**
     * < Decimal Potential Visual Acuity (0046,0238)
     */
    DecimalPotentialVisualAcuity_0046_0238 = 4588088,
    /**
     * < Corneal Topography Map Quality Evaluation (0046,0242)
     */
    CornealTopographyMapQualityEvaluation_0046_0242 = 4588098,
    /**
     * < Source Image Corneal Processed Data Sequence (0046,0244)
     */
    SourceImageCornealProcessedDataSequence_0046_0244 = 4588100,
    /**
     * < Corneal Point Location (0046,0247)
     */
    CornealPointLocation_0046_0247 = 4588103,
    /**
     * < Corneal Point Estimated (0046,0248)
     */
    CornealPointEstimated_0046_0248 = 4588104,
    /**
     * < Axial Power (0046,0249)
     */
    AxialPower_0046_0249 = 4588105,
    /**
     * < Tangential Power (0046,0250)
     */
    TangentialPower_0046_0250 = 4588112,
    /**
     * < Refractive Power (0046,0251)
     */
    RefractivePower_0046_0251 = 4588113,
    /**
     * < Relative Elevation (0046,0252)
     */
    RelativeElevation_0046_0252 = 4588114,
    /**
     * < Corneal Wavefront (0046,0253)
     */
    CornealWavefront_0046_0253 = 4588115,
    /**
     * < Imaged Volume Width (0048,0001)
     */
    ImagedVolumeWidth_0048_0001 = 4718593,
    /**
     * < Imaged Volume Height (0048,0002)
     */
    ImagedVolumeHeight_0048_0002 = 4718594,
    /**
     * < Imaged Volume Depth (0048,0003)
     */
    ImagedVolumeDepth_0048_0003 = 4718595,
    /**
     * < Total Pixel Matrix Columns (0048,0006)
     */
    TotalPixelMatrixColumns_0048_0006 = 4718598,
    /**
     * < Total Pixel Matrix Rows (0048,0007)
     */
    TotalPixelMatrixRows_0048_0007 = 4718599,
    /**
     * < Total Pixel Matrix Origin Sequence (0048,0008)
     */
    TotalPixelMatrixOriginSequence_0048_0008 = 4718600,
    /**
     * < Specimen Label in Image (0048,0010)
     */
    SpecimenLabelInImage_0048_0010 = 4718608,
    /**
     * < Focus Method (0048,0011)
     */
    FocusMethod_0048_0011 = 4718609,
    /**
     * < Extended Depth of Field (0048,0012)
     */
    ExtendedDepthOfField_0048_0012 = 4718610,
    /**
     * < Number of Focal Planes (0048,0013)
     */
    NumberOfFocalPlanes_0048_0013 = 4718611,
    /**
     * < Distance Between Focal Planes (0048,0014)
     */
    DistanceBetweenFocalPlanes_0048_0014 = 4718612,
    /**
     * < Recommended Absent Pixel CIELab Value (0048,0015)
     */
    RecommendedAbsentPixelCIELabValue_0048_0015 = 4718613,
    /**
     * < Illuminator Type Code Sequence (0048,0100)
     */
    IlluminatorTypeCodeSequence_0048_0100 = 4718848,
    /**
     * < Image Orientation (Slide) (0048,0102)
     */
    ImageOrientationSlide_0048_0102 = 4718850,
    /**
     * < Optical Path Sequence (0048,0105)
     */
    OpticalPathSequence_0048_0105 = 4718853,
    /**
     * < Optical Path Identifier (0048,0106)
     */
    OpticalPathIdentifier_0048_0106 = 4718854,
    /**
     * < Optical Path Description (0048,0107)
     */
    OpticalPathDescription_0048_0107 = 4718855,
    /**
     * < Illumination Color Code Sequence (0048,0108)
     */
    IlluminationColorCodeSequence_0048_0108 = 4718856,
    /**
     * < Specimen Reference Sequence (0048,0110)
     */
    SpecimenReferenceSequence_0048_0110 = 4718864,
    /**
     * < Condenser Lens Power (0048,0111)
     */
    CondenserLensPower_0048_0111 = 4718865,
    /**
     * < Objective Lens Power (0048,0112)
     */
    ObjectiveLensPower_0048_0112 = 4718866,
    /**
     * < Objective Lens Numerical Aperture (0048,0113)
     */
    ObjectiveLensNumericalAperture_0048_0113 = 4718867,
    /**
     * < Palette Color Lookup Table Sequence (0048,0120)
     */
    PaletteColorLookupTableSequence_0048_0120 = 4718880,
    /**
     * < Referenced Image Navigation Sequence (0048,0200)
     */
    ReferencedImageNavigationSequence_0048_0200 = 4719104,
    /**
     * < Top Left Hand Corner of Localizer Area (0048,0201)
     */
    TopLeftHandCornerOfLocalizerArea_0048_0201 = 4719105,
    /**
     * < Bottom Right Hand Corner of Localizer Area (0048,0202)
     */
    BottomRightHandCornerOfLocalizerArea_0048_0202 = 4719106,
    /**
     * < Optical Path Identification Sequence (0048,0207)
     */
    OpticalPathIdentificationSequence_0048_0207 = 4719111,
    /**
     * < Plane Position (Slide) Sequence (0048,021A)
     */
    PlanePositionSlideSequence_0048_021A = 4719130,
    /**
     * < Column Position In Total Image Pixel Matrix (0048,021E)
     */
    ColumnPositionInTotalImagePixelMatrix_0048_021E = 4719134,
    /**
     * < Row Position In Total Image Pixel Matrix (0048,021F)
     */
    RowPositionInTotalImagePixelMatrix_0048_021F = 4719135,
    /**
     * < Pixel Origin Interpretation (0048,0301)
     */
    PixelOriginInterpretation_0048_0301 = 4719361,
    /**
     * < Number of Optical Paths (0048,0302)
     */
    NumberOfOpticalPaths_0048_0302 = 4719362,
    /**
     * < Total Pixel Matrix Focal Planes (0048,0303)
     */
    TotalPixelMatrixFocalPlanes_0048_0303 = 4719363,
    /**
     * < Calibration Image (0050,0004)
     */
    CalibrationImage_0050_0004 = 5242884,
    /**
     * < Device Sequence (0050,0010)
     */
    DeviceSequence_0050_0010 = 5242896,
    /**
     * < Container Component Type Code Sequence (0050,0012)
     */
    ContainerComponentTypeCodeSequence_0050_0012 = 5242898,
    /**
     * < Container Component Thickness (0050,0013)
     */
    ContainerComponentThickness_0050_0013 = 5242899,
    /**
     * < Device Length (0050,0014)
     */
    DeviceLength_0050_0014 = 5242900,
    /**
     * < Container Component Width (0050,0015)
     */
    ContainerComponentWidth_0050_0015 = 5242901,
    /**
     * < Device Diameter (0050,0016)
     */
    DeviceDiameter_0050_0016 = 5242902,
    /**
     * < Device Diameter Units (0050,0017)
     */
    DeviceDiameterUnits_0050_0017 = 5242903,
    /**
     * < Device Volume (0050,0018)
     */
    DeviceVolume_0050_0018 = 5242904,
    /**
     * < Inter-Marker Distance (0050,0019)
     */
    InterMarkerDistance_0050_0019 = 5242905,
    /**
     * < Container Component Material (0050,001A)
     */
    ContainerComponentMaterial_0050_001A = 5242906,
    /**
     * < Container Component ID (0050,001B)
     */
    ContainerComponentID_0050_001B = 5242907,
    /**
     * < Container Component Length (0050,001C)
     */
    ContainerComponentLength_0050_001C = 5242908,
    /**
     * < Container Component Diameter (0050,001D)
     */
    ContainerComponentDiameter_0050_001D = 5242909,
    /**
     * < Container Component Description (0050,001E)
     */
    ContainerComponentDescription_0050_001E = 5242910,
    /**
     * < Device Description (0050,0020)
     */
    DeviceDescription_0050_0020 = 5242912,
    /**
     * < Long Device Description (0050,0021)
     */
    LongDeviceDescription_0050_0021 = 5242913,
    /**
     * < Contrast/Bolus Ingredient Percent by Volume (0052,0001)
     */
    ContrastBolusIngredientPercentByVolume_0052_0001 = 5373953,
    /**
     * < OCT Focal Distance (0052,0002)
     */
    OCTFocalDistance_0052_0002 = 5373954,
    /**
     * < Beam Spot Size (0052,0003)
     */
    BeamSpotSize_0052_0003 = 5373955,
    /**
     * < Effective Refractive Index (0052,0004)
     */
    EffectiveRefractiveIndex_0052_0004 = 5373956,
    /**
     * < OCT Acquisition Domain (0052,0006)
     */
    OCTAcquisitionDomain_0052_0006 = 5373958,
    /**
     * < OCT Optical Center Wavelength (0052,0007)
     */
    OCTOpticalCenterWavelength_0052_0007 = 5373959,
    /**
     * < Axial Resolution (0052,0008)
     */
    AxialResolution_0052_0008 = 5373960,
    /**
     * < Ranging Depth (0052,0009)
     */
    RangingDepth_0052_0009 = 5373961,
    /**
     * < A-line Rate (0052,0011)
     */
    ALineRate_0052_0011 = 5373969,
    /**
     * < A-lines Per Frame (0052,0012)
     */
    ALinesPerFrame_0052_0012 = 5373970,
    /**
     * < Catheter Rotational Rate (0052,0013)
     */
    CatheterRotationalRate_0052_0013 = 5373971,
    /**
     * < A-line Pixel Spacing (0052,0014)
     */
    ALinePixelSpacing_0052_0014 = 5373972,
    /**
     * < Mode of Percutaneous Access Sequence (0052,0016)
     */
    ModeOfPercutaneousAccessSequence_0052_0016 = 5373974,
    /**
     * < Intravascular OCT Frame Type Sequence (0052,0025)
     */
    IntravascularOCTFrameTypeSequence_0052_0025 = 5373989,
    /**
     * < OCT Z Offset Applied (0052,0026)
     */
    OCTZOffsetApplied_0052_0026 = 5373990,
    /**
     * < Intravascular Frame Content Sequence (0052,0027)
     */
    IntravascularFrameContentSequence_0052_0027 = 5373991,
    /**
     * < Intravascular Longitudinal Distance (0052,0028)
     */
    IntravascularLongitudinalDistance_0052_0028 = 5373992,
    /**
     * < Intravascular OCT Frame Content Sequence (0052,0029)
     */
    IntravascularOCTFrameContentSequence_0052_0029 = 5373993,
    /**
     * < OCT Z Offset Correction (0052,0030)
     */
    OCTZOffsetCorrection_0052_0030 = 5374000,
    /**
     * < Catheter Direction of Rotation (0052,0031)
     */
    CatheterDirectionOfRotation_0052_0031 = 5374001,
    /**
     * < Seam Line Location (0052,0033)
     */
    SeamLineLocation_0052_0033 = 5374003,
    /**
     * < First A-line Location (0052,0034)
     */
    FirstALineLocation_0052_0034 = 5374004,
    /**
     * < Seam Line Index (0052,0036)
     */
    SeamLineIndex_0052_0036 = 5374006,
    /**
     * < Number of Padded A-lines (0052,0038)
     */
    NumberOfPaddedALines_0052_0038 = 5374008,
    /**
     * < Interpolation Type (0052,0039)
     */
    InterpolationType_0052_0039 = 5374009,
    /**
     * < Refractive Index Applied (0052,003A)
     */
    RefractiveIndexApplied_0052_003A = 5374010,
    /**
     * < Energy Window Vector (0054,0010)
     */
    EnergyWindowVector_0054_0010 = 5505040,
    /**
     * < Number of Energy Windows (0054,0011)
     */
    NumberOfEnergyWindows_0054_0011 = 5505041,
    /**
     * < Energy Window Information Sequence (0054,0012)
     */
    EnergyWindowInformationSequence_0054_0012 = 5505042,
    /**
     * < Energy Window Range Sequence (0054,0013)
     */
    EnergyWindowRangeSequence_0054_0013 = 5505043,
    /**
     * < Energy Window Lower Limit (0054,0014)
     */
    EnergyWindowLowerLimit_0054_0014 = 5505044,
    /**
     * < Energy Window Upper Limit (0054,0015)
     */
    EnergyWindowUpperLimit_0054_0015 = 5505045,
    /**
     * < Radiopharmaceutical Information Sequence (0054,0016)
     */
    RadiopharmaceuticalInformationSequence_0054_0016 = 5505046,
    /**
     * < Residual Syringe Counts (0054,0017)
     */
    ResidualSyringeCounts_0054_0017 = 5505047,
    /**
     * < Energy Window Name (0054,0018)
     */
    EnergyWindowName_0054_0018 = 5505048,
    /**
     * < Detector Vector (0054,0020)
     */
    DetectorVector_0054_0020 = 5505056,
    /**
     * < Number of Detectors (0054,0021)
     */
    NumberOfDetectors_0054_0021 = 5505057,
    /**
     * < Detector Information Sequence (0054,0022)
     */
    DetectorInformationSequence_0054_0022 = 5505058,
    /**
     * < Phase Vector (0054,0030)
     */
    PhaseVector_0054_0030 = 5505072,
    /**
     * < Number of Phases (0054,0031)
     */
    NumberOfPhases_0054_0031 = 5505073,
    /**
     * < Phase Information Sequence (0054,0032)
     */
    PhaseInformationSequence_0054_0032 = 5505074,
    /**
     * < Number of Frames in Phase (0054,0033)
     */
    NumberOfFramesInPhase_0054_0033 = 5505075,
    /**
     * < Phase Delay (0054,0036)
     */
    PhaseDelay_0054_0036 = 5505078,
    /**
     * < Pause Between Frames (0054,0038)
     */
    PauseBetweenFrames_0054_0038 = 5505080,
    /**
     * < Phase Description (0054,0039)
     */
    PhaseDescription_0054_0039 = 5505081,
    /**
     * < Rotation Vector (0054,0050)
     */
    RotationVector_0054_0050 = 5505104,
    /**
     * < Number of Rotations (0054,0051)
     */
    NumberOfRotations_0054_0051 = 5505105,
    /**
     * < Rotation Information Sequence (0054,0052)
     */
    RotationInformationSequence_0054_0052 = 5505106,
    /**
     * < Number of Frames in Rotation (0054,0053)
     */
    NumberOfFramesInRotation_0054_0053 = 5505107,
    /**
     * < R-R Interval Vector (0054,0060)
     */
    RRIntervalVector_0054_0060 = 5505120,
    /**
     * < Number of R-R Intervals (0054,0061)
     */
    NumberOfRRIntervals_0054_0061 = 5505121,
    /**
     * < Gated Information Sequence (0054,0062)
     */
    GatedInformationSequence_0054_0062 = 5505122,
    /**
     * < Data Information Sequence (0054,0063)
     */
    DataInformationSequence_0054_0063 = 5505123,
    /**
     * < Time Slot Vector (0054,0070)
     */
    TimeSlotVector_0054_0070 = 5505136,
    /**
     * < Number of Time Slots (0054,0071)
     */
    NumberOfTimeSlots_0054_0071 = 5505137,
    /**
     * < Time Slot Information Sequence (0054,0072)
     */
    TimeSlotInformationSequence_0054_0072 = 5505138,
    /**
     * < Time Slot Time (0054,0073)
     */
    TimeSlotTime_0054_0073 = 5505139,
    /**
     * < Slice Vector (0054,0080)
     */
    SliceVector_0054_0080 = 5505152,
    /**
     * < Number of Slices (0054,0081)
     */
    NumberOfSlices_0054_0081 = 5505153,
    /**
     * < Angular View Vector (0054,0090)
     */
    AngularViewVector_0054_0090 = 5505168,
    /**
     * < Time Slice Vector (0054,0100)
     */
    TimeSliceVector_0054_0100 = 5505280,
    /**
     * < Number of Time Slices (0054,0101)
     */
    NumberOfTimeSlices_0054_0101 = 5505281,
    /**
     * < Start Angle (0054,0200)
     */
    StartAngle_0054_0200 = 5505536,
    /**
     * < Type of Detector Motion (0054,0202)
     */
    TypeOfDetectorMotion_0054_0202 = 5505538,
    /**
     * < Trigger Vector (0054,0210)
     */
    TriggerVector_0054_0210 = 5505552,
    /**
     * < Number of Triggers in Phase (0054,0211)
     */
    NumberOfTriggersInPhase_0054_0211 = 5505553,
    /**
     * < View Code Sequence (0054,0220)
     */
    ViewCodeSequence_0054_0220 = 5505568,
    /**
     * < View Modifier Code Sequence (0054,0222)
     */
    ViewModifierCodeSequence_0054_0222 = 5505570,
    /**
     * < Radionuclide Code Sequence (0054,0300)
     */
    RadionuclideCodeSequence_0054_0300 = 5505792,
    /**
     * < Administration Route Code Sequence (0054,0302)
     */
    AdministrationRouteCodeSequence_0054_0302 = 5505794,
    /**
     * < Radiopharmaceutical Code Sequence (0054,0304)
     */
    RadiopharmaceuticalCodeSequence_0054_0304 = 5505796,
    /**
     * < Calibration Data Sequence (0054,0306)
     */
    CalibrationDataSequence_0054_0306 = 5505798,
    /**
     * < Energy Window Number (0054,0308)
     */
    EnergyWindowNumber_0054_0308 = 5505800,
    /**
     * < Image ID (0054,0400)
     */
    ImageID_0054_0400 = 5506048,
    /**
     * < Patient Orientation Code Sequence (0054,0410)
     */
    PatientOrientationCodeSequence_0054_0410 = 5506064,
    /**
     * < Patient Orientation Modifier Code Sequence (0054,0412)
     */
    PatientOrientationModifierCodeSequence_0054_0412 = 5506066,
    /**
     * < Patient Gantry Relationship Code Sequence (0054,0414)
     */
    PatientGantryRelationshipCodeSequence_0054_0414 = 5506068,
    /**
     * < Slice Progression Direction (0054,0500)
     */
    SliceProgressionDirection_0054_0500 = 5506304,
    /**
     * < Scan Progression Direction (0054,0501)
     */
    ScanProgressionDirection_0054_0501 = 5506305,
    /**
     * < Series Type (0054,1000)
     */
    SeriesType_0054_1000 = 5509120,
    /**
     * < Units (0054,1001)
     */
    Units_0054_1001 = 5509121,
    /**
     * < Counts Source (0054,1002)
     */
    CountsSource_0054_1002 = 5509122,
    /**
     * < Reprojection Method (0054,1004)
     */
    ReprojectionMethod_0054_1004 = 5509124,
    /**
     * < SUV Type (0054,1006)
     */
    SUVType_0054_1006 = 5509126,
    /**
     * < Randoms Correction Method (0054,1100)
     */
    RandomsCorrectionMethod_0054_1100 = 5509376,
    /**
     * < Attenuation Correction Method (0054,1101)
     */
    AttenuationCorrectionMethod_0054_1101 = 5509377,
    /**
     * < Decay Correction (0054,1102)
     */
    DecayCorrection_0054_1102 = 5509378,
    /**
     * < Reconstruction Method (0054,1103)
     */
    ReconstructionMethod_0054_1103 = 5509379,
    /**
     * < Detector Lines of Response Used (0054,1104)
     */
    DetectorLinesOfResponseUsed_0054_1104 = 5509380,
    /**
     * < Scatter Correction Method (0054,1105)
     */
    ScatterCorrectionMethod_0054_1105 = 5509381,
    /**
     * < Axial Acceptance (0054,1200)
     */
    AxialAcceptance_0054_1200 = 5509632,
    /**
     * < Axial Mash (0054,1201)
     */
    AxialMash_0054_1201 = 5509633,
    /**
     * < Transverse Mash (0054,1202)
     */
    TransverseMash_0054_1202 = 5509634,
    /**
     * < Detector Element Size (0054,1203)
     */
    DetectorElementSize_0054_1203 = 5509635,
    /**
     * < Coincidence Window Width (0054,1210)
     */
    CoincidenceWindowWidth_0054_1210 = 5509648,
    /**
     * < Secondary Counts Type (0054,1220)
     */
    SecondaryCountsType_0054_1220 = 5509664,
    /**
     * < Frame Reference Time (0054,1300)
     */
    FrameReferenceTime_0054_1300 = 5509888,
    /**
     * < Primary (Prompts) Counts Accumulated (0054,1310)
     */
    PrimaryPromptsCountsAccumulated_0054_1310 = 5509904,
    /**
     * < Secondary Counts Accumulated (0054,1311)
     */
    SecondaryCountsAccumulated_0054_1311 = 5509905,
    /**
     * < Slice Sensitivity Factor (0054,1320)
     */
    SliceSensitivityFactor_0054_1320 = 5509920,
    /**
     * < Decay Factor (0054,1321)
     */
    DecayFactor_0054_1321 = 5509921,
    /**
     * < Dose Calibration Factor (0054,1322)
     */
    DoseCalibrationFactor_0054_1322 = 5509922,
    /**
     * < Scatter Fraction Factor (0054,1323)
     */
    ScatterFractionFactor_0054_1323 = 5509923,
    /**
     * < Dead Time Factor (0054,1324)
     */
    DeadTimeFactor_0054_1324 = 5509924,
    /**
     * < Image Index (0054,1330)
     */
    ImageIndex_0054_1330 = 5509936,
    /**
     * < Counts Included (0054,1400)
     */
    CountsIncluded_0054_1400 = 5510144,
    /**
     * < Dead Time Correction Flag (0054,1401)
     */
    DeadTimeCorrectionFlag_0054_1401 = 5510145,
    /**
     * < Histogram Sequence (0060,3000)
     */
    HistogramSequence_0060_3000 = 6303744,
    /**
     * < Histogram Number of Bins (0060,3002)
     */
    HistogramNumberOfBins_0060_3002 = 6303746,
    /**
     * < Histogram First Bin Value (0060,3004)
     */
    HistogramFirstBinValue_0060_3004 = 6303748,
    /**
     * < Histogram Last Bin Value (0060,3006)
     */
    HistogramLastBinValue_0060_3006 = 6303750,
    /**
     * < Histogram Bin Width (0060,3008)
     */
    HistogramBinWidth_0060_3008 = 6303752,
    /**
     * < Histogram Explanation (0060,3010)
     */
    HistogramExplanation_0060_3010 = 6303760,
    /**
     * < Histogram Data (0060,3020)
     */
    HistogramData_0060_3020 = 6303776,
    /**
     * < Segmentation Type (0062,0001)
     */
    SegmentationType_0062_0001 = 6422529,
    /**
     * < Segment Sequence (0062,0002)
     */
    SegmentSequence_0062_0002 = 6422530,
    /**
     * < Segmented Property Category Code Sequence (0062,0003)
     */
    SegmentedPropertyCategoryCodeSequence_0062_0003 = 6422531,
    /**
     * < Segment Number (0062,0004)
     */
    SegmentNumber_0062_0004 = 6422532,
    /**
     * < Segment Label (0062,0005)
     */
    SegmentLabel_0062_0005 = 6422533,
    /**
     * < Segment Description (0062,0006)
     */
    SegmentDescription_0062_0006 = 6422534,
    /**
     * < Segmentation Algorithm Identification Sequence (0062,0007)
     */
    SegmentationAlgorithmIdentificationSequence_0062_0007 = 6422535,
    /**
     * < Segment Algorithm Type (0062,0008)
     */
    SegmentAlgorithmType_0062_0008 = 6422536,
    /**
     * < Segment Algorithm Name (0062,0009)
     */
    SegmentAlgorithmName_0062_0009 = 6422537,
    /**
     * < Segment Identification Sequence (0062,000A)
     */
    SegmentIdentificationSequence_0062_000A = 6422538,
    /**
     * < Referenced Segment Number (0062,000B)
     */
    ReferencedSegmentNumber_0062_000B = 6422539,
    /**
     * < Recommended Display Grayscale Value (0062,000C)
     */
    RecommendedDisplayGrayscaleValue_0062_000C = 6422540,
    /**
     * < Recommended Display CIELab Value (0062,000D)
     */
    RecommendedDisplayCIELabValue_0062_000D = 6422541,
    /**
     * < Maximum Fractional Value (0062,000E)
     */
    MaximumFractionalValue_0062_000E = 6422542,
    /**
     * < Segmented Property Type Code Sequence (0062,000F)
     */
    SegmentedPropertyTypeCodeSequence_0062_000F = 6422543,
    /**
     * < Segmentation Fractional Type (0062,0010)
     */
    SegmentationFractionalType_0062_0010 = 6422544,
    /**
     * < Segmented Property Type Modifier Code Sequence (0062,0011)
     */
    SegmentedPropertyTypeModifierCodeSequence_0062_0011 = 6422545,
    /**
     * < Used Segments Sequence (0062,0012)
     */
    UsedSegmentsSequence_0062_0012 = 6422546,
    /**
     * < Segments Overlap (0062,0013)
     */
    SegmentsOverlap_0062_0013 = 6422547,
    /**
     * < Tracking ID (0062,0020)
     */
    TrackingID_0062_0020 = 6422560,
    /**
     * < Tracking UID (0062,0021)
     */
    TrackingUID_0062_0021 = 6422561,
    /**
     * < Deformable Registration Sequence (0064,0002)
     */
    DeformableRegistrationSequence_0064_0002 = 6553602,
    /**
     * < Source Frame of Reference UID (0064,0003)
     */
    SourceFrameOfReferenceUID_0064_0003 = 6553603,
    /**
     * < Deformable Registration Grid Sequence (0064,0005)
     */
    DeformableRegistrationGridSequence_0064_0005 = 6553605,
    /**
     * < Grid Dimensions (0064,0007)
     */
    GridDimensions_0064_0007 = 6553607,
    /**
     * < Grid Resolution (0064,0008)
     */
    GridResolution_0064_0008 = 6553608,
    /**
     * < Vector Grid Data (0064,0009)
     */
    VectorGridData_0064_0009 = 6553609,
    /**
     * < Pre Deformation Matrix Registration Sequence (0064,000F)
     */
    PreDeformationMatrixRegistrationSequence_0064_000F = 6553615,
    /**
     * < Post Deformation Matrix Registration Sequence (0064,0010)
     */
    PostDeformationMatrixRegistrationSequence_0064_0010 = 6553616,
    /**
     * < Number of Surfaces (0066,0001)
     */
    NumberOfSurfaces_0066_0001 = 6684673,
    /**
     * < Surface Sequence (0066,0002)
     */
    SurfaceSequence_0066_0002 = 6684674,
    /**
     * < Surface Number (0066,0003)
     */
    SurfaceNumber_0066_0003 = 6684675,
    /**
     * < Surface Comments (0066,0004)
     */
    SurfaceComments_0066_0004 = 6684676,
    /**
     * < Surface Processing (0066,0009)
     */
    SurfaceProcessing_0066_0009 = 6684681,
    /**
     * < Surface Processing Ratio (0066,000A)
     */
    SurfaceProcessingRatio_0066_000A = 6684682,
    /**
     * < Surface Processing Description (0066,000B)
     */
    SurfaceProcessingDescription_0066_000B = 6684683,
    /**
     * < Recommended Presentation Opacity (0066,000C)
     */
    RecommendedPresentationOpacity_0066_000C = 6684684,
    /**
     * < Recommended Presentation Type (0066,000D)
     */
    RecommendedPresentationType_0066_000D = 6684685,
    /**
     * < Finite Volume (0066,000E)
     */
    FiniteVolume_0066_000E = 6684686,
    /**
     * < Manifold (0066,0010)
     */
    Manifold_0066_0010 = 6684688,
    /**
     * < Surface Points Sequence (0066,0011)
     */
    SurfacePointsSequence_0066_0011 = 6684689,
    /**
     * < Surface Points Normals Sequence (0066,0012)
     */
    SurfacePointsNormalsSequence_0066_0012 = 6684690,
    /**
     * < Surface Mesh Primitives Sequence (0066,0013)
     */
    SurfaceMeshPrimitivesSequence_0066_0013 = 6684691,
    /**
     * < Number of Surface Points (0066,0015)
     */
    NumberOfSurfacePoints_0066_0015 = 6684693,
    /**
     * < Point Coordinates Data (0066,0016)
     */
    PointCoordinatesData_0066_0016 = 6684694,
    /**
     * < Point Position Accuracy (0066,0017)
     */
    PointPositionAccuracy_0066_0017 = 6684695,
    /**
     * < Mean Point Distance (0066,0018)
     */
    MeanPointDistance_0066_0018 = 6684696,
    /**
     * < Maximum Point Distance (0066,0019)
     */
    MaximumPointDistance_0066_0019 = 6684697,
    /**
     * < Points Bounding Box Coordinates (0066,001A)
     */
    PointsBoundingBoxCoordinates_0066_001A = 6684698,
    /**
     * < Axis of Rotation (0066,001B)
     */
    AxisOfRotation_0066_001B = 6684699,
    /**
     * < Center of Rotation (0066,001C)
     */
    CenterOfRotation_0066_001C = 6684700,
    /**
     * < Number of Vectors (0066,001E)
     */
    NumberOfVectors_0066_001E = 6684702,
    /**
     * < Vector Dimensionality (0066,001F)
     */
    VectorDimensionality_0066_001F = 6684703,
    /**
     * < Vector Accuracy (0066,0020)
     */
    VectorAccuracy_0066_0020 = 6684704,
    /**
     * < Vector Coordinate Data (0066,0021)
     */
    VectorCoordinateData_0066_0021 = 6684705,
    /**
     * < Triangle Point Index List (0066,0023)
     */
    TrianglePointIndexList_0066_0023 = 6684707,
    /**
     * < Edge Point Index List (0066,0024)
     */
    EdgePointIndexList_0066_0024 = 6684708,
    /**
     * < Vertex Point Index List (0066,0025)
     */
    VertexPointIndexList_0066_0025 = 6684709,
    /**
     * < Triangle Strip Sequence (0066,0026)
     */
    TriangleStripSequence_0066_0026 = 6684710,
    /**
     * < Triangle Fan Sequence (0066,0027)
     */
    TriangleFanSequence_0066_0027 = 6684711,
    /**
     * < Line Sequence (0066,0028)
     */
    LineSequence_0066_0028 = 6684712,
    /**
     * < Primitive Point Index List (0066,0029)
     */
    PrimitivePointIndexList_0066_0029 = 6684713,
    /**
     * < Surface Count (0066,002A)
     */
    SurfaceCount_0066_002A = 6684714,
    /**
     * < Referenced Surface Sequence (0066,002B)
     */
    ReferencedSurfaceSequence_0066_002B = 6684715,
    /**
     * < Referenced Surface Number (0066,002C)
     */
    ReferencedSurfaceNumber_0066_002C = 6684716,
    /**
     * < Segment Surface Generation Algorithm Identification Sequence (0066,002D)
     */
    SegmentSurfaceGenerationAlgorithmIdentificationSequence_0066_002D = 6684717,
    /**
     * < Segment Surface Source Instance Sequence (0066,002E)
     */
    SegmentSurfaceSourceInstanceSequence_0066_002E = 6684718,
    /**
     * < Algorithm Family Code Sequence (0066,002F)
     */
    AlgorithmFamilyCodeSequence_0066_002F = 6684719,
    /**
     * < Algorithm Name Code Sequence (0066,0030)
     */
    AlgorithmNameCodeSequence_0066_0030 = 6684720,
    /**
     * < Algorithm Version (0066,0031)
     */
    AlgorithmVersion_0066_0031 = 6684721,
    /**
     * < Algorithm Parameters (0066,0032)
     */
    AlgorithmParameters_0066_0032 = 6684722,
    /**
     * < Facet Sequence (0066,0034)
     */
    FacetSequence_0066_0034 = 6684724,
    /**
     * < Surface Processing Algorithm Identification Sequence (0066,0035)
     */
    SurfaceProcessingAlgorithmIdentificationSequence_0066_0035 = 6684725,
    /**
     * < Algorithm Name (0066,0036)
     */
    AlgorithmName_0066_0036 = 6684726,
    /**
     * < Recommended Point Radius (0066,0037)
     */
    RecommendedPointRadius_0066_0037 = 6684727,
    /**
     * < Recommended Line Thickness (0066,0038)
     */
    RecommendedLineThickness_0066_0038 = 6684728,
    /**
     * < Long Primitive Point Index List (0066,0040)
     */
    LongPrimitivePointIndexList_0066_0040 = 6684736,
    /**
     * < Long Triangle Point Index List (0066,0041)
     */
    LongTrianglePointIndexList_0066_0041 = 6684737,
    /**
     * < Long Edge Point Index List (0066,0042)
     */
    LongEdgePointIndexList_0066_0042 = 6684738,
    /**
     * < Long Vertex Point Index List (0066,0043)
     */
    LongVertexPointIndexList_0066_0043 = 6684739,
    /**
     * < Track Set Sequence (0066,0101)
     */
    TrackSetSequence_0066_0101 = 6684929,
    /**
     * < Track Sequence (0066,0102)
     */
    TrackSequence_0066_0102 = 6684930,
    /**
     * < Recommended Display CIELab Value List (0066,0103)
     */
    RecommendedDisplayCIELabValueList_0066_0103 = 6684931,
    /**
     * < Tracking Algorithm Identification Sequence (0066,0104)
     */
    TrackingAlgorithmIdentificationSequence_0066_0104 = 6684932,
    /**
     * < Track Set Number (0066,0105)
     */
    TrackSetNumber_0066_0105 = 6684933,
    /**
     * < Track Set Label (0066,0106)
     */
    TrackSetLabel_0066_0106 = 6684934,
    /**
     * < Track Set Description (0066,0107)
     */
    TrackSetDescription_0066_0107 = 6684935,
    /**
     * < Track Set Anatomical Type Code Sequence (0066,0108)
     */
    TrackSetAnatomicalTypeCodeSequence_0066_0108 = 6684936,
    /**
     * < Measurements Sequence (0066,0121)
     */
    MeasurementsSequence_0066_0121 = 6684961,
    /**
     * < Track Set Statistics Sequence (0066,0124)
     */
    TrackSetStatisticsSequence_0066_0124 = 6684964,
    /**
     * < Floating Point Values (0066,0125)
     */
    FloatingPointValues_0066_0125 = 6684965,
    /**
     * < Track Point Index List (0066,0129)
     */
    TrackPointIndexList_0066_0129 = 6684969,
    /**
     * < Track Statistics Sequence (0066,0130)
     */
    TrackStatisticsSequence_0066_0130 = 6684976,
    /**
     * < Measurement Values Sequence (0066,0132)
     */
    MeasurementValuesSequence_0066_0132 = 6684978,
    /**
     * < Diffusion Acquisition Code Sequence (0066,0133)
     */
    DiffusionAcquisitionCodeSequence_0066_0133 = 6684979,
    /**
     * < Diffusion Model Code Sequence (0066,0134)
     */
    DiffusionModelCodeSequence_0066_0134 = 6684980,
    /**
     * < Implant Size (0068,6210)
     */
    ImplantSize_0068_6210 = 6840848,
    /**
     * < Implant Template Version (0068,6221)
     */
    ImplantTemplateVersion_0068_6221 = 6840865,
    /**
     * < Replaced Implant Template Sequence (0068,6222)
     */
    ReplacedImplantTemplateSequence_0068_6222 = 6840866,
    /**
     * < Implant Type (0068,6223)
     */
    ImplantType_0068_6223 = 6840867,
    /**
     * < Derivation Implant Template Sequence (0068,6224)
     */
    DerivationImplantTemplateSequence_0068_6224 = 6840868,
    /**
     * < Original Implant Template Sequence (0068,6225)
     */
    OriginalImplantTemplateSequence_0068_6225 = 6840869,
    /**
     * < Effective DateTime (0068,6226)
     */
    EffectiveDateTime_0068_6226 = 6840870,
    /**
     * < Implant Target Anatomy Sequence (0068,6230)
     */
    ImplantTargetAnatomySequence_0068_6230 = 6840880,
    /**
     * < Information From Manufacturer Sequence (0068,6260)
     */
    InformationFromManufacturerSequence_0068_6260 = 6840928,
    /**
     * < Notification From Manufacturer Sequence (0068,6265)
     */
    NotificationFromManufacturerSequence_0068_6265 = 6840933,
    /**
     * < Information Issue DateTime (0068,6270)
     */
    InformationIssueDateTime_0068_6270 = 6840944,
    /**
     * < Information Summary (0068,6280)
     */
    InformationSummary_0068_6280 = 6840960,
    /**
     * < Implant Regulatory Disapproval Code Sequence (0068,62A0)
     */
    ImplantRegulatoryDisapprovalCodeSequence_0068_62A0 = 6840992,
    /**
     * < Overall Template Spatial Tolerance (0068,62A5)
     */
    OverallTemplateSpatialTolerance_0068_62A5 = 6840997,
    /**
     * < HPGL Document Sequence (0068,62C0)
     */
    HPGLDocumentSequence_0068_62C0 = 6841024,
    /**
     * < HPGL Document ID (0068,62D0)
     */
    HPGLDocumentID_0068_62D0 = 6841040,
    /**
     * < HPGL Document Label (0068,62D5)
     */
    HPGLDocumentLabel_0068_62D5 = 6841045,
    /**
     * < View Orientation Code Sequence (0068,62E0)
     */
    ViewOrientationCodeSequence_0068_62E0 = 6841056,
    /**
     * < View Orientation Modifier Code Sequence (0068,62F0)
     */
    ViewOrientationModifierCodeSequence_0068_62F0 = 6841072,
    /**
     * < HPGL Document Scaling (0068,62F2)
     */
    HPGLDocumentScaling_0068_62F2 = 6841074,
    /**
     * < HPGL Document (0068,6300)
     */
    HPGLDocument_0068_6300 = 6841088,
    /**
     * < HPGL Contour Pen Number (0068,6310)
     */
    HPGLContourPenNumber_0068_6310 = 6841104,
    /**
     * < HPGL Pen Sequence (0068,6320)
     */
    HPGLPenSequence_0068_6320 = 6841120,
    /**
     * < HPGL Pen Number (0068,6330)
     */
    HPGLPenNumber_0068_6330 = 6841136,
    /**
     * < HPGL Pen Label (0068,6340)
     */
    HPGLPenLabel_0068_6340 = 6841152,
    /**
     * < HPGL Pen Description (0068,6345)
     */
    HPGLPenDescription_0068_6345 = 6841157,
    /**
     * < Recommended Rotation Point (0068,6346)
     */
    RecommendedRotationPoint_0068_6346 = 6841158,
    /**
     * < Bounding Rectangle (0068,6347)
     */
    BoundingRectangle_0068_6347 = 6841159,
    /**
     * < Implant Template 3D Model Surface Number (0068,6350)
     */
    ImplantTemplate3DModelSurfaceNumber_0068_6350 = 6841168,
    /**
     * < Surface Model Description Sequence (0068,6360)
     */
    SurfaceModelDescriptionSequence_0068_6360 = 6841184,
    /**
     * < Surface Model Label (0068,6380)
     */
    SurfaceModelLabel_0068_6380 = 6841216,
    /**
     * < Surface Model Scaling Factor (0068,6390)
     */
    SurfaceModelScalingFactor_0068_6390 = 6841232,
    /**
     * < Materials Code Sequence (0068,63A0)
     */
    MaterialsCodeSequence_0068_63A0 = 6841248,
    /**
     * < Coating Materials Code Sequence (0068,63A4)
     */
    CoatingMaterialsCodeSequence_0068_63A4 = 6841252,
    /**
     * < Implant Type Code Sequence (0068,63A8)
     */
    ImplantTypeCodeSequence_0068_63A8 = 6841256,
    /**
     * < Fixation Method Code Sequence (0068,63AC)
     */
    FixationMethodCodeSequence_0068_63AC = 6841260,
    /**
     * < Mating Feature Sets Sequence (0068,63B0)
     */
    MatingFeatureSetsSequence_0068_63B0 = 6841264,
    /**
     * < Mating Feature Set ID (0068,63C0)
     */
    MatingFeatureSetID_0068_63C0 = 6841280,
    /**
     * < Mating Feature Set Label (0068,63D0)
     */
    MatingFeatureSetLabel_0068_63D0 = 6841296,
    /**
     * < Mating Feature Sequence (0068,63E0)
     */
    MatingFeatureSequence_0068_63E0 = 6841312,
    /**
     * < Mating Feature ID (0068,63F0)
     */
    MatingFeatureID_0068_63F0 = 6841328,
    /**
     * < Mating Feature Degree of Freedom Sequence (0068,6400)
     */
    MatingFeatureDegreeOfFreedomSequence_0068_6400 = 6841344,
    /**
     * < Degree of Freedom ID (0068,6410)
     */
    DegreeOfFreedomID_0068_6410 = 6841360,
    /**
     * < Degree of Freedom Type (0068,6420)
     */
    DegreeOfFreedomType_0068_6420 = 6841376,
    /**
     * < 2D Mating Feature Coordinates Sequence (0068,6430)
     */
    TwoDMatingFeatureCoordinatesSequence_0068_6430 = 6841392,
    /**
     * < Referenced HPGL Document ID (0068,6440)
     */
    ReferencedHPGLDocumentID_0068_6440 = 6841408,
    /**
     * < 2D Mating Point (0068,6450)
     */
    TwoDMatingPoint_0068_6450 = 6841424,
    /**
     * < 2D Mating Axes (0068,6460)
     */
    TwoDMatingAxes_0068_6460 = 6841440,
    /**
     * < 2D Degree of Freedom Sequence (0068,6470)
     */
    TwoDDegreeOfFreedomSequence_0068_6470 = 6841456,
    /**
     * < 3D Degree of Freedom Axis (0068,6490)
     */
    ThreeDDegreeOfFreedomAxis_0068_6490 = 6841488,
    /**
     * < Range of Freedom (0068,64A0)
     */
    RangeOfFreedom_0068_64A0 = 6841504,
    /**
     * < 3D Mating Point (0068,64C0)
     */
    ThreeDMatingPoint_0068_64C0 = 6841536,
    /**
     * < 3D Mating Axes (0068,64D0)
     */
    ThreeDMatingAxes_0068_64D0 = 6841552,
    /**
     * < 2D Degree of Freedom Axis (0068,64F0)
     */
    TwoDDegreeOfFreedomAxis_0068_64F0 = 6841584,
    /**
     * < Planning Landmark Point Sequence (0068,6500)
     */
    PlanningLandmarkPointSequence_0068_6500 = 6841600,
    /**
     * < Planning Landmark Line Sequence (0068,6510)
     */
    PlanningLandmarkLineSequence_0068_6510 = 6841616,
    /**
     * < Planning Landmark Plane Sequence (0068,6520)
     */
    PlanningLandmarkPlaneSequence_0068_6520 = 6841632,
    /**
     * < Planning Landmark ID (0068,6530)
     */
    PlanningLandmarkID_0068_6530 = 6841648,
    /**
     * < Planning Landmark Description (0068,6540)
     */
    PlanningLandmarkDescription_0068_6540 = 6841664,
    /**
     * < Planning Landmark Identification Code Sequence (0068,6545)
     */
    PlanningLandmarkIdentificationCodeSequence_0068_6545 = 6841669,
    /**
     * < 2D Point Coordinates Sequence (0068,6550)
     */
    TwoDPointCoordinatesSequence_0068_6550 = 6841680,
    /**
     * < 2D Point Coordinates (0068,6560)
     */
    TwoDPointCoordinates_0068_6560 = 6841696,
    /**
     * < 3D Point Coordinates (0068,6590)
     */
    ThreeDPointCoordinates_0068_6590 = 6841744,
    /**
     * < 2D Line Coordinates Sequence (0068,65A0)
     */
    TwoDLineCoordinatesSequence_0068_65A0 = 6841760,
    /**
     * < 2D Line Coordinates (0068,65B0)
     */
    TwoDLineCoordinates_0068_65B0 = 6841776,
    /**
     * < 3D Line Coordinates (0068,65D0)
     */
    ThreeDLineCoordinates_0068_65D0 = 6841808,
    /**
     * < 2D Plane Coordinates Sequence (0068,65E0)
     */
    TwoDPlaneCoordinatesSequence_0068_65E0 = 6841824,
    /**
     * < 2D Plane Intersection (0068,65F0)
     */
    TwoDPlaneIntersection_0068_65F0 = 6841840,
    /**
     * < 3D Plane Origin (0068,6610)
     */
    ThreeDPlaneOrigin_0068_6610 = 6841872,
    /**
     * < 3D Plane Normal (0068,6620)
     */
    ThreeDPlaneNormal_0068_6620 = 6841888,
    /**
     * < Model Modification (0068,7001)
     */
    ModelModification_0068_7001 = 6844417,
    /**
     * < Model Mirroring (0068,7002)
     */
    ModelMirroring_0068_7002 = 6844418,
    /**
     * < Model Usage Code Sequence (0068,7003)
     */
    ModelUsageCodeSequence_0068_7003 = 6844419,
    /**
     * < Graphic Annotation Sequence (0070,0001)
     */
    GraphicAnnotationSequence_0070_0001 = 7340033,
    /**
     * < Graphic Layer (0070,0002)
     */
    GraphicLayer_0070_0002 = 7340034,
    /**
     * < Bounding Box Annotation Units (0070,0003)
     */
    BoundingBoxAnnotationUnits_0070_0003 = 7340035,
    /**
     * < Anchor Point Annotation Units (0070,0004)
     */
    AnchorPointAnnotationUnits_0070_0004 = 7340036,
    /**
     * < Graphic Annotation Units (0070,0005)
     */
    GraphicAnnotationUnits_0070_0005 = 7340037,
    /**
     * < Unformatted Text Value (0070,0006)
     */
    UnformattedTextValue_0070_0006 = 7340038,
    /**
     * < Text Object Sequence (0070,0008)
     */
    TextObjectSequence_0070_0008 = 7340040,
    /**
     * < Graphic Object Sequence (0070,0009)
     */
    GraphicObjectSequence_0070_0009 = 7340041,
    /**
     * < Bounding Box Top Left Hand Corner (0070,0010)
     */
    BoundingBoxTopLeftHandCorner_0070_0010 = 7340048,
    /**
     * < Bounding Box Bottom Right Hand Corner (0070,0011)
     */
    BoundingBoxBottomRightHandCorner_0070_0011 = 7340049,
    /**
     * < Bounding Box Text Horizontal Justification (0070,0012)
     */
    BoundingBoxTextHorizontalJustification_0070_0012 = 7340050,
    /**
     * < Anchor Point (0070,0014)
     */
    AnchorPoint_0070_0014 = 7340052,
    /**
     * < Anchor Point Visibility (0070,0015)
     */
    AnchorPointVisibility_0070_0015 = 7340053,
    /**
     * < Graphic Dimensions (0070,0020)
     */
    GraphicDimensions_0070_0020 = 7340064,
    /**
     * < Number of Graphic Points (0070,0021)
     */
    NumberOfGraphicPoints_0070_0021 = 7340065,
    /**
     * < Graphic Data (0070,0022)
     */
    GraphicData_0070_0022 = 7340066,
    /**
     * < Graphic Type (0070,0023)
     */
    GraphicType_0070_0023 = 7340067,
    /**
     * < Graphic Filled (0070,0024)
     */
    GraphicFilled_0070_0024 = 7340068,
    /**
     * < Image Horizontal Flip (0070,0041)
     */
    ImageHorizontalFlip_0070_0041 = 7340097,
    /**
     * < Image Rotation (Retired) (0070,0040)
     */
    ImageRotationRetired_0070_0040 = 7340096,
    /**
     * < Image Rotation (0070,0042)
     */
    ImageRotation_0070_0042 = 7340098,
    /**
     * < Displayed Area Top Left Hand Corner (Trial) (0070,0050)
     */
    DisplayedAreaTopLeftHandCornerTrial_0070_0050 = 7340112,
    /**
     * < Displayed Area Bottom Right Hand Corner (Trial) (0070,0051)
     */
    DisplayedAreaBottomRightHandCornerTrial_0070_0051 = 7340113,
    /**
     * < Displayed Area Top Left Hand Corner (0070,0052)
     */
    DisplayedAreaTopLeftHandCorner_0070_0052 = 7340114,
    /**
     * < Displayed Area Bottom Right Hand Corner (0070,0053)
     */
    DisplayedAreaBottomRightHandCorner_0070_0053 = 7340115,
    /**
     * < Displayed Area Selection Sequence (0070,005A)
     */
    DisplayedAreaSelectionSequence_0070_005A = 7340122,
    /**
     * < Graphic Layer Sequence (0070,0060)
     */
    GraphicLayerSequence_0070_0060 = 7340128,
    /**
     * < Graphic Layer Order (0070,0062)
     */
    GraphicLayerOrder_0070_0062 = 7340130,
    /**
     * < Graphic Layer Recommended Display Grayscale Value (0070,0066)
     */
    GraphicLayerRecommendedDisplayGrayscaleValue_0070_0066 = 7340134,
    /**
     * < Graphic Layer Recommended Display RGB Value (0070,0067)
     */
    GraphicLayerRecommendedDisplayRGBValue_0070_0067 = 7340135,
    /**
     * < Graphic Layer Description (0070,0068)
     */
    GraphicLayerDescription_0070_0068 = 7340136,
    /**
     * < Content Label (0070,0080)
     */
    ContentLabel_0070_0080 = 7340160,
    /**
     * < Content Description (0070,0081)
     */
    ContentDescription_0070_0081 = 7340161,
    /**
     * < Presentation Creation Date (0070,0082)
     */
    PresentationCreationDate_0070_0082 = 7340162,
    /**
     * < Presentation Creation Time (0070,0083)
     */
    PresentationCreationTime_0070_0083 = 7340163,
    /**
     * < Content Creator's Name (0070,0084)
     */
    ContentCreatorName_0070_0084 = 7340164,
    /**
     * < Content Creator's Identification Code Sequence (0070,0086)
     */
    ContentCreatorIdentificationCodeSequence_0070_0086 = 7340166,
    /**
     * < Alternate Content Description Sequence (0070,0087)
     */
    AlternateContentDescriptionSequence_0070_0087 = 7340167,
    /**
     * < Presentation Size Mode (0070,0100)
     */
    PresentationSizeMode_0070_0100 = 7340288,
    /**
     * < Presentation Pixel Spacing (0070,0101)
     */
    PresentationPixelSpacing_0070_0101 = 7340289,
    /**
     * < Presentation Pixel Aspect Ratio (0070,0102)
     */
    PresentationPixelAspectRatio_0070_0102 = 7340290,
    /**
     * < Presentation Pixel Magnification Ratio (0070,0103)
     */
    PresentationPixelMagnificationRatio_0070_0103 = 7340291,
    /**
     * < Graphic Group Label (0070,0207)
     */
    GraphicGroupLabel_0070_0207 = 7340551,
    /**
     * < Graphic Group Description (0070,0208)
     */
    GraphicGroupDescription_0070_0208 = 7340552,
    /**
     * < Compound Graphic Sequence (0070,0209)
     */
    CompoundGraphicSequence_0070_0209 = 7340553,
    /**
     * < Compound Graphic Instance ID (0070,0226)
     */
    CompoundGraphicInstanceID_0070_0226 = 7340582,
    /**
     * < Font Name (0070,0227)
     */
    FontName_0070_0227 = 7340583,
    /**
     * < Font Name Type (0070,0228)
     */
    FontNameType_0070_0228 = 7340584,
    /**
     * < CSS Font Name (0070,0229)
     */
    CSSFontName_0070_0229 = 7340585,
    /**
     * < Rotation Angle (0070,0230)
     */
    RotationAngle_0070_0230 = 7340592,
    /**
     * < Text Style Sequence (0070,0231)
     */
    TextStyleSequence_0070_0231 = 7340593,
    /**
     * < Line Style Sequence (0070,0232)
     */
    LineStyleSequence_0070_0232 = 7340594,
    /**
     * < Fill Style Sequence (0070,0233)
     */
    FillStyleSequence_0070_0233 = 7340595,
    /**
     * < Graphic Group Sequence (0070,0234)
     */
    GraphicGroupSequence_0070_0234 = 7340596,
    /**
     * < Text Color CIELab Value (0070,0241)
     */
    TextColorCIELabValue_0070_0241 = 7340609,
    /**
     * < Horizontal Alignment (0070,0242)
     */
    HorizontalAlignment_0070_0242 = 7340610,
    /**
     * < Vertical Alignment (0070,0243)
     */
    VerticalAlignment_0070_0243 = 7340611,
    /**
     * < Shadow Style (0070,0244)
     */
    ShadowStyle_0070_0244 = 7340612,
    /**
     * < Shadow Offset X (0070,0245)
     */
    ShadowOffsetX_0070_0245 = 7340613,
    /**
     * < Shadow Offset Y (0070,0246)
     */
    ShadowOffsetY_0070_0246 = 7340614,
    /**
     * < Shadow Color CIELab Value (0070,0247)
     */
    ShadowColorCIELabValue_0070_0247 = 7340615,
    /**
     * < Underlined (0070,0248)
     */
    Underlined_0070_0248 = 7340616,
    /**
     * < Bold (0070,0249)
     */
    Bold_0070_0249 = 7340617,
    /**
     * < Italic (0070,0250)
     */
    Italic_0070_0250 = 7340624,
    /**
     * < Pattern On Color CIELab Value (0070,0251)
     */
    PatternOnColorCIELabValue_0070_0251 = 7340625,
    /**
     * < Pattern Off Color CIELab Value (0070,0252)
     */
    PatternOffColorCIELabValue_0070_0252 = 7340626,
    /**
     * < Line Thickness (0070,0253)
     */
    LineThickness_0070_0253 = 7340627,
    /**
     * < Line Dashing Style (0070,0254)
     */
    LineDashingStyle_0070_0254 = 7340628,
    /**
     * < Line Pattern (0070,0255)
     */
    LinePattern_0070_0255 = 7340629,
    /**
     * < Fill Pattern (0070,0256)
     */
    FillPattern_0070_0256 = 7340630,
    /**
     * < Fill Mode (0070,0257)
     */
    FillMode_0070_0257 = 7340631,
    /**
     * < Shadow Opacity (0070,0258)
     */
    ShadowOpacity_0070_0258 = 7340632,
    /**
     * < Gap Length (0070,0261)
     */
    GapLength_0070_0261 = 7340641,
    /**
     * < Diameter of Visibility (0070,0262)
     */
    DiameterOfVisibility_0070_0262 = 7340642,
    /**
     * < Rotation Point (0070,0273)
     */
    RotationPoint_0070_0273 = 7340659,
    /**
     * < Tick Alignment (0070,0274)
     */
    TickAlignment_0070_0274 = 7340660,
    /**
     * < Show Tick Label (0070,0278)
     */
    ShowTickLabel_0070_0278 = 7340664,
    /**
     * < Tick Label Alignment (0070,0279)
     */
    TickLabelAlignment_0070_0279 = 7340665,
    /**
     * < Compound Graphic Units (0070,0282)
     */
    CompoundGraphicUnits_0070_0282 = 7340674,
    /**
     * < Pattern On Opacity (0070,0284)
     */
    PatternOnOpacity_0070_0284 = 7340676,
    /**
     * < Pattern Off Opacity (0070,0285)
     */
    PatternOffOpacity_0070_0285 = 7340677,
    /**
     * < Major Ticks Sequence (0070,0287)
     */
    MajorTicksSequence_0070_0287 = 7340679,
    /**
     * < Tick Position (0070,0288)
     */
    TickPosition_0070_0288 = 7340680,
    /**
     * < Tick Label (0070,0289)
     */
    TickLabel_0070_0289 = 7340681,
    /**
     * < Compound Graphic Type (0070,0294)
     */
    CompoundGraphicType_0070_0294 = 7340692,
    /**
     * < Graphic Group ID (0070,0295)
     */
    GraphicGroupID_0070_0295 = 7340693,
    /**
     * < Shape Type (0070,0306)
     */
    ShapeType_0070_0306 = 7340806,
    /**
     * < Registration Sequence (0070,0308)
     */
    RegistrationSequence_0070_0308 = 7340808,
    /**
     * < Matrix Registration Sequence (0070,0309)
     */
    MatrixRegistrationSequence_0070_0309 = 7340809,
    /**
     * < Matrix Sequence (0070,030A)
     */
    MatrixSequence_0070_030A = 7340810,
    /**
     * < Frame of Reference to Displayed Coordinate System Transformation Matrix (0070,030B)
     */
    FrameOfReferenceToDisplayedCoordinateSystemTransformationMatrix_0070_030B = 7340811,
    /**
     * < Frame of Reference Transformation Matrix Type (0070,030C)
     */
    FrameOfReferenceTransformationMatrixType_0070_030C = 7340812,
    /**
     * < Registration Type Code Sequence (0070,030D)
     */
    RegistrationTypeCodeSequence_0070_030D = 7340813,
    /**
     * < Fiducial Description (0070,030F)
     */
    FiducialDescription_0070_030F = 7340815,
    /**
     * < Fiducial Identifier (0070,0310)
     */
    FiducialIdentifier_0070_0310 = 7340816,
    /**
     * < Fiducial Identifier Code Sequence (0070,0311)
     */
    FiducialIdentifierCodeSequence_0070_0311 = 7340817,
    /**
     * < Contour Uncertainty Radius (0070,0312)
     */
    ContourUncertaintyRadius_0070_0312 = 7340818,
    /**
     * < Used Fiducials Sequence (0070,0314)
     */
    UsedFiducialsSequence_0070_0314 = 7340820,
    /**
     * < Graphic Coordinates Data Sequence (0070,0318)
     */
    GraphicCoordinatesDataSequence_0070_0318 = 7340824,
    /**
     * < Fiducial UID (0070,031A)
     */
    FiducialUID_0070_031A = 7340826,
    /**
     * < Referenced Fiducial UID (0070,031B)
     */
    ReferencedFiducialUID_0070_031B = 7340827,
    /**
     * < Fiducial Set Sequence (0070,031C)
     */
    FiducialSetSequence_0070_031C = 7340828,
    /**
     * < Fiducial Sequence (0070,031E)
     */
    FiducialSequence_0070_031E = 7340830,
    /**
     * < Fiducials Property Category Code Sequence (0070,031F)
     */
    FiducialsPropertyCategoryCodeSequence_0070_031F = 7340831,
    /**
     * < Graphic Layer Recommended Display CIELab Value (0070,0401)
     */
    GraphicLayerRecommendedDisplayCIELabValue_0070_0401 = 7341057,
    /**
     * < Blending Sequence (0070,0402)
     */
    BlendingSequence_0070_0402 = 7341058,
    /**
     * < Relative Opacity (0070,0403)
     */
    RelativeOpacity_0070_0403 = 7341059,
    /**
     * < Referenced Spatial Registration Sequence (0070,0404)
     */
    ReferencedSpatialRegistrationSequence_0070_0404 = 7341060,
    /**
     * < Blending Position (0070,0405)
     */
    BlendingPosition_0070_0405 = 7341061,
    /**
     * < Presentation Display Collection UID (0070,1101)
     */
    PresentationDisplayCollectionUID_0070_1101 = 7344385,
    /**
     * < Presentation Sequence Collection UID (0070,1102)
     */
    PresentationSequenceCollectionUID_0070_1102 = 7344386,
    /**
     * < Presentation Sequence Position Index (0070,1103)
     */
    PresentationSequencePositionIndex_0070_1103 = 7344387,
    /**
     * < Rendered Image Reference Sequence (0070,1104)
     */
    RenderedImageReferenceSequence_0070_1104 = 7344388,
    /**
     * < Volumetric Presentation State Input Sequence (0070,1201)
     */
    VolumetricPresentationStateInputSequence_0070_1201 = 7344641,
    /**
     * < Presentation Input Type (0070,1202)
     */
    PresentationInputType_0070_1202 = 7344642,
    /**
     * < Input Sequence Position Index (0070,1203)
     */
    InputSequencePositionIndex_0070_1203 = 7344643,
    /**
     * < Crop (0070,1204)
     */
    Crop_0070_1204 = 7344644,
    /**
     * < Cropping Specification Index (0070,1205)
     */
    CroppingSpecificationIndex_0070_1205 = 7344645,
    /**
     * < Compositing Method (0070,1206)
     */
    CompositingMethod_0070_1206 = 7344646,
    /**
     * < Volumetric Presentation Input Number (0070,1207)
     */
    VolumetricPresentationInputNumber_0070_1207 = 7344647,
    /**
     * < Image Volume Geometry (0070,1208)
     */
    ImageVolumeGeometry_0070_1208 = 7344648,
    /**
     * < Volumetric Presentation Input Set UID (0070,1209)
     */
    VolumetricPresentationInputSetUID_0070_1209 = 7344649,
    /**
     * < Volumetric Presentation Input Set Sequence (0070,120A)
     */
    VolumetricPresentationInputSetSequence_0070_120A = 7344650,
    /**
     * < Global Crop (0070,120B)
     */
    GlobalCrop_0070_120B = 7344651,
    /**
     * < Global Cropping Specification Index (0070,120C)
     */
    GlobalCroppingSpecificationIndex_0070_120C = 7344652,
    /**
     * < Rendering Method (0070,120D)
     */
    RenderingMethod_0070_120D = 7344653,
    /**
     * < Volume Cropping Sequence (0070,1301)
     */
    VolumeCroppingSequence_0070_1301 = 7344897,
    /**
     * < Volume Cropping Method (0070,1302)
     */
    VolumeCroppingMethod_0070_1302 = 7344898,
    /**
     * < Bounding Box Crop (0070,1303)
     */
    BoundingBoxCrop_0070_1303 = 7344899,
    /**
     * < Oblique Cropping Plane Sequence (0070,1304)
     */
    ObliqueCroppingPlaneSequence_0070_1304 = 7344900,
    /**
     * < Plane (0070,1305)
     */
    Plane_0070_1305 = 7344901,
    /**
     * < Plane Normal (0070,1306)
     */
    PlaneNormal_0070_1306 = 7344902,
    /**
     * < Cropping Specification Number (0070,1309)
     */
    CroppingSpecificationNumber_0070_1309 = 7344905,
    /**
     * < Multi-Planar Reconstruction Style (0070,1501)
     */
    MultiPlanarReconstructionStyle_0070_1501 = 7345409,
    /**
     * < MPR Thickness Type (0070,1502)
     */
    MPRThicknessType_0070_1502 = 7345410,
    /**
     * < MPR Slab Thickness (0070,1503)
     */
    MPRSlabThickness_0070_1503 = 7345411,
    /**
     * < MPR Top Left Hand Corner (0070,1505)
     */
    MPRTopLeftHandCorner_0070_1505 = 7345413,
    /**
     * < MPR View Width Direction (0070,1507)
     */
    MPRViewWidthDirection_0070_1507 = 7345415,
    /**
     * < MPR View Width (0070,1508)
     */
    MPRViewWidth_0070_1508 = 7345416,
    /**
     * < Number of Volumetric Curve Points (0070,150C)
     */
    NumberOfVolumetricCurvePoints_0070_150C = 7345420,
    /**
     * < Volumetric Curve Points (0070,150D)
     */
    VolumetricCurvePoints_0070_150D = 7345421,
    /**
     * < MPR View Height Direction (0070,1511)
     */
    MPRViewHeightDirection_0070_1511 = 7345425,
    /**
     * < MPR View Height (0070,1512)
     */
    MPRViewHeight_0070_1512 = 7345426,
    /**
     * < Render Projection (0070,1602)
     */
    RenderProjection_0070_1602 = 7345666,
    /**
     * < Viewpoint Position (0070,1603)
     */
    ViewpointPosition_0070_1603 = 7345667,
    /**
     * < Viewpoint LookAt Point (0070,1604)
     */
    ViewpointLookAtPoint_0070_1604 = 7345668,
    /**
     * < Viewpoint Up Direction (0070,1605)
     */
    ViewpointUpDirection_0070_1605 = 7345669,
    /**
     * < Render Field of View (0070,1606)
     */
    RenderFieldOfView_0070_1606 = 7345670,
    /**
     * < Sampling Step Size (0070,1607)
     */
    SamplingStepSize_0070_1607 = 7345671,
    /**
     * < Shading Style (0070,1701)
     */
    ShadingStyle_0070_1701 = 7345921,
    /**
     * < Ambient Reflection Intensity (0070,1702)
     */
    AmbientReflectionIntensity_0070_1702 = 7345922,
    /**
     * < Light Direction (0070,1703)
     */
    LightDirection_0070_1703 = 7345923,
    /**
     * < Diffuse Reflection Intensity (0070,1704)
     */
    DiffuseReflectionIntensity_0070_1704 = 7345924,
    /**
     * < Specular Reflection Intensity (0070,1705)
     */
    SpecularReflectionIntensity_0070_1705 = 7345925,
    /**
     * < Shininess (0070,1706)
     */
    Shininess_0070_1706 = 7345926,
    /**
     * < Presentation State Classification Component Sequence (0070,1801)
     */
    PresentationStateClassificationComponentSequence_0070_1801 = 7346177,
    /**
     * < Component Type (0070,1802)
     */
    ComponentType_0070_1802 = 7346178,
    /**
     * < Component Input Sequence (0070,1803)
     */
    ComponentInputSequence_0070_1803 = 7346179,
    /**
     * < Volumetric Presentation Input Index (0070,1804)
     */
    VolumetricPresentationInputIndex_0070_1804 = 7346180,
    /**
     * < Presentation State Compositor Component Sequence (0070,1805)
     */
    PresentationStateCompositorComponentSequence_0070_1805 = 7346181,
    /**
     * < Weighting Transfer Function Sequence (0070,1806)
     */
    WeightingTransferFunctionSequence_0070_1806 = 7346182,
    /**
     * < Weighting Lookup Table Descriptor (0070,1807)
     */
    WeightingLookupTableDescriptor_0070_1807 = 7346183,
    /**
     * < Weighting Lookup Table Data (0070,1808)
     */
    WeightingLookupTableData_0070_1808 = 7346184,
    /**
     * < Volumetric Annotation Sequence (0070,1901)
     */
    VolumetricAnnotationSequence_0070_1901 = 7346433,
    /**
     * < Referenced Structured Context Sequence (0070,1903)
     */
    ReferencedStructuredContextSequence_0070_1903 = 7346435,
    /**
     * < Referenced Content Item (0070,1904)
     */
    ReferencedContentItem_0070_1904 = 7346436,
    /**
     * < Volumetric Presentation Input Annotation Sequence (0070,1905)
     */
    VolumetricPresentationInputAnnotationSequence_0070_1905 = 7346437,
    /**
     * < Annotation Clipping (0070,1907)
     */
    AnnotationClipping_0070_1907 = 7346439,
    /**
     * < Presentation Animation Style (0070,1A01)
     */
    PresentationAnimationStyle_0070_1A01 = 7346689,
    /**
     * < Recommended Animation Rate (0070,1A03)
     */
    RecommendedAnimationRate_0070_1A03 = 7346691,
    /**
     * < Animation Curve Sequence (0070,1A04)
     */
    AnimationCurveSequence_0070_1A04 = 7346692,
    /**
     * < Animation Step Size (0070,1A05)
     */
    AnimationStepSize_0070_1A05 = 7346693,
    /**
     * < Swivel Range (0070,1A06)
     */
    SwivelRange_0070_1A06 = 7346694,
    /**
     * < Volumetric Curve Up Directions (0070,1A07)
     */
    VolumetricCurveUpDirections_0070_1A07 = 7346695,
    /**
     * < Volume Stream Sequence (0070,1A08)
     */
    VolumeStreamSequence_0070_1A08 = 7346696,
    /**
     * < RGBA Transfer Function Description (0070,1A09)
     */
    RGBATransferFunctionDescription_0070_1A09 = 7346697,
    /**
     * < Advanced Blending Sequence (0070,1B01)
     */
    AdvancedBlendingSequence_0070_1B01 = 7346945,
    /**
     * < Blending Input Number (0070,1B02)
     */
    BlendingInputNumber_0070_1B02 = 7346946,
    /**
     * < Blending Display Input Sequence (0070,1B03)
     */
    BlendingDisplayInputSequence_0070_1B03 = 7346947,
    /**
     * < Blending Display Sequence (0070,1B04)
     */
    BlendingDisplaySequence_0070_1B04 = 7346948,
    /**
     * < Blending Mode (0070,1B06)
     */
    BlendingMode_0070_1B06 = 7346950,
    /**
     * < Time Series Blending (0070,1B07)
     */
    TimeSeriesBlending_0070_1B07 = 7346951,
    /**
     * < Geometry for Display (0070,1B08)
     */
    GeometryForDisplay_0070_1B08 = 7346952,
    /**
     * < Threshold Sequence (0070,1B11)
     */
    ThresholdSequence_0070_1B11 = 7346961,
    /**
     * < Threshold Value Sequence (0070,1B12)
     */
    ThresholdValueSequence_0070_1B12 = 7346962,
    /**
     * < Threshold Type (0070,1B13)
     */
    ThresholdType_0070_1B13 = 7346963,
    /**
     * < Threshold Value (0070,1B14)
     */
    ThresholdValue_0070_1B14 = 7346964,
    /**
     * < Hanging Protocol Name (0072,0002)
     */
    HangingProtocolName_0072_0002 = 7471106,
    /**
     * < Hanging Protocol Description (0072,0004)
     */
    HangingProtocolDescription_0072_0004 = 7471108,
    /**
     * < Hanging Protocol Level (0072,0006)
     */
    HangingProtocolLevel_0072_0006 = 7471110,
    /**
     * < Hanging Protocol Creator (0072,0008)
     */
    HangingProtocolCreator_0072_0008 = 7471112,
    /**
     * < Hanging Protocol Creation DateTime (0072,000A)
     */
    HangingProtocolCreationDateTime_0072_000A = 7471114,
    /**
     * < Hanging Protocol Definition Sequence (0072,000C)
     */
    HangingProtocolDefinitionSequence_0072_000C = 7471116,
    /**
     * < Hanging Protocol User Identification Code Sequence (0072,000E)
     */
    HangingProtocolUserIdentificationCodeSequence_0072_000E = 7471118,
    /**
     * < Hanging Protocol User Group Name (0072,0010)
     */
    HangingProtocolUserGroupName_0072_0010 = 7471120,
    /**
     * < Source Hanging Protocol Sequence (0072,0012)
     */
    SourceHangingProtocolSequence_0072_0012 = 7471122,
    /**
     * < Number of Priors Referenced (0072,0014)
     */
    NumberOfPriorsReferenced_0072_0014 = 7471124,
    /**
     * < Image Sets Sequence (0072,0020)
     */
    ImageSetsSequence_0072_0020 = 7471136,
    /**
     * < Image Set Selector Sequence (0072,0022)
     */
    ImageSetSelectorSequence_0072_0022 = 7471138,
    /**
     * < Image Set Selector Usage Flag (0072,0024)
     */
    ImageSetSelectorUsageFlag_0072_0024 = 7471140,
    /**
     * < Selector Attribute (0072,0026)
     */
    SelectorAttribute_0072_0026 = 7471142,
    /**
     * < Selector Value Number (0072,0028)
     */
    SelectorValueNumber_0072_0028 = 7471144,
    /**
     * < Time Based Image Sets Sequence (0072,0030)
     */
    TimeBasedImageSetsSequence_0072_0030 = 7471152,
    /**
     * < Image Set Number (0072,0032)
     */
    ImageSetNumber_0072_0032 = 7471154,
    /**
     * < Image Set Selector Category (0072,0034)
     */
    ImageSetSelectorCategory_0072_0034 = 7471156,
    /**
     * < Relative Time (0072,0038)
     */
    RelativeTime_0072_0038 = 7471160,
    /**
     * < Relative Time Units (0072,003A)
     */
    RelativeTimeUnits_0072_003A = 7471162,
    /**
     * < Abstract Prior Value (0072,003C)
     */
    AbstractPriorValue_0072_003C = 7471164,
    /**
     * < Abstract Prior Code Sequence (0072,003E)
     */
    AbstractPriorCodeSequence_0072_003E = 7471166,
    /**
     * < Image Set Label (0072,0040)
     */
    ImageSetLabel_0072_0040 = 7471168,
    /**
     * < Selector Attribute VR (0072,0050)
     */
    SelectorAttributeVR_0072_0050 = 7471184,
    /**
     * < Selector Sequence Pointer (0072,0052)
     */
    SelectorSequencePointer_0072_0052 = 7471186,
    /**
     * < Selector Sequence Pointer Private Creator (0072,0054)
     */
    SelectorSequencePointerPrivateCreator_0072_0054 = 7471188,
    /**
     * < Selector Attribute Private Creator (0072,0056)
     */
    SelectorAttributePrivateCreator_0072_0056 = 7471190,
    /**
     * < Selector AE Value (0072,005E)
     */
    SelectorAEValue_0072_005E = 7471198,
    /**
     * < Selector AS Value (0072,005F)
     */
    SelectorASValue_0072_005F = 7471199,
    /**
     * < Selector AT Value (0072,0060)
     */
    SelectorATValue_0072_0060 = 7471200,
    /**
     * < Selector DA Value (0072,0061)
     */
    SelectorDAValue_0072_0061 = 7471201,
    /**
     * < Selector CS Value (0072,0062)
     */
    SelectorCSValue_0072_0062 = 7471202,
    /**
     * < Selector DT Value (0072,0063)
     */
    SelectorDTValue_0072_0063 = 7471203,
    /**
     * < Selector IS Value (0072,0064)
     */
    SelectorISValue_0072_0064 = 7471204,
    /**
     * < Selector OB Value (0072,0065)
     */
    SelectorOBValue_0072_0065 = 7471205,
    /**
     * < Selector LO Value (0072,0066)
     */
    SelectorLOValue_0072_0066 = 7471206,
    /**
     * < Selector OF Value (0072,0067)
     */
    SelectorOFValue_0072_0067 = 7471207,
    /**
     * < Selector LT Value (0072,0068)
     */
    SelectorLTValue_0072_0068 = 7471208,
    /**
     * < Selector OW Value (0072,0069)
     */
    SelectorOWValue_0072_0069 = 7471209,
    /**
     * < Selector PN Value (0072,006A)
     */
    SelectorPNValue_0072_006A = 7471210,
    /**
     * < Selector TM Value (0072,006B)
     */
    SelectorTMValue_0072_006B = 7471211,
    /**
     * < Selector SH Value (0072,006C)
     */
    SelectorSHValue_0072_006C = 7471212,
    /**
     * < Selector UN Value (0072,006D)
     */
    SelectorUNValue_0072_006D = 7471213,
    /**
     * < Selector ST Value (0072,006E)
     */
    SelectorSTValue_0072_006E = 7471214,
    /**
     * < Selector UC Value (0072,006F)
     */
    SelectorUCValue_0072_006F = 7471215,
    /**
     * < Selector UT Value (0072,0070)
     */
    SelectorUTValue_0072_0070 = 7471216,
    /**
     * < Selector UR Value (0072,0071)
     */
    SelectorURValue_0072_0071 = 7471217,
    /**
     * < Selector DS Value (0072,0072)
     */
    SelectorDSValue_0072_0072 = 7471218,
    /**
     * < Selector OD Value (0072,0073)
     */
    SelectorODValue_0072_0073 = 7471219,
    /**
     * < Selector FD Value (0072,0074)
     */
    SelectorFDValue_0072_0074 = 7471220,
    /**
     * < Selector OL Value (0072,0075)
     */
    SelectorOLValue_0072_0075 = 7471221,
    /**
     * < Selector FL Value (0072,0076)
     */
    SelectorFLValue_0072_0076 = 7471222,
    /**
     * < Selector UL Value (0072,0078)
     */
    SelectorULValue_0072_0078 = 7471224,
    /**
     * < Selector US Value (0072,007A)
     */
    SelectorUSValue_0072_007A = 7471226,
    /**
     * < Selector SL Value (0072,007C)
     */
    SelectorSLValue_0072_007C = 7471228,
    /**
     * < Selector SS Value (0072,007E)
     */
    SelectorSSValue_0072_007E = 7471230,
    /**
     * < Selector UI Value (0072,007F)
     */
    SelectorUIValue_0072_007F = 7471231,
    /**
     * < Selector Code Sequence Value (0072,0080)
     */
    SelectorCodeSequenceValue_0072_0080 = 7471232,
    /**
     * < Number of Screens (0072,0100)
     */
    NumberOfScreens_0072_0100 = 7471360,
    /**
     * < Nominal Screen Definition Sequence (0072,0102)
     */
    NominalScreenDefinitionSequence_0072_0102 = 7471362,
    /**
     * < Number of Vertical Pixels (0072,0104)
     */
    NumberOfVerticalPixels_0072_0104 = 7471364,
    /**
     * < Number of Horizontal Pixels (0072,0106)
     */
    NumberOfHorizontalPixels_0072_0106 = 7471366,
    /**
     * < Display Environment Spatial Position (0072,0108)
     */
    DisplayEnvironmentSpatialPosition_0072_0108 = 7471368,
    /**
     * < Screen Minimum Grayscale Bit Depth (0072,010A)
     */
    ScreenMinimumGrayscaleBitDepth_0072_010A = 7471370,
    /**
     * < Screen Minimum Color Bit Depth (0072,010C)
     */
    ScreenMinimumColorBitDepth_0072_010C = 7471372,
    /**
     * < Application Maximum Repaint Time (0072,010E)
     */
    ApplicationMaximumRepaintTime_0072_010E = 7471374,
    /**
     * < Display Sets Sequence (0072,0200)
     */
    DisplaySetsSequence_0072_0200 = 7471616,
    /**
     * < Display Set Number (0072,0202)
     */
    DisplaySetNumber_0072_0202 = 7471618,
    /**
     * < Display Set Label (0072,0203)
     */
    DisplaySetLabel_0072_0203 = 7471619,
    /**
     * < Display Set Presentation Group (0072,0204)
     */
    DisplaySetPresentationGroup_0072_0204 = 7471620,
    /**
     * < Display Set Presentation Group Description (0072,0206)
     */
    DisplaySetPresentationGroupDescription_0072_0206 = 7471622,
    /**
     * < Partial Data Display Handling (0072,0208)
     */
    PartialDataDisplayHandling_0072_0208 = 7471624,
    /**
     * < Synchronized Scrolling Sequence (0072,0210)
     */
    SynchronizedScrollingSequence_0072_0210 = 7471632,
    /**
     * < Display Set Scrolling Group (0072,0212)
     */
    DisplaySetScrollingGroup_0072_0212 = 7471634,
    /**
     * < Navigation Indicator Sequence (0072,0214)
     */
    NavigationIndicatorSequence_0072_0214 = 7471636,
    /**
     * < Navigation Display Set (0072,0216)
     */
    NavigationDisplaySet_0072_0216 = 7471638,
    /**
     * < Reference Display Sets (0072,0218)
     */
    ReferenceDisplaySets_0072_0218 = 7471640,
    /**
     * < Image Boxes Sequence (0072,0300)
     */
    ImageBoxesSequence_0072_0300 = 7471872,
    /**
     * < Image Box Number (0072,0302)
     */
    ImageBoxNumber_0072_0302 = 7471874,
    /**
     * < Image Box Layout Type (0072,0304)
     */
    ImageBoxLayoutType_0072_0304 = 7471876,
    /**
     * < Image Box Tile Horizontal Dimension (0072,0306)
     */
    ImageBoxTileHorizontalDimension_0072_0306 = 7471878,
    /**
     * < Image Box Tile Vertical Dimension (0072,0308)
     */
    ImageBoxTileVerticalDimension_0072_0308 = 7471880,
    /**
     * < Image Box Scroll Direction (0072,0310)
     */
    ImageBoxScrollDirection_0072_0310 = 7471888,
    /**
     * < Image Box Small Scroll Type (0072,0312)
     */
    ImageBoxSmallScrollType_0072_0312 = 7471890,
    /**
     * < Image Box Small Scroll Amount (0072,0314)
     */
    ImageBoxSmallScrollAmount_0072_0314 = 7471892,
    /**
     * < Image Box Large Scroll Type (0072,0316)
     */
    ImageBoxLargeScrollType_0072_0316 = 7471894,
    /**
     * < Image Box Large Scroll Amount (0072,0318)
     */
    ImageBoxLargeScrollAmount_0072_0318 = 7471896,
    /**
     * < Image Box Overlap Priority (0072,0320)
     */
    ImageBoxOverlapPriority_0072_0320 = 7471904,
    /**
     * < Cine Relative to Real-Time (0072,0330)
     */
    CineRelativeToRealTime_0072_0330 = 7471920,
    /**
     * < Filter Operations Sequence (0072,0400)
     */
    FilterOperationsSequence_0072_0400 = 7472128,
    /**
     * < Filter-by Category (0072,0402)
     */
    FilterByCategory_0072_0402 = 7472130,
    /**
     * < Filter-by Attribute Presence (0072,0404)
     */
    FilterByAttributePresence_0072_0404 = 7472132,
    /**
     * < Filter-by Operator (0072,0406)
     */
    FilterByOperator_0072_0406 = 7472134,
    /**
     * < Structured Display Background CIELab Value (0072,0420)
     */
    StructuredDisplayBackgroundCIELabValue_0072_0420 = 7472160,
    /**
     * < Empty Image Box CIELab Value (0072,0421)
     */
    EmptyImageBoxCIELabValue_0072_0421 = 7472161,
    /**
     * < Structured Display Image Box Sequence (0072,0422)
     */
    StructuredDisplayImageBoxSequence_0072_0422 = 7472162,
    /**
     * < Structured Display Text Box Sequence (0072,0424)
     */
    StructuredDisplayTextBoxSequence_0072_0424 = 7472164,
    /**
     * < Referenced First Frame Sequence (0072,0427)
     */
    ReferencedFirstFrameSequence_0072_0427 = 7472167,
    /**
     * < Image Box Synchronization Sequence (0072,0430)
     */
    ImageBoxSynchronizationSequence_0072_0430 = 7472176,
    /**
     * < Synchronized Image Box List (0072,0432)
     */
    SynchronizedImageBoxList_0072_0432 = 7472178,
    /**
     * < Type of Synchronization (0072,0434)
     */
    TypeOfSynchronization_0072_0434 = 7472180,
    /**
     * < Blending Operation Type (0072,0500)
     */
    BlendingOperationType_0072_0500 = 7472384,
    /**
     * < Reformatting Operation Type (0072,0510)
     */
    ReformattingOperationType_0072_0510 = 7472400,
    /**
     * < Reformatting Thickness (0072,0512)
     */
    ReformattingThickness_0072_0512 = 7472402,
    /**
     * < Reformatting Interval (0072,0514)
     */
    ReformattingInterval_0072_0514 = 7472404,
    /**
     * < Reformatting Operation Initial View Direction (0072,0516)
     */
    ReformattingOperationInitialViewDirection_0072_0516 = 7472406,
    /**
     * < 3D Rendering Type (0072,0520)
     */
    ThreeDRenderingType_0072_0520 = 7472416,
    /**
     * < Sorting Operations Sequence (0072,0600)
     */
    SortingOperationsSequence_0072_0600 = 7472640,
    /**
     * < Sort-by Category (0072,0602)
     */
    SortByCategory_0072_0602 = 7472642,
    /**
     * < Sorting Direction (0072,0604)
     */
    SortingDirection_0072_0604 = 7472644,
    /**
     * < Display Set Patient Orientation (0072,0700)
     */
    DisplaySetPatientOrientation_0072_0700 = 7472896,
    /**
     * < VOI Type (0072,0702)
     */
    VOIType_0072_0702 = 7472898,
    /**
     * < Pseudo-Color Type (0072,0704)
     */
    PseudoColorType_0072_0704 = 7472900,
    /**
     * < Pseudo-Color Palette Instance Reference Sequence (0072,0705)
     */
    PseudoColorPaletteInstanceReferenceSequence_0072_0705 = 7472901,
    /**
     * < Show Grayscale Inverted (0072,0706)
     */
    ShowGrayscaleInverted_0072_0706 = 7472902,
    /**
     * < Show Image True Size Flag (0072,0710)
     */
    ShowImageTrueSizeFlag_0072_0710 = 7472912,
    /**
     * < Show Graphic Annotation Flag (0072,0712)
     */
    ShowGraphicAnnotationFlag_0072_0712 = 7472914,
    /**
     * < Show Patient Demographics Flag (0072,0714)
     */
    ShowPatientDemographicsFlag_0072_0714 = 7472916,
    /**
     * < Show Acquisition Techniques Flag (0072,0716)
     */
    ShowAcquisitionTechniquesFlag_0072_0716 = 7472918,
    /**
     * < Display Set Horizontal Justification (0072,0717)
     */
    DisplaySetHorizontalJustification_0072_0717 = 7472919,
    /**
     * < Display Set Vertical Justification (0072,0718)
     */
    DisplaySetVerticalJustification_0072_0718 = 7472920,
    /**
     * < Continuation Start Meterset (0074,0120)
     */
    ContinuationStartMeterset_0074_0120 = 7602464,
    /**
     * < Continuation End Meterset (0074,0121)
     */
    ContinuationEndMeterset_0074_0121 = 7602465,
    /**
     * < Procedure Step State (0074,1000)
     */
    ProcedureStepState_0074_1000 = 7606272,
    /**
     * < Procedure Step Progress Information Sequence (0074,1002)
     */
    ProcedureStepProgressInformationSequence_0074_1002 = 7606274,
    /**
     * < Procedure Step Progress (0074,1004)
     */
    ProcedureStepProgress_0074_1004 = 7606276,
    /**
     * < Procedure Step Progress Description (0074,1006)
     */
    ProcedureStepProgressDescription_0074_1006 = 7606278,
    /**
     * < Procedure Step Progress Parameters Sequence (0074,1007)
     */
    ProcedureStepProgressParametersSequence_0074_1007 = 7606279,
    /**
     * < Procedure Step Communications URI Sequence (0074,1008)
     */
    ProcedureStepCommunicationsURISequence_0074_1008 = 7606280,
    /**
     * < Contact URI (0074,100A)
     */
    ContactURI_0074_100A = 7606282,
    /**
     * < Contact Display Name (0074,100C)
     */
    ContactDisplayName_0074_100C = 7606284,
    /**
     * < Procedure Step Discontinuation Reason Code Sequence (0074,100E)
     */
    ProcedureStepDiscontinuationReasonCodeSequence_0074_100E = 7606286,
    /**
     * < Beam Task Sequence (0074,1020)
     */
    BeamTaskSequence_0074_1020 = 7606304,
    /**
     * < Beam Task Type (0074,1022)
     */
    BeamTaskType_0074_1022 = 7606306,
    /**
     * < Beam Order Index (Trial) (0074,1024)
     */
    BeamOrderIndexTrial_0074_1024 = 7606308,
    /**
     * < Autosequence Flag (0074,1025)
     */
    AutosequenceFlag_0074_1025 = 7606309,
    /**
     * < Table Top Vertical Adjusted Position (0074,1026)
     */
    TableTopVerticalAdjustedPosition_0074_1026 = 7606310,
    /**
     * < Table Top Longitudinal Adjusted Position (0074,1027)
     */
    TableTopLongitudinalAdjustedPosition_0074_1027 = 7606311,
    /**
     * < Table Top Lateral Adjusted Position (0074,1028)
     */
    TableTopLateralAdjustedPosition_0074_1028 = 7606312,
    /**
     * < Patient Support Adjusted Angle (0074,102A)
     */
    PatientSupportAdjustedAngle_0074_102A = 7606314,
    /**
     * < Table Top Eccentric Adjusted Angle (0074,102B)
     */
    TableTopEccentricAdjustedAngle_0074_102B = 7606315,
    /**
     * < Table Top Pitch Adjusted Angle (0074,102C)
     */
    TableTopPitchAdjustedAngle_0074_102C = 7606316,
    /**
     * < Table Top Roll Adjusted Angle (0074,102D)
     */
    TableTopRollAdjustedAngle_0074_102D = 7606317,
    /**
     * < Delivery Verification Image Sequence (0074,1030)
     */
    DeliveryVerificationImageSequence_0074_1030 = 7606320,
    /**
     * < Verification Image Timing (0074,1032)
     */
    VerificationImageTiming_0074_1032 = 7606322,
    /**
     * < Double Exposure Flag (0074,1034)
     */
    DoubleExposureFlag_0074_1034 = 7606324,
    /**
     * < Double Exposure Ordering (0074,1036)
     */
    DoubleExposureOrdering_0074_1036 = 7606326,
    /**
     * < Double Exposure Meterset (Trial) (0074,1038)
     */
    DoubleExposureMetersetTrial_0074_1038 = 7606328,
    /**
     * < Double Exposure Field Delta (Trial) (0074,103A)
     */
    DoubleExposureFieldDeltaTrial_0074_103A = 7606330,
    /**
     * < Related Reference RT Image Sequence (0074,1040)
     */
    RelatedReferenceRTImageSequence_0074_1040 = 7606336,
    /**
     * < General Machine Verification Sequence (0074,1042)
     */
    GeneralMachineVerificationSequence_0074_1042 = 7606338,
    /**
     * < Conventional Machine Verification Sequence (0074,1044)
     */
    ConventionalMachineVerificationSequence_0074_1044 = 7606340,
    /**
     * < Ion Machine Verification Sequence (0074,1046)
     */
    IonMachineVerificationSequence_0074_1046 = 7606342,
    /**
     * < Failed Attributes Sequence (0074,1048)
     */
    FailedAttributesSequence_0074_1048 = 7606344,
    /**
     * < Overridden Attributes Sequence (0074,104A)
     */
    OverriddenAttributesSequence_0074_104A = 7606346,
    /**
     * < Conventional Control Point Verification Sequence (0074,104C)
     */
    ConventionalControlPointVerificationSequence_0074_104C = 7606348,
    /**
     * < Ion Control Point Verification Sequence (0074,104E)
     */
    IonControlPointVerificationSequence_0074_104E = 7606350,
    /**
     * < Attribute Occurrence Sequence (0074,1050)
     */
    AttributeOccurrenceSequence_0074_1050 = 7606352,
    /**
     * < Attribute Occurrence Pointer (0074,1052)
     */
    AttributeOccurrencePointer_0074_1052 = 7606354,
    /**
     * < Attribute Item Selector (0074,1054)
     */
    AttributeItemSelector_0074_1054 = 7606356,
    /**
     * < Attribute Occurrence Private Creator (0074,1056)
     */
    AttributeOccurrencePrivateCreator_0074_1056 = 7606358,
    /**
     * < Selector Sequence Pointer Items (0074,1057)
     */
    SelectorSequencePointerItems_0074_1057 = 7606359,
    /**
     * < Scheduled Procedure Step Priority (0074,1200)
     */
    ScheduledProcedureStepPriority_0074_1200 = 7606784,
    /**
     * < Worklist Label (0074,1202)
     */
    WorklistLabel_0074_1202 = 7606786,
    /**
     * < Procedure Step Label (0074,1204)
     */
    ProcedureStepLabel_0074_1204 = 7606788,
    /**
     * < Scheduled Processing Parameters Sequence (0074,1210)
     */
    ScheduledProcessingParametersSequence_0074_1210 = 7606800,
    /**
     * < Performed Processing Parameters Sequence (0074,1212)
     */
    PerformedProcessingParametersSequence_0074_1212 = 7606802,
    /**
     * < Unified Procedure Step Performed Procedure Sequence (0074,1216)
     */
    UnifiedProcedureStepPerformedProcedureSequence_0074_1216 = 7606806,
    /**
     * < Related Procedure Step Sequence (0074,1220)
     */
    RelatedProcedureStepSequence_0074_1220 = 7606816,
    /**
     * < Procedure Step Relationship Type (0074,1222)
     */
    ProcedureStepRelationshipType_0074_1222 = 7606818,
    /**
     * < Replaced Procedure Step Sequence (0074,1224)
     */
    ReplacedProcedureStepSequence_0074_1224 = 7606820,
    /**
     * < Deletion Lock (0074,1230)
     */
    DeletionLock_0074_1230 = 7606832,
    /**
     * < Receiving AE (0074,1234)
     */
    ReceivingAE_0074_1234 = 7606836,
    /**
     * < Requesting AE (0074,1236)
     */
    RequestingAE_0074_1236 = 7606838,
    /**
     * < Reason for Cancellation (0074,1238)
     */
    ReasonForCancellation_0074_1238 = 7606840,
    /**
     * < SCP Status (0074,1242)
     */
    SCPStatus_0074_1242 = 7606850,
    /**
     * < Subscription List Status (0074,1244)
     */
    SubscriptionListStatus_0074_1244 = 7606852,
    /**
     * < Unified Procedure Step List Status (0074,1246)
     */
    UnifiedProcedureStepListStatus_0074_1246 = 7606854,
    /**
     * < Beam Order Index (0074,1324)
     */
    BeamOrderIndex_0074_1324 = 7607076,
    /**
     * < Double Exposure Meterset (0074,1338)
     */
    DoubleExposureMeterset_0074_1338 = 7607096,
    /**
     * < Double Exposure Field Delta (0074,133A)
     */
    DoubleExposureFieldDelta_0074_133A = 7607098,
    /**
     * < Brachy Task Sequence (0074,1401)
     */
    BrachyTaskSequence_0074_1401 = 7607297,
    /**
     * < Continuation Start Total Reference Air Kerma (0074,1402)
     */
    ContinuationStartTotalReferenceAirKerma_0074_1402 = 7607298,
    /**
     * < Continuation End Total Reference Air Kerma (0074,1403)
     */
    ContinuationEndTotalReferenceAirKerma_0074_1403 = 7607299,
    /**
     * < Continuation Pulse Number (0074,1404)
     */
    ContinuationPulseNumber_0074_1404 = 7607300,
    /**
     * < Channel Delivery Order Sequence (0074,1405)
     */
    ChannelDeliveryOrderSequence_0074_1405 = 7607301,
    /**
     * < Referenced Channel Number (0074,1406)
     */
    ReferencedChannelNumber_0074_1406 = 7607302,
    /**
     * < Start Cumulative Time Weight (0074,1407)
     */
    StartCumulativeTimeWeight_0074_1407 = 7607303,
    /**
     * < End Cumulative Time Weight (0074,1408)
     */
    EndCumulativeTimeWeight_0074_1408 = 7607304,
    /**
     * < Omitted Channel Sequence (0074,1409)
     */
    OmittedChannelSequence_0074_1409 = 7607305,
    /**
     * < Reason for Channel Omission (0074,140A)
     */
    ReasonForChannelOmission_0074_140A = 7607306,
    /**
     * < Reason for Channel Omission Description (0074,140B)
     */
    ReasonForChannelOmissionDescription_0074_140B = 7607307,
    /**
     * < Channel Delivery Order Index (0074,140C)
     */
    ChannelDeliveryOrderIndex_0074_140C = 7607308,
    /**
     * < Channel Delivery Continuation Sequence (0074,140D)
     */
    ChannelDeliveryContinuationSequence_0074_140D = 7607309,
    /**
     * < Omitted Application Setup Sequence (0074,140E)
     */
    OmittedApplicationSetupSequence_0074_140E = 7607310,
    /**
     * < Implant Assembly Template Name (0076,0001)
     */
    ImplantAssemblyTemplateName_0076_0001 = 7733249,
    /**
     * < Implant Assembly Template Issuer (0076,0003)
     */
    ImplantAssemblyTemplateIssuer_0076_0003 = 7733251,
    /**
     * < Implant Assembly Template Version (0076,0006)
     */
    ImplantAssemblyTemplateVersion_0076_0006 = 7733254,
    /**
     * < Replaced Implant Assembly Template Sequence (0076,0008)
     */
    ReplacedImplantAssemblyTemplateSequence_0076_0008 = 7733256,
    /**
     * < Implant Assembly Template Type (0076,000A)
     */
    ImplantAssemblyTemplateType_0076_000A = 7733258,
    /**
     * < Original Implant Assembly Template Sequence (0076,000C)
     */
    OriginalImplantAssemblyTemplateSequence_0076_000C = 7733260,
    /**
     * < Derivation Implant Assembly Template Sequence (0076,000E)
     */
    DerivationImplantAssemblyTemplateSequence_0076_000E = 7733262,
    /**
     * < Implant Assembly Template Target Anatomy Sequence (0076,0010)
     */
    ImplantAssemblyTemplateTargetAnatomySequence_0076_0010 = 7733264,
    /**
     * < Procedure Type Code Sequence (0076,0020)
     */
    ProcedureTypeCodeSequence_0076_0020 = 7733280,
    /**
     * < Surgical Technique (0076,0030)
     */
    SurgicalTechnique_0076_0030 = 7733296,
    /**
     * < Component Types Sequence (0076,0032)
     */
    ComponentTypesSequence_0076_0032 = 7733298,
    /**
     * < Component Type Code Sequence (0076,0034)
     */
    ComponentTypeCodeSequence_0076_0034 = 7733300,
    /**
     * < Exclusive Component Type (0076,0036)
     */
    ExclusiveComponentType_0076_0036 = 7733302,
    /**
     * < Mandatory Component Type (0076,0038)
     */
    MandatoryComponentType_0076_0038 = 7733304,
    /**
     * < Component Sequence (0076,0040)
     */
    ComponentSequence_0076_0040 = 7733312,
    /**
     * < Component ID (0076,0055)
     */
    ComponentID_0076_0055 = 7733333,
    /**
     * < Component Assembly Sequence (0076,0060)
     */
    ComponentAssemblySequence_0076_0060 = 7733344,
    /**
     * < Component 1 Referenced ID (0076,0070)
     */
    Component1ReferencedID_0076_0070 = 7733360,
    /**
     * < Component 1 Referenced Mating Feature Set ID (0076,0080)
     */
    Component1ReferencedMatingFeatureSetID_0076_0080 = 7733376,
    /**
     * < Component 1 Referenced Mating Feature ID (0076,0090)
     */
    Component1ReferencedMatingFeatureID_0076_0090 = 7733392,
    /**
     * < Component 2 Referenced ID (0076,00A0)
     */
    Component2ReferencedID_0076_00A0 = 7733408,
    /**
     * < Component 2 Referenced Mating Feature Set ID (0076,00B0)
     */
    Component2ReferencedMatingFeatureSetID_0076_00B0 = 7733424,
    /**
     * < Component 2 Referenced Mating Feature ID (0076,00C0)
     */
    Component2ReferencedMatingFeatureID_0076_00C0 = 7733440,
    /**
     * < Implant Template Group Name (0078,0001)
     */
    ImplantTemplateGroupName_0078_0001 = 7864321,
    /**
     * < Implant Template Group Description (0078,0010)
     */
    ImplantTemplateGroupDescription_0078_0010 = 7864336,
    /**
     * < Implant Template Group Issuer (0078,0020)
     */
    ImplantTemplateGroupIssuer_0078_0020 = 7864352,
    /**
     * < Implant Template Group Version (0078,0024)
     */
    ImplantTemplateGroupVersion_0078_0024 = 7864356,
    /**
     * < Replaced Implant Template Group Sequence (0078,0026)
     */
    ReplacedImplantTemplateGroupSequence_0078_0026 = 7864358,
    /**
     * < Implant Template Group Target Anatomy Sequence (0078,0028)
     */
    ImplantTemplateGroupTargetAnatomySequence_0078_0028 = 7864360,
    /**
     * < Implant Template Group Members Sequence (0078,002A)
     */
    ImplantTemplateGroupMembersSequence_0078_002A = 7864362,
    /**
     * < Implant Template Group Member ID (0078,002E)
     */
    ImplantTemplateGroupMemberID_0078_002E = 7864366,
    /**
     * < 3D Implant Template Group Member Matching Point (0078,0050)
     */
    ThreeDImplantTemplateGroupMemberMatchingPoint_0078_0050 = 7864400,
    /**
     * < 3D Implant Template Group Member Matching Axes (0078,0060)
     */
    ThreeDImplantTemplateGroupMemberMatchingAxes_0078_0060 = 7864416,
    /**
     * < Implant Template Group Member Matching 2D Coordinates Sequence (0078,0070)
     */
    ImplantTemplateGroupMemberMatching2DCoordinatesSequence_0078_0070 = 7864432,
    /**
     * < 2D Implant Template Group Member Matching Point (0078,0090)
     */
    TwoDImplantTemplateGroupMemberMatchingPoint_0078_0090 = 7864464,
    /**
     * < 2D Implant Template Group Member Matching Axes (0078,00A0)
     */
    TwoDImplantTemplateGroupMemberMatchingAxes_0078_00A0 = 7864480,
    /**
     * < Implant Template Group Variation Dimension Sequence (0078,00B0)
     */
    ImplantTemplateGroupVariationDimensionSequence_0078_00B0 = 7864496,
    /**
     * < Implant Template Group Variation Dimension Name (0078,00B2)
     */
    ImplantTemplateGroupVariationDimensionName_0078_00B2 = 7864498,
    /**
     * < Implant Template Group Variation Dimension Rank Sequence (0078,00B4)
     */
    ImplantTemplateGroupVariationDimensionRankSequence_0078_00B4 = 7864500,
    /**
     * < Referenced Implant Template Group Member ID (0078,00B6)
     */
    ReferencedImplantTemplateGroupMemberID_0078_00B6 = 7864502,
    /**
     * < Implant Template Group Variation Dimension Rank (0078,00B8)
     */
    ImplantTemplateGroupVariationDimensionRank_0078_00B8 = 7864504,
    /**
     * < Surface Scan Acquisition Type Code Sequence (0080,0001)
     */
    SurfaceScanAcquisitionTypeCodeSequence_0080_0001 = 8388609,
    /**
     * < Surface Scan Mode Code Sequence (0080,0002)
     */
    SurfaceScanModeCodeSequence_0080_0002 = 8388610,
    /**
     * < Registration Method Code Sequence (0080,0003)
     */
    RegistrationMethodCodeSequence_0080_0003 = 8388611,
    /**
     * < Shot Duration Time (0080,0004)
     */
    ShotDurationTime_0080_0004 = 8388612,
    /**
     * < Shot Offset Time (0080,0005)
     */
    ShotOffsetTime_0080_0005 = 8388613,
    /**
     * < Surface Point Presentation Value Data (0080,0006)
     */
    SurfacePointPresentationValueData_0080_0006 = 8388614,
    /**
     * < Surface Point Color CIELab Value Data (0080,0007)
     */
    SurfacePointColorCIELabValueData_0080_0007 = 8388615,
    /**
     * < UV Mapping Sequence (0080,0008)
     */
    UVMappingSequence_0080_0008 = 8388616,
    /**
     * < Texture Label (0080,0009)
     */
    TextureLabel_0080_0009 = 8388617,
    /**
     * < U Value Data (0080,0010)
     */
    UValueData_0080_0010 = 8388624,
    /**
     * < V Value Data (0080,0011)
     */
    VValueData_0080_0011 = 8388625,
    /**
     * < Referenced Texture Sequence (0080,0012)
     */
    ReferencedTextureSequence_0080_0012 = 8388626,
    /**
     * < Referenced Surface Data Sequence (0080,0013)
     */
    ReferencedSurfaceDataSequence_0080_0013 = 8388627,
    /**
     * < Assessment Summary (0082,0001)
     */
    AssessmentSummary_0082_0001 = 8519681,
    /**
     * < Assessment Summary Description (0082,0003)
     */
    AssessmentSummaryDescription_0082_0003 = 8519683,
    /**
     * < Assessed SOP Instance Sequence (0082,0004)
     */
    AssessedSOPInstanceSequence_0082_0004 = 8519684,
    /**
     * < Referenced Comparison SOP Instance Sequence (0082,0005)
     */
    ReferencedComparisonSOPInstanceSequence_0082_0005 = 8519685,
    /**
     * < Number of Assessment Observations (0082,0006)
     */
    NumberOfAssessmentObservations_0082_0006 = 8519686,
    /**
     * < Assessment Observations Sequence (0082,0007)
     */
    AssessmentObservationsSequence_0082_0007 = 8519687,
    /**
     * < Observation Significance (0082,0008)
     */
    ObservationSignificance_0082_0008 = 8519688,
    /**
     * < Observation Description (0082,000A)
     */
    ObservationDescription_0082_000A = 8519690,
    /**
     * < Structured Constraint Observation Sequence (0082,000C)
     */
    StructuredConstraintObservationSequence_0082_000C = 8519692,
    /**
     * < Assessed Attribute Value Sequence (0082,0010)
     */
    AssessedAttributeValueSequence_0082_0010 = 8519696,
    /**
     * < Assessment Set ID (0082,0016)
     */
    AssessmentSetID_0082_0016 = 8519702,
    /**
     * < Assessment Requester Sequence (0082,0017)
     */
    AssessmentRequesterSequence_0082_0017 = 8519703,
    /**
     * < Selector Attribute Name (0082,0018)
     */
    SelectorAttributeName_0082_0018 = 8519704,
    /**
     * < Selector Attribute Keyword (0082,0019)
     */
    SelectorAttributeKeyword_0082_0019 = 8519705,
    /**
     * < Assessment Type Code Sequence (0082,0021)
     */
    AssessmentTypeCodeSequence_0082_0021 = 8519713,
    /**
     * < Observation Basis Code Sequence (0082,0022)
     */
    ObservationBasisCodeSequence_0082_0022 = 8519714,
    /**
     * < Assessment Label (0082,0023)
     */
    AssessmentLabel_0082_0023 = 8519715,
    /**
     * < Constraint Type (0082,0032)
     */
    ConstraintType_0082_0032 = 8519730,
    /**
     * < Specification Selection Guidance (0082,0033)
     */
    SpecificationSelectionGuidance_0082_0033 = 8519731,
    /**
     * < Constraint Value Sequence (0082,0034)
     */
    ConstraintValueSequence_0082_0034 = 8519732,
    /**
     * < Recommended Default Value Sequence (0082,0035)
     */
    RecommendedDefaultValueSequence_0082_0035 = 8519733,
    /**
     * < Constraint Violation Significance (0082,0036)
     */
    ConstraintViolationSignificance_0082_0036 = 8519734,
    /**
     * < Constraint Violation Condition (0082,0037)
     */
    ConstraintViolationCondition_0082_0037 = 8519735,
    /**
     * < Modifiable Constraint Flag (0082,0038)
     */
    ModifiableConstraintFlag_0082_0038 = 8519736,
    /**
     * < Storage Media File-set ID (0088,0130)
     */
    StorageMediaFileSetID_0088_0130 = 8913200,
    /**
     * < Storage Media File-set UID (0088,0140)
     */
    StorageMediaFileSetUID_0088_0140 = 8913216,
    /**
     * < Icon Image Sequence (0088,0200)
     */
    IconImageSequence_0088_0200 = 8913408,
    /**
     * < Topic Title (0088,0904)
     */
    TopicTitle_0088_0904 = 8915204,
    /**
     * < Topic Subject (0088,0906)
     */
    TopicSubject_0088_0906 = 8915206,
    /**
     * < Topic Author (0088,0910)
     */
    TopicAuthor_0088_0910 = 8915216,
    /**
     * < Topic Keywords (0088,0912)
     */
    TopicKeywords_0088_0912 = 8915218,
    /**
     * < SOP Instance Status (0100,0410)
     */
    SOPInstanceStatus_0100_0410 = 16778256,
    /**
     * < SOP Authorization DateTime (0100,0420)
     */
    SOPAuthorizationDateTime_0100_0420 = 16778272,
    /**
     * < SOP Authorization Comment (0100,0424)
     */
    SOPAuthorizationComment_0100_0424 = 16778276,
    /**
     * < Authorization Equipment Certification Number (0100,0426)
     */
    AuthorizationEquipmentCertificationNumber_0100_0426 = 16778278,
    /**
     * < MAC ID Number (0400,0005)
     */
    MACIDNumber_0400_0005 = 67108869,
    /**
     * < MAC Calculation Transfer Syntax UID (0400,0010)
     */
    MACCalculationTransferSyntaxUID_0400_0010 = 67108880,
    /**
     * < MAC Algorithm (0400,0015)
     */
    MACAlgorithm_0400_0015 = 67108885,
    /**
     * < Data Elements Signed (0400,0020)
     */
    DataElementsSigned_0400_0020 = 67108896,
    /**
     * < Digital Signature UID (0400,0100)
     */
    DigitalSignatureUID_0400_0100 = 67109120,
    /**
     * < Digital Signature DateTime (0400,0105)
     */
    DigitalSignatureDateTime_0400_0105 = 67109125,
    /**
     * < Certificate Type (0400,0110)
     */
    CertificateType_0400_0110 = 67109136,
    /**
     * < Certificate of Signer (0400,0115)
     */
    CertificateOfSigner_0400_0115 = 67109141,
    /**
     * < Signature (0400,0120)
     */
    Signature_0400_0120 = 67109152,
    /**
     * < Certified Timestamp Type (0400,0305)
     */
    CertifiedTimestampType_0400_0305 = 67109637,
    /**
     * < Certified Timestamp (0400,0310)
     */
    CertifiedTimestamp_0400_0310 = 67109648,
    /**
     * < Digital Signature Purpose Code Sequence (0400,0401)
     */
    DigitalSignaturePurposeCodeSequence_0400_0401 = 67109889,
    /**
     * < Referenced Digital Signature Sequence (0400,0402)
     */
    ReferencedDigitalSignatureSequence_0400_0402 = 67109890,
    /**
     * < Referenced SOP Instance MAC Sequence (0400,0403)
     */
    ReferencedSOPInstanceMACSequence_0400_0403 = 67109891,
    /**
     * < MAC (0400,0404)
     */
    MAC_0400_0404 = 67109892,
    /**
     * < Encrypted Attributes Sequence (0400,0500)
     */
    EncryptedAttributesSequence_0400_0500 = 67110144,
    /**
     * < Encrypted Content Transfer Syntax UID (0400,0510)
     */
    EncryptedContentTransferSyntaxUID_0400_0510 = 67110160,
    /**
     * < Encrypted Content (0400,0520)
     */
    EncryptedContent_0400_0520 = 67110176,
    /**
     * < Modified Attributes Sequence (0400,0550)
     */
    ModifiedAttributesSequence_0400_0550 = 67110224,
    /**
     * < Original Attributes Sequence (0400,0561)
     */
    OriginalAttributesSequence_0400_0561 = 67110241,
    /**
     * < Attribute Modification DateTime (0400,0562)
     */
    AttributeModificationDateTime_0400_0562 = 67110242,
    /**
     * < Modifying System (0400,0563)
     */
    ModifyingSystem_0400_0563 = 67110243,
    /**
     * < Source of Previous Values (0400,0564)
     */
    SourceOfPreviousValues_0400_0564 = 67110244,
    /**
     * < Reason for the Attribute Modification (0400,0565)
     */
    ReasonForTheAttributeModification_0400_0565 = 67110245,
    /**
     * < Instance Origin Status (0400,0600)
     */
    InstanceOriginStatus_0400_0600 = 67110400,
    /**
     * < Escape Triplet (1000,0000)
     */
    EscapeTriplet_1000_0000 = 268435456,
    /**
     * < Run Length Triplet (1000,0001)
     */
    RunLengthTriplet_1000_0001 = 268435457,
    /**
     * < Huffman Table Size (1000,0002)
     */
    HuffmanTableSize_1000_0002 = 268435458,
    /**
     * < Huffman Table Triplet (1000,0003)
     */
    HuffmanTableTriplet_1000_0003 = 268435459,
    /**
     * < Shift Table Size (1000,0004)
     */
    ShiftTableSize_1000_0004 = 268435460,
    /**
     * < Shift Table Triplet (1000,0005)
     */
    ShiftTableTriplet_1000_0005 = 268435461,
    /**
     * < Zonal Map (1010,0000)
     */
    ZonalMap_1010_0000 = 269484032,
    /**
     * < Number of Copies (2000,0010)
     */
    NumberOfCopies_2000_0010 = 536870928,
    /**
     * < Printer Configuration Sequence (2000,001E)
     */
    PrinterConfigurationSequence_2000_001E = 536870942,
    /**
     * < Print Priority (2000,0020)
     */
    PrintPriority_2000_0020 = 536870944,
    /**
     * < Medium Type (2000,0030)
     */
    MediumType_2000_0030 = 536870960,
    /**
     * < Film Destination (2000,0040)
     */
    FilmDestination_2000_0040 = 536870976,
    /**
     * < Film Session Label (2000,0050)
     */
    FilmSessionLabel_2000_0050 = 536870992,
    /**
     * < Memory Allocation (2000,0060)
     */
    MemoryAllocation_2000_0060 = 536871008,
    /**
     * < Maximum Memory Allocation (2000,0061)
     */
    MaximumMemoryAllocation_2000_0061 = 536871009,
    /**
     * < Color Image Printing Flag (2000,0062)
     */
    ColorImagePrintingFlag_2000_0062 = 536871010,
    /**
     * < Collation Flag (2000,0063)
     */
    CollationFlag_2000_0063 = 536871011,
    /**
     * < Annotation Flag (2000,0065)
     */
    AnnotationFlag_2000_0065 = 536871013,
    /**
     * < Image Overlay Flag (2000,0067)
     */
    ImageOverlayFlag_2000_0067 = 536871015,
    /**
     * < Presentation LUT Flag (2000,0069)
     */
    PresentationLUTFlag_2000_0069 = 536871017,
    /**
     * < Image Box Presentation LUT Flag (2000,006A)
     */
    ImageBoxPresentationLUTFlag_2000_006A = 536871018,
    /**
     * < Memory Bit Depth (2000,00A0)
     */
    MemoryBitDepth_2000_00A0 = 536871072,
    /**
     * < Printing Bit Depth (2000,00A1)
     */
    PrintingBitDepth_2000_00A1 = 536871073,
    /**
     * < Media Installed Sequence (2000,00A2)
     */
    MediaInstalledSequence_2000_00A2 = 536871074,
    /**
     * < Other Media Available Sequence (2000,00A4)
     */
    OtherMediaAvailableSequence_2000_00A4 = 536871076,
    /**
     * < Supported Image Display Formats Sequence (2000,00A8)
     */
    SupportedImageDisplayFormatsSequence_2000_00A8 = 536871080,
    /**
     * < Referenced Film Box Sequence (2000,0500)
     */
    ReferencedFilmBoxSequence_2000_0500 = 536872192,
    /**
     * < Referenced Stored Print Sequence (2000,0510)
     */
    ReferencedStoredPrintSequence_2000_0510 = 536872208,
    /**
     * < Image Display Format (2010,0010)
     */
    ImageDisplayFormat_2010_0010 = 537919504,
    /**
     * < Annotation Display Format ID (2010,0030)
     */
    AnnotationDisplayFormatID_2010_0030 = 537919536,
    /**
     * < Film Orientation (2010,0040)
     */
    FilmOrientation_2010_0040 = 537919552,
    /**
     * < Film Size ID (2010,0050)
     */
    FilmSizeID_2010_0050 = 537919568,
    /**
     * < Printer Resolution ID (2010,0052)
     */
    PrinterResolutionID_2010_0052 = 537919570,
    /**
     * < Default Printer Resolution ID (2010,0054)
     */
    DefaultPrinterResolutionID_2010_0054 = 537919572,
    /**
     * < Magnification Type (2010,0060)
     */
    MagnificationType_2010_0060 = 537919584,
    /**
     * < Smoothing Type (2010,0080)
     */
    SmoothingType_2010_0080 = 537919616,
    /**
     * < Default Magnification Type (2010,00A6)
     */
    DefaultMagnificationType_2010_00A6 = 537919654,
    /**
     * < Other Magnification Types Available (2010,00A7)
     */
    OtherMagnificationTypesAvailable_2010_00A7 = 537919655,
    /**
     * < Default Smoothing Type (2010,00A8)
     */
    DefaultSmoothingType_2010_00A8 = 537919656,
    /**
     * < Other Smoothing Types Available (2010,00A9)
     */
    OtherSmoothingTypesAvailable_2010_00A9 = 537919657,
    /**
     * < Border Density (2010,0100)
     */
    BorderDensity_2010_0100 = 537919744,
    /**
     * < Empty Image Density (2010,0110)
     */
    EmptyImageDensity_2010_0110 = 537919760,
    /**
     * < Min Density (2010,0120)
     */
    MinDensity_2010_0120 = 537919776,
    /**
     * < Max Density (2010,0130)
     */
    MaxDensity_2010_0130 = 537919792,
    /**
     * < Trim (2010,0140)
     */
    Trim_2010_0140 = 537919808,
    /**
     * < Configuration Information (2010,0150)
     */
    ConfigurationInformation_2010_0150 = 537919824,
    /**
     * < Configuration Information Description (2010,0152)
     */
    ConfigurationInformationDescription_2010_0152 = 537919826,
    /**
     * < Maximum Collated Films (2010,0154)
     */
    MaximumCollatedFilms_2010_0154 = 537919828,
    /**
     * < Illumination (2010,015E)
     */
    Illumination_2010_015E = 537919838,
    /**
     * < Reflected Ambient Light (2010,0160)
     */
    ReflectedAmbientLight_2010_0160 = 537919840,
    /**
     * < Printer Pixel Spacing (2010,0376)
     */
    PrinterPixelSpacing_2010_0376 = 537920374,
    /**
     * < Referenced Film Session Sequence (2010,0500)
     */
    ReferencedFilmSessionSequence_2010_0500 = 537920768,
    /**
     * < Referenced Image Box Sequence (2010,0510)
     */
    ReferencedImageBoxSequence_2010_0510 = 537920784,
    /**
     * < Referenced Basic Annotation Box Sequence (2010,0520)
     */
    ReferencedBasicAnnotationBoxSequence_2010_0520 = 537920800,
    /**
     * < Image Box Position (2020,0010)
     */
    ImageBoxPosition_2020_0010 = 538968080,
    /**
     * < Polarity (2020,0020)
     */
    Polarity_2020_0020 = 538968096,
    /**
     * < Requested Image Size (2020,0030)
     */
    RequestedImageSize_2020_0030 = 538968112,
    /**
     * < Requested Decimate/Crop Behavior (2020,0040)
     */
    RequestedDecimateCropBehavior_2020_0040 = 538968128,
    /**
     * < Requested Resolution ID (2020,0050)
     */
    RequestedResolutionID_2020_0050 = 538968144,
    /**
     * < Requested Image Size Flag (2020,00A0)
     */
    RequestedImageSizeFlag_2020_00A0 = 538968224,
    /**
     * < Decimate/Crop Result (2020,00A2)
     */
    DecimateCropResult_2020_00A2 = 538968226,
    /**
     * < Basic Grayscale Image Sequence (2020,0110)
     */
    BasicGrayscaleImageSequence_2020_0110 = 538968336,
    /**
     * < Basic Color Image Sequence (2020,0111)
     */
    BasicColorImageSequence_2020_0111 = 538968337,
    /**
     * < Referenced Image Overlay Box Sequence (2020,0130)
     */
    ReferencedImageOverlayBoxSequence_2020_0130 = 538968368,
    /**
     * < Referenced VOI LUT Box Sequence (2020,0140)
     */
    ReferencedVOILUTBoxSequence_2020_0140 = 538968384,
    /**
     * < Annotation Position (2030,0010)
     */
    AnnotationPosition_2030_0010 = 540016656,
    /**
     * < Text String (2030,0020)
     */
    TextString_2030_0020 = 540016672,
    /**
     * < Referenced Overlay Plane Sequence (2040,0010)
     */
    ReferencedOverlayPlaneSequence_2040_0010 = 541065232,
    /**
     * < Referenced Overlay Plane Groups (2040,0011)
     */
    ReferencedOverlayPlaneGroups_2040_0011 = 541065233,
    /**
     * < Overlay Pixel Data Sequence (2040,0020)
     */
    OverlayPixelDataSequence_2040_0020 = 541065248,
    /**
     * < Overlay Magnification Type (2040,0060)
     */
    OverlayMagnificationType_2040_0060 = 541065312,
    /**
     * < Overlay Smoothing Type (2040,0070)
     */
    OverlaySmoothingType_2040_0070 = 541065328,
    /**
     * < Overlay or Image Magnification (2040,0072)
     */
    OverlayOrImageMagnification_2040_0072 = 541065330,
    /**
     * < Magnify to Number of Columns (2040,0074)
     */
    MagnifyToNumberOfColumns_2040_0074 = 541065332,
    /**
     * < Overlay Foreground Density (2040,0080)
     */
    OverlayForegroundDensity_2040_0080 = 541065344,
    /**
     * < Overlay Background Density (2040,0082)
     */
    OverlayBackgroundDensity_2040_0082 = 541065346,
    /**
     * < Overlay Mode (2040,0090)
     */
    OverlayMode_2040_0090 = 541065360,
    /**
     * < Threshold Density (2040,0100)
     */
    ThresholdDensity_2040_0100 = 541065472,
    /**
     * < Referenced Image Box Sequence (Retired) (2040,0500)
     */
    ReferencedImageBoxSequenceRetired_2040_0500 = 541066496,
    /**
     * < Presentation LUT Sequence (2050,0010)
     */
    PresentationLUTSequence_2050_0010 = 542113808,
    /**
     * < Presentation LUT Shape (2050,0020)
     */
    PresentationLUTShape_2050_0020 = 542113824,
    /**
     * < Referenced Presentation LUT Sequence (2050,0500)
     */
    ReferencedPresentationLUTSequence_2050_0500 = 542115072,
    /**
     * < Print Job ID (2100,0010)
     */
    PrintJobID_2100_0010 = 553648144,
    /**
     * < Execution Status (2100,0020)
     */
    ExecutionStatus_2100_0020 = 553648160,
    /**
     * < Execution Status Info (2100,0030)
     */
    ExecutionStatusInfo_2100_0030 = 553648176,
    /**
     * < Creation Date (2100,0040)
     */
    CreationDate_2100_0040 = 553648192,
    /**
     * < Creation Time (2100,0050)
     */
    CreationTime_2100_0050 = 553648208,
    /**
     * < Originator (2100,0070)
     */
    Originator_2100_0070 = 553648240,
    /**
     * < Destination AE (2100,0140)
     */
    DestinationAE_2100_0140 = 553648448,
    /**
     * < Owner ID (2100,0160)
     */
    OwnerID_2100_0160 = 553648480,
    /**
     * < Number of Films (2100,0170)
     */
    NumberOfFilms_2100_0170 = 553648496,
    /**
     * < Referenced Print Job Sequence (Pull Stored Print) (2100,0500)
     */
    ReferencedPrintJobSequencePullStoredPrint_2100_0500 = 553649408,
    /**
     * < Printer Status (2110,0010)
     */
    PrinterStatus_2110_0010 = 554696720,
    /**
     * < Printer Status Info (2110,0020)
     */
    PrinterStatusInfo_2110_0020 = 554696736,
    /**
     * < Printer Name (2110,0030)
     */
    PrinterName_2110_0030 = 554696752,
    /**
     * < Print Queue ID (2110,0099)
     */
    PrintQueueID_2110_0099 = 554696857,
    /**
     * < Queue Status (2120,0010)
     */
    QueueStatus_2120_0010 = 555745296,
    /**
     * < Print Job Description Sequence (2120,0050)
     */
    PrintJobDescriptionSequence_2120_0050 = 555745360,
    /**
     * < Referenced Print Job Sequence (2120,0070)
     */
    ReferencedPrintJobSequence_2120_0070 = 555745392,
    /**
     * < Print Management Capabilities Sequence (2130,0010)
     */
    PrintManagementCapabilitiesSequence_2130_0010 = 556793872,
    /**
     * < Printer Characteristics Sequence (2130,0015)
     */
    PrinterCharacteristicsSequence_2130_0015 = 556793877,
    /**
     * < Film Box Content Sequence (2130,0030)
     */
    FilmBoxContentSequence_2130_0030 = 556793904,
    /**
     * < Image Box Content Sequence (2130,0040)
     */
    ImageBoxContentSequence_2130_0040 = 556793920,
    /**
     * < Annotation Content Sequence (2130,0050)
     */
    AnnotationContentSequence_2130_0050 = 556793936,
    /**
     * < Image Overlay Box Content Sequence (2130,0060)
     */
    ImageOverlayBoxContentSequence_2130_0060 = 556793952,
    /**
     * < Presentation LUT Content Sequence (2130,0080)
     */
    PresentationLUTContentSequence_2130_0080 = 556793984,
    /**
     * < Proposed Study Sequence (2130,00A0)
     */
    ProposedStudySequence_2130_00A0 = 556794016,
    /**
     * < Original Image Sequence (2130,00C0)
     */
    OriginalImageSequence_2130_00C0 = 556794048,
    /**
     * < Label Using Information Extracted From Instances (2200,0001)
     */
    LabelUsingInformationExtractedFromInstances_2200_0001 = 570425345,
    /**
     * < Label Text (2200,0002)
     */
    LabelText_2200_0002 = 570425346,
    /**
     * < Label Style Selection (2200,0003)
     */
    LabelStyleSelection_2200_0003 = 570425347,
    /**
     * < Media Disposition (2200,0004)
     */
    MediaDisposition_2200_0004 = 570425348,
    /**
     * < Barcode Value (2200,0005)
     */
    BarcodeValue_2200_0005 = 570425349,
    /**
     * < Barcode Symbology (2200,0006)
     */
    BarcodeSymbology_2200_0006 = 570425350,
    /**
     * < Allow Media Splitting (2200,0007)
     */
    AllowMediaSplitting_2200_0007 = 570425351,
    /**
     * < Include Non-DICOM Objects (2200,0008)
     */
    IncludeNonDICOMObjects_2200_0008 = 570425352,
    /**
     * < Include Display Application (2200,0009)
     */
    IncludeDisplayApplication_2200_0009 = 570425353,
    /**
     * < Preserve Composite Instances After Media Creation (2200,000A)
     */
    PreserveCompositeInstancesAfterMediaCreation_2200_000A = 570425354,
    /**
     * < Total Number of Pieces of Media Created (2200,000B)
     */
    TotalNumberOfPiecesOfMediaCreated_2200_000B = 570425355,
    /**
     * < Requested Media Application Profile (2200,000C)
     */
    RequestedMediaApplicationProfile_2200_000C = 570425356,
    /**
     * < Referenced Storage Media Sequence (2200,000D)
     */
    ReferencedStorageMediaSequence_2200_000D = 570425357,
    /**
     * < Failure Attributes (2200,000E)
     */
    FailureAttributes_2200_000E = 570425358,
    /**
     * < Allow Lossy Compression (2200,000F)
     */
    AllowLossyCompression_2200_000F = 570425359,
    /**
     * < Request Priority (2200,0020)
     */
    RequestPriority_2200_0020 = 570425376,
    /**
     * < RT Image Label (3002,0002)
     */
    RTImageLabel_3002_0002 = 805437442,
    /**
     * < RT Image Name (3002,0003)
     */
    RTImageName_3002_0003 = 805437443,
    /**
     * < RT Image Description (3002,0004)
     */
    RTImageDescription_3002_0004 = 805437444,
    /**
     * < Reported Values Origin (3002,000A)
     */
    ReportedValuesOrigin_3002_000A = 805437450,
    /**
     * < RT Image Plane (3002,000C)
     */
    RTImagePlane_3002_000C = 805437452,
    /**
     * < X-Ray Image Receptor Translation (3002,000D)
     */
    XRayImageReceptorTranslation_3002_000D = 805437453,
    /**
     * < X-Ray Image Receptor Angle (3002,000E)
     */
    XRayImageReceptorAngle_3002_000E = 805437454,
    /**
     * < RT Image Orientation (3002,0010)
     */
    RTImageOrientation_3002_0010 = 805437456,
    /**
     * < Image Plane Pixel Spacing (3002,0011)
     */
    ImagePlanePixelSpacing_3002_0011 = 805437457,
    /**
     * < RT Image Position (3002,0012)
     */
    RTImagePosition_3002_0012 = 805437458,
    /**
     * < Radiation Machine Name (3002,0020)
     */
    RadiationMachineName_3002_0020 = 805437472,
    /**
     * < Radiation Machine SAD (3002,0022)
     */
    RadiationMachineSAD_3002_0022 = 805437474,
    /**
     * < Radiation Machine SSD (3002,0024)
     */
    RadiationMachineSSD_3002_0024 = 805437476,
    /**
     * < RT Image SID (3002,0026)
     */
    RTImageSID_3002_0026 = 805437478,
    /**
     * < Source to Reference Object Distance (3002,0028)
     */
    SourceToReferenceObjectDistance_3002_0028 = 805437480,
    /**
     * < Fraction Number (3002,0029)
     */
    FractionNumber_3002_0029 = 805437481,
    /**
     * < Exposure Sequence (3002,0030)
     */
    ExposureSequence_3002_0030 = 805437488,
    /**
     * < Meterset Exposure (3002,0032)
     */
    MetersetExposure_3002_0032 = 805437490,
    /**
     * < Diaphragm Position (3002,0034)
     */
    DiaphragmPosition_3002_0034 = 805437492,
    /**
     * < Fluence Map Sequence (3002,0040)
     */
    FluenceMapSequence_3002_0040 = 805437504,
    /**
     * < Fluence Data Source (3002,0041)
     */
    FluenceDataSource_3002_0041 = 805437505,
    /**
     * < Fluence Data Scale (3002,0042)
     */
    FluenceDataScale_3002_0042 = 805437506,
    /**
     * < Primary Fluence Mode Sequence (3002,0050)
     */
    PrimaryFluenceModeSequence_3002_0050 = 805437520,
    /**
     * < Fluence Mode (3002,0051)
     */
    FluenceMode_3002_0051 = 805437521,
    /**
     * < Fluence Mode ID (3002,0052)
     */
    FluenceModeID_3002_0052 = 805437522,
    /**
     * < DVH Type (3004,0001)
     */
    DVHType_3004_0001 = 805568513,
    /**
     * < Dose Units (3004,0002)
     */
    DoseUnits_3004_0002 = 805568514,
    /**
     * < Dose Type (3004,0004)
     */
    DoseType_3004_0004 = 805568516,
    /**
     * < Spatial Transform of Dose (3004,0005)
     */
    SpatialTransformOfDose_3004_0005 = 805568517,
    /**
     * < Dose Comment (3004,0006)
     */
    DoseComment_3004_0006 = 805568518,
    /**
     * < Normalization Point (3004,0008)
     */
    NormalizationPoint_3004_0008 = 805568520,
    /**
     * < Dose Summation Type (3004,000A)
     */
    DoseSummationType_3004_000A = 805568522,
    /**
     * < Grid Frame Offset Vector (3004,000C)
     */
    GridFrameOffsetVector_3004_000C = 805568524,
    /**
     * < Dose Grid Scaling (3004,000E)
     */
    DoseGridScaling_3004_000E = 805568526,
    /**
     * < RT Dose ROI Sequence (3004,0010)
     */
    RTDoseROISequence_3004_0010 = 805568528,
    /**
     * < Dose Value (3004,0012)
     */
    DoseValue_3004_0012 = 805568530,
    /**
     * < Tissue Heterogeneity Correction (3004,0014)
     */
    TissueHeterogeneityCorrection_3004_0014 = 805568532,
    /**
     * < DVH Normalization Point (3004,0040)
     */
    DVHNormalizationPoint_3004_0040 = 805568576,
    /**
     * < DVH Normalization Dose Value (3004,0042)
     */
    DVHNormalizationDoseValue_3004_0042 = 805568578,
    /**
     * < DVH Sequence (3004,0050)
     */
    DVHSequence_3004_0050 = 805568592,
    /**
     * < DVH Dose Scaling (3004,0052)
     */
    DVHDoseScaling_3004_0052 = 805568594,
    /**
     * < DVH Volume Units (3004,0054)
     */
    DVHVolumeUnits_3004_0054 = 805568596,
    /**
     * < DVH Number of Bins (3004,0056)
     */
    DVHNumberOfBins_3004_0056 = 805568598,
    /**
     * < DVH Data (3004,0058)
     */
    DVHData_3004_0058 = 805568600,
    /**
     * < DVH Referenced ROI Sequence (3004,0060)
     */
    DVHReferencedROISequence_3004_0060 = 805568608,
    /**
     * < DVH ROI Contribution Type (3004,0062)
     */
    DVHROIContributionType_3004_0062 = 805568610,
    /**
     * < DVH Minimum Dose (3004,0070)
     */
    DVHMinimumDose_3004_0070 = 805568624,
    /**
     * < DVH Maximum Dose (3004,0072)
     */
    DVHMaximumDose_3004_0072 = 805568626,
    /**
     * < DVH Mean Dose (3004,0074)
     */
    DVHMeanDose_3004_0074 = 805568628,
    /**
     * < Structure Set Label (3006,0002)
     */
    StructureSetLabel_3006_0002 = 805699586,
    /**
     * < Structure Set Name (3006,0004)
     */
    StructureSetName_3006_0004 = 805699588,
    /**
     * < Structure Set Description (3006,0006)
     */
    StructureSetDescription_3006_0006 = 805699590,
    /**
     * < Structure Set Date (3006,0008)
     */
    StructureSetDate_3006_0008 = 805699592,
    /**
     * < Structure Set Time (3006,0009)
     */
    StructureSetTime_3006_0009 = 805699593,
    /**
     * < Referenced Frame of Reference Sequence (3006,0010)
     */
    ReferencedFrameOfReferenceSequence_3006_0010 = 805699600,
    /**
     * < RT Referenced Study Sequence (3006,0012)
     */
    RTReferencedStudySequence_3006_0012 = 805699602,
    /**
     * < RT Referenced Series Sequence (3006,0014)
     */
    RTReferencedSeriesSequence_3006_0014 = 805699604,
    /**
     * < Contour Image Sequence (3006,0016)
     */
    ContourImageSequence_3006_0016 = 805699606,
    /**
     * < Predecessor Structure Set Sequence (3006,0018)
     */
    PredecessorStructureSetSequence_3006_0018 = 805699608,
    /**
     * < Structure Set ROI Sequence (3006,0020)
     */
    StructureSetROISequence_3006_0020 = 805699616,
    /**
     * < ROI Number (3006,0022)
     */
    ROINumber_3006_0022 = 805699618,
    /**
     * < Referenced Frame of Reference UID (3006,0024)
     */
    ReferencedFrameOfReferenceUID_3006_0024 = 805699620,
    /**
     * < ROI Name (3006,0026)
     */
    ROIName_3006_0026 = 805699622,
    /**
     * < ROI Description (3006,0028)
     */
    ROIDescription_3006_0028 = 805699624,
    /**
     * < ROI Display Color (3006,002A)
     */
    ROIDisplayColor_3006_002A = 805699626,
    /**
     * < ROI Volume (3006,002C)
     */
    ROIVolume_3006_002C = 805699628,
    /**
     * < RT Related ROI Sequence (3006,0030)
     */
    RTRelatedROISequence_3006_0030 = 805699632,
    /**
     * < RT ROI Relationship (3006,0033)
     */
    RTROIRelationship_3006_0033 = 805699635,
    /**
     * < ROI Generation Algorithm (3006,0036)
     */
    ROIGenerationAlgorithm_3006_0036 = 805699638,
    /**
     * < ROI Derivation Algorithm Identification Sequence (3006,0037)
     */
    ROIDerivationAlgorithmIdentificationSequence_3006_0037 = 805699639,
    /**
     * < ROI Generation Description (3006,0038)
     */
    ROIGenerationDescription_3006_0038 = 805699640,
    /**
     * < ROI Contour Sequence (3006,0039)
     */
    ROIContourSequence_3006_0039 = 805699641,
    /**
     * < Contour Sequence (3006,0040)
     */
    ContourSequence_3006_0040 = 805699648,
    /**
     * < Contour Geometric Type (3006,0042)
     */
    ContourGeometricType_3006_0042 = 805699650,
    /**
     * < Contour Slab Thickness (3006,0044)
     */
    ContourSlabThickness_3006_0044 = 805699652,
    /**
     * < Contour Offset Vector (3006,0045)
     */
    ContourOffsetVector_3006_0045 = 805699653,
    /**
     * < Number of Contour Points (3006,0046)
     */
    NumberOfContourPoints_3006_0046 = 805699654,
    /**
     * < Contour Number (3006,0048)
     */
    ContourNumber_3006_0048 = 805699656,
    /**
     * < Attached Contours (3006,0049)
     */
    AttachedContours_3006_0049 = 805699657,
    /**
     * < Contour Data (3006,0050)
     */
    ContourData_3006_0050 = 805699664,
    /**
     * < RT ROI Observations Sequence (3006,0080)
     */
    RTROIObservationsSequence_3006_0080 = 805699712,
    /**
     * < Observation Number (3006,0082)
     */
    ObservationNumber_3006_0082 = 805699714,
    /**
     * < Referenced ROI Number (3006,0084)
     */
    ReferencedROINumber_3006_0084 = 805699716,
    /**
     * < ROI Observation Label (3006,0085)
     */
    ROIObservationLabel_3006_0085 = 805699717,
    /**
     * < RT ROI Identification Code Sequence (3006,0086)
     */
    RTROIIdentificationCodeSequence_3006_0086 = 805699718,
    /**
     * < ROI Observation Description (3006,0088)
     */
    ROIObservationDescription_3006_0088 = 805699720,
    /**
     * < Related RT ROI Observations Sequence (3006,00A0)
     */
    RelatedRTROIObservationsSequence_3006_00A0 = 805699744,
    /**
     * < RT ROI Interpreted Type (3006,00A4)
     */
    RTROIInterpretedType_3006_00A4 = 805699748,
    /**
     * < ROI Interpreter (3006,00A6)
     */
    ROIInterpreter_3006_00A6 = 805699750,
    /**
     * < ROI Physical Properties Sequence (3006,00B0)
     */
    ROIPhysicalPropertiesSequence_3006_00B0 = 805699760,
    /**
     * < ROI Physical Property (3006,00B2)
     */
    ROIPhysicalProperty_3006_00B2 = 805699762,
    /**
     * < ROI Physical Property Value (3006,00B4)
     */
    ROIPhysicalPropertyValue_3006_00B4 = 805699764,
    /**
     * < ROI Elemental Composition Sequence (3006,00B6)
     */
    ROIElementalCompositionSequence_3006_00B6 = 805699766,
    /**
     * < ROI Elemental Composition Atomic Number (3006,00B7)
     */
    ROIElementalCompositionAtomicNumber_3006_00B7 = 805699767,
    /**
     * < ROI Elemental Composition Atomic Mass Fraction (3006,00B8)
     */
    ROIElementalCompositionAtomicMassFraction_3006_00B8 = 805699768,
    /**
     * < Additional RT ROI Identification Code Sequence (3006,00B9)
     */
    AdditionalRTROIIdentificationCodeSequence_3006_00B9 = 805699769,
    /**
     * < Frame of Reference Relationship Sequence (3006,00C0)
     */
    FrameOfReferenceRelationshipSequence_3006_00C0 = 805699776,
    /**
     * < Related Frame of Reference UID (3006,00C2)
     */
    RelatedFrameOfReferenceUID_3006_00C2 = 805699778,
    /**
     * < Frame of Reference Transformation Type (3006,00C4)
     */
    FrameOfReferenceTransformationType_3006_00C4 = 805699780,
    /**
     * < Frame of Reference Transformation Matrix (3006,00C6)
     */
    FrameOfReferenceTransformationMatrix_3006_00C6 = 805699782,
    /**
     * < Frame of Reference Transformation Comment (3006,00C8)
     */
    FrameOfReferenceTransformationComment_3006_00C8 = 805699784,
    /**
     * < Measured Dose Reference Sequence (3008,0010)
     */
    MeasuredDoseReferenceSequence_3008_0010 = 805830672,
    /**
     * < Measured Dose Description (3008,0012)
     */
    MeasuredDoseDescription_3008_0012 = 805830674,
    /**
     * < Measured Dose Type (3008,0014)
     */
    MeasuredDoseType_3008_0014 = 805830676,
    /**
     * < Measured Dose Value (3008,0016)
     */
    MeasuredDoseValue_3008_0016 = 805830678,
    /**
     * < Treatment Session Beam Sequence (3008,0020)
     */
    TreatmentSessionBeamSequence_3008_0020 = 805830688,
    /**
     * < Treatment Session Ion Beam Sequence (3008,0021)
     */
    TreatmentSessionIonBeamSequence_3008_0021 = 805830689,
    /**
     * < Current Fraction Number (3008,0022)
     */
    CurrentFractionNumber_3008_0022 = 805830690,
    /**
     * < Treatment Control Point Date (3008,0024)
     */
    TreatmentControlPointDate_3008_0024 = 805830692,
    /**
     * < Treatment Control Point Time (3008,0025)
     */
    TreatmentControlPointTime_3008_0025 = 805830693,
    /**
     * < Treatment Termination Status (3008,002A)
     */
    TreatmentTerminationStatus_3008_002A = 805830698,
    /**
     * < Treatment Termination Code (3008,002B)
     */
    TreatmentTerminationCode_3008_002B = 805830699,
    /**
     * < Treatment Verification Status (3008,002C)
     */
    TreatmentVerificationStatus_3008_002C = 805830700,
    /**
     * < Referenced Treatment Record Sequence (3008,0030)
     */
    ReferencedTreatmentRecordSequence_3008_0030 = 805830704,
    /**
     * < Specified Primary Meterset (3008,0032)
     */
    SpecifiedPrimaryMeterset_3008_0032 = 805830706,
    /**
     * < Specified Secondary Meterset (3008,0033)
     */
    SpecifiedSecondaryMeterset_3008_0033 = 805830707,
    /**
     * < Delivered Primary Meterset (3008,0036)
     */
    DeliveredPrimaryMeterset_3008_0036 = 805830710,
    /**
     * < Delivered Secondary Meterset (3008,0037)
     */
    DeliveredSecondaryMeterset_3008_0037 = 805830711,
    /**
     * < Specified Treatment Time (3008,003A)
     */
    SpecifiedTreatmentTime_3008_003A = 805830714,
    /**
     * < Delivered Treatment Time (3008,003B)
     */
    DeliveredTreatmentTime_3008_003B = 805830715,
    /**
     * < Control Point Delivery Sequence (3008,0040)
     */
    ControlPointDeliverySequence_3008_0040 = 805830720,
    /**
     * < Ion Control Point Delivery Sequence (3008,0041)
     */
    IonControlPointDeliverySequence_3008_0041 = 805830721,
    /**
     * < Specified Meterset (3008,0042)
     */
    SpecifiedMeterset_3008_0042 = 805830722,
    /**
     * < Delivered Meterset (3008,0044)
     */
    DeliveredMeterset_3008_0044 = 805830724,
    /**
     * < Meterset Rate Set (3008,0045)
     */
    MetersetRateSet_3008_0045 = 805830725,
    /**
     * < Meterset Rate Delivered (3008,0046)
     */
    MetersetRateDelivered_3008_0046 = 805830726,
    /**
     * < Scan Spot Metersets Delivered (3008,0047)
     */
    ScanSpotMetersetsDelivered_3008_0047 = 805830727,
    /**
     * < Dose Rate Delivered (3008,0048)
     */
    DoseRateDelivered_3008_0048 = 805830728,
    /**
     * < Treatment Summary Calculated Dose Reference Sequence (3008,0050)
     */
    TreatmentSummaryCalculatedDoseReferenceSequence_3008_0050 = 805830736,
    /**
     * < Cumulative Dose to Dose Reference (3008,0052)
     */
    CumulativeDoseToDoseReference_3008_0052 = 805830738,
    /**
     * < First Treatment Date (3008,0054)
     */
    FirstTreatmentDate_3008_0054 = 805830740,
    /**
     * < Most Recent Treatment Date (3008,0056)
     */
    MostRecentTreatmentDate_3008_0056 = 805830742,
    /**
     * < Number of Fractions Delivered (3008,005A)
     */
    NumberOfFractionsDelivered_3008_005A = 805830746,
    /**
     * < Override Sequence (3008,0060)
     */
    OverrideSequence_3008_0060 = 805830752,
    /**
     * < Parameter Sequence Pointer (3008,0061)
     */
    ParameterSequencePointer_3008_0061 = 805830753,
    /**
     * < Override Parameter Pointer (3008,0062)
     */
    OverrideParameterPointer_3008_0062 = 805830754,
    /**
     * < Parameter Item Index (3008,0063)
     */
    ParameterItemIndex_3008_0063 = 805830755,
    /**
     * < Measured Dose Reference Number (3008,0064)
     */
    MeasuredDoseReferenceNumber_3008_0064 = 805830756,
    /**
     * < Parameter Pointer (3008,0065)
     */
    ParameterPointer_3008_0065 = 805830757,
    /**
     * < Override Reason (3008,0066)
     */
    OverrideReason_3008_0066 = 805830758,
    /**
     * < Parameter Value Number (3008,0067)
     */
    ParameterValueNumber_3008_0067 = 805830759,
    /**
     * < Corrected Parameter Sequence (3008,0068)
     */
    CorrectedParameterSequence_3008_0068 = 805830760,
    /**
     * < Correction Value (3008,006A)
     */
    CorrectionValue_3008_006A = 805830762,
    /**
     * < Calculated Dose Reference Sequence (3008,0070)
     */
    CalculatedDoseReferenceSequence_3008_0070 = 805830768,
    /**
     * < Calculated Dose Reference Number (3008,0072)
     */
    CalculatedDoseReferenceNumber_3008_0072 = 805830770,
    /**
     * < Calculated Dose Reference Description (3008,0074)
     */
    CalculatedDoseReferenceDescription_3008_0074 = 805830772,
    /**
     * < Calculated Dose Reference Dose Value (3008,0076)
     */
    CalculatedDoseReferenceDoseValue_3008_0076 = 805830774,
    /**
     * < Start Meterset (3008,0078)
     */
    StartMeterset_3008_0078 = 805830776,
    /**
     * < End Meterset (3008,007A)
     */
    EndMeterset_3008_007A = 805830778,
    /**
     * < Referenced Measured Dose Reference Sequence (3008,0080)
     */
    ReferencedMeasuredDoseReferenceSequence_3008_0080 = 805830784,
    /**
     * < Referenced Measured Dose Reference Number (3008,0082)
     */
    ReferencedMeasuredDoseReferenceNumber_3008_0082 = 805830786,
    /**
     * < Referenced Calculated Dose Reference Sequence (3008,0090)
     */
    ReferencedCalculatedDoseReferenceSequence_3008_0090 = 805830800,
    /**
     * < Referenced Calculated Dose Reference Number (3008,0092)
     */
    ReferencedCalculatedDoseReferenceNumber_3008_0092 = 805830802,
    /**
     * < Beam Limiting Device Leaf Pairs Sequence (3008,00A0)
     */
    BeamLimitingDeviceLeafPairsSequence_3008_00A0 = 805830816,
    /**
     * < Recorded Wedge Sequence (3008,00B0)
     */
    RecordedWedgeSequence_3008_00B0 = 805830832,
    /**
     * < Recorded Compensator Sequence (3008,00C0)
     */
    RecordedCompensatorSequence_3008_00C0 = 805830848,
    /**
     * < Recorded Block Sequence (3008,00D0)
     */
    RecordedBlockSequence_3008_00D0 = 805830864,
    /**
     * < Treatment Summary Measured Dose Reference Sequence (3008,00E0)
     */
    TreatmentSummaryMeasuredDoseReferenceSequence_3008_00E0 = 805830880,
    /**
     * < Recorded Snout Sequence (3008,00F0)
     */
    RecordedSnoutSequence_3008_00F0 = 805830896,
    /**
     * < Recorded Range Shifter Sequence (3008,00F2)
     */
    RecordedRangeShifterSequence_3008_00F2 = 805830898,
    /**
     * < Recorded Lateral Spreading Device Sequence (3008,00F4)
     */
    RecordedLateralSpreadingDeviceSequence_3008_00F4 = 805830900,
    /**
     * < Recorded Range Modulator Sequence (3008,00F6)
     */
    RecordedRangeModulatorSequence_3008_00F6 = 805830902,
    /**
     * < Recorded Source Sequence (3008,0100)
     */
    RecordedSourceSequence_3008_0100 = 805830912,
    /**
     * < Source Serial Number (3008,0105)
     */
    SourceSerialNumber_3008_0105 = 805830917,
    /**
     * < Treatment Session Application Setup Sequence (3008,0110)
     */
    TreatmentSessionApplicationSetupSequence_3008_0110 = 805830928,
    /**
     * < Application Setup Check (3008,0116)
     */
    ApplicationSetupCheck_3008_0116 = 805830934,
    /**
     * < Recorded Brachy Accessory Device Sequence (3008,0120)
     */
    RecordedBrachyAccessoryDeviceSequence_3008_0120 = 805830944,
    /**
     * < Referenced Brachy Accessory Device Number (3008,0122)
     */
    ReferencedBrachyAccessoryDeviceNumber_3008_0122 = 805830946,
    /**
     * < Recorded Channel Sequence (3008,0130)
     */
    RecordedChannelSequence_3008_0130 = 805830960,
    /**
     * < Specified Channel Total Time (3008,0132)
     */
    SpecifiedChannelTotalTime_3008_0132 = 805830962,
    /**
     * < Delivered Channel Total Time (3008,0134)
     */
    DeliveredChannelTotalTime_3008_0134 = 805830964,
    /**
     * < Specified Number of Pulses (3008,0136)
     */
    SpecifiedNumberOfPulses_3008_0136 = 805830966,
    /**
     * < Delivered Number of Pulses (3008,0138)
     */
    DeliveredNumberOfPulses_3008_0138 = 805830968,
    /**
     * < Specified Pulse Repetition Interval (3008,013A)
     */
    SpecifiedPulseRepetitionInterval_3008_013A = 805830970,
    /**
     * < Delivered Pulse Repetition Interval (3008,013C)
     */
    DeliveredPulseRepetitionInterval_3008_013C = 805830972,
    /**
     * < Recorded Source Applicator Sequence (3008,0140)
     */
    RecordedSourceApplicatorSequence_3008_0140 = 805830976,
    /**
     * < Referenced Source Applicator Number (3008,0142)
     */
    ReferencedSourceApplicatorNumber_3008_0142 = 805830978,
    /**
     * < Recorded Channel Shield Sequence (3008,0150)
     */
    RecordedChannelShieldSequence_3008_0150 = 805830992,
    /**
     * < Referenced Channel Shield Number (3008,0152)
     */
    ReferencedChannelShieldNumber_3008_0152 = 805830994,
    /**
     * < Brachy Control Point Delivered Sequence (3008,0160)
     */
    BrachyControlPointDeliveredSequence_3008_0160 = 805831008,
    /**
     * < Safe Position Exit Date (3008,0162)
     */
    SafePositionExitDate_3008_0162 = 805831010,
    /**
     * < Safe Position Exit Time (3008,0164)
     */
    SafePositionExitTime_3008_0164 = 805831012,
    /**
     * < Safe Position Return Date (3008,0166)
     */
    SafePositionReturnDate_3008_0166 = 805831014,
    /**
     * < Safe Position Return Time (3008,0168)
     */
    SafePositionReturnTime_3008_0168 = 805831016,
    /**
     * < Pulse Specific Brachy Control Point Delivered Sequence (3008,0171)
     */
    PulseSpecificBrachyControlPointDeliveredSequence_3008_0171 = 805831025,
    /**
     * < Pulse Number (3008,0172)
     */
    PulseNumber_3008_0172 = 805831026,
    /**
     * < Brachy Pulse Control Point Delivered Sequence (3008,0173)
     */
    BrachyPulseControlPointDeliveredSequence_3008_0173 = 805831027,
    /**
     * < Current Treatment Status (3008,0200)
     */
    CurrentTreatmentStatus_3008_0200 = 805831168,
    /**
     * < Treatment Status Comment (3008,0202)
     */
    TreatmentStatusComment_3008_0202 = 805831170,
    /**
     * < Fraction Group Summary Sequence (3008,0220)
     */
    FractionGroupSummarySequence_3008_0220 = 805831200,
    /**
     * < Referenced Fraction Number (3008,0223)
     */
    ReferencedFractionNumber_3008_0223 = 805831203,
    /**
     * < Fraction Group Type (3008,0224)
     */
    FractionGroupType_3008_0224 = 805831204,
    /**
     * < Beam Stopper Position (3008,0230)
     */
    BeamStopperPosition_3008_0230 = 805831216,
    /**
     * < Fraction Status Summary Sequence (3008,0240)
     */
    FractionStatusSummarySequence_3008_0240 = 805831232,
    /**
     * < Treatment Date (3008,0250)
     */
    TreatmentDate_3008_0250 = 805831248,
    /**
     * < Treatment Time (3008,0251)
     */
    TreatmentTime_3008_0251 = 805831249,
    /**
     * < RT Plan Label (300A,0002)
     */
    RTPlanLabel_300A_0002 = 805961730,
    /**
     * < RT Plan Name (300A,0003)
     */
    RTPlanName_300A_0003 = 805961731,
    /**
     * < RT Plan Description (300A,0004)
     */
    RTPlanDescription_300A_0004 = 805961732,
    /**
     * < RT Plan Date (300A,0006)
     */
    RTPlanDate_300A_0006 = 805961734,
    /**
     * < RT Plan Time (300A,0007)
     */
    RTPlanTime_300A_0007 = 805961735,
    /**
     * < Treatment Protocols (300A,0009)
     */
    TreatmentProtocols_300A_0009 = 805961737,
    /**
     * < Plan Intent (300A,000A)
     */
    PlanIntent_300A_000A = 805961738,
    /**
     * < Treatment Sites (300A,000B)
     */
    TreatmentSites_300A_000B = 805961739,
    /**
     * < RT Plan Geometry (300A,000C)
     */
    RTPlanGeometry_300A_000C = 805961740,
    /**
     * < Prescription Description (300A,000E)
     */
    PrescriptionDescription_300A_000E = 805961742,
    /**
     * < Dose Reference Sequence (300A,0010)
     */
    DoseReferenceSequence_300A_0010 = 805961744,
    /**
     * < Dose Reference Number (300A,0012)
     */
    DoseReferenceNumber_300A_0012 = 805961746,
    /**
     * < Dose Reference UID (300A,0013)
     */
    DoseReferenceUID_300A_0013 = 805961747,
    /**
     * < Dose Reference Structure Type (300A,0014)
     */
    DoseReferenceStructureType_300A_0014 = 805961748,
    /**
     * < Nominal Beam Energy Unit (300A,0015)
     */
    NominalBeamEnergyUnit_300A_0015 = 805961749,
    /**
     * < Dose Reference Description (300A,0016)
     */
    DoseReferenceDescription_300A_0016 = 805961750,
    /**
     * < Dose Reference Point Coordinates (300A,0018)
     */
    DoseReferencePointCoordinates_300A_0018 = 805961752,
    /**
     * < Nominal Prior Dose (300A,001A)
     */
    NominalPriorDose_300A_001A = 805961754,
    /**
     * < Dose Reference Type (300A,0020)
     */
    DoseReferenceType_300A_0020 = 805961760,
    /**
     * < Constraint Weight (300A,0021)
     */
    ConstraintWeight_300A_0021 = 805961761,
    /**
     * < Delivery Warning Dose (300A,0022)
     */
    DeliveryWarningDose_300A_0022 = 805961762,
    /**
     * < Delivery Maximum Dose (300A,0023)
     */
    DeliveryMaximumDose_300A_0023 = 805961763,
    /**
     * < Target Minimum Dose (300A,0025)
     */
    TargetMinimumDose_300A_0025 = 805961765,
    /**
     * < Target Prescription Dose (300A,0026)
     */
    TargetPrescriptionDose_300A_0026 = 805961766,
    /**
     * < Target Maximum Dose (300A,0027)
     */
    TargetMaximumDose_300A_0027 = 805961767,
    /**
     * < Target Underdose Volume Fraction (300A,0028)
     */
    TargetUnderdoseVolumeFraction_300A_0028 = 805961768,
    /**
     * < Organ at Risk Full-volume Dose (300A,002A)
     */
    OrganAtRiskFullVolumeDose_300A_002A = 805961770,
    /**
     * < Organ at Risk Limit Dose (300A,002B)
     */
    OrganAtRiskLimitDose_300A_002B = 805961771,
    /**
     * < Organ at Risk Maximum Dose (300A,002C)
     */
    OrganAtRiskMaximumDose_300A_002C = 805961772,
    /**
     * < Organ at Risk Overdose Volume Fraction (300A,002D)
     */
    OrganAtRiskOverdoseVolumeFraction_300A_002D = 805961773,
    /**
     * < Tolerance Table Sequence (300A,0040)
     */
    ToleranceTableSequence_300A_0040 = 805961792,
    /**
     * < Tolerance Table Number (300A,0042)
     */
    ToleranceTableNumber_300A_0042 = 805961794,
    /**
     * < Tolerance Table Label (300A,0043)
     */
    ToleranceTableLabel_300A_0043 = 805961795,
    /**
     * < Gantry Angle Tolerance (300A,0044)
     */
    GantryAngleTolerance_300A_0044 = 805961796,
    /**
     * < Beam Limiting Device Angle Tolerance (300A,0046)
     */
    BeamLimitingDeviceAngleTolerance_300A_0046 = 805961798,
    /**
     * < Beam Limiting Device Tolerance Sequence (300A,0048)
     */
    BeamLimitingDeviceToleranceSequence_300A_0048 = 805961800,
    /**
     * < Beam Limiting Device Position Tolerance (300A,004A)
     */
    BeamLimitingDevicePositionTolerance_300A_004A = 805961802,
    /**
     * < Snout Position Tolerance (300A,004B)
     */
    SnoutPositionTolerance_300A_004B = 805961803,
    /**
     * < Patient Support Angle Tolerance (300A,004C)
     */
    PatientSupportAngleTolerance_300A_004C = 805961804,
    /**
     * < Table Top Eccentric Angle Tolerance (300A,004E)
     */
    TableTopEccentricAngleTolerance_300A_004E = 805961806,
    /**
     * < Table Top Pitch Angle Tolerance (300A,004F)
     */
    TableTopPitchAngleTolerance_300A_004F = 805961807,
    /**
     * < Table Top Roll Angle Tolerance (300A,0050)
     */
    TableTopRollAngleTolerance_300A_0050 = 805961808,
    /**
     * < Table Top Vertical Position Tolerance (300A,0051)
     */
    TableTopVerticalPositionTolerance_300A_0051 = 805961809,
    /**
     * < Table Top Longitudinal Position Tolerance (300A,0052)
     */
    TableTopLongitudinalPositionTolerance_300A_0052 = 805961810,
    /**
     * < Table Top Lateral Position Tolerance (300A,0053)
     */
    TableTopLateralPositionTolerance_300A_0053 = 805961811,
    /**
     * < RT Plan Relationship (300A,0055)
     */
    RTPlanRelationship_300A_0055 = 805961813,
    /**
     * < Fraction Group Sequence (300A,0070)
     */
    FractionGroupSequence_300A_0070 = 805961840,
    /**
     * < Fraction Group Number (300A,0071)
     */
    FractionGroupNumber_300A_0071 = 805961841,
    /**
     * < Fraction Group Description (300A,0072)
     */
    FractionGroupDescription_300A_0072 = 805961842,
    /**
     * < Number of Fractions Planned (300A,0078)
     */
    NumberOfFractionsPlanned_300A_0078 = 805961848,
    /**
     * < Number of Fraction Pattern Digits Per Day (300A,0079)
     */
    NumberOfFractionPatternDigitsPerDay_300A_0079 = 805961849,
    /**
     * < Repeat Fraction Cycle Length (300A,007A)
     */
    RepeatFractionCycleLength_300A_007A = 805961850,
    /**
     * < Fraction Pattern (300A,007B)
     */
    FractionPattern_300A_007B = 805961851,
    /**
     * < Number of Beams (300A,0080)
     */
    NumberOfBeams_300A_0080 = 805961856,
    /**
     * < Beam Dose Specification Point (300A,0082)
     */
    BeamDoseSpecificationPoint_300A_0082 = 805961858,
    /**
     * < Referenced Dose Reference UID (300A,0083)
     */
    ReferencedDoseReferenceUID_300A_0083 = 805961859,
    /**
     * < Beam Dose (300A,0084)
     */
    BeamDose_300A_0084 = 805961860,
    /**
     * < Beam Meterset (300A,0086)
     */
    BeamMeterset_300A_0086 = 805961862,
    /**
     * < Beam Dose Point Depth (300A,0088)
     */
    BeamDosePointDepth_300A_0088 = 805961864,
    /**
     * < Beam Dose Point Equivalent Depth (300A,0089)
     */
    BeamDosePointEquivalentDepth_300A_0089 = 805961865,
    /**
     * < Beam Dose Point SSD (300A,008A)
     */
    BeamDosePointSSD_300A_008A = 805961866,
    /**
     * < Beam Dose Meaning (300A,008B)
     */
    BeamDoseMeaning_300A_008B = 805961867,
    /**
     * < Beam Dose Verification Control Point Sequence (300A,008C)
     */
    BeamDoseVerificationControlPointSequence_300A_008C = 805961868,
    /**
     * < Average Beam Dose Point Depth (300A,008D)
     */
    AverageBeamDosePointDepth_300A_008D = 805961869,
    /**
     * < Average Beam Dose Point Equivalent Depth (300A,008E)
     */
    AverageBeamDosePointEquivalentDepth_300A_008E = 805961870,
    /**
     * < Average Beam Dose Point SSD (300A,008F)
     */
    AverageBeamDosePointSSD_300A_008F = 805961871,
    /**
     * < Beam Dose Type (300A,0090)
     */
    BeamDoseType_300A_0090 = 805961872,
    /**
     * < Alternate Beam Dose (300A,0091)
     */
    AlternateBeamDose_300A_0091 = 805961873,
    /**
     * < Alternate Beam Dose Type (300A,0092)
     */
    AlternateBeamDoseType_300A_0092 = 805961874,
    /**
     * < Depth Value Averaging Flag (300A,0093)
     */
    DepthValueAveragingFlag_300A_0093 = 805961875,
    /**
     * < Beam Dose Point Source to External Contour Distance (300A,0094)
     */
    BeamDosePointSourceToExternalContourDistance_300A_0094 = 805961876,
    /**
     * < Number of Brachy Application Setups (300A,00A0)
     */
    NumberOfBrachyApplicationSetups_300A_00A0 = 805961888,
    /**
     * < Brachy Application Setup Dose Specification Point (300A,00A2)
     */
    BrachyApplicationSetupDoseSpecificationPoint_300A_00A2 = 805961890,
    /**
     * < Brachy Application Setup Dose (300A,00A4)
     */
    BrachyApplicationSetupDose_300A_00A4 = 805961892,
    /**
     * < Beam Sequence (300A,00B0)
     */
    BeamSequence_300A_00B0 = 805961904,
    /**
     * < Treatment Machine Name (300A,00B2)
     */
    TreatmentMachineName_300A_00B2 = 805961906,
    /**
     * < Primary Dosimeter Unit (300A,00B3)
     */
    PrimaryDosimeterUnit_300A_00B3 = 805961907,
    /**
     * < Source-Axis Distance (300A,00B4)
     */
    SourceAxisDistance_300A_00B4 = 805961908,
    /**
     * < Beam Limiting Device Sequence (300A,00B6)
     */
    BeamLimitingDeviceSequence_300A_00B6 = 805961910,
    /**
     * < RT Beam Limiting Device Type (300A,00B8)
     */
    RTBeamLimitingDeviceType_300A_00B8 = 805961912,
    /**
     * < Source to Beam Limiting Device Distance (300A,00BA)
     */
    SourceToBeamLimitingDeviceDistance_300A_00BA = 805961914,
    /**
     * < Isocenter to Beam Limiting Device Distance (300A,00BB)
     */
    IsocenterToBeamLimitingDeviceDistance_300A_00BB = 805961915,
    /**
     * < Number of Leaf/Jaw Pairs (300A,00BC)
     */
    NumberOfLeafJawPairs_300A_00BC = 805961916,
    /**
     * < Leaf Position Boundaries (300A,00BE)
     */
    LeafPositionBoundaries_300A_00BE = 805961918,
    /**
     * < Beam Number (300A,00C0)
     */
    BeamNumber_300A_00C0 = 805961920,
    /**
     * < Beam Name (300A,00C2)
     */
    BeamName_300A_00C2 = 805961922,
    /**
     * < Beam Description (300A,00C3)
     */
    BeamDescription_300A_00C3 = 805961923,
    /**
     * < Beam Type (300A,00C4)
     */
    BeamType_300A_00C4 = 805961924,
    /**
     * < Beam Delivery Duration Limit (300A,00C5)
     */
    BeamDeliveryDurationLimit_300A_00C5 = 805961925,
    /**
     * < Radiation Type (300A,00C6)
     */
    RadiationType_300A_00C6 = 805961926,
    /**
     * < High-Dose Technique Type (300A,00C7)
     */
    HighDoseTechniqueType_300A_00C7 = 805961927,
    /**
     * < Reference Image Number (300A,00C8)
     */
    ReferenceImageNumber_300A_00C8 = 805961928,
    /**
     * < Planned Verification Image Sequence (300A,00CA)
     */
    PlannedVerificationImageSequence_300A_00CA = 805961930,
    /**
     * < Imaging Device-Specific Acquisition Parameters (300A,00CC)
     */
    ImagingDeviceSpecificAcquisitionParameters_300A_00CC = 805961932,
    /**
     * < Treatment Delivery Type (300A,00CE)
     */
    TreatmentDeliveryType_300A_00CE = 805961934,
    /**
     * < Number of Wedges (300A,00D0)
     */
    NumberOfWedges_300A_00D0 = 805961936,
    /**
     * < Wedge Sequence (300A,00D1)
     */
    WedgeSequence_300A_00D1 = 805961937,
    /**
     * < Wedge Number (300A,00D2)
     */
    WedgeNumber_300A_00D2 = 805961938,
    /**
     * < Wedge Type (300A,00D3)
     */
    WedgeType_300A_00D3 = 805961939,
    /**
     * < Wedge ID (300A,00D4)
     */
    WedgeID_300A_00D4 = 805961940,
    /**
     * < Wedge Angle (300A,00D5)
     */
    WedgeAngle_300A_00D5 = 805961941,
    /**
     * < Wedge Factor (300A,00D6)
     */
    WedgeFactor_300A_00D6 = 805961942,
    /**
     * < Total Wedge Tray Water-Equivalent Thickness (300A,00D7)
     */
    TotalWedgeTrayWaterEquivalentThickness_300A_00D7 = 805961943,
    /**
     * < Wedge Orientation (300A,00D8)
     */
    WedgeOrientation_300A_00D8 = 805961944,
    /**
     * < Isocenter to Wedge Tray Distance (300A,00D9)
     */
    IsocenterToWedgeTrayDistance_300A_00D9 = 805961945,
    /**
     * < Source to Wedge Tray Distance (300A,00DA)
     */
    SourceToWedgeTrayDistance_300A_00DA = 805961946,
    /**
     * < Wedge Thin Edge Position (300A,00DB)
     */
    WedgeThinEdgePosition_300A_00DB = 805961947,
    /**
     * < Bolus ID (300A,00DC)
     */
    BolusID_300A_00DC = 805961948,
    /**
     * < Bolus Description (300A,00DD)
     */
    BolusDescription_300A_00DD = 805961949,
    /**
     * < Effective Wedge Angle (300A,00DE)
     */
    EffectiveWedgeAngle_300A_00DE = 805961950,
    /**
     * < Number of Compensators (300A,00E0)
     */
    NumberOfCompensators_300A_00E0 = 805961952,
    /**
     * < Material ID (300A,00E1)
     */
    MaterialID_300A_00E1 = 805961953,
    /**
     * < Total Compensator Tray Factor (300A,00E2)
     */
    TotalCompensatorTrayFactor_300A_00E2 = 805961954,
    /**
     * < Compensator Sequence (300A,00E3)
     */
    CompensatorSequence_300A_00E3 = 805961955,
    /**
     * < Compensator Number (300A,00E4)
     */
    CompensatorNumber_300A_00E4 = 805961956,
    /**
     * < Compensator ID (300A,00E5)
     */
    CompensatorID_300A_00E5 = 805961957,
    /**
     * < Source to Compensator Tray Distance (300A,00E6)
     */
    SourceToCompensatorTrayDistance_300A_00E6 = 805961958,
    /**
     * < Compensator Rows (300A,00E7)
     */
    CompensatorRows_300A_00E7 = 805961959,
    /**
     * < Compensator Columns (300A,00E8)
     */
    CompensatorColumns_300A_00E8 = 805961960,
    /**
     * < Compensator Pixel Spacing (300A,00E9)
     */
    CompensatorPixelSpacing_300A_00E9 = 805961961,
    /**
     * < Compensator Position (300A,00EA)
     */
    CompensatorPosition_300A_00EA = 805961962,
    /**
     * < Compensator Transmission Data (300A,00EB)
     */
    CompensatorTransmissionData_300A_00EB = 805961963,
    /**
     * < Compensator Thickness Data (300A,00EC)
     */
    CompensatorThicknessData_300A_00EC = 805961964,
    /**
     * < Number of Boli (300A,00ED)
     */
    NumberOfBoli_300A_00ED = 805961965,
    /**
     * < Compensator Type (300A,00EE)
     */
    CompensatorType_300A_00EE = 805961966,
    /**
     * < Compensator Tray ID (300A,00EF)
     */
    CompensatorTrayID_300A_00EF = 805961967,
    /**
     * < Number of Blocks (300A,00F0)
     */
    NumberOfBlocks_300A_00F0 = 805961968,
    /**
     * < Total Block Tray Factor (300A,00F2)
     */
    TotalBlockTrayFactor_300A_00F2 = 805961970,
    /**
     * < Total Block Tray Water-Equivalent Thickness (300A,00F3)
     */
    TotalBlockTrayWaterEquivalentThickness_300A_00F3 = 805961971,
    /**
     * < Block Sequence (300A,00F4)
     */
    BlockSequence_300A_00F4 = 805961972,
    /**
     * < Block Tray ID (300A,00F5)
     */
    BlockTrayID_300A_00F5 = 805961973,
    /**
     * < Source to Block Tray Distance (300A,00F6)
     */
    SourceToBlockTrayDistance_300A_00F6 = 805961974,
    /**
     * < Isocenter to Block Tray Distance (300A,00F7)
     */
    IsocenterToBlockTrayDistance_300A_00F7 = 805961975,
    /**
     * < Block Type (300A,00F8)
     */
    BlockType_300A_00F8 = 805961976,
    /**
     * < Accessory Code (300A,00F9)
     */
    AccessoryCode_300A_00F9 = 805961977,
    /**
     * < Block Divergence (300A,00FA)
     */
    BlockDivergence_300A_00FA = 805961978,
    /**
     * < Block Mounting Position (300A,00FB)
     */
    BlockMountingPosition_300A_00FB = 805961979,
    /**
     * < Block Number (300A,00FC)
     */
    BlockNumber_300A_00FC = 805961980,
    /**
     * < Block Name (300A,00FE)
     */
    BlockName_300A_00FE = 805961982,
    /**
     * < Block Thickness (300A,0100)
     */
    BlockThickness_300A_0100 = 805961984,
    /**
     * < Block Transmission (300A,0102)
     */
    BlockTransmission_300A_0102 = 805961986,
    /**
     * < Block Number of Points (300A,0104)
     */
    BlockNumberOfPoints_300A_0104 = 805961988,
    /**
     * < Block Data (300A,0106)
     */
    BlockData_300A_0106 = 805961990,
    /**
     * < Applicator Sequence (300A,0107)
     */
    ApplicatorSequence_300A_0107 = 805961991,
    /**
     * < Applicator ID (300A,0108)
     */
    ApplicatorID_300A_0108 = 805961992,
    /**
     * < Applicator Type (300A,0109)
     */
    ApplicatorType_300A_0109 = 805961993,
    /**
     * < Applicator Description (300A,010A)
     */
    ApplicatorDescription_300A_010A = 805961994,
    /**
     * < Cumulative Dose Reference Coefficient (300A,010C)
     */
    CumulativeDoseReferenceCoefficient_300A_010C = 805961996,
    /**
     * < Final Cumulative Meterset Weight (300A,010E)
     */
    FinalCumulativeMetersetWeight_300A_010E = 805961998,
    /**
     * < Number of Control Points (300A,0110)
     */
    NumberOfControlPoints_300A_0110 = 805962000,
    /**
     * < Control Point Sequence (300A,0111)
     */
    ControlPointSequence_300A_0111 = 805962001,
    /**
     * < Control Point Index (300A,0112)
     */
    ControlPointIndex_300A_0112 = 805962002,
    /**
     * < Nominal Beam Energy (300A,0114)
     */
    NominalBeamEnergy_300A_0114 = 805962004,
    /**
     * < Dose Rate Set (300A,0115)
     */
    DoseRateSet_300A_0115 = 805962005,
    /**
     * < Wedge Position Sequence (300A,0116)
     */
    WedgePositionSequence_300A_0116 = 805962006,
    /**
     * < Wedge Position (300A,0118)
     */
    WedgePosition_300A_0118 = 805962008,
    /**
     * < Beam Limiting Device Position Sequence (300A,011A)
     */
    BeamLimitingDevicePositionSequence_300A_011A = 805962010,
    /**
     * < Leaf/Jaw Positions (300A,011C)
     */
    LeafJawPositions_300A_011C = 805962012,
    /**
     * < Gantry Angle (300A,011E)
     */
    GantryAngle_300A_011E = 805962014,
    /**
     * < Gantry Rotation Direction (300A,011F)
     */
    GantryRotationDirection_300A_011F = 805962015,
    /**
     * < Beam Limiting Device Angle (300A,0120)
     */
    BeamLimitingDeviceAngle_300A_0120 = 805962016,
    /**
     * < Beam Limiting Device Rotation Direction (300A,0121)
     */
    BeamLimitingDeviceRotationDirection_300A_0121 = 805962017,
    /**
     * < Patient Support Angle (300A,0122)
     */
    PatientSupportAngle_300A_0122 = 805962018,
    /**
     * < Patient Support Rotation Direction (300A,0123)
     */
    PatientSupportRotationDirection_300A_0123 = 805962019,
    /**
     * < Table Top Eccentric Axis Distance (300A,0124)
     */
    TableTopEccentricAxisDistance_300A_0124 = 805962020,
    /**
     * < Table Top Eccentric Angle (300A,0125)
     */
    TableTopEccentricAngle_300A_0125 = 805962021,
    /**
     * < Table Top Eccentric Rotation Direction (300A,0126)
     */
    TableTopEccentricRotationDirection_300A_0126 = 805962022,
    /**
     * < Table Top Vertical Position (300A,0128)
     */
    TableTopVerticalPosition_300A_0128 = 805962024,
    /**
     * < Table Top Longitudinal Position (300A,0129)
     */
    TableTopLongitudinalPosition_300A_0129 = 805962025,
    /**
     * < Table Top Lateral Position (300A,012A)
     */
    TableTopLateralPosition_300A_012A = 805962026,
    /**
     * < Isocenter Position (300A,012C)
     */
    IsocenterPosition_300A_012C = 805962028,
    /**
     * < Surface Entry Point (300A,012E)
     */
    SurfaceEntryPoint_300A_012E = 805962030,
    /**
     * < Source to Surface Distance (300A,0130)
     */
    SourceToSurfaceDistance_300A_0130 = 805962032,
    /**
     * < Average Beam Dose Point Source to External Contour Distance (300A,0131)
     */
    AverageBeamDosePointSourceToExternalContourDistance_300A_0131 = 805962033,
    /**
     * < Source to External Contour Distance (300A,0132)
     */
    SourceToExternalContourDistance_300A_0132 = 805962034,
    /**
     * < External Contour Entry Point (300A,0133)
     */
    ExternalContourEntryPoint_300A_0133 = 805962035,
    /**
     * < Cumulative Meterset Weight (300A,0134)
     */
    CumulativeMetersetWeight_300A_0134 = 805962036,
    /**
     * < Table Top Pitch Angle (300A,0140)
     */
    TableTopPitchAngle_300A_0140 = 805962048,
    /**
     * < Table Top Pitch Rotation Direction (300A,0142)
     */
    TableTopPitchRotationDirection_300A_0142 = 805962050,
    /**
     * < Table Top Roll Angle (300A,0144)
     */
    TableTopRollAngle_300A_0144 = 805962052,
    /**
     * < Table Top Roll Rotation Direction (300A,0146)
     */
    TableTopRollRotationDirection_300A_0146 = 805962054,
    /**
     * < Head Fixation Angle (300A,0148)
     */
    HeadFixationAngle_300A_0148 = 805962056,
    /**
     * < Gantry Pitch Angle (300A,014A)
     */
    GantryPitchAngle_300A_014A = 805962058,
    /**
     * < Gantry Pitch Rotation Direction (300A,014C)
     */
    GantryPitchRotationDirection_300A_014C = 805962060,
    /**
     * < Gantry Pitch Angle Tolerance (300A,014E)
     */
    GantryPitchAngleTolerance_300A_014E = 805962062,
    /**
     * < Fixation Eye (300A,0150)
     */
    FixationEye_300A_0150 = 805962064,
    /**
     * < Chair Head Frame Position (300A,0151)
     */
    ChairHeadFramePosition_300A_0151 = 805962065,
    /**
     * < Head Fixation Angle Tolerance (300A,0152)
     */
    HeadFixationAngleTolerance_300A_0152 = 805962066,
    /**
     * < Chair Head Frame Position Tolerance (300A,0153)
     */
    ChairHeadFramePositionTolerance_300A_0153 = 805962067,
    /**
     * < Fixation Light Azimuthal Angle Tolerance (300A,0154)
     */
    FixationLightAzimuthalAngleTolerance_300A_0154 = 805962068,
    /**
     * < Fixation Light Polar Angle Tolerance (300A,0155)
     */
    FixationLightPolarAngleTolerance_300A_0155 = 805962069,
    /**
     * < Patient Setup Sequence (300A,0180)
     */
    PatientSetupSequence_300A_0180 = 805962112,
    /**
     * < Patient Setup Number (300A,0182)
     */
    PatientSetupNumber_300A_0182 = 805962114,
    /**
     * < Patient Setup Label (300A,0183)
     */
    PatientSetupLabel_300A_0183 = 805962115,
    /**
     * < Patient Additional Position (300A,0184)
     */
    PatientAdditionalPosition_300A_0184 = 805962116,
    /**
     * < Fixation Device Sequence (300A,0190)
     */
    FixationDeviceSequence_300A_0190 = 805962128,
    /**
     * < Fixation Device Type (300A,0192)
     */
    FixationDeviceType_300A_0192 = 805962130,
    /**
     * < Fixation Device Label (300A,0194)
     */
    FixationDeviceLabel_300A_0194 = 805962132,
    /**
     * < Fixation Device Description (300A,0196)
     */
    FixationDeviceDescription_300A_0196 = 805962134,
    /**
     * < Fixation Device Position (300A,0198)
     */
    FixationDevicePosition_300A_0198 = 805962136,
    /**
     * < Fixation Device Pitch Angle (300A,0199)
     */
    FixationDevicePitchAngle_300A_0199 = 805962137,
    /**
     * < Fixation Device Roll Angle (300A,019A)
     */
    FixationDeviceRollAngle_300A_019A = 805962138,
    /**
     * < Shielding Device Sequence (300A,01A0)
     */
    ShieldingDeviceSequence_300A_01A0 = 805962144,
    /**
     * < Shielding Device Type (300A,01A2)
     */
    ShieldingDeviceType_300A_01A2 = 805962146,
    /**
     * < Shielding Device Label (300A,01A4)
     */
    ShieldingDeviceLabel_300A_01A4 = 805962148,
    /**
     * < Shielding Device Description (300A,01A6)
     */
    ShieldingDeviceDescription_300A_01A6 = 805962150,
    /**
     * < Shielding Device Position (300A,01A8)
     */
    ShieldingDevicePosition_300A_01A8 = 805962152,
    /**
     * < Setup Technique (300A,01B0)
     */
    SetupTechnique_300A_01B0 = 805962160,
    /**
     * < Setup Technique Description (300A,01B2)
     */
    SetupTechniqueDescription_300A_01B2 = 805962162,
    /**
     * < Setup Device Sequence (300A,01B4)
     */
    SetupDeviceSequence_300A_01B4 = 805962164,
    /**
     * < Setup Device Type (300A,01B6)
     */
    SetupDeviceType_300A_01B6 = 805962166,
    /**
     * < Setup Device Label (300A,01B8)
     */
    SetupDeviceLabel_300A_01B8 = 805962168,
    /**
     * < Setup Device Description (300A,01BA)
     */
    SetupDeviceDescription_300A_01BA = 805962170,
    /**
     * < Setup Device Parameter (300A,01BC)
     */
    SetupDeviceParameter_300A_01BC = 805962172,
    /**
     * < Setup Reference Description (300A,01D0)
     */
    SetupReferenceDescription_300A_01D0 = 805962192,
    /**
     * < Table Top Vertical Setup Displacement (300A,01D2)
     */
    TableTopVerticalSetupDisplacement_300A_01D2 = 805962194,
    /**
     * < Table Top Longitudinal Setup Displacement (300A,01D4)
     */
    TableTopLongitudinalSetupDisplacement_300A_01D4 = 805962196,
    /**
     * < Table Top Lateral Setup Displacement (300A,01D6)
     */
    TableTopLateralSetupDisplacement_300A_01D6 = 805962198,
    /**
     * < Brachy Treatment Technique (300A,0200)
     */
    BrachyTreatmentTechnique_300A_0200 = 805962240,
    /**
     * < Brachy Treatment Type (300A,0202)
     */
    BrachyTreatmentType_300A_0202 = 805962242,
    /**
     * < Treatment Machine Sequence (300A,0206)
     */
    TreatmentMachineSequence_300A_0206 = 805962246,
    /**
     * < Source Sequence (300A,0210)
     */
    SourceSequence_300A_0210 = 805962256,
    /**
     * < Source Number (300A,0212)
     */
    SourceNumber_300A_0212 = 805962258,
    /**
     * < Source Type (300A,0214)
     */
    SourceType_300A_0214 = 805962260,
    /**
     * < Source Manufacturer (300A,0216)
     */
    SourceManufacturer_300A_0216 = 805962262,
    /**
     * < Active Source Diameter (300A,0218)
     */
    ActiveSourceDiameter_300A_0218 = 805962264,
    /**
     * < Active Source Length (300A,021A)
     */
    ActiveSourceLength_300A_021A = 805962266,
    /**
     * < Source Model ID (300A,021B)
     */
    SourceModelID_300A_021B = 805962267,
    /**
     * < Source Description (300A,021C)
     */
    SourceDescription_300A_021C = 805962268,
    /**
     * < Source Encapsulation Nominal Thickness (300A,0222)
     */
    SourceEncapsulationNominalThickness_300A_0222 = 805962274,
    /**
     * < Source Encapsulation Nominal Transmission (300A,0224)
     */
    SourceEncapsulationNominalTransmission_300A_0224 = 805962276,
    /**
     * < Source Isotope Name (300A,0226)
     */
    SourceIsotopeName_300A_0226 = 805962278,
    /**
     * < Source Isotope Half Life (300A,0228)
     */
    SourceIsotopeHalfLife_300A_0228 = 805962280,
    /**
     * < Source Strength Units (300A,0229)
     */
    SourceStrengthUnits_300A_0229 = 805962281,
    /**
     * < Reference Air Kerma Rate (300A,022A)
     */
    ReferenceAirKermaRate_300A_022A = 805962282,
    /**
     * < Source Strength (300A,022B)
     */
    SourceStrength_300A_022B = 805962283,
    /**
     * < Source Strength Reference Date (300A,022C)
     */
    SourceStrengthReferenceDate_300A_022C = 805962284,
    /**
     * < Source Strength Reference Time (300A,022E)
     */
    SourceStrengthReferenceTime_300A_022E = 805962286,
    /**
     * < Application Setup Sequence (300A,0230)
     */
    ApplicationSetupSequence_300A_0230 = 805962288,
    /**
     * < Application Setup Type (300A,0232)
     */
    ApplicationSetupType_300A_0232 = 805962290,
    /**
     * < Application Setup Number (300A,0234)
     */
    ApplicationSetupNumber_300A_0234 = 805962292,
    /**
     * < Application Setup Name (300A,0236)
     */
    ApplicationSetupName_300A_0236 = 805962294,
    /**
     * < Application Setup Manufacturer (300A,0238)
     */
    ApplicationSetupManufacturer_300A_0238 = 805962296,
    /**
     * < Template Number (300A,0240)
     */
    TemplateNumber_300A_0240 = 805962304,
    /**
     * < Template Type (300A,0242)
     */
    TemplateType_300A_0242 = 805962306,
    /**
     * < Template Name (300A,0244)
     */
    TemplateName_300A_0244 = 805962308,
    /**
     * < Total Reference Air Kerma (300A,0250)
     */
    TotalReferenceAirKerma_300A_0250 = 805962320,
    /**
     * < Brachy Accessory Device Sequence (300A,0260)
     */
    BrachyAccessoryDeviceSequence_300A_0260 = 805962336,
    /**
     * < Brachy Accessory Device Number (300A,0262)
     */
    BrachyAccessoryDeviceNumber_300A_0262 = 805962338,
    /**
     * < Brachy Accessory Device ID (300A,0263)
     */
    BrachyAccessoryDeviceID_300A_0263 = 805962339,
    /**
     * < Brachy Accessory Device Type (300A,0264)
     */
    BrachyAccessoryDeviceType_300A_0264 = 805962340,
    /**
     * < Brachy Accessory Device Name (300A,0266)
     */
    BrachyAccessoryDeviceName_300A_0266 = 805962342,
    /**
     * < Brachy Accessory Device Nominal Thickness (300A,026A)
     */
    BrachyAccessoryDeviceNominalThickness_300A_026A = 805962346,
    /**
     * < Brachy Accessory Device Nominal Transmission (300A,026C)
     */
    BrachyAccessoryDeviceNominalTransmission_300A_026C = 805962348,
    /**
     * < Channel Effective Length (300A,0271)
     */
    ChannelEffectiveLength_300A_0271 = 805962353,
    /**
     * < Channel Inner Length (300A,0272)
     */
    ChannelInnerLength_300A_0272 = 805962354,
    /**
     * < Afterloader Channel ID (300A,0273)
     */
    AfterloaderChannelID_300A_0273 = 805962355,
    /**
     * < Source Applicator Tip Length (300A,0274)
     */
    SourceApplicatorTipLength_300A_0274 = 805962356,
    /**
     * < Channel Sequence (300A,0280)
     */
    ChannelSequence_300A_0280 = 805962368,
    /**
     * < Channel Number (300A,0282)
     */
    ChannelNumber_300A_0282 = 805962370,
    /**
     * < Channel Length (300A,0284)
     */
    ChannelLength_300A_0284 = 805962372,
    /**
     * < Channel Total Time (300A,0286)
     */
    ChannelTotalTime_300A_0286 = 805962374,
    /**
     * < Source Movement Type (300A,0288)
     */
    SourceMovementType_300A_0288 = 805962376,
    /**
     * < Number of Pulses (300A,028A)
     */
    NumberOfPulses_300A_028A = 805962378,
    /**
     * < Pulse Repetition Interval (300A,028C)
     */
    PulseRepetitionInterval_300A_028C = 805962380,
    /**
     * < Source Applicator Number (300A,0290)
     */
    SourceApplicatorNumber_300A_0290 = 805962384,
    /**
     * < Source Applicator ID (300A,0291)
     */
    SourceApplicatorID_300A_0291 = 805962385,
    /**
     * < Source Applicator Type (300A,0292)
     */
    SourceApplicatorType_300A_0292 = 805962386,
    /**
     * < Source Applicator Name (300A,0294)
     */
    SourceApplicatorName_300A_0294 = 805962388,
    /**
     * < Source Applicator Length (300A,0296)
     */
    SourceApplicatorLength_300A_0296 = 805962390,
    /**
     * < Source Applicator Manufacturer (300A,0298)
     */
    SourceApplicatorManufacturer_300A_0298 = 805962392,
    /**
     * < Source Applicator Wall Nominal Thickness (300A,029C)
     */
    SourceApplicatorWallNominalThickness_300A_029C = 805962396,
    /**
     * < Source Applicator Wall Nominal Transmission (300A,029E)
     */
    SourceApplicatorWallNominalTransmission_300A_029E = 805962398,
    /**
     * < Source Applicator Step Size (300A,02A0)
     */
    SourceApplicatorStepSize_300A_02A0 = 805962400,
    /**
     * < Transfer Tube Number (300A,02A2)
     */
    TransferTubeNumber_300A_02A2 = 805962402,
    /**
     * < Transfer Tube Length (300A,02A4)
     */
    TransferTubeLength_300A_02A4 = 805962404,
    /**
     * < Channel Shield Sequence (300A,02B0)
     */
    ChannelShieldSequence_300A_02B0 = 805962416,
    /**
     * < Channel Shield Number (300A,02B2)
     */
    ChannelShieldNumber_300A_02B2 = 805962418,
    /**
     * < Channel Shield ID (300A,02B3)
     */
    ChannelShieldID_300A_02B3 = 805962419,
    /**
     * < Channel Shield Name (300A,02B4)
     */
    ChannelShieldName_300A_02B4 = 805962420,
    /**
     * < Channel Shield Nominal Thickness (300A,02B8)
     */
    ChannelShieldNominalThickness_300A_02B8 = 805962424,
    /**
     * < Channel Shield Nominal Transmission (300A,02BA)
     */
    ChannelShieldNominalTransmission_300A_02BA = 805962426,
    /**
     * < Final Cumulative Time Weight (300A,02C8)
     */
    FinalCumulativeTimeWeight_300A_02C8 = 805962440,
    /**
     * < Brachy Control Point Sequence (300A,02D0)
     */
    BrachyControlPointSequence_300A_02D0 = 805962448,
    /**
     * < Control Point Relative Position (300A,02D2)
     */
    ControlPointRelativePosition_300A_02D2 = 805962450,
    /**
     * < Control Point 3D Position (300A,02D4)
     */
    ControlPoint3DPosition_300A_02D4 = 805962452,
    /**
     * < Cumulative Time Weight (300A,02D6)
     */
    CumulativeTimeWeight_300A_02D6 = 805962454,
    /**
     * < Compensator Divergence (300A,02E0)
     */
    CompensatorDivergence_300A_02E0 = 805962464,
    /**
     * < Compensator Mounting Position (300A,02E1)
     */
    CompensatorMountingPosition_300A_02E1 = 805962465,
    /**
     * < Source to Compensator Distance (300A,02E2)
     */
    SourceToCompensatorDistance_300A_02E2 = 805962466,
    /**
     * < Total Compensator Tray Water-Equivalent Thickness (300A,02E3)
     */
    TotalCompensatorTrayWaterEquivalentThickness_300A_02E3 = 805962467,
    /**
     * < Isocenter to Compensator Tray Distance (300A,02E4)
     */
    IsocenterToCompensatorTrayDistance_300A_02E4 = 805962468,
    /**
     * < Compensator Column Offset (300A,02E5)
     */
    CompensatorColumnOffset_300A_02E5 = 805962469,
    /**
     * < Isocenter to Compensator Distances (300A,02E6)
     */
    IsocenterToCompensatorDistances_300A_02E6 = 805962470,
    /**
     * < Compensator Relative Stopping Power Ratio (300A,02E7)
     */
    CompensatorRelativeStoppingPowerRatio_300A_02E7 = 805962471,
    /**
     * < Compensator Milling Tool Diameter (300A,02E8)
     */
    CompensatorMillingToolDiameter_300A_02E8 = 805962472,
    /**
     * < Ion Range Compensator Sequence (300A,02EA)
     */
    IonRangeCompensatorSequence_300A_02EA = 805962474,
    /**
     * < Compensator Description (300A,02EB)
     */
    CompensatorDescription_300A_02EB = 805962475,
    /**
     * < Radiation Mass Number (300A,0302)
     */
    RadiationMassNumber_300A_0302 = 805962498,
    /**
     * < Radiation Atomic Number (300A,0304)
     */
    RadiationAtomicNumber_300A_0304 = 805962500,
    /**
     * < Radiation Charge State (300A,0306)
     */
    RadiationChargeState_300A_0306 = 805962502,
    /**
     * < Scan Mode (300A,0308)
     */
    ScanMode_300A_0308 = 805962504,
    /**
     * < Modulated Scan Mode Type (300A,0309)
     */
    ModulatedScanModeType_300A_0309 = 805962505,
    /**
     * < Virtual Source-Axis Distances (300A,030A)
     */
    VirtualSourceAxisDistances_300A_030A = 805962506,
    /**
     * < Snout Sequence (300A,030C)
     */
    SnoutSequence_300A_030C = 805962508,
    /**
     * < Snout Position (300A,030D)
     */
    SnoutPosition_300A_030D = 805962509,
    /**
     * < Snout ID (300A,030F)
     */
    SnoutID_300A_030F = 805962511,
    /**
     * < Number of Range Shifters (300A,0312)
     */
    NumberOfRangeShifters_300A_0312 = 805962514,
    /**
     * < Range Shifter Sequence (300A,0314)
     */
    RangeShifterSequence_300A_0314 = 805962516,
    /**
     * < Range Shifter Number (300A,0316)
     */
    RangeShifterNumber_300A_0316 = 805962518,
    /**
     * < Range Shifter ID (300A,0318)
     */
    RangeShifterID_300A_0318 = 805962520,
    /**
     * < Range Shifter Type (300A,0320)
     */
    RangeShifterType_300A_0320 = 805962528,
    /**
     * < Range Shifter Description (300A,0322)
     */
    RangeShifterDescription_300A_0322 = 805962530,
    /**
     * < Number of Lateral Spreading Devices (300A,0330)
     */
    NumberOfLateralSpreadingDevices_300A_0330 = 805962544,
    /**
     * < Lateral Spreading Device Sequence (300A,0332)
     */
    LateralSpreadingDeviceSequence_300A_0332 = 805962546,
    /**
     * < Lateral Spreading Device Number (300A,0334)
     */
    LateralSpreadingDeviceNumber_300A_0334 = 805962548,
    /**
     * < Lateral Spreading Device ID (300A,0336)
     */
    LateralSpreadingDeviceID_300A_0336 = 805962550,
    /**
     * < Lateral Spreading Device Type (300A,0338)
     */
    LateralSpreadingDeviceType_300A_0338 = 805962552,
    /**
     * < Lateral Spreading Device Description (300A,033A)
     */
    LateralSpreadingDeviceDescription_300A_033A = 805962554,
    /**
     * < Lateral Spreading Device Water Equivalent Thickness (300A,033C)
     */
    LateralSpreadingDeviceWaterEquivalentThickness_300A_033C = 805962556,
    /**
     * < Number of Range Modulators (300A,0340)
     */
    NumberOfRangeModulators_300A_0340 = 805962560,
    /**
     * < Range Modulator Sequence (300A,0342)
     */
    RangeModulatorSequence_300A_0342 = 805962562,
    /**
     * < Range Modulator Number (300A,0344)
     */
    RangeModulatorNumber_300A_0344 = 805962564,
    /**
     * < Range Modulator ID (300A,0346)
     */
    RangeModulatorID_300A_0346 = 805962566,
    /**
     * < Range Modulator Type (300A,0348)
     */
    RangeModulatorType_300A_0348 = 805962568,
    /**
     * < Range Modulator Description (300A,034A)
     */
    RangeModulatorDescription_300A_034A = 805962570,
    /**
     * < Beam Current Modulation ID (300A,034C)
     */
    BeamCurrentModulationID_300A_034C = 805962572,
    /**
     * < Patient Support Type (300A,0350)
     */
    PatientSupportType_300A_0350 = 805962576,
    /**
     * < Patient Support ID (300A,0352)
     */
    PatientSupportID_300A_0352 = 805962578,
    /**
     * < Patient Support Accessory Code (300A,0354)
     */
    PatientSupportAccessoryCode_300A_0354 = 805962580,
    /**
     * < Tray Accessory Code (300A,0355)
     */
    TrayAccessoryCode_300A_0355 = 805962581,
    /**
     * < Fixation Light Azimuthal Angle (300A,0356)
     */
    FixationLightAzimuthalAngle_300A_0356 = 805962582,
    /**
     * < Fixation Light Polar Angle (300A,0358)
     */
    FixationLightPolarAngle_300A_0358 = 805962584,
    /**
     * < Meterset Rate (300A,035A)
     */
    MetersetRate_300A_035A = 805962586,
    /**
     * < Range Shifter Settings Sequence (300A,0360)
     */
    RangeShifterSettingsSequence_300A_0360 = 805962592,
    /**
     * < Range Shifter Setting (300A,0362)
     */
    RangeShifterSetting_300A_0362 = 805962594,
    /**
     * < Isocenter to Range Shifter Distance (300A,0364)
     */
    IsocenterToRangeShifterDistance_300A_0364 = 805962596,
    /**
     * < Range Shifter Water Equivalent Thickness (300A,0366)
     */
    RangeShifterWaterEquivalentThickness_300A_0366 = 805962598,
    /**
     * < Lateral Spreading Device Settings Sequence (300A,0370)
     */
    LateralSpreadingDeviceSettingsSequence_300A_0370 = 805962608,
    /**
     * < Lateral Spreading Device Setting (300A,0372)
     */
    LateralSpreadingDeviceSetting_300A_0372 = 805962610,
    /**
     * < Isocenter to Lateral Spreading Device Distance (300A,0374)
     */
    IsocenterToLateralSpreadingDeviceDistance_300A_0374 = 805962612,
    /**
     * < Range Modulator Settings Sequence (300A,0380)
     */
    RangeModulatorSettingsSequence_300A_0380 = 805962624,
    /**
     * < Range Modulator Gating Start Value (300A,0382)
     */
    RangeModulatorGatingStartValue_300A_0382 = 805962626,
    /**
     * < Range Modulator Gating Stop Value (300A,0384)
     */
    RangeModulatorGatingStopValue_300A_0384 = 805962628,
    /**
     * < Range Modulator Gating Start Water Equivalent Thickness (300A,0386)
     */
    RangeModulatorGatingStartWaterEquivalentThickness_300A_0386 = 805962630,
    /**
     * < Range Modulator Gating Stop Water Equivalent Thickness (300A,0388)
     */
    RangeModulatorGatingStopWaterEquivalentThickness_300A_0388 = 805962632,
    /**
     * < Isocenter to Range Modulator Distance (300A,038A)
     */
    IsocenterToRangeModulatorDistance_300A_038A = 805962634,
    /**
     * < Scan Spot Time Offset (300A,038F)
     */
    ScanSpotTimeOffset_300A_038F = 805962639,
    /**
     * < Scan Spot Tune ID (300A,0390)
     */
    ScanSpotTuneID_300A_0390 = 805962640,
    /**
     * < Scan Spot Prescribed Indices (300A,0391)
     */
    ScanSpotPrescribedIndices_300A_0391 = 805962641,
    /**
     * < Number of Scan Spot Positions (300A,0392)
     */
    NumberOfScanSpotPositions_300A_0392 = 805962642,
    /**
     * < Scan Spot Reordered (300A,0393)
     */
    ScanSpotReordered_300A_0393 = 805962643,
    /**
     * < Scan Spot Position Map (300A,0394)
     */
    ScanSpotPositionMap_300A_0394 = 805962644,
    /**
     * < Scan Spot Reordering Allowed (300A,0395)
     */
    ScanSpotReorderingAllowed_300A_0395 = 805962645,
    /**
     * < Scan Spot Meterset Weights (300A,0396)
     */
    ScanSpotMetersetWeights_300A_0396 = 805962646,
    /**
     * < Scanning Spot Size (300A,0398)
     */
    ScanningSpotSize_300A_0398 = 805962648,
    /**
     * < Number of Paintings (300A,039A)
     */
    NumberOfPaintings_300A_039A = 805962650,
    /**
     * < Ion Tolerance Table Sequence (300A,03A0)
     */
    IonToleranceTableSequence_300A_03A0 = 805962656,
    /**
     * < Ion Beam Sequence (300A,03A2)
     */
    IonBeamSequence_300A_03A2 = 805962658,
    /**
     * < Ion Beam Limiting Device Sequence (300A,03A4)
     */
    IonBeamLimitingDeviceSequence_300A_03A4 = 805962660,
    /**
     * < Ion Block Sequence (300A,03A6)
     */
    IonBlockSequence_300A_03A6 = 805962662,
    /**
     * < Ion Control Point Sequence (300A,03A8)
     */
    IonControlPointSequence_300A_03A8 = 805962664,
    /**
     * < Ion Wedge Sequence (300A,03AA)
     */
    IonWedgeSequence_300A_03AA = 805962666,
    /**
     * < Ion Wedge Position Sequence (300A,03AC)
     */
    IonWedgePositionSequence_300A_03AC = 805962668,
    /**
     * < Referenced Setup Image Sequence (300A,0401)
     */
    ReferencedSetupImageSequence_300A_0401 = 805962753,
    /**
     * < Setup Image Comment (300A,0402)
     */
    SetupImageComment_300A_0402 = 805962754,
    /**
     * < Motion Synchronization Sequence (300A,0410)
     */
    MotionSynchronizationSequence_300A_0410 = 805962768,
    /**
     * < Control Point Orientation (300A,0412)
     */
    ControlPointOrientation_300A_0412 = 805962770,
    /**
     * < General Accessory Sequence (300A,0420)
     */
    GeneralAccessorySequence_300A_0420 = 805962784,
    /**
     * < General Accessory ID (300A,0421)
     */
    GeneralAccessoryID_300A_0421 = 805962785,
    /**
     * < General Accessory Description (300A,0422)
     */
    GeneralAccessoryDescription_300A_0422 = 805962786,
    /**
     * < General Accessory Type (300A,0423)
     */
    GeneralAccessoryType_300A_0423 = 805962787,
    /**
     * < General Accessory Number (300A,0424)
     */
    GeneralAccessoryNumber_300A_0424 = 805962788,
    /**
     * < Source to General Accessory Distance (300A,0425)
     */
    SourceToGeneralAccessoryDistance_300A_0425 = 805962789,
    /**
     * < Applicator Geometry Sequence (300A,0431)
     */
    ApplicatorGeometrySequence_300A_0431 = 805962801,
    /**
     * < Applicator Aperture Shape (300A,0432)
     */
    ApplicatorApertureShape_300A_0432 = 805962802,
    /**
     * < Applicator Opening (300A,0433)
     */
    ApplicatorOpening_300A_0433 = 805962803,
    /**
     * < Applicator Opening X (300A,0434)
     */
    ApplicatorOpeningX_300A_0434 = 805962804,
    /**
     * < Applicator Opening Y (300A,0435)
     */
    ApplicatorOpeningY_300A_0435 = 805962805,
    /**
     * < Source to Applicator Mounting Position Distance (300A,0436)
     */
    SourceToApplicatorMountingPositionDistance_300A_0436 = 805962806,
    /**
     * < Number of Block Slab Items (300A,0440)
     */
    NumberOfBlockSlabItems_300A_0440 = 805962816,
    /**
     * < Block Slab Sequence (300A,0441)
     */
    BlockSlabSequence_300A_0441 = 805962817,
    /**
     * < Block Slab Thickness (300A,0442)
     */
    BlockSlabThickness_300A_0442 = 805962818,
    /**
     * < Block Slab Number (300A,0443)
     */
    BlockSlabNumber_300A_0443 = 805962819,
    /**
     * < Device Motion Control Sequence (300A,0450)
     */
    DeviceMotionControlSequence_300A_0450 = 805962832,
    /**
     * < Device Motion Execution Mode (300A,0451)
     */
    DeviceMotionExecutionMode_300A_0451 = 805962833,
    /**
     * < Device Motion Observation Mode (300A,0452)
     */
    DeviceMotionObservationMode_300A_0452 = 805962834,
    /**
     * < Device Motion Parameter Code Sequence (300A,0453)
     */
    DeviceMotionParameterCodeSequence_300A_0453 = 805962835,
    /**
     * < Distal Depth Fraction (300A,0501)
     */
    DistalDepthFraction_300A_0501 = 805963009,
    /**
     * < Distal Depth (300A,0502)
     */
    DistalDepth_300A_0502 = 805963010,
    /**
     * < Nominal Range Modulation Fractions (300A,0503)
     */
    NominalRangeModulationFractions_300A_0503 = 805963011,
    /**
     * < Nominal Range Modulated Region Depths (300A,0504)
     */
    NominalRangeModulatedRegionDepths_300A_0504 = 805963012,
    /**
     * < Depth Dose Parameters Sequence (300A,0505)
     */
    DepthDoseParametersSequence_300A_0505 = 805963013,
    /**
     * < Delivered Depth Dose Parameters Sequence (300A,0506)
     */
    DeliveredDepthDoseParametersSequence_300A_0506 = 805963014,
    /**
     * < Delivered Distal Depth Fraction (300A,0507)
     */
    DeliveredDistalDepthFraction_300A_0507 = 805963015,
    /**
     * < Delivered Distal Depth (300A,0508)
     */
    DeliveredDistalDepth_300A_0508 = 805963016,
    /**
     * < Delivered Nominal Range Modulation Fractions (300A,0509)
     */
    DeliveredNominalRangeModulationFractions_300A_0509 = 805963017,
    /**
     * < Delivered Nominal Range Modulated Region Depths (300A,0510)
     */
    DeliveredNominalRangeModulatedRegionDepths_300A_0510 = 805963024,
    /**
     * < Delivered Reference Dose Definition (300A,0511)
     */
    DeliveredReferenceDoseDefinition_300A_0511 = 805963025,
    /**
     * < Reference Dose Definition (300A,0512)
     */
    ReferenceDoseDefinition_300A_0512 = 805963026,
    /**
     * < Referenced RT Plan Sequence (300C,0002)
     */
    ReferencedRTPlanSequence_300C_0002 = 806092802,
    /**
     * < Referenced Beam Sequence (300C,0004)
     */
    ReferencedBeamSequence_300C_0004 = 806092804,
    /**
     * < Referenced Beam Number (300C,0006)
     */
    ReferencedBeamNumber_300C_0006 = 806092806,
    /**
     * < Referenced Reference Image Number (300C,0007)
     */
    ReferencedReferenceImageNumber_300C_0007 = 806092807,
    /**
     * < Start Cumulative Meterset Weight (300C,0008)
     */
    StartCumulativeMetersetWeight_300C_0008 = 806092808,
    /**
     * < End Cumulative Meterset Weight (300C,0009)
     */
    EndCumulativeMetersetWeight_300C_0009 = 806092809,
    /**
     * < Referenced Brachy Application Setup Sequence (300C,000A)
     */
    ReferencedBrachyApplicationSetupSequence_300C_000A = 806092810,
    /**
     * < Referenced Brachy Application Setup Number (300C,000C)
     */
    ReferencedBrachyApplicationSetupNumber_300C_000C = 806092812,
    /**
     * < Referenced Source Number (300C,000E)
     */
    ReferencedSourceNumber_300C_000E = 806092814,
    /**
     * < Referenced Fraction Group Sequence (300C,0020)
     */
    ReferencedFractionGroupSequence_300C_0020 = 806092832,
    /**
     * < Referenced Fraction Group Number (300C,0022)
     */
    ReferencedFractionGroupNumber_300C_0022 = 806092834,
    /**
     * < Referenced Verification Image Sequence (300C,0040)
     */
    ReferencedVerificationImageSequence_300C_0040 = 806092864,
    /**
     * < Referenced Reference Image Sequence (300C,0042)
     */
    ReferencedReferenceImageSequence_300C_0042 = 806092866,
    /**
     * < Referenced Dose Reference Sequence (300C,0050)
     */
    ReferencedDoseReferenceSequence_300C_0050 = 806092880,
    /**
     * < Referenced Dose Reference Number (300C,0051)
     */
    ReferencedDoseReferenceNumber_300C_0051 = 806092881,
    /**
     * < Brachy Referenced Dose Reference Sequence (300C,0055)
     */
    BrachyReferencedDoseReferenceSequence_300C_0055 = 806092885,
    /**
     * < Referenced Structure Set Sequence (300C,0060)
     */
    ReferencedStructureSetSequence_300C_0060 = 806092896,
    /**
     * < Referenced Patient Setup Number (300C,006A)
     */
    ReferencedPatientSetupNumber_300C_006A = 806092906,
    /**
     * < Referenced Dose Sequence (300C,0080)
     */
    ReferencedDoseSequence_300C_0080 = 806092928,
    /**
     * < Referenced Tolerance Table Number (300C,00A0)
     */
    ReferencedToleranceTableNumber_300C_00A0 = 806092960,
    /**
     * < Referenced Bolus Sequence (300C,00B0)
     */
    ReferencedBolusSequence_300C_00B0 = 806092976,
    /**
     * < Referenced Wedge Number (300C,00C0)
     */
    ReferencedWedgeNumber_300C_00C0 = 806092992,
    /**
     * < Referenced Compensator Number (300C,00D0)
     */
    ReferencedCompensatorNumber_300C_00D0 = 806093008,
    /**
     * < Referenced Block Number (300C,00E0)
     */
    ReferencedBlockNumber_300C_00E0 = 806093024,
    /**
     * < Referenced Control Point Index (300C,00F0)
     */
    ReferencedControlPointIndex_300C_00F0 = 806093040,
    /**
     * < Referenced Control Point Sequence (300C,00F2)
     */
    ReferencedControlPointSequence_300C_00F2 = 806093042,
    /**
     * < Referenced Start Control Point Index (300C,00F4)
     */
    ReferencedStartControlPointIndex_300C_00F4 = 806093044,
    /**
     * < Referenced Stop Control Point Index (300C,00F6)
     */
    ReferencedStopControlPointIndex_300C_00F6 = 806093046,
    /**
     * < Referenced Range Shifter Number (300C,0100)
     */
    ReferencedRangeShifterNumber_300C_0100 = 806093056,
    /**
     * < Referenced Lateral Spreading Device Number (300C,0102)
     */
    ReferencedLateralSpreadingDeviceNumber_300C_0102 = 806093058,
    /**
     * < Referenced Range Modulator Number (300C,0104)
     */
    ReferencedRangeModulatorNumber_300C_0104 = 806093060,
    /**
     * < Omitted Beam Task Sequence (300C,0111)
     */
    OmittedBeamTaskSequence_300C_0111 = 806093073,
    /**
     * < Reason for Omission (300C,0112)
     */
    ReasonForOmission_300C_0112 = 806093074,
    /**
     * < Reason for Omission Description (300C,0113)
     */
    ReasonForOmissionDescription_300C_0113 = 806093075,
    /**
     * < Approval Status (300E,0002)
     */
    ApprovalStatus_300E_0002 = 806223874,
    /**
     * < Review Date (300E,0004)
     */
    ReviewDate_300E_0004 = 806223876,
    /**
     * < Review Time (300E,0005)
     */
    ReviewTime_300E_0005 = 806223877,
    /**
     * < Reviewer Name (300E,0008)
     */
    ReviewerName_300E_0008 = 806223880,
    /**
     * < Radiobiological Dose Effect Sequence (3010,0001)
     */
    RadiobiologicalDoseEffectSequence_3010_0001 = 806354945,
    /**
     * < Radiobiological Dose Effect Flag (3010,0002)
     */
    RadiobiologicalDoseEffectFlag_3010_0002 = 806354946,
    /**
     * < Effective Dose Calculation Method Category Code Sequence (3010,0003)
     */
    EffectiveDoseCalculationMethodCategoryCodeSequence_3010_0003 = 806354947,
    /**
     * < Effective Dose Calculation Method Code Sequence (3010,0004)
     */
    EffectiveDoseCalculationMethodCodeSequence_3010_0004 = 806354948,
    /**
     * < Effective Dose Calculation Method Description (3010,0005)
     */
    EffectiveDoseMethodDescription_3010_0005 = 806354949,
    /**
     * < Conceptual Volume UID (3010,0006)
     */
    ConceptualVolumeUID_3010_0006 = 806354950,
    /**
     * < Originating SOP Instance Reference Sequence (3010,0007)
     */
    OriginatingSOPInstanceReferenceSequence_3010_0007 = 806354951,
    /**
     * < Conceptual Volume Constituent Sequence (3010,0008)
     */
    ConceptualVolumeConstituentSequence_3010_0008 = 806354952,
    /**
     * < Equivalent Conceptual Volume Instance Reference Sequence (3010,0009)
     */
    EquivalentConceptualVolumeInstanceReferenceSequence_3010_0009 = 806354953,
    /**
     * < Equivalent Conceptual Volumes Sequence (3010,000A)
     */
    EquivalentConceptualVolumesSequence_3010_000A = 806354954,
    /**
     * < Referenced Conceptual Volume UID (3010,000B)
     */
    ReferencedConceptualVolumeUID_3010_000B = 806354955,
    /**
     * < Conceptual Volume Combination Expression (3010,000C)
     */
    ConceptualVolumeCombinationExpression_3010_000C = 806354956,
    /**
     * < Conceptual Volume Constituent Index (3010,000D)
     */
    ConceptualVolumeConstituentIndex_3010_000D = 806354957,
    /**
     * < Conceptual Volume Combination Flag (3010,000E)
     */
    ConceptualVolumeCombinationFlag_3010_000E = 806354958,
    /**
     * < Conceptual Volume Combination Description (3010,000F)
     */
    ConceptualVolumeCombinationDescription_3010_000F = 806354959,
    /**
     * < Conceptual Volume Segmentation Defined Flag (3010,0010)
     */
    ConceptualVolumeSegmentationDefinedFlag_3010_0010 = 806354960,
    /**
     * < Conceptual Volume Segmentation Reference Sequence (3010,0011)
     */
    ConceptualVolumeSegmentationReferenceSequence_3010_0011 = 806354961,
    /**
     * < Conceptual Volume Constituent Segmentation Reference Sequence (3010,0012)
     */
    ConceptualVolumeConstituentSegmentationReferenceSequence_3010_0012 = 806354962,
    /**
     * < Constituent Conceptual Volume UID (3010,0013)
     */
    ConstituentConceptualVolumeUID_3010_0013 = 806354963,
    /**
     * < Derivation Conceptual Volume Sequence (3010,0014)
     */
    DerivationConceptualVolumeSequence_3010_0014 = 806354964,
    /**
     * < Source Conceptual Volume UID (3010,0015)
     */
    SourceConceptualVolumeUID_3010_0015 = 806354965,
    /**
     * < Conceptual Volume Derivation Algorithm Sequence (3010,0016)
     */
    ConceptualVolumeDerivationAlgorithmSequence_3010_0016 = 806354966,
    /**
     * < Conceptual Volume Description (3010,0017)
     */
    ConceptualVolumeDescription_3010_0017 = 806354967,
    /**
     * < Source Conceptual Volume Sequence (3010,0018)
     */
    SourceConceptualVolumeSequence_3010_0018 = 806354968,
    /**
     * < Author Identification Sequence (3010,0019)
     */
    AuthorIdentificationSequence_3010_0019 = 806354969,
    /**
     * < Manufacturer's Model Version (3010,001A)
     */
    ManufacturersModelVersion_3010_001A = 806354970,
    /**
     * < Device Alternate Identifier (3010,001B)
     */
    DeviceAlternateIdentifier_3010_001B = 806354971,
    /**
     * < Device Alternate Identifier Type (3010,001C)
     */
    DeviceAlternateIdentifierType_3010_001C = 806354972,
    /**
     * < Device Alternate Identifier Format (3010,001D)
     */
    DeviceAlternateIdentifierFormat_3010_001D = 806354973,
    /**
     * < Segmentation Creation Template Label (3010,001E)
     */
    SegmentationCreationTemplateLabel_3010_001E = 806354974,
    /**
     * < Segmentation Template UID (3010,001F)
     */
    SegmentationTemplateUID_3010_001F = 806354975,
    /**
     * < Referenced Segment Reference Index (3010,0020)
     */
    ReferencedSegmentReferenceIndex_3010_0020 = 806354976,
    /**
     * < Segment Reference Sequence (3010,0021)
     */
    SegmentReferenceSequence_3010_0021 = 806354977,
    /**
     * < Segment Reference Index (3010,0022)
     */
    SegmentReferenceIndex_3010_0022 = 806354978,
    /**
     * < Direct Segment Reference Sequence (3010,0023)
     */
    DirectSegmentReferenceSequence_3010_0023 = 806354979,
    /**
     * < Combination Segment Reference Sequence (3010,0024)
     */
    CombinationSegmentReferenceSequence_3010_0024 = 806354980,
    /**
     * < Conceptual Volume Sequence (3010,0025)
     */
    ConceptualVolumeSequence_3010_0025 = 806354981,
    /**
     * < Segmented RT Accessory Device Sequence (3010,0026)
     */
    SegmentedRTAccessoryDeviceSequence_3010_0026 = 806354982,
    /**
     * < Segment Characteristics Sequence (3010,0027)
     */
    SegmentCharacteristicsSequence_3010_0027 = 806354983,
    /**
     * < Related Segment Characteristics Sequence (3010,0028)
     */
    RelatedSegmentCharacteristicsSequence_3010_0028 = 806354984,
    /**
     * < Segment Characteristics Precedence (3010,0029)
     */
    SegmentCharacteristicsPrecedence_3010_0029 = 806354985,
    /**
     * < RT Segment Annotation Sequence (3010,002A)
     */
    RTSegmentAnnotationSequence_3010_002A = 806354986,
    /**
     * < Segment Annotation Category Code Sequence (3010,002B)
     */
    SegmentAnnotationCategoryCodeSequence_3010_002B = 806354987,
    /**
     * < Segment Annotation Type Code Sequence (3010,002C)
     */
    SegmentAnnotationTypeCodeSequence_3010_002C = 806354988,
    /**
     * < Device Label (3010,002D)
     */
    DeviceLabel_3010_002D = 806354989,
    /**
     * < Device Type Code Sequence (3010,002E)
     */
    DeviceTypeCodeSequence_3010_002E = 806354990,
    /**
     * < Patient Equipment Relationship Code Sequence (3010,0030)
     */
    PatientEquipmentRelationshipCodeSequence_3010_0030 = 806354992,
    /**
     * < Referenced Fiducials UID (3010,0031)
     */
    ReferencedFiducialsUID_3010_0031 = 806354993,
    /**
     * < Patient Treatment Orientation Sequence (3010,0032)
     */
    PatientTreatmentOrientationSequence_3010_0032 = 806354994,
    /**
     * < User Content Label (3010,0033)
     */
    UserContentLabel_3010_0033 = 806354995,
    /**
     * < User Content Long Label (3010,0034)
     */
    UserContentLongLabel_3010_0034 = 806354996,
    /**
     * < Entity Label (3010,0035)
     */
    EntityLabel_3010_0035 = 806354997,
    /**
     * < Entity Name (3010,0036)
     */
    EntityName_3010_0036 = 806354998,
    /**
     * < Entity Description (3010,0037)
     */
    EntityDescription_3010_0037 = 806354999,
    /**
     * < Entity Long Label (3010,0038)
     */
    EntityLongLabel_3010_0038 = 806355000,
    /**
     * < Device Index (3010,0039)
     */
    DeviceIndex_3010_0039 = 806355001,
    /**
     * < RT Treatment Phase Index (3010,003A)
     */
    RTTreatmentPhaseIndex_3010_003A = 806355002,
    /**
     * < RT Treatment Phase UID (3010,003B)
     */
    RTTreatmentPhaseUID_3010_003B = 806355003,
    /**
     * < RT Prescription Index (3010,003C)
     */
    RTPrescriptionIndex_3010_003C = 806355004,
    /**
     * < RT Segment Annotation Index (3010,003D)
     */
    RTSegmentAnnotationIndex_3010_003D = 806355005,
    /**
     * < Basis RT Treatment Phase Index (3010,003E)
     */
    BasisRTTreatmentPhaseIndex_3010_003E = 806355006,
    /**
     * < Related RT Treatment Phase Index (3010,003F)
     */
    RelatedRTTreatmentPhaseIndex_3010_003F = 806355007,
    /**
     * < Referenced RT Treatment Phase Index (3010,0040)
     */
    ReferencedRTTreatmentPhaseIndex_3010_0040 = 806355008,
    /**
     * < Referenced RT Prescription Index (3010,0041)
     */
    ReferencedRTPrescriptionIndex_3010_0041 = 806355009,
    /**
     * < Referenced Parent RT Prescription Index (3010,0042)
     */
    ReferencedParentRTPrescriptionIndex_3010_0042 = 806355010,
    /**
     * < Manufacturer's Device Identifier (3010,0043)
     */
    ManufacturerDeviceIdentifier_3010_0043 = 806355011,
    /**
     * < Instance-Level Referenced Performed Procedure Step Sequence (3010,0044)
     */
    InstanceLevelReferencedPerformedProcedureStepSequence_3010_0044 = 806355012,
    /**
     * < RT Treatment Phase Intent Presence Flag (3010,0045)
     */
    RTTreatmentPhaseIntentPresenceFlag_3010_0045 = 806355013,
    /**
     * < Radiotherapy Treatment Type (3010,0046)
     */
    RadiotherapyTreatmentType_3010_0046 = 806355014,
    /**
     * < Teletherapy Radiation Type (3010,0047)
     */
    TeletherapyRadiationType_3010_0047 = 806355015,
    /**
     * < Brachytherapy Source Type (3010,0048)
     */
    BrachytherapySourceType_3010_0048 = 806355016,
    /**
     * < Referenced RT Treatment Phase Sequence (3010,0049)
     */
    ReferencedRTTreatmentPhaseSequence_3010_0049 = 806355017,
    /**
     * < Referenced Direct Segment Instance Sequence (3010,004A)
     */
    ReferencedDirectSegmentInstanceSequence_3010_004A = 806355018,
    /**
     * < Intended RT Treatment Phase Sequence (3010,004B)
     */
    IntendedRTTreatmentPhaseSequence_3010_004B = 806355019,
    /**
     * < Intended Phase Start Date (3010,004C)
     */
    IntendedPhaseStartDate_3010_004C = 806355020,
    /**
     * < Intended Phase End Date (3010,004D)
     */
    IntendedPhaseEndDate_3010_004D = 806355021,
    /**
     * < RT Treatment Phase Interval Sequence (3010,004E)
     */
    RTTreatmentPhaseIntervalSequence_3010_004E = 806355022,
    /**
     * < Temporal Relationship Interval Anchor (3010,004F)
     */
    TemporalRelationshipIntervalAnchor_3010_004F = 806355023,
    /**
     * < Minimum Number of Interval Days (3010,0050)
     */
    MinimumNumberOfIntervalDays_3010_0050 = 806355024,
    /**
     * < Maximum Number of Interval Days (3010,0051)
     */
    MaximumNumberOfIntervalDays_3010_0051 = 806355025,
    /**
     * < Pertinent SOP Classes in Study (3010,0052)
     */
    PertinentSOPClassesInStudy_3010_0052 = 806355026,
    /**
     * < Pertinent SOP Classes in Series (3010,0053)
     */
    PertinentSOPClassesInSeries_3010_0053 = 806355027,
    /**
     * < RT Prescription Label (3010,0054)
     */
    RTPrescriptionLabel_3010_0054 = 806355028,
    /**
     * < RT Physician Intent Predecessor Sequence (3010,0055)
     */
    RTPhysicianIntentPredecessorSequence_3010_0055 = 806355029,
    /**
     * < RT Treatment Approach Label (3010,0056)
     */
    RTTreatmentApproachLabel_3010_0056 = 806355030,
    /**
     * < RT Physician Intent Sequence (3010,0057)
     */
    RTPhysicianIntentSequence_3010_0057 = 806355031,
    /**
     * < RT Physician Intent Index (3010,0058)
     */
    RTPhysicianIntentIndex_3010_0058 = 806355032,
    /**
     * < RT Treatment Intent Type (3010,0059)
     */
    RTTreatmentIntentType_3010_0059 = 806355033,
    /**
     * < RT Physician Intent Narrative (3010,005A)
     */
    RTPhysicianIntentNarrative_3010_005A = 806355034,
    /**
     * < RT Protocol Code Sequence (3010,005B)
     */
    RTProtocolCodeSequence_3010_005B = 806355035,
    /**
     * < Reason for Superseding (3010,005C)
     */
    ReasonForSuperseding_3010_005C = 806355036,
    /**
     * < RT Diagnosis Code Sequence (3010,005D)
     */
    RTDiagnosisCodeSequence_3010_005D = 806355037,
    /**
     * < Referenced RT Physician Intent Index (3010,005E)
     */
    ReferencedRTPhysicianIntentIndex_3010_005E = 806355038,
    /**
     * < RT Physician Intent Input Instance Sequence (3010,005F)
     */
    RTPhysicianIntentInputInstanceSequence_3010_005F = 806355039,
    /**
     * < RT Anatomic Prescription Sequence (3010,0060)
     */
    RTAnatomicPrescriptionSequence_3010_0060 = 806355040,
    /**
     * < Prior Treatment Dose Description (3010,0061)
     */
    PriorTreatmentDoseDescription_3010_0061 = 806355041,
    /**
     * < Prior Treatment Reference Sequence (3010,0062)
     */
    PriorTreatmentReferenceSequence_3010_0062 = 806355042,
    /**
     * < Dosimetric Objective Evaluation Scope (3010,0063)
     */
    DosimetricObjectiveEvaluationScope_3010_0063 = 806355043,
    /**
     * < Therapeutic Role Category Code Sequence (3010,0064)
     */
    TherapeuticRoleCategoryCodeSequence_3010_0064 = 806355044,
    /**
     * < Therapeutic Role Type Code Sequence (3010,0065)
     */
    TherapeuticRoleTypeCodeSequence_3010_0065 = 806355045,
    /**
     * < Conceptual Volume Optimization Precedence (3010,0066)
     */
    ConceptualVolumeOptimizationPrecedence_3010_0066 = 806355046,
    /**
     * < Conceptual Volume Category Code Sequence (3010,0067)
     */
    ConceptualVolumeCategoryCodeSequence_3010_0067 = 806355047,
    /**
     * < Conceptual Volume Blocking Constraint (3010,0068)
     */
    ConceptualVolumeBlockingConstraint_3010_0068 = 806355048,
    /**
     * < Conceptual Volume Type Code Sequence (3010,0069)
     */
    ConceptualVolumeTypeCodeSequence_3010_0069 = 806355049,
    /**
     * < Conceptual Volume Type Modifier Code Sequence (3010,006A)
     */
    ConceptualVolumeTypeModifierCodeSequence_3010_006A = 806355050,
    /**
     * < RT Prescription Sequence (3010,006B)
     */
    RTPrescriptionSequence_3010_006B = 806355051,
    /**
     * < Dosimetric Objective Sequence (3010,006C)
     */
    DosimetricObjectiveSequence_3010_006C = 806355052,
    /**
     * < Dosimetric Objective Type Code Sequence (3010,006D)
     */
    DosimetricObjectiveTypeCodeSequence_3010_006D = 806355053,
    /**
     * < Dosimetric Objective UID (3010,006E)
     */
    DosimetricObjectiveUID_3010_006E = 806355054,
    /**
     * < Referenced Dosimetric Objective UID (3010,006F)
     */
    ReferencedDosimetricObjectiveUID_3010_006F = 806355055,
    /**
     * < Dosimetric Objective Parameter Sequence (3010,0070)
     */
    DosimetricObjectiveParameterSequence_3010_0070 = 806355056,
    /**
     * < Referenced Dosimetric Objectives Sequence (3010,0071)
     */
    ReferencedDosimetricObjectivesSequence_3010_0071 = 806355057,
    /**
     * < Absolute Dosimetric Objective Flag (3010,0073)
     */
    AbsoluteDosimetricObjectiveFlag_3010_0073 = 806355059,
    /**
     * < Dosimetric Objective Weight (3010,0074)
     */
    DosimetricObjectiveWeight_3010_0074 = 806355060,
    /**
     * < Dosimetric Objective Purpose (3010,0075)
     */
    DosimetricObjectivePurpose_3010_0075 = 806355061,
    /**
     * < Planning Input Information Sequence (3010,0076)
     */
    PlanningInputInformationSequence_3010_0076 = 806355062,
    /**
     * < Treatment Site (3010,0077)
     */
    TreatmentSite_3010_0077 = 806355063,
    /**
     * < Treatment Site Code Sequence (3010,0078)
     */
    TreatmentSiteCodeSequence_3010_0078 = 806355064,
    /**
     * < Fraction Pattern Sequence (3010,0079)
     */
    FractionPatternSequence_3010_0079 = 806355065,
    /**
     * < Treatment Technique Notes (3010,007A)
     */
    TreatmentTechniqueNotes_3010_007A = 806355066,
    /**
     * < Prescription Notes (3010,007B)
     */
    PrescriptionNotes_3010_007B = 806355067,
    /**
     * < Number of Interval Fractions (3010,007C)
     */
    NumberOfIntervalFractions_3010_007C = 806355068,
    /**
     * < Number of Fractions (3010,007D)
     */
    NumberOfFractions_3010_007D = 806355069,
    /**
     * < Intended Delivery Duration (3010,007E)
     */
    IntendedDeliveryDuration_3010_007E = 806355070,
    /**
     * < Fractionation Notes (3010,007F)
     */
    FractionationNotes_3010_007F = 806355071,
    /**
     * < RT Treatment Technique Code Sequence (3010,0080)
     */
    RTTreatmentTechniqueCodeSequence_3010_0080 = 806355072,
    /**
     * < Prescription Notes Sequence (3010,0081)
     */
    PrescriptionNotesSequence_3010_0081 = 806355073,
    /**
     * < Fraction-Based Relationship Sequence (3010,0082)
     */
    FractionBasedRelationshipSequence_3010_0082 = 806355074,
    /**
     * < Fraction-Based Relationship Interval Anchor (3010,0083)
     */
    FractionBasedRelationshipIntervalAnchor_3010_0083 = 806355075,
    /**
     * < Minimum Hours between Fractions (3010,0084)
     */
    MinimumHoursBetweenFractions_3010_0084 = 806355076,
    /**
     * < Intended Fraction Start Time (3010,0085)
     */
    IntendedFractionStartTime_3010_0085 = 806355077,
    /**
     * < Intended Start Day of Week (3010,0086)
     */
    IntendedStartDayOfWeek_3010_0086 = 806355078,
    /**
     * < Weekday Fraction Pattern Sequence (3010,0087)
     */
    WeekdayFractionPatternSequence_3010_0087 = 806355079,
    /**
     * < Delivery Time Structure Code Sequence (3010,0088)
     */
    DeliveryTimeStructureCodeSequence_3010_0088 = 806355080,
    /**
     * < Arbitrary (4000,0010)
     */
    Arbitrary_4000_0010 = 1073741840,
    /**
     * < Text Comments (4000,4000)
     */
    TextComments_4000_4000 = 1073758208,
    /**
     * < Results ID (4008,0040)
     */
    ResultsID_4008_0040 = 1074266176,
    /**
     * < Results ID Issuer (4008,0042)
     */
    ResultsIDIssuer_4008_0042 = 1074266178,
    /**
     * < Referenced Interpretation Sequence (4008,0050)
     */
    ReferencedInterpretationSequence_4008_0050 = 1074266192,
    /**
     * < Report Production Status (Trial) (4008,00FF)
     */
    ReportProductionStatusTrial_4008_00FF = 1074266367,
    /**
     * < Interpretation Recorded Date (4008,0100)
     */
    InterpretationRecordedDate_4008_0100 = 1074266368,
    /**
     * < Interpretation Recorded Time (4008,0101)
     */
    InterpretationRecordedTime_4008_0101 = 1074266369,
    /**
     * < Interpretation Recorder (4008,0102)
     */
    InterpretationRecorder_4008_0102 = 1074266370,
    /**
     * < Reference to Recorded Sound (4008,0103)
     */
    ReferenceToRecordedSound_4008_0103 = 1074266371,
    /**
     * < Interpretation Transcription Date (4008,0108)
     */
    InterpretationTranscriptionDate_4008_0108 = 1074266376,
    /**
     * < Interpretation Transcription Time (4008,0109)
     */
    InterpretationTranscriptionTime_4008_0109 = 1074266377,
    /**
     * < Interpretation Transcriber (4008,010A)
     */
    InterpretationTranscriber_4008_010A = 1074266378,
    /**
     * < Interpretation Text (4008,010B)
     */
    InterpretationText_4008_010B = 1074266379,
    /**
     * < Interpretation Author (4008,010C)
     */
    InterpretationAuthor_4008_010C = 1074266380,
    /**
     * < Interpretation Approver Sequence (4008,0111)
     */
    InterpretationApproverSequence_4008_0111 = 1074266385,
    /**
     * < Interpretation Approval Date (4008,0112)
     */
    InterpretationApprovalDate_4008_0112 = 1074266386,
    /**
     * < Interpretation Approval Time (4008,0113)
     */
    InterpretationApprovalTime_4008_0113 = 1074266387,
    /**
     * < Physician Approving Interpretation (4008,0114)
     */
    PhysicianApprovingInterpretation_4008_0114 = 1074266388,
    /**
     * < Interpretation Diagnosis Description (4008,0115)
     */
    InterpretationDiagnosisDescription_4008_0115 = 1074266389,
    /**
     * < Interpretation Diagnosis Code Sequence (4008,0117)
     */
    InterpretationDiagnosisCodeSequence_4008_0117 = 1074266391,
    /**
     * < Results Distribution List Sequence (4008,0118)
     */
    ResultsDistributionListSequence_4008_0118 = 1074266392,
    /**
     * < Distribution Name (4008,0119)
     */
    DistributionName_4008_0119 = 1074266393,
    /**
     * < Distribution Address (4008,011A)
     */
    DistributionAddress_4008_011A = 1074266394,
    /**
     * < Interpretation ID (4008,0200)
     */
    InterpretationID_4008_0200 = 1074266624,
    /**
     * < Interpretation ID Issuer (4008,0202)
     */
    InterpretationIDIssuer_4008_0202 = 1074266626,
    /**
     * < Interpretation Type ID (4008,0210)
     */
    InterpretationTypeID_4008_0210 = 1074266640,
    /**
     * < Interpretation Status ID (4008,0212)
     */
    InterpretationStatusID_4008_0212 = 1074266642,
    /**
     * < Impressions (4008,0300)
     */
    Impressions_4008_0300 = 1074266880,
    /**
     * < Results Comments (4008,4000)
     */
    ResultsComments_4008_4000 = 1074282496,
    /**
     * < Low Energy Detectors (4010,0001)
     */
    LowEnergyDetectors_4010_0001 = 1074790401,
    /**
     * < High Energy Detectors (4010,0002)
     */
    HighEnergyDetectors_4010_0002 = 1074790402,
    /**
     * < Detector Geometry Sequence (4010,0004)
     */
    DetectorGeometrySequence_4010_0004 = 1074790404,
    /**
     * < Threat ROI Voxel Sequence (4010,1001)
     */
    ThreatROIVoxelSequence_4010_1001 = 1074794497,
    /**
     * < Threat ROI Base (4010,1004)
     */
    ThreatROIBase_4010_1004 = 1074794500,
    /**
     * < Threat ROI Extents (4010,1005)
     */
    ThreatROIExtents_4010_1005 = 1074794501,
    /**
     * < Threat ROI Bitmap (4010,1006)
     */
    ThreatROIBitmap_4010_1006 = 1074794502,
    /**
     * < Route Segment ID (4010,1007)
     */
    RouteSegmentID_4010_1007 = 1074794503,
    /**
     * < Gantry Type (4010,1008)
     */
    GantryType_4010_1008 = 1074794504,
    /**
     * < OOI Owner Type (4010,1009)
     */
    OOIOwnerType_4010_1009 = 1074794505,
    /**
     * < Route Segment Sequence (4010,100A)
     */
    RouteSegmentSequence_4010_100A = 1074794506,
    /**
     * < Potential Threat Object ID (4010,1010)
     */
    PotentialThreatObjectID_4010_1010 = 1074794512,
    /**
     * < Threat Sequence (4010,1011)
     */
    ThreatSequence_4010_1011 = 1074794513,
    /**
     * < Threat Category (4010,1012)
     */
    ThreatCategory_4010_1012 = 1074794514,
    /**
     * < Threat Category Description (4010,1013)
     */
    ThreatCategoryDescription_4010_1013 = 1074794515,
    /**
     * < ATD Ability Assessment (4010,1014)
     */
    ATDAbilityAssessment_4010_1014 = 1074794516,
    /**
     * < ATD Assessment Flag (4010,1015)
     */
    ATDAssessmentFlag_4010_1015 = 1074794517,
    /**
     * < ATD Assessment Probability (4010,1016)
     */
    ATDAssessmentProbability_4010_1016 = 1074794518,
    /**
     * < Mass (4010,1017)
     */
    Mass_4010_1017 = 1074794519,
    /**
     * < Density (4010,1018)
     */
    Density_4010_1018 = 1074794520,
    /**
     * < Z Effective (4010,1019)
     */
    ZEffective_4010_1019 = 1074794521,
    /**
     * < Boarding Pass ID (4010,101A)
     */
    BoardingPassID_4010_101A = 1074794522,
    /**
     * < Center of Mass (4010,101B)
     */
    CenterOfMass_4010_101B = 1074794523,
    /**
     * < Center of PTO (4010,101C)
     */
    CenterOfPTO_4010_101C = 1074794524,
    /**
     * < Bounding Polygon (4010,101D)
     */
    BoundingPolygon_4010_101D = 1074794525,
    /**
     * < Route Segment Start Location ID (4010,101E)
     */
    RouteSegmentStartLocationID_4010_101E = 1074794526,
    /**
     * < Route Segment End Location ID (4010,101F)
     */
    RouteSegmentEndLocationID_4010_101F = 1074794527,
    /**
     * < Route Segment Location ID Type (4010,1020)
     */
    RouteSegmentLocationIDType_4010_1020 = 1074794528,
    /**
     * < Abort Reason (4010,1021)
     */
    AbortReason_4010_1021 = 1074794529,
    /**
     * < Volume of PTO (4010,1023)
     */
    VolumeOfPTO_4010_1023 = 1074794531,
    /**
     * < Abort Flag (4010,1024)
     */
    AbortFlag_4010_1024 = 1074794532,
    /**
     * < Route Segment Start Time (4010,1025)
     */
    RouteSegmentStartTime_4010_1025 = 1074794533,
    /**
     * < Route Segment End Time (4010,1026)
     */
    RouteSegmentEndTime_4010_1026 = 1074794534,
    /**
     * < TDR Type (4010,1027)
     */
    TDRType_4010_1027 = 1074794535,
    /**
     * < International Route Segment (4010,1028)
     */
    InternationalRouteSegment_4010_1028 = 1074794536,
    /**
     * < Threat Detection Algorithm and Version (4010,1029)
     */
    ThreatDetectionAlgorithmandVersion_4010_1029 = 1074794537,
    /**
     * < Assigned Location (4010,102A)
     */
    AssignedLocation_4010_102A = 1074794538,
    /**
     * < Alarm Decision Time (4010,102B)
     */
    AlarmDecisionTime_4010_102B = 1074794539,
    /**
     * < Alarm Decision (4010,1031)
     */
    AlarmDecision_4010_1031 = 1074794545,
    /**
     * < Number of Total Objects (4010,1033)
     */
    NumberOfTotalObjects_4010_1033 = 1074794547,
    /**
     * < Number of Alarm Objects (4010,1034)
     */
    NumberOfAlarmObjects_4010_1034 = 1074794548,
    /**
     * < PTO Representation Sequence (4010,1037)
     */
    PTORepresentationSequence_4010_1037 = 1074794551,
    /**
     * < ATD Assessment Sequence (4010,1038)
     */
    ATDAssessmentSequence_4010_1038 = 1074794552,
    /**
     * < TIP Type (4010,1039)
     */
    TIPType_4010_1039 = 1074794553,
    /**
     * < DICOS Version (4010,103A)
     */
    DICOSVersion_4010_103A = 1074794554,
    /**
     * < OOI Owner Creation Time (4010,1041)
     */
    OOIOwnerCreationTime_4010_1041 = 1074794561,
    /**
     * < OOI Type (4010,1042)
     */
    OOIType_4010_1042 = 1074794562,
    /**
     * < OOI Size (4010,1043)
     */
    OOISize_4010_1043 = 1074794563,
    /**
     * < Acquisition Status (4010,1044)
     */
    AcquisitionStatus_4010_1044 = 1074794564,
    /**
     * < Basis Materials Code Sequence (4010,1045)
     */
    BasisMaterialsCodeSequence_4010_1045 = 1074794565,
    /**
     * < Phantom Type (4010,1046)
     */
    PhantomType_4010_1046 = 1074794566,
    /**
     * < OOI Owner Sequence (4010,1047)
     */
    OOIOwnerSequence_4010_1047 = 1074794567,
    /**
     * < Scan Type (4010,1048)
     */
    ScanType_4010_1048 = 1074794568,
    /**
     * < Itinerary ID (4010,1051)
     */
    ItineraryID_4010_1051 = 1074794577,
    /**
     * < Itinerary ID Type (4010,1052)
     */
    ItineraryIDType_4010_1052 = 1074794578,
    /**
     * < Itinerary ID Assigning Authority (4010,1053)
     */
    ItineraryIDAssigningAuthority_4010_1053 = 1074794579,
    /**
     * < Route ID (4010,1054)
     */
    RouteID_4010_1054 = 1074794580,
    /**
     * < Route ID Assigning Authority (4010,1055)
     */
    RouteIDAssigningAuthority_4010_1055 = 1074794581,
    /**
     * < Inbound Arrival Type (4010,1056)
     */
    InboundArrivalType_4010_1056 = 1074794582,
    /**
     * < Carrier ID (4010,1058)
     */
    CarrierID_4010_1058 = 1074794584,
    /**
     * < Carrier ID Assigning Authority (4010,1059)
     */
    CarrierIDAssigningAuthority_4010_1059 = 1074794585,
    /**
     * < Source Orientation (4010,1060)
     */
    SourceOrientation_4010_1060 = 1074794592,
    /**
     * < Source Position (4010,1061)
     */
    SourcePosition_4010_1061 = 1074794593,
    /**
     * < Belt Height (4010,1062)
     */
    BeltHeight_4010_1062 = 1074794594,
    /**
     * < Algorithm Routing Code Sequence (4010,1064)
     */
    AlgorithmRoutingCodeSequence_4010_1064 = 1074794596,
    /**
     * < Transport Classification (4010,1067)
     */
    TransportClassification_4010_1067 = 1074794599,
    /**
     * < OOI Type Descriptor (4010,1068)
     */
    OOITypeDescriptor_4010_1068 = 1074794600,
    /**
     * < Total Processing Time (4010,1069)
     */
    TotalProcessingTime_4010_1069 = 1074794601,
    /**
     * < Detector Calibration Data (4010,106C)
     */
    DetectorCalibrationData_4010_106C = 1074794604,
    /**
     * < Additional Screening Performed (4010,106D)
     */
    AdditionalScreeningPerformed_4010_106D = 1074794605,
    /**
     * < Additional Inspection Selection Criteria (4010,106E)
     */
    AdditionalInspectionSelectionCriteria_4010_106E = 1074794606,
    /**
     * < Additional Inspection Method Sequence (4010,106F)
     */
    AdditionalInspectionMethodSequence_4010_106F = 1074794607,
    /**
     * < AIT Device Type (4010,1070)
     */
    AITDeviceType_4010_1070 = 1074794608,
    /**
     * < QR Measurements Sequence (4010,1071)
     */
    QRMeasurementsSequence_4010_1071 = 1074794609,
    /**
     * < Target Material Sequence (4010,1072)
     */
    TargetMaterialSequence_4010_1072 = 1074794610,
    /**
     * < SNR Threshold (4010,1073)
     */
    SNRThreshold_4010_1073 = 1074794611,
    /**
     * < Image Scale Representation (4010,1075)
     */
    ImageScaleRepresentation_4010_1075 = 1074794613,
    /**
     * < Referenced PTO Sequence (4010,1076)
     */
    ReferencedPTOSequence_4010_1076 = 1074794614,
    /**
     * < Referenced TDR Instance Sequence (4010,1077)
     */
    ReferencedTDRInstanceSequence_4010_1077 = 1074794615,
    /**
     * < PTO Location Description (4010,1078)
     */
    PTOLocationDescription_4010_1078 = 1074794616,
    /**
     * < Anomaly Locator Indicator Sequence (4010,1079)
     */
    AnomalyLocatorIndicatorSequence_4010_1079 = 1074794617,
    /**
     * < Anomaly Locator Indicator (4010,107A)
     */
    AnomalyLocatorIndicator_4010_107A = 1074794618,
    /**
     * < PTO Region Sequence (4010,107B)
     */
    PTORegionSequence_4010_107B = 1074794619,
    /**
     * < Inspection Selection Criteria (4010,107C)
     */
    InspectionSelectionCriteria_4010_107C = 1074794620,
    /**
     * < Secondary Inspection Method Sequence (4010,107D)
     */
    SecondaryInspectionMethodSequence_4010_107D = 1074794621,
    /**
     * < PRCS to RCS Orientation (4010,107E)
     */
    PRCSToRCSOrientation_4010_107E = 1074794622,
    /**
     * < MAC Parameters Sequence (4FFE,0001)
     */
    MACParametersSequence_4FFE_0001 = 1342046209,
    /**
     * < Curve Dimensions (5000,0005)
     */
    CurveDimensions_5000_0005 = 1342177285,
    /**
     * < Number of Points (5000,0010)
     */
    NumberOfPoints_5000_0010 = 1342177296,
    /**
     * < Type of Data (5000,0020)
     */
    TypeOfData_5000_0020 = 1342177312,
    /**
     * < Curve Description (5000,0022)
     */
    CurveDescription_5000_0022 = 1342177314,
    /**
     * < Axis Units (5000,0030)
     */
    AxisUnits_5000_0030 = 1342177328,
    /**
     * < Axis Labels (5000,0040)
     */
    AxisLabels_5000_0040 = 1342177344,
    /**
     * < Data Value Representation (5000,0103)
     */
    DataValueRepresentation_5000_0103 = 1342177539,
    /**
     * < Minimum Coordinate Value (5000,0104)
     */
    MinimumCoordinateValue_5000_0104 = 1342177540,
    /**
     * < Maximum Coordinate Value (5000,0105)
     */
    MaximumCoordinateValue_5000_0105 = 1342177541,
    /**
     * < Curve Range (5000,0106)
     */
    CurveRange_5000_0106 = 1342177542,
    /**
     * < Curve Data Descriptor (5000,0110)
     */
    CurveDataDescriptor_5000_0110 = 1342177552,
    /**
     * < Coordinate Start Value (5000,0112)
     */
    CoordinateStartValue_5000_0112 = 1342177554,
    /**
     * < Coordinate Step Value (5000,0114)
     */
    CoordinateStepValue_5000_0114 = 1342177556,
    /**
     * < Curve Activation Layer (5000,1001)
     */
    CurveActivationLayer_5000_1001 = 1342181377,
    /**
     * < Audio Type (5000,2000)
     */
    AudioType_5000_2000 = 1342185472,
    /**
     * < Audio Sample Format (5000,2002)
     */
    AudioSampleFormat_5000_2002 = 1342185474,
    /**
     * < Number of Channels (5000,2004)
     */
    NumberOfChannels_5000_2004 = 1342185476,
    /**
     * < Number of Samples (5000,2006)
     */
    NumberOfSamples_5000_2006 = 1342185478,
    /**
     * < Sample Rate (5000,2008)
     */
    SampleRate_5000_2008 = 1342185480,
    /**
     * < Total Time (5000,200A)
     */
    TotalTime_5000_200A = 1342185482,
    /**
     * < Audio Sample Data (5000,200C)
     */
    AudioSampleData_5000_200C = 1342185484,
    /**
     * < Audio Comments (5000,200E)
     */
    AudioComments_5000_200E = 1342185486,
    /**
     * < Curve Label (5000,2500)
     */
    CurveLabel_5000_2500 = 1342186752,
    /**
     * < Curve Referenced Overlay Sequence (5000,2600)
     */
    CurveReferencedOverlaySequence_5000_2600 = 1342187008,
    /**
     * < Curve Referenced Overlay Group (5000,2610)
     */
    CurveReferencedOverlayGroup_5000_2610 = 1342187024,
    /**
     * < Curve Data (5000,3000)
     */
    CurveData_5000_3000 = 1342189568,
    /**
     * < Shared Functional Groups Sequence (5200,9229)
     */
    SharedFunctionalGroupsSequence_5200_9229 = 1375769129,
    /**
     * < Per-frame Functional Groups Sequence (5200,9230)
     */
    PerFrameFunctionalGroupsSequence_5200_9230 = 1375769136,
    /**
     * < Waveform Sequence (5400,0100)
     */
    WaveformSequence_5400_0100 = 1409286400,
    /**
     * < Channel Minimum Value (5400,0110)
     */
    ChannelMinimumValue_5400_0110 = 1409286416,
    /**
     * < Channel Maximum Value (5400,0112)
     */
    ChannelMaximumValue_5400_0112 = 1409286418,
    /**
     * < Waveform Bits Allocated (5400,1004)
     */
    WaveformBitsAllocated_5400_1004 = 1409290244,
    /**
     * < Waveform Sample Interpretation (5400,1006)
     */
    WaveformSampleInterpretation_5400_1006 = 1409290246,
    /**
     * < Waveform Padding Value (5400,100A)
     */
    WaveformPaddingValue_5400_100A = 1409290250,
    /**
     * < Waveform Data (5400,1010)
     */
    WaveformData_5400_1010 = 1409290256,
    /**
     * < First Order Phase Correction Angle (5600,0010)
     */
    FirstOrderPhaseCorrectionAngle_5600_0010 = 1442840592,
    /**
     * < Spectroscopy Data (5600,0020)
     */
    SpectroscopyData_5600_0020 = 1442840608,
    /**
     * < Overlay Rows (6000,0010)
     */
    OverlayRows_6000_0010 = 1610612752,
    /**
     * < Overlay Columns (6000,0011)
     */
    OverlayColumns_6000_0011 = 1610612753,
    /**
     * < Overlay Planes (6000,0012)
     */
    OverlayPlanes_6000_0012 = 1610612754,
    /**
     * < Number of Frames in Overlay (6000,0015)
     */
    NumberOfFramesInOverlay_6000_0015 = 1610612757,
    /**
     * < Overlay Description (6000,0022)
     */
    OverlayDescription_6000_0022 = 1610612770,
    /**
     * < Overlay Type (6000,0040)
     */
    OverlayType_6000_0040 = 1610612800,
    /**
     * < Overlay Subtype (6000,0045)
     */
    OverlaySubtype_6000_0045 = 1610612805,
    /**
     * < Overlay Origin (6000,0050)
     */
    OverlayOrigin_6000_0050 = 1610612816,
    /**
     * < Image Frame Origin (6000,0051)
     */
    ImageFrameOrigin_6000_0051 = 1610612817,
    /**
     * < Overlay Plane Origin (6000,0052)
     */
    OverlayPlaneOrigin_6000_0052 = 1610612818,
    /**
     * < Overlay Compression Code (6000,0060)
     */
    OverlayCompressionCode_6000_0060 = 1610612832,
    /**
     * < Overlay Compression Originator (6000,0061)
     */
    OverlayCompressionOriginator_6000_0061 = 1610612833,
    /**
     * < Overlay Compression Label (6000,0062)
     */
    OverlayCompressionLabel_6000_0062 = 1610612834,
    /**
     * < Overlay Compression Description (6000,0063)
     */
    OverlayCompressionDescription_6000_0063 = 1610612835,
    /**
     * < Overlay Compression Step Pointers (6000,0066)
     */
    OverlayCompressionStepPointers_6000_0066 = 1610612838,
    /**
     * < Overlay Repeat Interval (6000,0068)
     */
    OverlayRepeatInterval_6000_0068 = 1610612840,
    /**
     * < Overlay Bits Grouped (6000,0069)
     */
    OverlayBitsGrouped_6000_0069 = 1610612841,
    /**
     * < Overlay Bits Allocated (6000,0100)
     */
    OverlayBitsAllocated_6000_0100 = 1610612992,
    /**
     * < Overlay Bit Position (6000,0102)
     */
    OverlayBitPosition_6000_0102 = 1610612994,
    /**
     * < Overlay Format (6000,0110)
     */
    OverlayFormat_6000_0110 = 1610613008,
    /**
     * < Overlay Location (6000,0200)
     */
    OverlayLocation_6000_0200 = 1610613248,
    /**
     * < Overlay Code Label (6000,0800)
     */
    OverlayCodeLabel_6000_0800 = 1610614784,
    /**
     * < Overlay Number of Tables (6000,0802)
     */
    OverlayNumberOfTables_6000_0802 = 1610614786,
    /**
     * < Overlay Code Table Location (6000,0803)
     */
    OverlayCodeTableLocation_6000_0803 = 1610614787,
    /**
     * < Overlay Bits For Code Word (6000,0804)
     */
    OverlayBitsForCodeWord_6000_0804 = 1610614788,
    /**
     * < Overlay Activation Layer (6000,1001)
     */
    OverlayActivationLayer_6000_1001 = 1610616833,
    /**
     * < Overlay Descriptor - Gray (6000,1100)
     */
    OverlayDescriptorGray_6000_1100 = 1610617088,
    /**
     * < Overlay Descriptor - Red (6000,1101)
     */
    OverlayDescriptorRed_6000_1101 = 1610617089,
    /**
     * < Overlay Descriptor - Green (6000,1102)
     */
    OverlayDescriptorGreen_6000_1102 = 1610617090,
    /**
     * < Overlay Descriptor - Blue (6000,1103)
     */
    OverlayDescriptorBlue_6000_1103 = 1610617091,
    /**
     * < Overlays - Gray (6000,1200)
     */
    OverlaysGray_6000_1200 = 1610617344,
    /**
     * < Overlays - Red (6000,1201)
     */
    OverlaysRed_6000_1201 = 1610617345,
    /**
     * < Overlays - Green (6000,1202)
     */
    OverlaysGreen_6000_1202 = 1610617346,
    /**
     * < Overlays - Blue (6000,1203)
     */
    OverlaysBlue_6000_1203 = 1610617347,
    /**
     * < ROI Area (6000,1301)
     */
    ROIArea_6000_1301 = 1610617601,
    /**
     * < ROI Mean (6000,1302)
     */
    ROIMean_6000_1302 = 1610617602,
    /**
     * < ROI Standard Deviation (6000,1303)
     */
    ROIStandardDeviation_6000_1303 = 1610617603,
    /**
     * < Overlay Label (6000,1500)
     */
    OverlayLabel_6000_1500 = 1610618112,
    /**
     * < Overlay Data (6000,3000)
     */
    OverlayData_6000_3000 = 1610625024,
    /**
     * < Overlay Comments (6000,4000)
     */
    OverlayComments_6000_4000 = 1610629120,
    /**
     * < Variable Pixel Data (7F00,0010)
     */
    VariablePixelData_7F00_0010 = 2130706448,
    /**
     * < Variable Next Data Group (7F00,0011)
     */
    VariableNextDataGroup_7F00_0011 = 2130706449,
    /**
     * < Variable Coefficients SDVN (7F00,0020)
     */
    VariableCoefficientsSDVN_7F00_0020 = 2130706464,
    /**
     * < Variable Coefficients SDHN (7F00,0030)
     */
    VariableCoefficientsSDHN_7F00_0030 = 2130706480,
    /**
     * < Variable Coefficients SDDN (7F00,0040)
     */
    VariableCoefficientsSDDN_7F00_0040 = 2130706496,
    /**
     * < Float Pixel Data (7FE0,0008)
     */
    FloatPixelData_7FE0_0008 = 2145386504,
    /**
     * < Double Float Pixel Data (7FE0,0009)
     */
    DoubleFloatPixelData_7FE0_0009 = 2145386505,
    /**
     * < Pixel Data (7FE0,0010)
     */
    PixelData_7FE0_0010 = 2145386512,
    /**
     * < Coefficients SDVN (7FE0,0020)
     */
    CoefficientsSDVN_7FE0_0020 = 2145386528,
    /**
     * < Coefficients SDHN (7FE0,0030)
     */
    CoefficientsSDHN_7FE0_0030 = 2145386544,
    /**
     * < Coefficients SDDN (7FE0,0040)
     */
    CoefficientsSDDN_7FE0_0040 = 2145386560,
    /**
     * < Digital Signatures Sequence (FFFA,FFFA)
     */
    DigitalSignaturesSequence_FFFA_FFFA = 4294639610,
    /**
     * < Data Set Trailing Padding (FFFC,FFFC)
     */
    DataSetTrailingPadding_FFFC_FFFC = 4294770684,
    /**
     * < Item (FFFE,E000)
     */
    Item_FFFE_E000 = 4294893568,
    /**
     * < Item Delimitation Item (FFFE,E00D)
     */
    ItemDelimitationItem_FFFE_E00D = 4294893581,
    /**
     * < Sequence Delimitation Item (FFFE,E0DD)
     */
    SequenceDelimitationItem_FFFE_E0DD = 4294893789,
    /**
     */
    endOfEnumerations = 0,
}
