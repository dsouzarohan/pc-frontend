import {Component, OnInit} from '@angular/core';
import {NotesFacade} from '../../../../states/notes/notes.facade';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-notes-core',
  templateUrl: './notes-core.component.html',
  styleUrls: ['./notes-core.component.scss']
})
export class NotesCoreComponent implements OnInit {
  constructor(
    private notesFacade: NotesFacade,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.notesFacade._getNotes(
      this.activatedRoute.snapshot.params['classroomId']
    );
  }
}
