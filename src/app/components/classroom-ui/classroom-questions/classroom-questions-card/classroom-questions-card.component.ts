import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../../models/questions.models';

@Component({
  selector: 'app-classroom-questions-card',
  templateUrl: './classroom-questions-card.component.html',
  styleUrls: ['./classroom-questions-card.component.scss']
})
export class ClassroomQuestionsCardComponent implements OnInit {

  @Input('question') question: Question;

  constructor() {
  }

  ngOnInit() {
  }

}
