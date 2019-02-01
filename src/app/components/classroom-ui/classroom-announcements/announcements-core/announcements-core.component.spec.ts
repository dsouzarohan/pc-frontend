import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AnnouncementsCoreComponent} from './announcements-core.component';

describe('AnnouncementsCoreComponent', () => {
  let component: AnnouncementsCoreComponent;
  let fixture: ComponentFixture<AnnouncementsCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnnouncementsCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementsCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
