import {Discussion, DiscussionPost, DiscussionPostComment} from '../discussions.models';

export interface GetDiscussionsResponse {
  message: string;
  data: Array<Discussion>
}

export interface CreatePostResponse {
  message: string;
  discussionPost: DiscussionPost;
}

export interface CreateCommentResponse {
  message: string;
  discussionComment: DiscussionPostComment
}

export interface CreateDiscussionResponse {
  message: string;
  discussion: Discussion
}
