import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {QuestionsDetailsCardComponent} from './questions-details-card.component';

describe('QuestionsDetailsCardComponent', () => {
  let component: QuestionsDetailsCardComponent;
  let fixture: ComponentFixture<QuestionsDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionsDetailsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
