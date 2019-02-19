import {MasterUserName} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Question {
  id: number;
  name: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  classroomId: number;
  authorId: number;
  questionAnswers?: Array<Answer>;
  questionComments?: Array<QuestionComment>;
  questionVotes?: Array<QuestionVote>;
  author: MasterUserName;
}

export interface Answer {
  id: number;
  body: string;
  isSelectedAnswer: boolean;
  createdAt: string;
  updatedAt: string;
  answererId: number;
  questionId: number;
  answerComments?: Array<AnswerComment>;
  answerVotes?: Array<AnswerVote>;
  answerer: MasterUserName;
}

export interface QuestionComment {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  commenterId: number;
  questionId: number;
  questionCommenter: MasterUserName;
  questionCommentVotes?: Array<QuestionCommentVote>;
}

export interface AnswerComment {
  id: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  commenterId: string;
  answerId: number;
  answerCommentVotes?: Array<AnswerCommentVote>;
  answerCommenter: MasterUserName;
}

export interface QuestionVote {
  id: number;
  voteType: 'U' | 'D';
  createdAt: string;
  updatedAt: string;
  voterId: number;
  questionId: number;
  voter: MasterUserName;
}

export interface AnswerVote {
  id: number;
  voteType: 'U' | 'D';
  createdAt: string;
  updatedAt: string;
  voterId: number;
  questionAnswerId: number;
  voter: MasterUserName;
}

export interface QuestionCommentVote {
  id: number;
  voteType: 'U' | 'D';
  createdAt: string;
  updatedAt: string;
  voterId: number;
  questionCommentId: number;
  voter: MasterUserName;
}

export interface AnswerCommentVote {
  id: number;
  voteType: 'U' | 'D';
  createdAt: string;
  updatedAt: string;
  voterId: number;
  answerCommentId: number;
  voter: MasterUserName;
}

//entity models for flattening

const questionVoteSchema = new schema.Entity('questionVotes');
const answerVoteSchema = new schema.Entity('answerVotes');
const questionCommentVoteSchema = new schema.Entity('questionCommentVotes');
const answerCommentVoteSchema = new schema.Entity('answerCommentVotes');

const questionCommentSchema = new schema.Entity('questionComments', {
  questionCommentVotes: [questionCommentVoteSchema]
});

const answerCommentSchema = new schema.Entity('answerComments', {
  answerCommentVotes: [answerCommentVoteSchema]
});

const answerSchema = new schema.Entity('questionAnswers', {
  answerComments: [answerCommentSchema],
  answerVotes: [answerVoteSchema]
});

const questionSchema = new schema.Entity('questions', {
  questionAnswers: [answerSchema],
  questionComments: [questionCommentSchema],
  questionVotes: [questionVoteSchema]
});

const questionsListSchema = [questionSchema];

export interface QuestionsEntity {
  entities: {
    questions: {
      [key: number]: {
        id: number;
        name: string;
        body: string;
        createdAt: string;
        updatedAt: string;
        classroomId: number;
        authorId: number;
        questionAnswers: Array<number>;
        questionComments: Array<number>;
        questionVotes: Array<number>;
        author: MasterUserName;
      };
    };
    questionAnswers: {
      [key: number]: {
        id: number;
        body: string;
        isSelectedAnswer: boolean;
        createdAt: string;
        updatedAt: string;
        answererId: number;
        questionId: number;
        answerComments: Array<number>;
        answerVotes: Array<number>;
      };
    };
    questionComments: {
      [key: number]: {
        id: number;
        comment: string;
        createdAt: string;
        updatedAt: string;
        commenterId: number;
        questionId: number;
        questionCommenter: MasterUserName;
        questionCommentVotes: Array<number>;
      };
    };
    answerComments: {
      [key: number]: {
        id: number;
        comment: string;
        createdAt: string;
        updatedAt: string;
        commenterId: string;
        answerId: number;
        answerCommentVotes: Array<number>;
        answerCommenter: MasterUserName;
      };
    };
    questionVotes: {
      [key: number]: QuestionVote;
    };
    answerVotes: {
      [key: number]: AnswerVote;
    };
    questionCommentVotes: {
      [key: number]: QuestionCommentVote;
    };
    answerCommentVotes: {
      [key: number]: AnswerCommentVote;
    };
  };
  result: Array<number>;
}

export const questionsToEntity = (
  questions: Array<Question>
): QuestionsEntity => {
  return normalize(questions, questionsListSchema);
};

export const entityToQuestion = (
  questionsEntity: QuestionsEntity,
  questionId: number
): Question => {
  if (questionsEntity) {

    return denormalize(
      questionId,
      questionSchema,
      questionsEntity.entities
    );
  }

  return null;
};

export const getQuestionsFromEntity = (
  questionsEntity: QuestionsEntity
): Array<Question> => {
  if (questionsEntity) {
    let questions = questionsEntity.entities.questions;
    if (questions) {
      return Object.keys(questions).map(key => questions[key]);
    } else {
      return [];
    }
  } else {
    return null;
  }
};
