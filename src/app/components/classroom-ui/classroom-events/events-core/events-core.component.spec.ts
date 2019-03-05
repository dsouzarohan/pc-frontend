import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsCoreComponent} from './events-core.component';

describe('EventsCoreComponent', () => {
  let component: EventsCoreComponent;
  let fixture: ComponentFixture<EventsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
