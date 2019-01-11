import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionsDetailsCardComponent} from './discussions-details-card.component';

describe('DiscussionsDetailsCardComponent', () => {
  let component: DiscussionsDetailsCardComponent;
  let fixture: ComponentFixture<DiscussionsDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionsDetailsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
