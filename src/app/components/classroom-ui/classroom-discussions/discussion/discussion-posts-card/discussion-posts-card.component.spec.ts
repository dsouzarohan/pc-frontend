import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionPostsCardComponent} from './discussion-posts-card.component';

describe('DiscussionPostsCardComponent', () => {
  let component: DiscussionPostsCardComponent;
  let fixture: ComponentFixture<DiscussionPostsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionPostsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionPostsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
