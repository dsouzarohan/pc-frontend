import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {VotersListComponent} from './voters-list.component';

describe('VotersListComponent', () => {
  let component: VotersListComponent;
  let fixture: ComponentFixture<VotersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VotersListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
