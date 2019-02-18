import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {QuestionsCoreComponent} from '../../components/classroom-ui/classroom-questions/questions-core/questions-core.component';
import {QuestionsRoutingModule} from './questions-routing.module';
import {ClassroomQuestionsComponent} from '../../components/classroom-ui/classroom-questions/classroom-questions.component';
import {QuestionComponent} from '../../components/classroom-ui/classroom-questions/question/question.component';
import {ClassroomQuestionsCardComponent} from '../../components/classroom-ui/classroom-questions/classroom-questions-card/classroom-questions-card.component';
import {QuestionBodyComponent} from '../../components/classroom-ui/classroom-questions/question/question-body/question-body.component';
import {AnswerCardComponent} from '../../components/classroom-ui/classroom-questions/question/answer-card/answer-card.component';
import {AnswerCommentCardComponent} from '../../components/classroom-ui/classroom-questions/question/answer-comment-card/answer-comment-card.component';
import {AnswerCommentInputComponent} from '../../components/classroom-ui/classroom-questions/question/answer-comment-input/answer-comment-input.component';
import {QuestionCommentCardComponent} from '../../components/classroom-ui/classroom-questions/question/question-comment-card/question-comment-card.component';
import {QuestionCommentInputComponent} from '../../components/classroom-ui/classroom-questions/question/question-comment-input/question-comment-input.component';
import {CreateQuestionComponent} from '../../components/classroom-ui/classroom-questions/create-question/create-question.component';
import {EditorModule} from 'primeng/editor';
import {CreateAnswerComponent} from '../../components/classroom-ui/classroom-questions/question/create-answer/create-answer.component';
import {VotersListComponent} from '../../components/dialogs/voters-list/voters-list.component';

@NgModule({
  declarations: [
    QuestionsCoreComponent,
    ClassroomQuestionsComponent,
    QuestionComponent,
    ClassroomQuestionsCardComponent,
    QuestionBodyComponent,
    AnswerCardComponent,
    AnswerCommentCardComponent,
    AnswerCommentInputComponent,
    QuestionCommentCardComponent,
    QuestionCommentInputComponent,
    CreateQuestionComponent,
    CreateAnswerComponent,
    VotersListComponent
  ],
  entryComponents: [
    VotersListComponent
  ],
  imports: [SharedModule, QuestionsRoutingModule, EditorModule]
})
export class QuestionsModule {
}
