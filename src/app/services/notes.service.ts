import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetNotesResponse, UploadNotesResponse} from '../models/responses/notes-responses.models';
import {environment} from '../../environments/environment';

@Injectable()
export class NotesService {
  constructor(private http: HttpClient) {
  }

  public getNotes(classroomId: number) {
    return this.http.get<GetNotesResponse>(
      environment.apiUrl + 'notes?classroomId=' + classroomId
    );
  }

  public uploadNotes(uploadFormData: FormData) {
    return this.http.post<UploadNotesResponse>(
      environment.apiUrl + 'notes/upload',
      uploadFormData
    );
  }

  public downloadNotes(uploadName: string, uploadId: string) {
    return this.http.get(
      environment.apiUrl + 'notes/download?uploadId=' + uploadId,
      {
        responseType: 'arraybuffer'
      }
    );
  }

  public downloadFile(fileId: number) {
    return this.http.get(
      environment.apiUrl + 'notes/download/file?fileId=' + fileId,
      {
        responseType: 'arraybuffer'
      }
    );
  }
}
