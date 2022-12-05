import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import Artikal from '../model/artikal';
import { ArtikliService } from '../services/artikli.service';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {
  selectedTable?: string;
  listaArtikla?: Artikal[];
  constructor(
    private route: ActivatedRoute,
    private artikliService: ArtikliService
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.selectedTable = params['tip'];
      if(this.selectedTable === '904') {
        this.listaArtikla = [...this.artikliService.getArtikliMagacin()];
      } else {
        this.listaArtikla = [...this.artikliService.getArtikliTrebovanje()];
      }
    });

  }

}
