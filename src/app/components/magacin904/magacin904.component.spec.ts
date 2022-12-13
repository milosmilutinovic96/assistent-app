import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Magacin904Component } from './magacin904.component';

describe('Magacin904Component', () => {
  let component: Magacin904Component;
  let fixture: ComponentFixture<Magacin904Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Magacin904Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Magacin904Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
