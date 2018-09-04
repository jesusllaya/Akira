import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TryProjectsComponent } from './try-projects.component';

describe('TryProjectsComponent', () => {
  let component: TryProjectsComponent;
  let fixture: ComponentFixture<TryProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TryProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TryProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
