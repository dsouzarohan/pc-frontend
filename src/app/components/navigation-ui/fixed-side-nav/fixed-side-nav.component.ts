import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {NavigationService} from '../../../services/navigation.service';

@Component({
  selector: 'app-fixed-side-nav',
  templateUrl: './fixed-side-nav.component.html',
  styleUrls: ['./fixed-side-nav.component.scss']
})
export class FixedSideNavComponent implements OnInit {

  constructor(
    private navigationService: NavigationService
  ) { }

  ngOnInit() {
  }

  onToggleClick(item: string){
    this.navigationService.changeNavigation(item);
  }

}
