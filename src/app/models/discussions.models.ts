import {MasterUserName} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Discussion {
  id: number;
  topic: string;
  body: string;
  startedBy: number;
  classroomId: string;
  createdAt: string;
  updatedAt: string;
  author: MasterUserName;
  discussionPosts?: Array<DiscussionPost>;
}

export interface DiscussionPost {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  discussionId: string;
  postedBy: number;
  poster: MasterUserName;
  discussionPostComments?: Array<DiscussionPostComment>;
}

export interface DiscussionPostComment {
  id: number;
  body: string;
  discussionPostId: string;
  commentedBy: string;
  createdAt: string;
  updatedAt: string;
  commenter: MasterUserName;
}

//for discussion to entity conversions

const discussionPostCommentSchema = new schema.Entity('discussionPostComment');

const discussionPostSchema = new schema.Entity('discussionPost', {
  discussionPostComments: [discussionPostCommentSchema]
});

const discussionSchema = new schema.Entity('discussion', {
  discussionPosts: [discussionPostSchema]
});

const discussionListSchema = [discussionSchema];

export const discussionToEntity = (
  discussions: Array<Discussion>
): { entities: any; result: any } => {
  return normalize(discussions, discussionListSchema);
};

export const entityToDiscussion = (
  discussionEntity: DiscussionEntity,
  discussionId: number
): Discussion => {
  if (discussionEntity) {
    let denormalized = denormalize(
      discussionId,
      discussionSchema,
      discussionEntity.entities
    );

    return denormalized;
  }

  return null;
};

export const getDiscussionsFromEntity = (discussionEntity: DiscussionEntity): Array<Discussion> => {
  if (discussionEntity) {
    let discussions = discussionEntity.entities.discussion;

    if (discussionEntity.entities.discussion) {
      return Object.keys(discussions).map(key => discussions[key]);
    } else {
      return [];
    }
  } else {
    return null;
  }
};

export interface DiscussionEntity {
  entities: {
    discussion: {
      [key: number]: {
        id: number;
        topic: string;
        body: string;
        startedBy: number;
        classroomId: string;
        createdAt: string;
        updatedAt: string;
        author: MasterUserName;
        discussionPosts?: Array<number>;
      };
    };
    discussionPost: {
      [key: number]: {
        id: number;
        body: string;
        createdAt: string;
        updatedAt: string;
        discussionId: string;
        postedBy: number;
        poster: MasterUserName;
        discussionPostComments?: Array<number>;
      };
    };
    discussionPostComment: {
      [key: number]: DiscussionPostComment;
    };
  };
  result: Array<number>;
}
