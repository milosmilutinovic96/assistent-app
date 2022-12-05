import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArtikliService } from './services/artikli.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages: string[] = [];

  constructor(
    private artikliService: ArtikliService,
    private router: Router
  ) {

  }

  getArtikli904() {
    return this.artikliService.getArtikliMagacin();
  }

  getArtikliTrebovanje() {
    return this.artikliService.getArtikliTrebovanje();
  }

  async ucitaj904(e: any) {
    let message = await this.artikliService.ucitajArtikle(e.target.files[0], 'z:row');
    this.messages.push(message);
  }

  async ucitajTrebovanjeIzvoza(e: any) {
    let message = await this.artikliService.ucitajArtikle(e.target.files[0], 'Table');
    this.messages.push(message);
  }

  proveriDostupnost() {
    let flag = this.artikliService.proveriDostupnostUMagacinu();
    if(flag) {

      this.router.navigateByUrl('/nedostupni-artikli');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  naPocetnu() {
    this.messages = [];
    this.router.navigateByUrl('/');
  }
}
