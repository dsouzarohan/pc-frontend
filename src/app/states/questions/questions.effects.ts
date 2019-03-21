import { Injectable } from "@angular/core";
import { QuestionsService } from "../../services/questions.service";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as QuestionsActionBundle from "./questions.actions";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { RouterReducerState } from "@ngrx/router-store";
import * as fromRouter from "../router/router.reducer";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";

const QuestionsActionTypes = QuestionsActionBundle.QuestionsActionTypes;

@Injectable()
export class QuestionsEffects {
  @Effect()
  tryGetQuestionsEffect = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_GET_QUESTIONS))
    .pipe(
      map((action: QuestionsActionBundle.TryGetQuestionsAction) => {
        console.log("@QuestionsEffects#action", action);
        return action.payload;
      })
    )
    .pipe(
      switchMap(classroomId =>
        this.questionsService.getQuestions(classroomId).pipe(
          map(response => {
            console.log("@QuestionsEffects#Response", response);
            return new QuestionsActionBundle.OnGetQuestionsSuccessAction(
              response.data
            );
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnGetQuestionsFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  tryCreateQuestion = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_CREATE_QUESTION))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryCreateQuestionAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(questionDetails =>
        this.questionsService.createQuestion(questionDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnCreateQuestionSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnCreateQuestionFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect({
    dispatch: false
  })
  onCreateQuestionSuccess = this.actions.pipe(
    ofType(QuestionsActionTypes.ON_CREATE_QUESTION_SUCCESS),
    withLatestFrom(
      this.store.select(fromRouter.getRouterState),
      (
        action: QuestionsActionBundle.OnCreateQuestionSuccessAction,
        routerState
      ) => {
        this.snackBar.open("Question created successfully", null, {
          duration: 3000,
          panelClass: "snack-bar-align-span-center"
        });

        let question = action.payload;
        let currentRouteParams = routerState.state.params;

        this.router.navigate([
          "/classroom",
          currentRouteParams.classroomId,
          "questions",
          question.id
        ]);
      }
    )
  );

  @Effect({
    dispatch: false
  })
  onCreateQuestionFail = this.actions
    .pipe(ofType(QuestionsActionTypes.ON_CREATE_QUESTION_FAIL))
    .pipe(
      map(() => {
        this.snackBar.open("Woops! Please try again!");
      })
    );

  @Effect()
  tryCreateAnswer = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_CREATE_ANSWER))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryCreateAnswerAction) => action.payload
      )
    )
    .pipe(
      switchMap(answerDetails =>
        this.questionsService.createAnswer(answerDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnCreateAnswerSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnCreateAnswerFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  @Effect({
    dispatch: false
  })
  onCreateAnswerSuccess = this.actions.pipe(
    ofType(QuestionsActionTypes.ON_CREATE_ANSWER_SUCCESS),
    withLatestFrom(
      this.store.select(fromRouter.getRouterState),
      (
        action: QuestionsActionBundle.OnCreateAnswerSuccessAction,
        routerState
      ) => {
        this.snackBar.open("Your answer was posted successfully", null, {
          duration: 3000,
          panelClass: "snack-bar-align-span-center"
        });

        let answer = action.payload;
        let currentRouteParams = routerState.state.params;

        this.router.navigate([
          "/classroom",
          currentRouteParams.classroomId,
          "questions",
          answer.questionId
        ]);
      }
    )
  );

  @Effect({
    dispatch: false
  })
  onCreateAnswerFail = this.actions
    .pipe(ofType(QuestionsActionTypes.ON_CREATE_ANSWER_FAIL))
    .pipe(
      map(() => {
        this.snackBar.open("Woops! Please try again!");
      })
    );

  @Effect()
  tryCreateQuestionComment = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_CREATE_QUESTION_COMMENT))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryCreateQuestionCommentAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(questionCommentDetails =>
        this.questionsService
          .createQuestionComment(questionCommentDetails)
          .pipe(
            map(
              response =>
                new QuestionsActionBundle.OnCreateQuestionCommentSuccessAction(
                  response.data
                )
            ),
            catchError((errorResponse: HttpErrorResponse) =>
              of(
                new QuestionsActionBundle.OnCreateQuestionCommentFailAction(
                  errorResponse.error.message
                )
              )
            )
          )
      )
    );
  @Effect()
  tryCreateAnswerComment = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_CREATE_ANSWER_COMMENT))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryCreateAnswerCommentAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(answerCommentDetails =>
        this.questionsService.createAnswerComment(answerCommentDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnCreateAnswerCommentSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnCreateAnswerCommentFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  tryAddQuestionVote = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_ADD_QUESTION_VOTE))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryAddQuestionVoteAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(voteDetails =>
        this.questionsService.addQuestionVote(voteDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnAddQuestionVoteSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnAddQuestionVoteFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  tryAddAnswerVote = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_ADD_ANSWER_VOTE))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryAddAnswerVoteAction) => action.payload
      )
    )
    .pipe(
      switchMap(voteDetails =>
        this.questionsService.addAnswerVote(voteDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnAddAnswerVoteSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnAddAnswerVoteFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  tryAddQuestionCommentVote = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_ADD_QUESTION_COMMENT_VOTE))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryAddQuestionCommentVoteAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(voteDetails =>
        this.questionsService.addQuestionCommentVote(voteDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnAddQuestionCommentVoteSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnAddQuestionCommentVoteFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  tryAddAnswerCommentVote = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_ADD_ANSWER_COMMENT_VOTE))
    .pipe(
      map(
        (action: QuestionsActionBundle.TryAddAnswerCommentVoteAction) =>
          action.payload
      )
    )
    .pipe(
      switchMap(voteDetails =>
        this.questionsService.addAnswerCommentVote(voteDetails).pipe(
          map(
            response =>
              new QuestionsActionBundle.OnAddAnswerCommentVoteSuccessAction(
                response.data
              )
          ),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnAddAnswerCommentVoteFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );
  @Effect()
  trySelectAnswer = this.actions
    .pipe(ofType(QuestionsActionTypes.TRY_SELECT_ANSWER))
    .pipe(
      map(
        (action: QuestionsActionBundle.TrySelectAnswerAction) => action.payload
      )
    )
    .pipe(
      switchMap(selectAnswerDetails =>
        this.questionsService.selectAnswer(selectAnswerDetails).pipe(
          map(response => {
            console.log("@QuestionsEffects#SelectAnswerResponse", response);
            return new QuestionsActionBundle.OnSelectAnswerSuccessAction({
              selectedAnswer: response.data,
              oldAnswerId: response.oldAnswerId,
              status: response.status
            });
          }),
          catchError((errorResponse: HttpErrorResponse) =>
            of(
              new QuestionsActionBundle.OnSelectAnswerFailAction(
                errorResponse.error.message
              )
            )
          )
        )
      )
    );

  constructor(
    private questionsService: QuestionsService,
    private actions: Actions,
    private store: Store<RouterReducerState<fromRouter.RouterStateUrl>>,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}
}
