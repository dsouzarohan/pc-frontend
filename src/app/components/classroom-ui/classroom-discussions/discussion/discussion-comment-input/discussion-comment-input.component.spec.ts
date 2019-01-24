import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionCommentInputComponent} from './discussion-comment-input.component';

describe('DiscussionCommentInputComponent', () => {
  let component: DiscussionCommentInputComponent;
  let fixture: ComponentFixture<DiscussionCommentInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionCommentInputComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionCommentInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
