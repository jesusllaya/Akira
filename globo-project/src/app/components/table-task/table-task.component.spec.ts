
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTaskComponent } from './table-task.component';

describe('TableTaskComponent', () => {
  let component: TableTaskComponent;
  let fixture: ComponentFixture<TableTaskComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
