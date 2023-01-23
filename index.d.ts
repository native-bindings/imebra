export type ICodecTypeDefinitions = import('./CodecTypeDefinitions').ICodecTypeDefinitions;
export type IDicomDefinitions = import('./DicomDefinitions').IDicomDefinitions;
export type ITagVRDefinitions = import('./TagVRDefinitions').ITagVRDefinitions;
export type IAgeUnitDefinitions = import('./AgeUnitDefinitions').IAgeUnitDefinitions;

export class CodecFactory {
    static setMaximumImageSize(w: number, h: number): void;
    static load(file: string): DataSet;
    static save(set: DataSet,out: string,codecType: number): void;
}

export interface ITag {
    tagId: number;
    groupOrder: number;
    groupId: number;
}

export class Tag {
    constructor(dataSet: DataSet,tagId: TagId);
    getDataType(): number;
    sequenceItemExists(dataSetId: number): boolean;
    getBuffersCount(): number;
    bufferExists(bufferId: number): boolean;
}

export class TagId {
    constructor(tagId: number): void;
    constructor(groupId: number, tagId: number): void;
    /**
     * not supported yet
     */
    constructor(groupId: number, groupOrder: number, tagId: number): void;
    getTagId(): number;
    getGroupOrder(): number;
    getGroupId(): number;
}

export class Age {
    getAgeUnits(): string;
    getAgeValue(): number;
}

export class Image {
    getWidth(): number;
}

export class VOIDescription {
    getDescription(): string;
}

export class DataSet {
    getTags(): TagId[];
    getImageApplyModalityTransform(frameNumber: number): Image;
    getImage(frameNumber: number): Image;
    getTag(tagId: TagId): Tag;
    getVOIs(): VOIDescription[];
    bufferExists(tagId: TagId, bufferId: number): boolean;
    getAge(tagId: TagId, elementNumber: number): Age;
    getString(tag: TagId,elementNumber: number,defaultValue?: string): string;
    getInt32(tag: TagId,elementNumber: number,defaultValue?: number): number;
    getInt64(tag: TagId,elementNumber: number): number;
    getUint32(tag: TagId,elementNumber: number,defaultValue?: number): number;
    getPatientName(tagId: TagId,elementNumber: number): PatientName;
    getDate(tagId: TagId,elementNumber: number): Date;
}

export class Date{
    getYear(): number;
    getMinutes(): number;
    getDay(): number;
    getMonth(): number;
    getSeconds(): number;
    getNanoseconds(): number;
    getOffsetHours(): number;
    getOffsetMinutes(): number;
    getHour(): number;
}

export class PatientName {
    getAlphabeticRepresentation(): string;
}

export class DicomDirEntry {
    hasNextEntry(): boolean;
    getNextEntry(): DicomDirEntry;
}

export class DicomDir {
    constructor(dataSet: DataSet);
    hasRootEntry(): boolean;
    getFirstRootEntry(): DicomDirEntry;
}

export const constants: {
    codecType_t: ICodecTypeDefinitions;
    tagVR_t: ITagVRDefinitions;
    tagId_t: IDicomDefinitions;
    ageUnit_t: IAgeUnitDefinitions;
};

export class ArchiveEntry {
    pathname(): string;
}

export class ArchiveRead {
    openFilename(filename: string, size: number): boolean;
    readDataBlock(): ArrayBuffer | null;
    supportFormatAll(): boolean;
    supportFilterAll(): boolean;
    nextHeader(): ArchiveEntry | null;
}

export class DicomDictionary {
    static getTagDescription(tagId: TagId): string;
}
