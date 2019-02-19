import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  CreateEventResponse,
  DeleteEventResponse,
  GetEventsResponse,
  UpdateEventResponse
} from '../models/responses/events-responses.models';
import {environment} from '../../environments/environment';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {
  }

  public getEvents(classroomId: number) {
    return this.http.get<GetEventsResponse>(
      environment.apiUrl + 'events?classroomId=' + classroomId
    );
  }

  public createEvent(
    classroomId: number,
    eventDetails: {
      title: string;
      body: string;
      start: string;
      end: string;
    }
  ) {
    return this.http.post<CreateEventResponse>(
      environment.apiUrl + 'events/new',
      {
        eventDetails,
        classroomId
      }
    );
  }

  public updateEvent(
    eventId: number,
    eventDetails: {
      title: string;
      body: string;
      start: string;
      end: string;
    }
  ) {
    return this.http.put<UpdateEventResponse>(
      environment.apiUrl + 'events/' + eventId,
      {
        eventDetails
      }
    );
  }

  public deleteEvent(eventId: number) {
    return this.http.delete<DeleteEventResponse>('events/' + eventId);
  }
}
