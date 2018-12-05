import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
  ) { }

  private navigationStatus = new Subject<string>();

  getNavigationListener(){
    return this.navigationStatus.asObservable();
  }

  changeNavigation(navItem: string){
    this.navigationStatus.next(navItem);
  }
}
