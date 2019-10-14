import { Convert } from "./convert";

/**
 * Translation
 */
export function Translation(str: string) {
  return new Promise((resolve, reject) => {
    resolve(Convert(str));
  })
};