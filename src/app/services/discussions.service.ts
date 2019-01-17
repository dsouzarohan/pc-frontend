import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetDiscussionResponse} from '../models/responses/discussions-responses.models';
import {environment} from '../../environments/environment';

@Injectable()
export class DiscussionsService {

  constructor(
    private http: HttpClient
  ) {
  }

  getDiscussion(discussionId: string) {
    return this.http.get<GetDiscussionResponse>(environment.apiUrl + 'discussions/' + discussionId);
  }
}
