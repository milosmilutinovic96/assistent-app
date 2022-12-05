import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaNedostupnihArtikalaComponent } from './tabela-nedostupnih-artikala.component';

describe('TabelaNedostupnihArtikalaComponent', () => {
  let component: TabelaNedostupnihArtikalaComponent;
  let fixture: ComponentFixture<TabelaNedostupnihArtikalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaNedostupnihArtikalaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaNedostupnihArtikalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
