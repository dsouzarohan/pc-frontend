import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserFacade} from '../../../states/user/user.facade';
import {ClassroomsFacade} from '../../../states/classroom/classrooms.facade';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  providers: [UserService]
})
export class CoreComponent implements OnInit, OnDestroy {
  constructor(
    private userFacade: UserFacade,
    private classroomsFacade: ClassroomsFacade
  ) {
  }

  ngOnInit() {
    //All user related data will be loaded during the initiation of the core-feature component
    console.log('CoreComponent#Initialized');
    this.userFacade._loadProfile();
    console.log('UserData#loaded');
    this.classroomsFacade._loadClassrooms();
    //loads the classrooms from the backend and saves it in the state
  }

  ngOnDestroy(): void {
    console.log('CoreComponent#Destroyed');
  }
}
