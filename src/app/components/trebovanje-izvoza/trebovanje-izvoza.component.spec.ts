import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrebovanjeIzvozaComponent } from './trebovanje-izvoza.component';

describe('TrebovanjeIzvozaComponent', () => {
  let component: TrebovanjeIzvozaComponent;
  let fixture: ComponentFixture<TrebovanjeIzvozaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrebovanjeIzvozaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrebovanjeIzvozaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
