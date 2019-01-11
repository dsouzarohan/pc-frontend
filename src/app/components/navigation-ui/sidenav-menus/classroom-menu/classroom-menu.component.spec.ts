import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomMenuComponent} from './classroom-menu.component';

describe('ClassroomMenuComponent', () => {
  let component: ClassroomMenuComponent;
  let fixture: ComponentFixture<ClassroomMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomMenuComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
