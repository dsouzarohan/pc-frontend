import {Action} from '@ngrx/store';
import {Upload} from '../../models/notes.models';

export enum NotesActionTypes {
  TRY_GET_UPLOADS = 'TRY_GET_UPLOADS',
  ON_GET_UPLOADS_SUCCESS = 'ON_GET_UPLOADS_SUCCESS',
  ON_GET_UPLOADS_FAIL = 'ON_GET_UPLOADS_FAIL',

  TRY_UPLOAD = 'TRY_UPLOAD',
  ON_UPLOAD_SUCCESS = 'ON_UPLOAD_SUCCESS',
  ON_UPLOAD_FAIL = 'ON_UPLOAD_FAIL',

  TRY_DOWNLOAD = 'TRY_DOWNLOAD',
  ON_DOWNLOAD_SUCCESS = 'ON_DOWNLOAD_SUCCESS',
  ON_DOWNLOAD_FAIL = 'ON_DOWNLOAD_FAIL',

  TRY_DOWNLOAD_FILE = 'TRY_DOWNLOAD_FILE',
  ON_DOWNLOAD_FILE_SUCCESS = 'ON_DOWNLOAD_FILE_SUCCESS',
  ON_DOWNLOAD_FILE_FAIL = 'ON_DOWNLOAD_FILE_FAIL'
}

export class TryGetUploadsAction implements Action {
  readonly type: string = NotesActionTypes.TRY_GET_UPLOADS;

  constructor(public payload: number) {
  }
}

export class OnGetUploadsSuccessAction implements Action {
  readonly type: string = NotesActionTypes.ON_GET_UPLOADS_SUCCESS;

  constructor(public payload: Array<Upload>) {
  }
}

export class OnGetUploadsFailAction implements Action {
  readonly type: string = NotesActionTypes.ON_GET_UPLOADS_FAIL;

  constructor(public payload: string) {
  }
}

export class TryUploadAction implements Action {
  readonly type: string = NotesActionTypes.TRY_UPLOAD;

  constructor(public payload: FormData) {
  }
}

export class OnUploadSuccessAction implements Action {
  readonly type: string = NotesActionTypes.ON_UPLOAD_SUCCESS;

  constructor(public payload: Upload) {
  }
}

export class OnUploadFailAction implements Action {
  readonly type: string = NotesActionTypes.ON_UPLOAD_FAIL;

  constructor(public payload: string) {
  }
}

export class TryDownloadAction implements Action {
  readonly type: string = NotesActionTypes.TRY_DOWNLOAD;

  constructor(
    public payload: {
      uploadName: string;
      uploadId: string;
    }
  ) {
  }
}

export class OnDownloadSuccessAction implements Action {
  readonly type: string = NotesActionTypes.ON_DOWNLOAD_SUCCESS;

  constructor(
    public payload: {
      fileBuffer: ArrayBuffer;
      fileName: string;
    }
  ) {
  }
}

export class OnDownloadFailAction implements Action {
  readonly type: string = NotesActionTypes.ON_DOWNLOAD_FAIL;

  constructor(public payload: string) {
  }
}

export class TryDownloadFileAction implements Action {
  readonly type: string = NotesActionTypes.TRY_DOWNLOAD_FILE;

  constructor(public payload: {
    fileId: number,
    fileName: string
  }) {
  }
}

export class OnDownloadFileSuccessAction implements Action {
  readonly type: string = NotesActionTypes.ON_DOWNLOAD_FILE_SUCCESS;

  constructor(public payload: {
    fileBuffer: ArrayBuffer;
    fileName: string;
  }) {
  }
}

export class OnDownloadFileFailAction implements Action {
  readonly type: string = NotesActionTypes.ON_DOWNLOAD_FILE_FAIL;

  constructor(public payload: string) {
  }
}

export type NotesActions =
  | TryGetUploadsAction
  | OnGetUploadsSuccessAction
  | OnGetUploadsFailAction
  | TryUploadAction
  | OnUploadSuccessAction
  | OnUploadFailAction
  | TryDownloadAction
  | OnDownloadSuccessAction
  | OnDownloadFailAction
  | TryDownloadFileAction
  | OnDownloadFileSuccessAction
  | OnDownloadFileFailAction;
