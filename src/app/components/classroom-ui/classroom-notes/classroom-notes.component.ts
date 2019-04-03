import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FileUploadDialogComponent} from '../../dialogs/file-upload-dialog/file-upload-dialog.component';
import {HttpClient} from '@angular/common/http';
import {NotesFacade} from '../../../states/notes/notes.facade';
import {Observable} from 'rxjs';
import {Upload} from '../../../models/notes.models';
import {ActivatedRoute} from '@angular/router';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {Classroom} from '../../../models/classroom.models';

@Component({
  selector: 'app-classroom-notes',
  templateUrl: './classroom-notes.component.html',
  styleUrls: ['./classroom-notes.component.scss']
})
export class ClassroomNotesComponent implements OnInit {

  public uploads$: Observable<Array<Upload>> = null;
  public isFetching$: Observable<boolean> = null;
  public classroom$: Observable<Classroom> = null;

  constructor(
    private dialogRef: MatDialog,
    private http: HttpClient,
    private notesFacade: NotesFacade,
    private activatedRoute: ActivatedRoute,
    private classroomFacade: ClassroomsFacade
  ) {
  }

  ngOnInit() {
    this.isFetching$ = this.notesFacade.isFetching$;
    this.uploads$ = this.notesFacade.uploads$;
    this.classroom$ = this.classroomFacade.classroomDetails$;
  }

  onNewUploadClick() {
    this.dialogRef.open(FileUploadDialogComponent, {
      data: {
        classroomId: this.activatedRoute.snapshot.params['classroomId']
      },
      width: '400px',
      maxWidth: '400px',
      maxHeight: '600px'
    });
  }
}
