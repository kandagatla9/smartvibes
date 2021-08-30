import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbigComponent } from './navbig.component';

describe('NavbigComponent', () => {
  let component: NavbigComponent;
  let fixture: ComponentFixture<NavbigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
