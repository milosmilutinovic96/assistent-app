import { Injectable } from '@angular/core';
import Artikal from '../model/artikal';
import NedostupniArtikal from '../model/nedostupniArtikal';

@Injectable({
  providedIn: 'root'
})
export class ArtikliService {

  artikli903: Artikal[] = [];
  artikli904: Artikal[] = [];
  trebovanjeIzvoza: Artikal[] = [];
  nedostupniArtikli: NedostupniArtikal[] = [];

  constructor() { }

  proveriDostupnostUMagacinu(listaArtikalaMagacin: Artikal[], listaArtikalaTrebovanje: Artikal[]): NedostupniArtikal[] {
    let listaNedostupnihArtikala: NedostupniArtikal[] = [];
    if(listaArtikalaMagacin.length === 0 || listaArtikalaTrebovanje.length===0)
      return [];
    listaArtikalaTrebovanje.forEach((artikal) => {
      let tempArtikal = listaArtikalaMagacin.find((magacinArt) => {
        return magacinArt.sifra === artikal.sifra;
      });
      if(tempArtikal && tempArtikal.kolicina < artikal.kolicina) {
        listaNedostupnihArtikala.push({
          artikal: {...tempArtikal},
          trebovanaKolicina: artikal.kolicina
        });
      }
    });
    return listaNedostupnihArtikala;
  }
}
