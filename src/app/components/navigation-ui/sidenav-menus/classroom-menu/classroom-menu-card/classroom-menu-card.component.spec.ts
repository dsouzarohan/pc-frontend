import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomMenuCardComponent} from './classroom-menu-card.component';

describe('ClassroomMenuCardComponent', () => {
  let component: ClassroomMenuCardComponent;
  let fixture: ComponentFixture<ClassroomMenuCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomMenuCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomMenuCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
