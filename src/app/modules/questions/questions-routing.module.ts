import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsCoreComponent} from '../../components/classroom-ui/classroom-questions/questions-core/questions-core.component';
import {QuestionComponent} from '../../components/classroom-ui/classroom-questions/question/question.component';
import {ClassroomQuestionsComponent} from '../../components/classroom-ui/classroom-questions/classroom-questions.component';
import {CreateQuestionComponent} from '../../components/classroom-ui/classroom-questions/create-question/create-question.component';
import {CreateAnswerComponent} from '../../components/classroom-ui/classroom-questions/question/create-answer/create-answer.component';

const questionsRoutes: Routes = [
  {
    component: QuestionsCoreComponent,
    path: '',
    children: [
      {
        component: ClassroomQuestionsComponent,
        path: ''
      },

      {
        component: CreateQuestionComponent,
        path: 'new'
      },
      {
        component: QuestionComponent,
        path: ':questionId'
      },
      {
        component: CreateAnswerComponent,
        path: ':questionId/answer/new'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(questionsRoutes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {
}
