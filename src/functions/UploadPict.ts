import { ReadFileType } from '~/types';

export function UploadPict(file: File): Promise<ReadFileType> {
  return new Promise(resolve => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result);
    };
  });
}
