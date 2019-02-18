import {
  Answer,
  AnswerComment,
  AnswerCommentVote,
  AnswerVote,
  Question,
  QuestionComment,
  QuestionCommentVote,
  QuestionVote
} from '../questions.models';

export interface GetQuestionsResponse {
  message: string;
  data: Array<Question>
}

export interface CreateQuestionResponse {
  message: string;
  data: Question;
}

export interface CreateQuestionCommentResponse {
  message: string;
  data: QuestionComment;
}

export interface CreateAnswerResponse {
  message: string;
  data: Answer
}

export interface CreateAnswerCommentResponse {
  message: string;
  data: AnswerComment
}

export interface AddQuestionVoteResponse {
  message: string;
  data?: QuestionVote;
}

export interface AddAnswerVoteResponse {
  message: string;
  data?: AnswerVote;
}

export interface AddQuestionCommentVoteResponse {
  message: string;
  data?: QuestionCommentVote;
}

export interface AddAnswerCommentVoteResponse {
  message: string;
  data?: AnswerCommentVote;
}

export interface SelectAnswerResponse {
  message: string;
  data: Answer,
  oldAnswerId?: number,
  status: 'REMOVED' | 'CHANGED' | 'SELECTED'
}
