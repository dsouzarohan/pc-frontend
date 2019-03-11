import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {NotesFacade} from '../../../states/notes/notes.facade';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent implements OnInit, AfterViewInit {

  public uploadedFiles: File[] = [];
  public uploadTitle: string = '';
  public uploadBody: string = '';

  constructor(
    private dialogRef: MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      classroomId: number
    },
    private http: HttpClient,
    private notesFacade: NotesFacade,
  ) {
  }

  ngOnInit() {
  }

  onUploadClick(event: any) {
    let files: File[] = event.files;
    console.log('@FileUploadDialog#onCustomUploadClick', files);
    const uploadFormData = new FormData();
    uploadFormData.append('title', this.uploadTitle);
    uploadFormData.append('body', this.uploadBody);
    uploadFormData.append('classroomId', this.data.classroomId.toString());
    for (let i = 0; i < files.length; i++) {
      uploadFormData.append('fileUploads', files[i], files[i]['name']);
    }

    this.notesFacade._upload(uploadFormData);
  }

  isUploadDetailsValid() {
    return !!this.uploadTitle;
  }

  ngAfterViewInit(): void {
  }
}
