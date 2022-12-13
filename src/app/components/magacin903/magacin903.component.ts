import { Component, OnInit } from '@angular/core';
import Artikal from 'src/app/model/artikal';
import { ArtikliLoadService } from 'src/app/services/artikli-load.service';
import { ArtikliService } from 'src/app/services/artikli.service';

@Component({
  selector: 'app-magacin903',
  templateUrl: './magacin903.component.html',
  styleUrls: ['./magacin903.component.css']
})
export class Magacin903Component implements OnInit {
  searchString: string = '';

  constructor(private artikliLoadService: ArtikliLoadService, public artikliService: ArtikliService) { }

  ngOnInit(): void {
  }

  async ucitaj903(e: any) {
    this.artikliService.artikli903 = await this.artikliLoadService.ucitajArtikle(e.target.files[0], 'z:row');
  }

}
