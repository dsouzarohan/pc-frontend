import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {filter, map, mapTo} from 'rxjs/operators';
import {merge} from 'rxjs';

import * as fromCore from '../core/core.reducer';

import *  as ClassroomsActionBundle from './classrooms.action';
import * as classroomsSelectors from './classrooms.selectors';

@Injectable({
  providedIn: 'root'
})

export class ClassroomsFacade {

  public classrooms$ = this.store.select(classroomsSelectors.getClassrooms);
  private classroomState$ = this.store.select(classroomsSelectors.getClassroomState);
  private joiningClassroomStatus$ = this.store.select(classroomsSelectors.getJoiningClassroomStatus)
    .pipe(filter(joiningStatus => joiningStatus !== null));

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
    private store: Store<fromCore.CoreFeatureState>
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
