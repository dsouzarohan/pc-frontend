import {Upload} from '../notes.models';

export interface GetNotesResponse {
  message: string;
  data: Array<Upload>
}

export interface UploadNotesResponse {
  message: string;
  data: Upload;
}
