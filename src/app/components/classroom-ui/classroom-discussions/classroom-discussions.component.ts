import {Component, OnInit} from '@angular/core';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';
import {Classroom} from '../../../models/classroom.models';
import {Observable} from 'rxjs';
import {DiscussionsFacade} from '../../../states/discussions/discussions.facade';
import {Discussion} from '../../../models/discussions.models';

@Component({
  selector: 'app-classroom-discussions',
  templateUrl: './classroom-discussions.component.html',
  styleUrls: ['./classroom-discussions.component.scss']
})
export class ClassroomDiscussionsComponent implements OnInit {

  private discussions$: Observable<Array<Discussion>>;
  private classroom$: Observable<Classroom>;

  constructor(
    private discussionsFacade: DiscussionsFacade,
    private classroomsFacade: ClassroomsFacade
  ) {
    this.discussions$ = this.discussionsFacade.discussions$;
    this.classroom$ = this.classroomsFacade.classroomDetails$;
  }

  ngOnInit() {
  }
}
