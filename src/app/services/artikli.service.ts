import { Injectable } from '@angular/core';
import Artikal from '../model/artikal';
import ListaArtikla from '../model/listaArtikla';

@Injectable({
  providedIn: 'root'
})
export class ArtikliService {
  private listaArtiklaMagacin: ListaArtikla;
  private listaArtiklaTrebovanje: ListaArtikla;
  private listaNedostupnihArtikala: { artikal: Artikal, trebovanaKolicina: number}[];
  izvrsenaProvera:boolean = false;
  constructor() { 
    this.listaArtiklaMagacin = new ListaArtikla();
    this.listaArtiklaTrebovanje = new ListaArtikla();
    this.listaNedostupnihArtikala = [];
  }

  async ucitajArtikle(file: File, selector: string): Promise<string> {
    try {
      let message: string = '';
      if(selector === 'Table') {
        message = await this.listaArtiklaTrebovanje.ucitajPodatkeIzXmlFajla(file, selector);
      } else if(selector === 'z:row') {
        message = await this.listaArtiklaMagacin.ucitajPodatkeIzXmlFajla(file, selector);
      }
      return message;
    } catch(err) {
      return 'Greska';
    }
  }

  getArtikliMagacin(): Artikal[] {
    return this.listaArtiklaMagacin.artikli;
  }
  getArtikliTrebovanje(): Artikal[] {
    return this.listaArtiklaTrebovanje.artikli;
  }
  getNedostupniArtikli(): {artikal: Artikal, trebovanaKolicina: number}[] {
    return this.listaNedostupnihArtikala;
  }

  proveriDostupnostUMagacinu(): boolean {
    this.listaNedostupnihArtikala = [];
    if(this.listaArtiklaMagacin.artikli.length === 0 || this.listaArtiklaTrebovanje.artikli.length===0)
      return false;
    this.listaArtiklaTrebovanje.artikli.forEach((artikal) => {
      let tempArtikal = this.listaArtiklaMagacin.artikli.find((magacinArt) => {
        return magacinArt.sifra === artikal.sifra;
      });
      if(tempArtikal && tempArtikal.kolicina < artikal.kolicina) {
        this.listaNedostupnihArtikala.push({
          artikal: {...tempArtikal},
          trebovanaKolicina: artikal.kolicina
        });
      }
    });
    this.izvrsenaProvera = true;
    return true;
  }
}
