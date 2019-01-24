import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {filter, map, mapTo, take} from 'rxjs/operators';
import {merge} from 'rxjs';

import * as fromCore from '../core-feature/core-feature.reducer';

import * as ClassroomsActionBundle from './classrooms.action';
import * as classroomsSelectors from './classrooms.selectors';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClassroomsFacade {
  public classrooms$ = this.store.select(classroomsSelectors.getClassrooms);

  public classroomsEntity$ = this.store.select(
    classroomsSelectors.getClassroomsEntity
  ).pipe(
    take(1)
  );

  public classroomDetails$ = this.store.select(
    classroomsSelectors.getClassroomDetails
  );
  public isLoadingClassroomDetails$ = this.store.select(
    classroomsSelectors.isClassroomDetailsLoading
  );
  private joiningClassroomStatus$ = this.store
    .select(classroomsSelectors.getJoiningClassroomStatus)
    .pipe(filter(joiningStatus => joiningStatus !== null));
  public isJoiningSuccess$ = merge(
    this.joiningClassroomStatus$.pipe(
      filter(status => status.type === 'SUCCESS'),
      mapTo(true)
    ),
    this.joiningClassroomStatus$.pipe(
      filter(status => status.type === 'FAIL'),
      mapTo(false)
    )
  );
  public isJoiningMessage$ = merge(
    this.joiningClassroomStatus$.pipe(
      filter(status => status.type === 'SUCCESS'),
      map(status => '')
    ),
    this.joiningClassroomStatus$.pipe(
      filter(status => status.type === 'FAIL'),
      map(status => status.message)
    )
  );
  public isJoiningTryingStatus$ = this.joiningClassroomStatus$.pipe(
    filter(status => status.type === 'TRYING')
  );

  constructor(
    private store: Store<fromCore.CoreFeatureState>,
    private router: Router
  ) {
  }

  _loadClassrooms() {
    this.store.dispatch(new ClassroomsActionBundle.TryGetClassroomsAction());
  }

  _joinClassroom(classcode: string) {
    this.store.dispatch(
      new ClassroomsActionBundle.IsJoiningClassroomAction(true)
    );
    this.store.dispatch(
      new ClassroomsActionBundle.TryJoinClassroomAction(classcode)
    );
  }

  _createClassroom(classDetails: {
    classroomName: string;
    classroomSubject: string;
  }) {
    this.store.dispatch(
      new ClassroomsActionBundle.IsCreatingClassroomAction(true)
    );
    this.store.dispatch(
      new ClassroomsActionBundle.TryCreateClassroomAction(classDetails)
    );
  }
}
