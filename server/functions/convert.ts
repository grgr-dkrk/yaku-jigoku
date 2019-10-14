import { DictData } from "../dict";

export function Convert(wakachi: string) {
  let str = wakachi;
  DictData.map(dict => {
    str = str.replace(dict.original, dict.translate);
  })
  return { text: str };
}