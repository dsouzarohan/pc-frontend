import {Injectable} from '@angular/core';
import {AppState} from '../../app.reducer';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {TryGetClassroomsAction} from './classrooms.action';

@Injectable({
  providedIn: 'root'
})

export class ClassroomsFacade {

  public classrooms$ = this.store.select('classrooms').pipe(map(classroomState => classroomState.classrooms));

  constructor(
    private store: Store<AppState>
  ) {
  }

  _loadClassrooms() {
    this.store.dispatch(new TryGetClassroomsAction());
  }

}
