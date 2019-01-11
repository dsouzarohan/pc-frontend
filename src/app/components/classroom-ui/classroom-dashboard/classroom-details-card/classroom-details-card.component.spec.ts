import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassroomDetailsCardComponent} from './classroom-details-card.component';

describe('ClassroomDetailsCardComponent', () => {
  let component: ClassroomDetailsCardComponent;
  let fixture: ComponentFixture<ClassroomDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomDetailsCardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
