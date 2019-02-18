import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionsCoreComponent} from './questions-core.component';

describe('QuestionsCoreComponent', () => {
  let component: QuestionsCoreComponent;
  let fixture: ComponentFixture<QuestionsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
