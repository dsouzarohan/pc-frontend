import {Action} from '@ngrx/store';
import {
  Answer,
  AnswerComment,
  AnswerCommentVote,
  AnswerVote,
  Question,
  QuestionComment,
  QuestionCommentVote,
  QuestionVote
} from '../../models/questions.models';

export enum QuestionsActionTypes {
  TRY_GET_QUESTIONS = 'TRY_GET_QUESTIONS',
  ON_GET_QUESTIONS_SUCCESS = 'ON_GET_QUESTIONS_SUCCESS',
  ON_GET_QUESTIONS_FAIL = 'ON_GET_QUESTIONS_FAIL',

  TRY_CREATE_QUESTION = 'TRY_CREATE_QUESTION',
  ON_CREATE_QUESTION_SUCCESS = 'ON_CREATE_QUESTION_SUCCESS',
  ON_CREATE_QUESTION_FAIL = 'ON_CREATE_QUESTION_FAIL',

  TRY_CREATE_ANSWER = 'TRY_CREATE_ANSWER',
  ON_CREATE_ANSWER_SUCCESS = 'ON_CREATE_ANSWER_SUCCESS',
  ON_CREATE_ANSWER_FAIL = 'ON_CREATE_ANSWER_FAIL',

  TRY_CREATE_QUESTION_COMMENT = 'TRY_CREATE_QUESTION_COMMENT',
  ON_CREATE_QUESTION_COMMENT_SUCCESS = 'ON_CREATE_QUESTION_COMMENT_SUCCESS',
  ON_CREATE_QUESTION_COMMENT_FAIL = 'ON_CREATE_QUESTION_COMMENT_FAIL',

  TRY_CREATE_ANSWER_COMMENT = 'TRY_CREATE_ANSWER_COMMENT',
  ON_CREATE_ANSWER_COMMENT_SUCCESS = 'ON_CREATE_ANSWER_COMMENT_SUCCESS',
  ON_CREATE_ANSWER_COMMENT_FAIL = 'ON_CREATE_ANSWER_COMMENT_FAIL',

  TRY_ADD_QUESTION_VOTE = 'TRY_ADD_QUESTION_VOTE',
  ON_ADD_QUESTION_VOTE_SUCCESS = 'ON_ADD_QUESTION_VOTE_SUCCESS',
  ON_ADD_QUESTION_VOTE_FAIL = 'ON_ADD_QUESTION_VOTE_FAIL',

  TRY_ADD_ANSWER_VOTE = 'TRY_ADD_ANSWER_VOTE',
  ON_ADD_ANSWER_VOTE_SUCCESS = 'ON_ADD_ANSWER_VOTE_SUCCESS',
  ON_ADD_ANSWER_VOTE_FAIL = 'ON_ADD_ANSWER_VOTE_FAIL',

  TRY_ADD_QUESTION_COMMENT_VOTE = 'TRY_ADD_QUESTION_COMMENT_VOTE',
  ON_ADD_QUESTION_COMMENT_VOTE_SUCCESS = 'ON_ADD_QUESTION_COMMENT_VOTE_SUCCESS',
  ON_ADD_QUESTION_COMMENT_VOTE_FAIL = 'ON_ADD_QUESTION_COMMENT_VOTE_FAIL',

  TRY_ADD_ANSWER_COMMENT_VOTE = 'TRY_ADD_ANSWER_COMMENT_VOTE',
  ON_ADD_ANSWER_COMMENT_VOTE_SUCCESS = 'ON_ADD_ANSWER_COMMENT_VOTE_SUCCESS',
  ON_ADD_ANSWER_COMMENT_VOTE_FAIL = 'ON_ADD_ANSWER_COMMENT_VOTE_FAIL',

  TRY_SELECT_ANSWER = 'TRY_SELECT_ANSWER',
  ON_SELECT_ANSWER_SUCCESS = 'ON_SELECT_ANSWER_SUCCESS',
  ON_SELECT_ANSWER_FAIL = 'ON_SELECT_ANSWER_FAIL'
}

//get question actions

export class TryGetQuestionsAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_GET_QUESTIONS;

  constructor(public payload: number) {
  }
}

export class OnGetQuestionsSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_GET_QUESTIONS_SUCCESS;

  constructor(public payload: Array<Question>) {
  }
}

export class OnGetQuestionsFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_GET_QUESTIONS_FAIL;

  constructor(public payload: string) {
  }
}

//Create question actions

export class TryCreateQuestionAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_CREATE_QUESTION;

  constructor(
    public payload: {
      questionName: string;
      questionBody: string;
      classroomId: number;
    }
  ) {
  }
}

export class OnCreateQuestionSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_QUESTION_SUCCESS;

  constructor(public payload: Question) {
  }
}

export class OnCreateQuestionFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_QUESTION_FAIL;

  constructor(public payload: string) {
  }
}

//Create question comment actions

export class TryCreateQuestionCommentAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_CREATE_QUESTION_COMMENT;

  constructor(
    public payload: {
      questionComment: string;
      questionId: number;
    }
  ) {
  }
}

export class OnCreateQuestionCommentSuccessAction implements Action {
  readonly type: string =
    QuestionsActionTypes.ON_CREATE_QUESTION_COMMENT_SUCCESS;

  constructor(public payload: QuestionComment) {
  }
}

export class OnCreateQuestionCommentFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_QUESTION_COMMENT_FAIL;

  constructor(public payload: string) {
  }
}

//Create answer actions

export class TryCreateAnswerAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_CREATE_ANSWER;

  constructor(
    public payload: {
      answerBody: string;
      questionId: number;
    }
  ) {
  }
}

export class OnCreateAnswerSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_ANSWER_SUCCESS;

  constructor(public payload: Answer) {
  }
}

export class OnCreateAnswerFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_ANSWER_FAIL;

  constructor(public payload: string) {
  }
}

//Create answer comment actions

export class TryCreateAnswerCommentAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_CREATE_ANSWER_COMMENT;

  constructor(
    public payload: {
      comment: string;
      questionAnswerId: number;
    }
  ) {
  }
}

export class OnCreateAnswerCommentSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_ANSWER_COMMENT_SUCCESS;

  constructor(public payload: AnswerComment) {
  }
}

export class OnCreateAnswerCommentFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_CREATE_ANSWER_COMMENT_FAIL;

  constructor(public payload: string) {
  }
}

//add question vote action

export class TryAddQuestionVoteAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_ADD_QUESTION_VOTE;

  constructor(
    public payload: {
      questionId: number;
      voteType: 'U' | 'D';
    }
  ) {
  }
}

export class OnAddQuestionVoteSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_ADD_QUESTION_VOTE_SUCCESS;

  constructor(public payload: QuestionVote) {
  }
}

export class OnAddQuestionVoteFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_ADD_QUESTION_VOTE_FAIL;

  constructor(public payload: string) {
  }
}

//add question comment vote

export class TryAddQuestionCommentVoteAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_ADD_QUESTION_COMMENT_VOTE;

  constructor(
    public payload: {
      questionCommentId: number;
      voteType: 'U' | 'D';
    }
  ) {
  }
}

export class OnAddQuestionCommentVoteSuccessAction implements Action {
  readonly type: string =
    QuestionsActionTypes.ON_ADD_QUESTION_COMMENT_VOTE_SUCCESS;

  constructor(public payload: QuestionCommentVote) {
  }
}

export class OnAddQuestionCommentVoteFailAction implements Action {
  readonly type: string =
    QuestionsActionTypes.ON_ADD_QUESTION_COMMENT_VOTE_FAIL;

  constructor(public payload: string) {
  }
}

//add answer vote

export class TryAddAnswerVoteAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_ADD_ANSWER_VOTE;

  constructor(
    public payload: {
      questionAnswerId: number;
      voteType: 'U' | 'D';
    }
  ) {
  }
}

export class OnAddAnswerVoteSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_ADD_ANSWER_VOTE_SUCCESS;

  constructor(public payload: AnswerVote) {
  }
}

export class OnAddAnswerVoteFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_ADD_ANSWER_VOTE_FAIL;

  constructor(public payload: string) {
  }
}

//add answer comment vote

export class TryAddAnswerCommentVoteAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_ADD_ANSWER_COMMENT_VOTE;

  constructor(
    public payload: {
      answerCommentId: number;
      voteType: 'U' | 'D';
    }
  ) {
  }
}

export class OnAddAnswerCommentVoteSuccessAction implements Action {
  readonly type: string =
    QuestionsActionTypes.ON_ADD_ANSWER_COMMENT_VOTE_SUCCESS;

  constructor(public payload: AnswerCommentVote) {
  }
}

export class OnAddAnswerCommentVoteFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_ADD_ANSWER_COMMENT_VOTE_FAIL;

  constructor(public payload: string) {
  }
}

//select answer actions

export class TrySelectAnswerAction implements Action {
  readonly type: string = QuestionsActionTypes.TRY_SELECT_ANSWER;

  constructor(
    public payload: {
      questionId: number;
      answerId: number;
    }
  ) {
  }
}

export class OnSelectAnswerSuccessAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_SELECT_ANSWER_SUCCESS;

  constructor(public payload: {
    selectedAnswer: Answer,
    oldAnswerId?: number,
    status: 'REMOVED' | 'CHANGED' | 'SELECTED'
  }) {
  }
}

export class OnSelectAnswerFailAction implements Action {
  readonly type: string = QuestionsActionTypes.ON_SELECT_ANSWER_FAIL;

  constructor(public payload: string) {
  }
}

export type QuestionsActions =
  | TryGetQuestionsAction
  | OnGetQuestionsSuccessAction
  | OnGetQuestionsFailAction
  | TryCreateQuestionAction
  | OnCreateQuestionSuccessAction
  | OnCreateQuestionFailAction
  | TryCreateQuestionCommentAction
  | OnAddQuestionCommentVoteSuccessAction
  | OnAddQuestionCommentVoteFailAction
  | TryCreateAnswerAction
  | OnCreateAnswerSuccessAction
  | OnCreateAnswerFailAction
  | TryCreateAnswerCommentAction
  | OnCreateAnswerCommentSuccessAction
  | OnCreateAnswerCommentFailAction
  | TryAddQuestionVoteAction
  | OnAddQuestionVoteSuccessAction
  | OnAddQuestionVoteFailAction
  | TryAddQuestionCommentVoteAction
  | OnAddQuestionCommentVoteSuccessAction
  | OnAddQuestionCommentVoteFailAction
  | TryAddAnswerVoteAction
  | OnAddAnswerVoteSuccessAction
  | OnAddAnswerVoteFailAction
  | TryAddAnswerCommentVoteAction
  | OnAddAnswerCommentVoteSuccessAction
  | OnAddAnswerCommentVoteFailAction
  | TrySelectAnswerAction
  | OnSelectAnswerSuccessAction
  | OnSelectAnswerFailAction;
