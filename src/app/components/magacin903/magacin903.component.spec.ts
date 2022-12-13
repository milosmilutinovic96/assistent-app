import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Magacin903Component } from './magacin903.component';

describe('Magacin903Component', () => {
  let component: Magacin903Component;
  let fixture: ComponentFixture<Magacin903Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Magacin903Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Magacin903Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
