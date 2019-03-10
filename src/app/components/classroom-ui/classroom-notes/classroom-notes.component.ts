import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FileUploadDialogComponent} from '../../dialogs/file-upload-dialog/file-upload-dialog.component';
import {HttpClient} from '@angular/common/http';
import {NotesFacade} from '../../../states/notes/notes.facade';
import {Observable} from 'rxjs';
import {Upload} from '../../../models/notes.models';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-classroom-notes',
  templateUrl: './classroom-notes.component.html',
  styleUrls: ['./classroom-notes.component.scss']
})
export class ClassroomNotesComponent implements OnInit {

  private uploads$: Observable<Array<Upload>> = null;
  private isFetching$: Observable<boolean> = null;

  constructor(
    private dialogRef: MatDialog,
    private http: HttpClient,
    private notesFacade: NotesFacade,
    private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.isFetching$ = this.notesFacade.isFetching$;
    this.uploads$ = this.notesFacade.uploads$;
  }

  onNewUploadClick() {
    this.dialogRef.open(FileUploadDialogComponent, {
      data: {
        classroomId: this.activatedRoute.snapshot.params['classroomId']
      }
    });
  }
}
