import { DictData } from "~/constants/dict";

/**
 * Translation
 */
export function Translation(str: string) {
  let convertedStr = str;
  DictData.map(dict => {
    convertedStr = convertedStr.replace(dict.original, dict.translate);
  })
  return convertedStr;
};