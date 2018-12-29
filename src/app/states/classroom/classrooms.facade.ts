import {Injectable} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {filter, map, mapTo} from 'rxjs/operators';
import *  as ClassroomsActionBundle from './classrooms.action';
import {merge} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClassroomsFacade {

  public classrooms$ = this.store.select('classrooms').pipe(map(classroomState => classroomState.classrooms));

  private joiningClassroomStatus$ = this.store.select('classrooms')
    .pipe(
      filter( classroomState => classroomState.joiningClassroomStatus !== null),
      map( classroomState => {
      console.log('@ClassroomFacade#JoiningClassroomStatus', classroomState.joiningClassroomStatus);
      return classroomState.joiningClassroomStatus
    }));

  public isJoiningSuccess$ = merge(
    this.joiningClassroomStatus$.pipe(filter( status => status.type === "SUCCESS"),mapTo(true)),
    this.joiningClassroomStatus$.pipe(filter( status => status.type === "FAIL"), mapTo(false))
  );

  public isJoiningMessage$ = merge(
    this.joiningClassroomStatus$.pipe(filter( status => status.type === "SUCCESS"),map(status => "")),
    this.joiningClassroomStatus$.pipe(filter( status => status.type === "FAIL"), map(status => status.message))
  );

  public isJoiningTryingStatus$ = this.joiningClassroomStatus$.pipe(filter( status => status.type === "TRYING"));

  constructor(
    private store: Store<AppState>
  ) {
  }

  _loadClassrooms() {
    this.store.dispatch(new ClassroomsActionBundle.TryGetClassroomsAction());
  }

  _joinClassroom(classcode: string){
    this.store.dispatch(new ClassroomsActionBundle.IsJoiningClassroomAction(true));
    this.store.dispatch(new ClassroomsActionBundle.TryJoinClassroomAction(classcode));
  }

}
