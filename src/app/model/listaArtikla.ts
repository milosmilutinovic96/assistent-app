import Artikal from "./artikal";


class ListaArtikla {

    constructor() {
    }
    
    static readFileAsync(file: File) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsText(file);
        })
    }

    static async ucitajPodatkeIzXmlFajla(file: File, selektor: string):Promise<Artikal[]> {
        try {
            const artikli: Artikal[] = [];
            let result: string = <string> await this.readFileAsync(file);
            let domParser = new DOMParser();
            let xmlDom = domParser.parseFromString(result, 'text/xml');
            if(selektor === 'z:row') {
                return this.createListaArtiklaMagacin(Array.from(xmlDom.getElementsByTagName(selektor)));
            } else if(selektor === 'Table') {
                return this.createListaArtiklaTrebovanje(Array.from(xmlDom.getElementsByTagName(selektor)));
            }
            if(artikli.length === 0) throw new Error('Doslo je do greske, nema podataka!');
            return [];
        } catch(err) {
            console.log(err);
            return [];
        }
    }
    static createListaArtiklaTrebovanje(nizElemenata: Element[]): Artikal[] {
        const artikli: Artikal[] = [];
        let tempSifra = '';
        nizElemenata.map(artikalElement => {
            return artikalElement.children;
        }).map(art => {
            let kolicina = parseInt(art[9].innerHTML);
            if(isNaN(kolicina)) {
                kolicina = 0;
            }
            return new Artikal(
                <string>art[6].innerHTML,
                <string>art[7].innerHTML,
                kolicina
            );
        }).forEach((artikal, index) => {
            if(tempSifra === artikal.sifra) {
                artikli[artikli.length-1].kolicina += artikal.kolicina;
            } else {
                artikli.push(artikal);
                tempSifra = artikal.sifra;
            }
        });
        return artikli;
    }

    static createListaArtiklaMagacin(nizElemenata: Element[]): Artikal[] {
        const artikli: Artikal[] = [];
        nizElemenata.map(artikalElement => {
            return artikalElement.attributes;
        }).map( art => {
            let kolicina = parseInt(<string>art[5].nodeValue);
            if(isNaN(kolicina)) {
                kolicina = 0;
            }
            return new Artikal(<string>art[2].nodeValue, <string>art[3].nodeValue, kolicina);
        }).forEach(artikal => {
            artikli.push(artikal);
        });
        return artikli;
    }

}

export default ListaArtikla;