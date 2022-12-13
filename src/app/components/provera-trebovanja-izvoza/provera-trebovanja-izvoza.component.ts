import { Component, OnInit } from '@angular/core';
import NedostupniArtikal from 'src/app/model/nedostupniArtikal';
import { ArtikliService } from 'src/app/services/artikli.service';

@Component({
  selector: 'app-provera-trebovanja-izvoza',
  templateUrl: './provera-trebovanja-izvoza.component.html',
  styleUrls: ['./provera-trebovanja-izvoza.component.css']
})
export class ProveraTrebovanjaIzvozaComponent implements OnInit {
  izvrsenaProvera: boolean = false;
  listaNedostupnihArtikala: NedostupniArtikal[] = [];

  constructor(public artikliService: ArtikliService) { }

  ngOnInit(): void {
    console.log(
      'test'
    )
    if(this.artikliService.artikli904.length && this.artikliService.trebovanjeIzvoza.length) {
      this.listaNedostupnihArtikala = this.artikliService.proveriDostupnostUMagacinu(
        this.artikliService.artikli904, this.artikliService.trebovanjeIzvoza
      );
      console.log('test1');
      this.izvrsenaProvera = true;
    }
  }

}
