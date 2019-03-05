import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent implements OnInit {
  private uploadedFiles: File[] = [];

  constructor(
    private dialogRef: MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {
  }

  ngOnInit() {
  }

  onUploadClick(event: any) {
    let files: File[] = event.files;
    console.log('@FileUploadDialog#onCustomUploadClick', files);
    const uploadFormData = new FormData();
    uploadFormData.append('title', 'This is an upload');
    uploadFormData.append('body', 'This is the upload body');
    uploadFormData.append('classroomId', '4');
    for (let i = 0; i < files.length; i++) {
      uploadFormData.append('fileUploads', files[i], files[i]['name']);
    }

    this.http
      .post(environment.apiUrl + 'notes/upload', uploadFormData)
      .subscribe(response => {
        console.log('@FileUploadResponse', response);
      });
  }
}
