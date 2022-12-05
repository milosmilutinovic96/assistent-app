import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Artikal from '../model/artikal';
import { ArtikliService } from '../services/artikli.service';

@Component({
  selector: 'app-tabela-nedostupnih-artikala',
  templateUrl: './tabela-nedostupnih-artikala.component.html',
  styleUrls: ['./tabela-nedostupnih-artikala.component.css']
})
export class TabelaNedostupnihArtikalaComponent implements OnInit {

  listaArtikala: {artikal: Artikal, trebovanaKolicina: number}[] = [];

  constructor(
    private artikliService: ArtikliService,
    private router : Router
    ) { }

  ngOnInit(): void {
    if(!this.artikliService.izvrsenaProvera) 
      this.router.navigateByUrl('/');
    this.listaArtikala = this.artikliService.getNedostupniArtikli();

  }

}
