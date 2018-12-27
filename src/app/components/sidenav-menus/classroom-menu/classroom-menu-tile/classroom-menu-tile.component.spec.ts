import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomMenuTileComponent } from './classroom-menu-tile.component';

describe('ClassroomMenuTileComponent', () => {
  let component: ClassroomMenuTileComponent;
  let fixture: ComponentFixture<ClassroomMenuTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassroomMenuTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomMenuTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
