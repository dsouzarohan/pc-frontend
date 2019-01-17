import {MasterUserName} from './user.models';
import {denormalize, normalize, schema} from 'normalizr';

export interface Discussion {
  id: string;
  topic: string;
  body: string;
  startedBy: string;
  classroomId: string;
  createdAt: string;
  updatedAt: string;
  MasterUser: MasterUserName;
  DiscussionPosts?: Array<DiscussionPost>;
}

export interface DiscussionPost {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  discussionId: string;
  postedBy: string;
  MasterUser: MasterUserName;
  DiscussionPostComments?: Array<DiscussionPostComment>;
}

export interface DiscussionPostComment {
  id: string;
  body: string;
  discussionPostId: string;
  commentedBy: string;
  createdAt: string;
  updatedAt: string;
  MasterUser: MasterUserName;
}

//for discussion to entity conversions

const MasterUserPersonal = new schema.Entity('MasterUserPersonal');

const MasterUser = new schema.Entity('MasterUser', {
  MasterUserPersonal
});

const DiscussionPostComment = new schema.Entity('DiscussionPostComment', {
  MasterUser
});

const DiscussionPost = new schema.Entity('DiscussionPost', {
  DiscussionPostComments: [DiscussionPostComment],
  MasterUser
});

const Discussion = new schema.Entity('Discussion', {
  MasterUser,
  DiscussionPosts: [DiscussionPost]
});

export const discussionToEntity = (discussion: Discussion): { entities: any, result: any } => {
  return normalize(discussion, Discussion);
};

export const entityToDiscussion = (discussionEntity: { entities: any, result: any }): Discussion => {
  return discussionEntity ? denormalize(discussionEntity.result, Discussion, discussionEntity.entities) : null;
};
