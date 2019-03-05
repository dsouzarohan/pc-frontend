import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FileUploadDialogComponent} from '../../dialogs/file-upload-dialog/file-upload-dialog.component';
import {HttpClient} from '@angular/common/http';
import {saveAs as importedSaveAs} from 'file-saver';

@Component({
  selector: 'app-classroom-notes',
  templateUrl: './classroom-notes.component.html',
  styleUrls: ['./classroom-notes.component.scss']
})
export class ClassroomNotesComponent implements OnInit {
  constructor(private dialogRef: MatDialog, private http: HttpClient) {
  }

  ngOnInit() {
  }

  onNewUploadClick() {
    this.dialogRef.open(FileUploadDialogComponent, {
      data: 'Some data'
    });
  }

  downloadTest() {
    this.http
      .get(
        'http://localhost:3000/api/notes/download?uploadId=4cebecee-31e9-4a68-9252-7728417495b5',
        {
          responseType: 'arraybuffer'
        }
      )
      .subscribe(
        (response: ArrayBuffer) => {
          console.log('It worked');
          console.log(response);
          let responseBlob = new Blob([response], {
            type: 'application/zip'
          });
          console.log(responseBlob);
          importedSaveAs(responseBlob);
        },
        error => console.log(error)
      );
  }
}
