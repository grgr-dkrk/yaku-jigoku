import { ReadFileType } from "~/types";

export type FileStateType = {
  file: ReadFileType;
}

export const FileInitialState: FileStateType = {
  file: null,
}