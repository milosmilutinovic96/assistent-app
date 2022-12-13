import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveraTrebovanjaIzvozaComponent } from './provera-trebovanja-izvoza.component';

describe('ProveraTrebovanjaIzvozaComponent', () => {
  let component: ProveraTrebovanjaIzvozaComponent;
  let fixture: ComponentFixture<ProveraTrebovanjaIzvozaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProveraTrebovanjaIzvozaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProveraTrebovanjaIzvozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
