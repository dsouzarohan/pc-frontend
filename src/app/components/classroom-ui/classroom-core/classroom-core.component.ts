import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-classroom-core',
  templateUrl: './classroom-core.component.html',
  styleUrls: ['./classroom-core.component.scss']
})
export class ClassroomCoreComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    console.log('Activated route snapshot', this.activatedRoute);
  }

  ngOnInit() {
  }

}
