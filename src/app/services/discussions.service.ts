import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateCommentResponse,
  CreateDiscussionResponse,
  CreatePostResponse,
  GetDiscussionsResponse
} from '../models/responses/discussions-responses.models';
import {environment} from '../../environments/environment';

@Injectable()
export class DiscussionsService {
  constructor(private http: HttpClient) {
  }

  getDiscussions(classroomId: number) {
    return this.http.get<GetDiscussionsResponse>(
      environment.apiUrl + 'discussions?classroomId=' + classroomId
    );
  }

  createDiscussion(discussionDetails: {
    discussionTopic: string,
    discussionBody: string,
    classroomId: string
  }) {
    return this.http.post<CreateDiscussionResponse>(environment.apiUrl + 'discussions/create', discussionDetails);
  }

  createPost(postDetails: { discussionId: number; body: string }) {
    return this.http.post<CreatePostResponse>(
      environment.apiUrl + 'discussions/discussionPost/create',
      postDetails
    );
  }

  createComment(commentDetails: { discussionPostId: number; body: string }) {
    return this.http.post<CreateCommentResponse>(
      environment.apiUrl +
      'discussions/discussionPost/discussionPostComment/create',
      commentDetails
    );
  }
}
