import {createSelector} from '@ngrx/store';
import {getClassroomFeatureState} from '../classroom-feature/classroom-feature.selectors';

import * as fromQuestions from './questions.reducer';
import * as fromClassroomFeature from '../classroom-feature/classroom-feature.reducer';
import * as fromRouter from '../router/router.reducer';
import {
  AnswerCommentVote,
  AnswerVote,
  entityToQuestion,
  getQuestionsFromEntity,
  QuestionCommentVote,
  QuestionVote
} from '../../models/questions.models';

export const getQuestionsState = createSelector(
  getClassroomFeatureState,
  (state: fromClassroomFeature.ClassroomFeatureState) => state.questions
);

export const isPosting = createSelector(
  getQuestionsState,
  state => state.isPosting
);

export const isLoading = createSelector(
  getQuestionsState,
  state => state.isLoading
);

export const isCommenting = createSelector(
  getQuestionsState,
  state => state.isCommenting
);

export const isVoting = createSelector(
  getQuestionsState,
  state => state.isVoting
);

export const getQuestionsEntity = createSelector(
  getQuestionsState,
  (state: fromQuestions.QuestionsState) => state.questions
);

export const getQuestion = createSelector(
  getQuestionsEntity,
  fromRouter.getRouterState,
  (questionsEntity, routerState) => {
    let questionId = routerState.state.params.questionId;
    let question = entityToQuestion(questionsEntity, questionId);
    return question;
  }
);

export const getQuestionVotes = (questionId: number) =>
  createSelector(getQuestionsEntity, questionEntity => {
    let upVotes: QuestionVote[] = [];
    let downVotes: QuestionVote[] = [];

    if(questionEntity){
      let questionVoteIds =
        questionEntity.entities.questions[questionId].questionVotes;

      for (let i = 0; i < questionVoteIds.length; i++) {
        let questionVote =
          questionEntity.entities.questionVotes[questionVoteIds[i]];

        if (questionVote.voteType === 'U') {
          upVotes.push(questionVote);
        } else {
          downVotes.push(questionVote);
        }
      }
    }

    return {
      upVotes,
      downVotes
    };
  });

export const getQuestionCommentVotes = (questionCommentId: number) => createSelector(getQuestionsEntity, questionEntity => {
  let upVotes: QuestionCommentVote[] = [];
  let downVotes: QuestionCommentVote[] = [];

  if(questionEntity){
    let questionCommentVoteIds =
      questionEntity.entities.questionComments[questionCommentId].questionCommentVotes;

    for (let i = 0; i < questionCommentVoteIds.length; i++) {
      let questionCommentVote =
        questionEntity.entities.questionCommentVotes[questionCommentVoteIds[i]];

      if (questionCommentVote.voteType === 'U') {
        upVotes.push(questionCommentVote);
      } else {
        downVotes.push(questionCommentVote);
      }
    }
  }

  return {
    upVotes,
    downVotes
  };
});

export const getAnswerVotes = (answerId: number) => createSelector(getQuestionsEntity, questionEntity => {
  let upVotes: AnswerVote[] = [];
  let downVotes: AnswerVote[] = [];

  if(questionEntity){
    let answerVoteIds =
      questionEntity.entities.questionAnswers[answerId].answerVotes;

    for (let i = 0; i < answerVoteIds.length; i++) {
      let answerVote =
        questionEntity.entities.answerVotes[answerVoteIds[i]];

      if (answerVote.voteType === 'U') {
        upVotes.push(answerVote);
      } else {
        downVotes.push(answerVote);
      }
    }

  }

  return {
    upVotes,
    downVotes
  };
});

export const getAnswerCommentVotes = (answerCommentId: number) => createSelector(getQuestionsEntity, questionEntity => {
  let upVotes: AnswerCommentVote[] = [];
  let downVotes: AnswerCommentVote[] = [];

  if(questionEntity){
    let answerCommentVoteIds =
      questionEntity.entities.answerComments[answerCommentId].answerCommentVotes;

    for (let i = 0; i < answerCommentVoteIds.length; i++) {
      let answerCommentVote =
        questionEntity.entities.answerCommentVotes[answerCommentVoteIds[i]];

      if (answerCommentVote.voteType === 'U') {
        upVotes.push(answerCommentVote);
      } else {
        downVotes.push(answerCommentVote);
      }
    }
  }

  return {
    upVotes,
    downVotes
  };
});

export const getQuestions = createSelector(
  getQuestionsEntity,
  questionsEntity => {
    return getQuestionsFromEntity(questionsEntity);
  }
);
