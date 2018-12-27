import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(){
    console.log("AppComponent#Initialized");
    this.authService.autoAuthUser();
  }

  ngOnDestroy(): void {
    console.log("AppComponent#Destroyed");
  }

}
