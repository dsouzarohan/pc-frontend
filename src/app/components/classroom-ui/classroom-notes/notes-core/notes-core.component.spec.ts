import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {NotesCoreComponent} from './notes-core.component';

describe('NotesCoreComponent', () => {
  let component: NotesCoreComponent;
  let fixture: ComponentFixture<NotesCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NotesCoreComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
