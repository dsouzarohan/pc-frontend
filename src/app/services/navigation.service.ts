import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private fixedNavItemMap: Map<string, string>;
  private currentSetFixedNavItem: string = 'dashboard';

  constructor() {
    this.fixedNavItemMap = new Map<string, string>();
    this.fixedNavItemMap.set('profile', 'user');
    this.fixedNavItemMap.set('', 'dashboard');
  }

  private navigationStatus = new Subject<string>();

  getNavigationListener() {
    return this.navigationStatus.asObservable();
  }

  changeNavigation(navItem: string) {
    this.navigationStatus.next(navItem);
    this.currentSetFixedNavItem = navItem;
  }

  getFixedNavItemFromUrl(url: string) {
    return this.fixedNavItemMap.get(url);
  }
}
