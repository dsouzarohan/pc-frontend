import {Discussion, DiscussionPost, DiscussionPostComment} from '../discussions.models';

export interface GetDiscussionResponse {
  message: string;
  data: Discussion
}

export interface CreatePostResponse {
  message: string;
  discussionPost: DiscussionPost;
}

export interface CreateCommentResponse {
  message: string;
  discussionComment: DiscussionPostComment
}
