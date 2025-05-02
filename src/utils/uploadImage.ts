import { uploadFile } from '../firebase/storage';

export async function uploadImage(file: File, path: string): Promise<string> {
  return await uploadFile(file, path);
}