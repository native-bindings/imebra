type CodecTypeDefinitions =
  import("./CodecTypeDefinitions").CodecTypeDefinitions;
type DicomDefinitions = import("./DicomDefinitions").DicomDefinitions;
type TagVRDefinitions = import("./TagVRDefinitions").TagVRDefinitions;
type AgeUnitDefinitions = import("./AgeUnitDefinitions").AgeUnitDefinitions;

class CodecFactory {
  static setMaximumImageSize(w: number, h: number): void;
  static load(file: string): DataSet;
  static save(set: DataSet, out: string, codecType: CodecTypeDefinitions): void;
}

export interface ITag {
  tagId: number;
  groupOrder: number;
  groupId: number;
}

class Tag {
  constructor(dataSet: DataSet, tagId: TagId);
  getDataType(): TagVRDefinitions;
  sequenceItemExists(dataSetId: number): boolean;
  getBuffersCount(): number;
  bufferExists(bufferId: number): boolean;
}

class TagId {
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

class Age {
  getAgeUnits(): string;
  getAgeValue(): number;
}

class Image {
  getWidth(): number;
}

class VOIDescription {
  getDescription(): string;
}

class DataSet {
  getTags(): TagId[];
  getImageApplyModalityTransform(frameNumber: number): Image;
  getImage(frameNumber: number): Image;
  getTag(tagId: TagId): Tag;
  getVOIs(): VOIDescription[];
  bufferExists(tagId: TagId, bufferId: number): boolean;
  getAge(tagId: TagId, elementNumber: number): Age;
  getString(tag: TagId, elementNumber: number, defaultValue?: string): string;
  getInt32(tag: TagId, elementNumber: number, defaultValue?: number): number;
  getInt64(tag: TagId, elementNumber: number): number;
  getUint32(tag: TagId, elementNumber: number, defaultValue?: number): number;
  getPatientName(tagId: TagId, elementNumber: number): PatientName;
  getDate(tagId: TagId, elementNumber: number): Date;
}

class Date {
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

class PatientName {
  getAlphabeticRepresentation(): string;
}

class DicomDirEntry {
  hasNextEntry(): boolean;
  getNextEntry(): DicomDirEntry;
}

class DicomDir {
  constructor(dataSet: DataSet);
  hasRootEntry(): boolean;
  getFirstRootEntry(): DicomDirEntry;
}

const constants: {
  codecType_t: typeof import("./CodecTypeDefinitions").CodecTypeDefinitions;
  tagVR_t: typeof import("./TagVRDefinitions").TagVRDefinitions;
  tagId_t: typeof import("./DicomDefinitions").DicomDefinitions;
  ageUnit_t: typeof import("./AgeUnitDefinitions").AgeUnitDefinitions;
};

class ArchiveEntry {
  pathname(): string;
}

class ArchiveRead {
  openFilename(filename: string, size: number): boolean;
  readDataBlock(): ArrayBuffer | null;
  supportFormatAll(): boolean;
  supportFilterAll(): boolean;
  nextHeader(): ArchiveEntry | null;
}

class DicomDictionary {
  static getTagDescription(tagId: TagId): string;
  static getTagType(tagId: TagId): TagVRDefinitions;
}

export default {
  constants,
  CodecFactory,
  Tag,
  TagId,
  Age,
  Image,
  VOIDescription,
  DataSet,
  Date,
  PatientName,
  DicomDirEntry,
  DicomDir,
  ArchiveEntry,
  ArchiveRead,
  DicomDictionary,
};
