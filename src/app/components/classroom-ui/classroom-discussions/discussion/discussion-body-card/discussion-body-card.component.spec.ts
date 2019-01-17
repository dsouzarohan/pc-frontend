import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionBodyCardComponent} from './discussion-body-card.component';

describe('DiscussionBodyCardComponent', () => {
  let component: DiscussionBodyCardComponent;
  let fixture: ComponentFixture<DiscussionBodyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionBodyCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionBodyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
