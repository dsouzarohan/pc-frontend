import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CreateCommentResponse, CreatePostResponse, GetDiscussionResponse} from '../models/responses/discussions-responses.models';
import {environment} from '../../environments/environment';

@Injectable()
export class DiscussionsService {
  constructor(private http: HttpClient) {
  }

  getDiscussion(discussionId: string) {
    return this.http.get<GetDiscussionResponse>(
      environment.apiUrl + 'discussions/' + discussionId
    );
  }

  createPost(postDetails: { discussionId: string; body: string }) {
    return this.http.post<CreatePostResponse>(
      environment.apiUrl + 'discussions/discussionPost/create',
      postDetails
    );
  }

  createComment(commentDetails: { discussionPostId: string; body: string }) {
    return this.http.post<CreateCommentResponse>(
      environment.apiUrl +
      'discussions/discussionPost/discussionPostComment/create',
      commentDetails
    );
  }
}
