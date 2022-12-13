import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Artikal from 'src/app/model/artikal';
import { ArtikliLoadService } from 'src/app/services/artikli-load.service';
import { ArtikliService } from 'src/app/services/artikli.service';

@Component({
  selector: 'app-magacin904',
  templateUrl: './magacin904.component.html',
  styleUrls: ['./magacin904.component.css']
})
export class Magacin904Component implements OnInit {

  searchString: string = '';

  constructor(private artikliLoadService: ArtikliLoadService, public artikliService: ArtikliService) { }

  ngOnInit(): void {
  }

  async ucitaj904(e: any) {
    this.artikliService.artikli904 = await this.artikliLoadService.ucitajArtikle(e.target.files[0], 'z:row');

  }

}
