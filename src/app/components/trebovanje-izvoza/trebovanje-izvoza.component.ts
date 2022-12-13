import { Component, OnInit } from '@angular/core';
import Artikal from 'src/app/model/artikal';
import { ArtikliLoadService } from 'src/app/services/artikli-load.service';
import { ArtikliService } from 'src/app/services/artikli.service';

@Component({
  selector: 'app-trebovanje-izvoza',
  templateUrl: './trebovanje-izvoza.component.html',
  styleUrls: ['./trebovanje-izvoza.component.css']
})
export class TrebovanjeIzvozaComponent implements OnInit {

  constructor(private artikliLoadService: ArtikliLoadService, public artikliService: ArtikliService) { }

  ngOnInit(): void {
  }

  async ucitajTrebovanjeIzvoza(e: any) {
    this.artikliService.trebovanjeIzvoza = await this.artikliLoadService.ucitajArtikle(e.target.files[0], 'Table');
  }

}
