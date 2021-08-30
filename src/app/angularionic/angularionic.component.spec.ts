import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularionicComponent } from './angularionic.component';

describe('AngularionicComponent', () => {
  let component: AngularionicComponent;
  let fixture: ComponentFixture<AngularionicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularionicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularionicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
