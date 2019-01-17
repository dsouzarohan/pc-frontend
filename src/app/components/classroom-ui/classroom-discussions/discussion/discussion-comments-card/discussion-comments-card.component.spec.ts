import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionCommentsCardComponent} from './discussion-comments-card.component';

describe('DiscussionCommentsCardComponent', () => {
  let component: DiscussionCommentsCardComponent;
  let fixture: ComponentFixture<DiscussionCommentsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionCommentsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionCommentsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
