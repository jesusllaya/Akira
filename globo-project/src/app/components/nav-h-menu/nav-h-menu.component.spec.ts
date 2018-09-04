import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHMenuComponent } from './nav-h-menu.component';

describe('NavHMenuComponent', () => {
  let component: NavHMenuComponent;
  let fixture: ComponentFixture<NavHMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
