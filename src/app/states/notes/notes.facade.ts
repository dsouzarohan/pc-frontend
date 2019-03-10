import {Injectable} from '@angular/core';
import {NotesState} from './notes.reducer';
import {Store} from '@ngrx/store';
import * as notesSelectors from './notes.selectors';
import * as NotesActionBundle from './notes.actions';

@Injectable()
export class NotesFacade {
  public uploads$ = this.store.select(notesSelectors.getUploads);
  public isUploading$ = this.store.select(notesSelectors.isUploading);
  public isFetching$ = this.store.select(notesSelectors.isFetching);
  public isDownloading$ = this.store.select(notesSelectors.isDownloading);

  constructor(private store: Store<NotesState>) {
  }

  public _getNotes(classroomId: number) {
    this.store.dispatch(new NotesActionBundle.TryGetUploadsAction(classroomId));
  }

  public _upload(uploadFormData: FormData) {
    this.store.dispatch(new NotesActionBundle.TryUploadAction(uploadFormData));
  }

  public _download(uploadId: string, uploadName: string) {
    this.store.dispatch(
      new NotesActionBundle.TryDownloadAction({
        uploadId,
        uploadName
      })
    );
  }

  public _downloadFile(fileId: number, fileName: string) {
    this.store.dispatch(
      new NotesActionBundle.TryDownloadFileAction({
        fileId,
        fileName
      })
    );
  }
}
