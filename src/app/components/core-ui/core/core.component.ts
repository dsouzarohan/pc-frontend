import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  providers: [UserService]
})
export class CoreComponent implements OnInit, OnDestroy {

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {

    //All user related data will be loaded during the initiation of the core component
    console.log("CoreComponent#Initialized");
    console.log('UserData#loaded');

    this.userService.loadProfile();
  }

  ngOnDestroy(): void {
    console.log("CoreComponent#Destroyed");
  }

}
