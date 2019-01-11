import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserFacade} from '../../../states/user/user.facade';
import {Observable} from 'rxjs';
import {Profile} from '../../../models/user.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  profile$: Observable<Profile> = this.userFacade.profile$;

  constructor(private userFacade: UserFacade) {
  }

  ngOnInit() {
    console.log('ProfileComponent#Intialized');
  }

  ngOnDestroy(): void {
    console.log('ProfileComponent#Destroyed');
  }
}
