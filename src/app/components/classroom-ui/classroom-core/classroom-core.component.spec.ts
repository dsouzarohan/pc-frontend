import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomCoreComponent} from './classroom-core.component';

describe('ClassroomCoreComponent', () => {
  let component: ClassroomCoreComponent;
  let fixture: ComponentFixture<ClassroomCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
