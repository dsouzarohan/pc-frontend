import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromQuestions from './questions.reducer';
import * as QuestionsActionBundle from './questions.actions';

import * as questionSelectors from './questions.selectors';

@Injectable()
export class QuestionsFacade {
  public question$ = this.store.select(questionSelectors.getQuestion);
  public questions$ = this.store.select(questionSelectors.getQuestions);

  constructor(private store: Store<fromQuestions.QuestionsState>) {
  }

  public questionVotes$ = (questionId: number) =>
    this.store.select(questionSelectors.getQuestionVotes(questionId));
  public questionCommentVotes$ = (questionCommentId: number) =>
    this.store.select(
      questionSelectors.getQuestionCommentVotes(questionCommentId)
    );
  public answerVotes$ = (answerId: number) =>
    this.store.select(questionSelectors.getAnswerVotes(answerId));

  public answerCommentVotes$ = (answerCommentId: number) =>
    this.store.select(questionSelectors.getAnswerCommentVotes(answerCommentId));

  _loadQuestions(classroomId: number) {
    this.store.dispatch(
      new QuestionsActionBundle.TryGetQuestionsAction(classroomId)
    );
  }

  _createQuestion(questionDetails: {
    questionName: string;
    questionBody: string;
    classroomId: number;
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryCreateQuestionAction(questionDetails)
    );
  }

  _createQuestionComment(questionCommentDetails: {
    questionComment: string;
    questionId: number;
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryCreateQuestionCommentAction(
        questionCommentDetails
      )
    );
  }

  _createAnswer(answerDetails: { answerBody: string; questionId: number }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryCreateAnswerAction(answerDetails)
    );
  }

  _createAnswerComment(answerCommentDetails: {
    comment: string;
    questionAnswerId: number;
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryCreateAnswerCommentAction(
        answerCommentDetails
      )
    );
  }

  _addQuestionVote(questionVoteDetails: {
    questionId: number;
    voteType: 'U' | 'D';
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryAddQuestionVoteAction(questionVoteDetails)
    );
  }

  _addQuestionCommentVote(questionCommentVoteDetails: {
    questionCommentId: number;
    voteType: 'U' | 'D';
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryAddQuestionCommentVoteAction(
        questionCommentVoteDetails
      )
    );
  }

  _addAnswerVote(answerVoteDetails: {
    questionAnswerId: number;
    voteType: 'U' | 'D';
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryAddAnswerVoteAction(answerVoteDetails)
    );
  }

  _addAnswerCommentVote(answerCommentVoteDetails: {
    answerCommentId: number;
    voteType: 'U' | 'D';
  }) {
    this.store.dispatch(
      new QuestionsActionBundle.TryAddAnswerCommentVoteAction(
        answerCommentVoteDetails
      )
    );
  }

  _selectAnswer(selectAnswerDetails: { questionId: number; answerId: number }) {
    this.store.dispatch(
      new QuestionsActionBundle.TrySelectAnswerAction(selectAnswerDetails)
    );
  }
}
