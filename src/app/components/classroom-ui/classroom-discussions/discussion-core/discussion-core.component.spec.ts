import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DiscussionCoreComponent} from './discussion-core.component';

describe('DiscussionCoreComponent', () => {
  let component: DiscussionCoreComponent;
  let fixture: ComponentFixture<DiscussionCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DiscussionCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
