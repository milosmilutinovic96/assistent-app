import Artikal from "./artikal";


class ListaArtikla {
    artikli: Artikal[] = [];

    constructor() {
    }
    
    readFileAsync(file: File) {
        return new Promise((resolve, reject) => {
            let reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = reject;

            reader.readAsText(file);
        })
    }

    async ucitajPodatkeIzXmlFajla(file: File, selektor: string):Promise<string> {
        try {
            let result: string = <string> await this.readFileAsync(file);
            let domParser = new DOMParser();
            let xmlDom = domParser.parseFromString(result, 'text/xml');
            let message = '';
            if(selektor === 'z:row') {
                this.createListaArtiklaMagacin(Array.from(xmlDom.getElementsByTagName(selektor)));
                if(this.artikli.length > 0) message = 'Podaci za 904 su uspešno učitani!';
                else throw new Error('Doslo je do greske, nema podataka!');
            } else if(selektor === 'Table') {
                this.createListaArtiklaTrebovanje(Array.from(xmlDom.getElementsByTagName(selektor)));
                if(this.artikli.length > 0) message = 'Podaci za trebovanje izvoza su uspešno učitani';
                else throw new Error('Doslo je do greske, nema podataka!');
            }
            return message;
        } catch(err) {
            console.log(err);
            return 'Doslo je do greske';
        }
    }
    createListaArtiklaTrebovanje(nizElemenata: Element[]) {
        this.artikli = [];
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
                this.artikli[this.artikli.length-1].kolicina += artikal.kolicina;
            } else {
                this.artikli.push(artikal);
                tempSifra = artikal.sifra;
            }
        });
    }

    createListaArtiklaMagacin(nizElemenata: Element[]) {
        this.artikli = [];
        nizElemenata.map(artikalElement => {
            return artikalElement.attributes;
        }).map( art => {
            let kolicina = parseInt(<string>art[5].nodeValue);
            if(isNaN(kolicina)) {
                kolicina = 0;
            }
            return new Artikal(<string>art[2].nodeValue, <string>art[3].nodeValue, kolicina);
        }).forEach(artikal => {
            this.artikli.push(artikal);
        });
    }

}

export default ListaArtikla;