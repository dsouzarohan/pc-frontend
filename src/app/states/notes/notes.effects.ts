import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import * as NotesActionBundle from './notes.actions';
import {TryDownloadAction, TryUploadAction} from './notes.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {NotesService} from '../../services/notes.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
import {saveAs as importedSaveAs} from 'file-saver';

const Types = NotesActionBundle.NotesActionTypes;

@Injectable()
export class NotesEffects {
  @Effect()
  tryGetUploadsEffect = this.actions
    .pipe(ofType(Types.TRY_GET_UPLOADS))
    .pipe(
      map((action: NotesActionBundle.TryGetUploadsAction) => action.payload)
    )
    .pipe(
      switchMap(classroomId =>
        this.notesService.getNotes(classroomId).pipe(
          map(
            response =>
              new NotesActionBundle.OnGetUploadsSuccessAction(response.data)
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new NotesActionBundle.OnGetUploadsFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect()
  tryUploadEffect = this.actions
    .pipe(ofType(Types.TRY_UPLOAD))
    .pipe(map((action: TryUploadAction) => action.payload))
    .pipe(
      switchMap(formData =>
        this.notesService.uploadNotes(formData).pipe(
          map(
            response =>
              new NotesActionBundle.OnUploadSuccessAction(response.data)
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new NotesActionBundle.OnUploadFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect()
  tryDownloadEffect = this.actions
    .pipe(ofType(Types.TRY_DOWNLOAD))
    .pipe(map((action: TryDownloadAction) => action.payload))
    .pipe(
      switchMap(uploadDetails =>
        this.notesService
          .downloadNotes(uploadDetails.uploadName, uploadDetails.uploadId)
          .pipe(
            map(
              response =>
                new NotesActionBundle.OnDownloadSuccessAction({
                  fileBuffer: response,
                  fileName: uploadDetails.uploadName
                })
            ),
            catchError((errorResponse: HttpErrorResponse) =>
              of(
                new NotesActionBundle.OnUploadFailAction(
                  errorResponse.error.message
                )
              )
            )
          )
      )
    );

  @Effect()
  tryDownloadFileEffect = this.actions
    .pipe(ofType(Types.TRY_DOWNLOAD_FILE))
    .pipe(
      map((action: NotesActionBundle.TryDownloadFileAction) => action.payload)
    )
    .pipe(
      switchMap(fileDetails =>
        this.notesService.downloadFile(fileDetails.fileId).pipe(
          map(
            fileBuffer =>
              new NotesActionBundle.OnDownloadFileSuccessAction({
                fileBuffer: fileBuffer,
                fileName: fileDetails.fileName
              })
          ),
          catchError(
            (errorResponse: HttpErrorResponse) => errorResponse.error.message
          )
        )
      )
    );

  @Effect({
    dispatch: false
  })
  onDownloadSuccessEffect = this.actions
    .pipe(ofType(Types.ON_DOWNLOAD_SUCCESS))
    .pipe(
      map((action: NotesActionBundle.OnDownloadSuccessAction) => action.payload)
    )
    .pipe(
      map(fileDetails => {
        let responseBlob = new Blob([fileDetails.fileBuffer], {
          type: 'application/zip'
        });
        importedSaveAs(
          responseBlob,
          fileDetails.fileName.split(' ').join('-') + '.zip'
        );
      })
    );

  @Effect({
    dispatch: false
  })
  onDownloadFileSuccessEffect = this.actions.pipe(
    ofType(Types.ON_DOWNLOAD_FILE_SUCCESS)
  ).pipe(
    map((action: NotesActionBundle.OnDownloadFileSuccessAction) => action.payload)
  ).pipe(
    map(fileDetails => {
      let responseBlob = new Blob([fileDetails.fileBuffer]);
      importedSaveAs(
        responseBlob,
        fileDetails.fileName
      );
    })
  );

  constructor(private actions: Actions, private notesService: NotesService) {
  }
}
