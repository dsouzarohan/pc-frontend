import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MembersDetailsCardComponent} from './members-details-card.component';

describe('MembersDetailsCardComponent', () => {
  let component: MembersDetailsCardComponent;
  let fixture: ComponentFixture<MembersDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MembersDetailsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
