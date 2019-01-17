import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreateDiscussionPostComponent} from './create-discussion-post.component';

describe('CreateDiscussionPostComponent', () => {
  let component: CreateDiscussionPostComponent;
  let fixture: ComponentFixture<CreateDiscussionPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDiscussionPostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiscussionPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
