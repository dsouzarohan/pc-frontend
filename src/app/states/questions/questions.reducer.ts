import {Action} from '@ngrx/store';
import {QuestionsEntity, questionsToEntity} from '../../models/questions.models';
import * as QuestionsActionBundle from './questions.actions';

const {QuestionsActionTypes} = QuestionsActionBundle;

export interface QuestionsState {
  questions: QuestionsEntity;
  isLoading: boolean;
}

const initialState: QuestionsState = {
  questions: null,
  isLoading: false
};

export const questionsReducer = (
  state: QuestionsState = initialState,
  action: Action
): QuestionsState => {
  switch (action.type) {
    case QuestionsActionTypes.TRY_SELECT_ANSWER:
    case QuestionsActionTypes.TRY_GET_QUESTIONS:
    case QuestionsActionTypes.TRY_CREATE_QUESTION:
    case QuestionsActionTypes.TRY_CREATE_QUESTION_COMMENT:
    case QuestionsActionTypes.TRY_CREATE_ANSWER:
    case QuestionsActionTypes.TRY_CREATE_ANSWER_COMMENT:
    case QuestionsActionTypes.TRY_ADD_QUESTION_VOTE:
    case QuestionsActionTypes.TRY_ADD_QUESTION_COMMENT_VOTE:
    case QuestionsActionTypes.TRY_ADD_ANSWER_COMMENT_VOTE:
      return {
        ...state,
        isLoading: true
      };
    case QuestionsActionTypes.ON_SELECT_ANSWER_FAIL:
    case QuestionsActionTypes.ON_GET_QUESTIONS_FAIL:
    case QuestionsActionTypes.ON_CREATE_QUESTION_FAIL:
    case QuestionsActionTypes.ON_CREATE_QUESTION_COMMENT_FAIL:
    case QuestionsActionTypes.ON_CREATE_ANSWER_FAIL:
    case QuestionsActionTypes.ON_CREATE_ANSWER_COMMENT_FAIL:
    case QuestionsActionTypes.ON_ADD_QUESTION_VOTE_FAIL:
    case QuestionsActionTypes.ON_ADD_QUESTION_COMMENT_VOTE_FAIL:
    case QuestionsActionTypes.ON_ADD_ANSWER_COMMENT_VOTE_FAIL:
      return {
        ...state,
        isLoading: false
      };

    case QuestionsActionTypes.ON_GET_QUESTIONS_SUCCESS:
      let questionsEntity = questionsToEntity(
        (<QuestionsActionBundle.OnGetQuestionsSuccessAction>action).payload
      );

      return {
        ...state,
        isLoading: false,
        questions: questionsEntity
      };

    case QuestionsActionTypes.ON_CREATE_QUESTION_SUCCESS:
      let question = (<QuestionsActionBundle.OnCreateQuestionSuccessAction>(
        action
      )).payload;

      return {
        ...state,
        isLoading: false,
        questions: {
          ...state.questions,
          entities: {
            ...state.questions.entities,
            questions: {
              [question.id]: {
                ...question,
                questionVotes: [],
                questionComments: [],
                questionAnswers: []
              },
              ...state.questions.entities.questions
            }
          },
          result: [question.id, ...state.questions.result]
        }
      };

    case QuestionsActionTypes.ON_CREATE_ANSWER_SUCCESS:
      let answer = (<QuestionsActionBundle.OnCreateAnswerSuccessAction>action)
        .payload;
      return {
        ...state,
        isLoading: false,
        questions: {
          ...state.questions,
          entities: {
            ...state.questions.entities,
            questions: {
              ...state.questions.entities.questions,
              [answer.questionId]: {
                ...state.questions.entities.questions[answer.questionId],
                questionAnswers: [
                  answer.id,
                  ...state.questions.entities.questions[answer.questionId]
                    .questionAnswers
                ]
              }
            },
            questionAnswers: {
              [answer.id]: {
                ...answer,
                answerComments: [],
                answerVotes: []
              },
              ...state.questions.entities.questionAnswers
            }
          }
        }
      };

    case QuestionsActionTypes.ON_CREATE_QUESTION_COMMENT_SUCCESS:
      let questionComment = (<
        QuestionsActionBundle.OnCreateQuestionCommentSuccessAction
        >action).payload;

      return {
        ...state,
        isLoading: false,
        questions: {
          ...state.questions,
          entities: {
            ...state.questions.entities,
            questions: {
              ...state.questions.entities.questions,
              [questionComment.questionId]: {
                ...state.questions.entities.questions[
                  questionComment.questionId
                  ],
                questionComments: [
                  questionComment.id,
                  ...state.questions.entities.questions[
                    questionComment.questionId
                    ].questionComments
                ]
              }
            },
            questionComments: {
              [questionComment.id]: {
                ...questionComment,
                questionCommentVotes: []
              },
              ...state.questions.entities.questionComments
            }
          }
        }
      };

    case QuestionsActionTypes.ON_CREATE_ANSWER_COMMENT_SUCCESS:
      let answerComment = (<
        QuestionsActionBundle.OnCreateAnswerCommentSuccessAction
        >action).payload;

      return {
        ...state,
        isLoading: false,
        questions: {
          ...state.questions,
          entities: {
            ...state.questions.entities,
            questionAnswers: {
              ...state.questions.entities.questionAnswers,
              [answerComment.answerId]: {
                ...state.questions.entities.questionAnswers[
                  answerComment.answerId
                  ],
                answerComments: [
                  answerComment.id,
                  ...state.questions.entities.questionAnswers[
                    answerComment.answerId
                    ].answerComments
                ]
              }
            },
            answerComments: {
              [answerComment.id]: {
                ...answerComment,
                answerCommentVotes: []
              },
              ...state.questions.entities.answerComments
            }
          }
        }
      };

    case QuestionsActionTypes.ON_ADD_QUESTION_VOTE_SUCCESS:
      let questionVote = (<
        QuestionsActionBundle.OnAddQuestionVoteSuccessAction
        >action).payload;

      let oldQuestionVote =
        state.questions.entities.questionVotes[questionVote.id];

      if (oldQuestionVote) {
        if (oldQuestionVote.voteType !== questionVote.voteType) {
          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                questionVotes: {
                  ...state.questions.entities.questionVotes,
                  [oldQuestionVote.id]: {
                    ...state.questions.entities.questionVotes[
                      oldQuestionVote.id
                      ],
                    voteType: questionVote.voteType
                  }
                }
              }
            }
          };
        } else {
          let newQuestionVotes = {...state.questions.entities.questionVotes};
          let newQuestionVotesArray = [
            ...state.questions.entities.questions[questionVote.questionId]
              .questionVotes
          ];
          let voteIndex = newQuestionVotesArray.indexOf(questionVote.id);
          newQuestionVotesArray.splice(voteIndex, 1);

          delete newQuestionVotes[questionVote.id];

          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                questionVotes: newQuestionVotes,
                questions: {
                  ...state.questions.entities.questions,
                  [questionVote.questionId]: {
                    ...state.questions.entities.questions[
                      questionVote.questionId
                      ],
                    questionVotes: newQuestionVotesArray
                  }
                }
              }
            }
          };
        }
      } else {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questions: {
                ...state.questions.entities.questions,
                [questionVote.questionId]: {
                  ...state.questions.entities.questions[
                    questionVote.questionId
                    ],
                  questionVotes: [
                    questionVote.id,
                    ...state.questions.entities.questions[
                      questionVote.questionId
                      ].questionVotes
                  ]
                }
              },
              questionVotes: {
                [questionVote.id]: {
                  ...questionVote
                },
                ...state.questions.entities.questionVotes
              }
            }
          }
        };
      }

    case QuestionsActionTypes.ON_ADD_ANSWER_VOTE_SUCCESS:
      let answerVote = (<QuestionsActionBundle.OnAddAnswerVoteSuccessAction>(
        action
      )).payload;

      console.log('@QuestionsReducer#AnswerVote', answerVote);

      let oldAnswerVote = state.questions.entities.answerVotes[answerVote.id];

      if (oldAnswerVote) {
        if (oldAnswerVote.voteType !== answerVote.voteType) {
          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                answerVotes: {
                  ...state.questions.entities.answerVotes,
                  [oldAnswerVote.id]: {
                    ...state.questions.entities.answerVotes[oldAnswerVote.id],
                    voteType: answerVote.voteType
                  }
                }
              }
            }
          };
        } else {
          let newAnswerVotes = {...state.questions.entities.answerVotes};
          let newAnswerVotesArray = [
            ...state.questions.entities.questionAnswers[
              answerVote.questionAnswerId
              ].answerVotes
          ];
          let voteIndex = newAnswerVotesArray.indexOf(answerVote.id);
          newAnswerVotesArray.splice(voteIndex, 1);

          delete newAnswerVotes[answerVote.id];

          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                answerVotes: newAnswerVotes,
                questionAnswers: {
                  ...state.questions.entities.questionAnswers,
                  [answerVote.questionAnswerId]: {
                    ...state.questions.entities.questionAnswers[
                      answerVote.questionAnswerId
                      ],
                    answerVotes: newAnswerVotesArray
                  }
                }
              }
            }
          };
        }
      } else {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questionAnswers: {
                ...state.questions.entities.questionAnswers,
                [answerVote.questionAnswerId]: {
                  ...state.questions.entities.questionAnswers[
                    answerVote.questionAnswerId
                    ],
                  answerVotes: [
                    answerVote.id,
                    ...state.questions.entities.questionAnswers[
                      answerVote.questionAnswerId
                      ].answerVotes
                  ]
                }
              },
              answerVotes: {
                [answerVote.id]: {
                  ...answerVote
                },
                ...state.questions.entities.answerVotes
              }
            }
          }
        };
      }

    case QuestionsActionTypes.ON_ADD_QUESTION_COMMENT_VOTE_SUCCESS:
      let questionCommentVote = (<
        QuestionsActionBundle.OnAddQuestionCommentVoteSuccessAction
        >action).payload;

      let oldQuestionCommentVote =
        state.questions.entities.questionCommentVotes[questionCommentVote.id];

      if (oldQuestionCommentVote) {
        if (oldQuestionCommentVote.voteType !== questionCommentVote.voteType) {
          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                questionCommentVotes: {
                  ...state.questions.entities.questionCommentVotes,
                  [oldQuestionCommentVote.id]: {
                    ...state.questions.entities.questionCommentVotes[
                      oldQuestionCommentVote.id
                      ],
                    voteType: questionCommentVote.voteType
                  }
                }
              }
            }
          };
        } else {
          let newQuestionCommentVotes = {
            ...state.questions.entities.questionCommentVotes
          };
          let newQuestionCommentVotesArray = [
            ...state.questions.entities.questionComments[
              questionCommentVote.questionCommentId
              ].questionCommentVotes
          ];
          let voteIndex = newQuestionCommentVotesArray.indexOf(
            questionCommentVote.id
          );
          newQuestionCommentVotesArray.splice(voteIndex, 1);

          delete newQuestionCommentVotes[questionCommentVote.id];

          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                questionCommentVotes: newQuestionCommentVotes,
                questionComments: {
                  ...state.questions.entities.questionComments,
                  [questionCommentVote.questionCommentId]: {
                    ...state.questions.entities.questionComments[
                      questionCommentVote.questionCommentId
                      ],
                    questionCommentVotes: newQuestionCommentVotesArray
                  }
                }
              }
            }
          };
        }
      } else {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questionComments: {
                ...state.questions.entities.questionComments,
                [questionCommentVote.questionCommentId]: {
                  ...state.questions.entities.questionComments[
                    questionCommentVote.questionCommentId
                    ],
                  questionCommentVotes: [
                    questionCommentVote.id,
                    ...state.questions.entities.questionComments[
                      questionCommentVote.questionCommentId
                      ].questionCommentVotes
                  ]
                }
              },
              questionCommentVotes: {
                [questionCommentVote.id]: {
                  ...questionCommentVote
                },
                ...state.questions.entities.questionCommentVotes
              }
            }
          }
        };
      }

    case QuestionsActionTypes.ON_ADD_ANSWER_COMMENT_VOTE_SUCCESS:
      let answerCommentVote = (<
        QuestionsActionBundle.OnAddAnswerCommentVoteSuccessAction
        >action).payload;

      console.log('@QuestionsReducer#AnswerVote', answerCommentVote);

      let oldAnswerCommentVote =
        state.questions.entities.answerCommentVotes[answerCommentVote.id];

      if (oldAnswerCommentVote) {
        if (oldAnswerCommentVote.voteType !== answerCommentVote.voteType) {
          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                answerCommentVotes: {
                  ...state.questions.entities.answerCommentVotes,
                  [oldAnswerCommentVote.id]: {
                    ...state.questions.entities.answerCommentVotes[
                      oldAnswerCommentVote.id
                      ],
                    voteType: answerCommentVote.voteType
                  }
                }
              }
            }
          };
        } else {
          let newAnswerCommentVotes = {
            ...state.questions.entities.answerCommentVotes
          };
          let newAnswerCommentVotesArray = [
            ...state.questions.entities.answerComments[
              answerCommentVote.answerCommentId
              ].answerCommentVotes
          ];
          let voteIndex = newAnswerCommentVotesArray.indexOf(
            answerCommentVote.id
          );
          newAnswerCommentVotesArray.splice(voteIndex, 1);

          delete newAnswerCommentVotes[answerCommentVote.id];

          return {
            ...state,
            isLoading: false,
            questions: {
              ...state.questions,
              entities: {
                ...state.questions.entities,
                answerCommentVotes: newAnswerCommentVotes,
                answerComments: {
                  ...state.questions.entities.answerComments,
                  [answerCommentVote.answerCommentId]: {
                    ...state.questions.entities.answerComments[
                      answerCommentVote.answerCommentId
                      ],
                    answerCommentVotes: newAnswerCommentVotesArray
                  }
                }
              }
            }
          };
        }
      } else {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              answerComments: {
                ...state.questions.entities.answerComments,
                [answerCommentVote.answerCommentId]: {
                  ...state.questions.entities.answerComments[
                    answerCommentVote.answerCommentId
                    ],
                  answerCommentVotes: [
                    answerCommentVote.id,
                    ...state.questions.entities.answerComments[
                      answerCommentVote.answerCommentId
                      ].answerCommentVotes
                  ]
                }
              },
              answerCommentVotes: {
                [answerCommentVote.id]: {
                  ...answerCommentVote
                },
                ...state.questions.entities.answerCommentVotes
              }
            }
          }
        };
      }

    case QuestionsActionTypes.ON_SELECT_ANSWER_SUCCESS:
      let {selectedAnswer, oldAnswerId, status} = (<
        QuestionsActionBundle.OnSelectAnswerSuccessAction
        >action).payload;

      if (status === 'CHANGED') {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questionAnswers: {
                ...state.questions.entities.questionAnswers,
                [selectedAnswer.id]: {
                  ...state.questions.entities.questionAnswers[
                    selectedAnswer.id
                    ],
                  isSelectedAnswer: selectedAnswer.isSelectedAnswer
                },
                [oldAnswerId]: {
                  ...state.questions.entities.questionAnswers[oldAnswerId],
                  isSelectedAnswer: !selectedAnswer.isSelectedAnswer
                }
              }
            }
          }
        };
      } else if (status === 'SELECTED') {
        return {
          ...state,
          isLoading: false,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questionAnswers: {
                ...state.questions.entities.questionAnswers,
                [selectedAnswer.id]: {
                  ...state.questions.entities.questionAnswers[
                    selectedAnswer.id
                    ],
                  isSelectedAnswer: selectedAnswer.isSelectedAnswer
                }
              }
            }
          }
        };
      } else {
        return {
          ...state,
          questions: {
            ...state.questions,
            entities: {
              ...state.questions.entities,
              questionAnswers: {
                ...state.questions.entities.questionAnswers,
                [oldAnswerId]: {
                  ...state.questions.entities.questionAnswers[oldAnswerId],
                  isSelectedAnswer: false
                }
              }
            }
          }
        };
      }

    default:
      return state;
  }
};
