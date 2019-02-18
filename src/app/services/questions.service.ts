import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {
  AddAnswerCommentVoteResponse,
  AddAnswerVoteResponse,
  AddQuestionCommentVoteResponse,
  AddQuestionVoteResponse,
  CreateAnswerCommentResponse,
  CreateAnswerResponse,
  CreateQuestionCommentResponse,
  CreateQuestionResponse,
  GetQuestionsResponse,
  SelectAnswerResponse
} from '../models/responses/questions-responses.models';

@Injectable()
export class QuestionsService {
  constructor(private http: HttpClient) {
  }

  public getQuestions(classroomId: number) {

    console.log('@QuestionsService#GetQuestions', classroomId);

    return this.http.get<GetQuestionsResponse>(
      environment.apiUrl + 'questions?classroomId=' + classroomId
    );
  }

  public createQuestion(questionDetails: {
    questionName: string;
    questionBody: string;
    classroomId: number;
  }) {
    return this.http.post<CreateQuestionResponse>(
      environment.apiUrl + 'questions/new',
      questionDetails
    );
  }

  public createQuestionComment(questionCommentDetails: {
    questionComment: string;
    questionId: number;
  }) {
    return this.http.post<CreateQuestionCommentResponse>(
      environment.apiUrl + 'questions/questionComment/new',
      questionCommentDetails
    );
  }

  public createAnswer(answerDetails: {
    answerBody: string;
    questionId: number;
  }) {
    return this.http.post<CreateAnswerResponse>(
      environment.apiUrl + 'questions/questionAnswer/new',
      answerDetails
    );
  }

  public createAnswerComment(answerCommentDetails: {
    comment: string;
    questionAnswerId: number;
  }) {
    return this.http.post<CreateAnswerCommentResponse>(
      environment.apiUrl + 'questions/answerComment/new',
      answerCommentDetails
    );
  }

  public addQuestionVote(questionVoteDetails: {
    questionId: number;
    voteType: 'U' | 'D';
  }) {
    return this.http.post<AddQuestionVoteResponse>(
      environment.apiUrl + 'questions/questionVote',
      questionVoteDetails
    );
  }

  public addQuestionCommentVote(questionCommentVoteDetails: {
    questionCommentId: number;
    voteType: 'U' | 'D';
  }) {
    return this.http.post<AddQuestionCommentVoteResponse>(
      environment.apiUrl + 'questions/questionCommentVote',
      questionCommentVoteDetails
    );
  }

  public addAnswerVote(answerVoteDetails: {
    questionAnswerId: number;
    voteType: 'U' | 'D';
  }) {
    return this.http.post<AddAnswerVoteResponse>(
      environment.apiUrl + 'questions/answerVote',
      answerVoteDetails
    );
  }

  public addAnswerCommentVote(answerCommentVoteDetails: {
    answerCommentId: number;
    voteType: 'U' | 'D';
  }) {
    return this.http.post<AddAnswerCommentVoteResponse>(
      environment.apiUrl + 'questions/answerCommentVote',
      answerCommentVoteDetails
    );
  }

  public selectAnswer(selectAnswerDetails: {
    questionId: number,
    answerId: number
  }) {
    return this.http.post<SelectAnswerResponse>(environment.apiUrl + 'questions/selectAnswer', selectAnswerDetails);
  }
}
