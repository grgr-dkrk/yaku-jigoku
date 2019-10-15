import { DictData } from '~/constants/dict';
import { LevelType } from '~/types';

/**
 * Translation
 */
export function Translation(str: string, level: LevelType): string {
  let convertedStr = str;
  DictData.map(dict => {
    console.log(level, dict.level);
    if (level >= dict.level) {
      convertedStr = convertedStr.replace(dict.original, dict.translate);
    }
  });
  return convertedStr;
}
