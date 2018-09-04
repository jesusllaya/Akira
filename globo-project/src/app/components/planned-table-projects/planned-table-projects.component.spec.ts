
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannedTableProjectsComponent } from './planned-table-projects.component';

describe('PlannedTableProjectsComponent', () => {
  let component: PlannedTableProjectsComponent;
  let fixture: ComponentFixture<PlannedTableProjectsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannedTableProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlannedTableProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
