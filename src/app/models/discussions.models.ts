import {MasterUserName} from './user.models';

export interface Discussion {
  id: string;
  topic: string;
  body: string;
  startedBy: string;
  classroomId: string;
  createdAt: string;
  updatedAt: string;
  MasterUser: MasterUserName;
  DiscussionPosts: Array<DiscussionPost>;
}

export interface DiscussionPost {
  id: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  discussionId: string;
  postedBy: string;
  MasterUser: MasterUserName;
  DiscussionPostComments: Array<DiscussionPostComment>;
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
