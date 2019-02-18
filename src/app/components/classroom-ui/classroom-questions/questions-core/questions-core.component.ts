import {Component, OnInit} from '@angular/core';
import {QuestionsFacade} from '../../../../states/questions/questions.facade';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-questions-core',
  templateUrl: './questions-core.component.html',
  styleUrls: ['./questions-core.component.scss']
})
export class QuestionsCoreComponent implements OnInit {

  constructor(
    private questionsFacade: QuestionsFacade,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    let classroomId = this.activatedRoute.snapshot.params.classroomId;
    console.log('@DiscussionCoreComponent#onInit#classroomId', classroomId);
    this.questionsFacade._loadQuestions(classroomId);
  }

}
