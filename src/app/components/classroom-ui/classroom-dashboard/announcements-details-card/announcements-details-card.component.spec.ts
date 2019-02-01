import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnouncementsDetailsCardComponent} from './announcements-details-card.component';

describe('AnnouncementsDetailsCardComponent', () => {
  let component: AnnouncementsDetailsCardComponent;
  let fixture: ComponentFixture<AnnouncementsDetailsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsDetailsCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
