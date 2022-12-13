import { Injectable } from '@angular/core';
import Artikal from '../model/artikal';
import ListaArtikla from '../model/listaArtikla';
import NedostupniArtikal from '../model/nedostupniArtikal';

@Injectable({
  providedIn: 'root'
})
export class ArtikliLoadService {

  constructor() { 
  
  
  }

  async ucitajArtikle(file: File, selector: string): Promise<Artikal[]> {

    try {
      const artikli: Artikal[] =  await ListaArtikla.ucitajPodatkeIzXmlFajla(file, selector);
      return artikli;
    } catch(err) {
      console.log(err);
      return [];
    }
  }
}
