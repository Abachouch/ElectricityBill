import { City } from './City';

export class Serv {

    citys: City[] = new Array();
    tranchs = [100, 150, 210, 310, 510];
    tva: number = 14;


    constructor() {
        this.citys.push(
            new City('Fes', [0.7904, 0.9414, 0.9414, 1.0242, 1.2120, 1.3998], 'RADEEF'),
            new City('casablanca', [0.8496, 1.0220, 0.0220, 1.1119, 1.3157, 1.5193], 'LYDEC'),
            new City('mohammedia', [0.8496, 1.0220, 0.0220, 1.1119, 1.3157, 1.5193], 'LYDEC'),
            new City('tanger', [0.7940, 0.8830, 0.9134, 1.0137, 1.2480, 1.4470], 'AMENDIS'),
            new City('tetouan', [0.7940, 0.8820, 0.9123, 1.0137, 1.2490, 1.4492], 'AMENDIS'),
        )
    }
    calcTarifHT(city: City, amount: number): number {
        let tarif = 0;

        if (amount < 101) {
            console.log('first');
            
            return amount * city.tarifs[0];
        }
        if (amount < 151) {
            let t2 = amount - this.tranchs[0];
            let t1 = amount - t2;
            console.log('second') ;
            return (t1 * city.tarifs[0]) + (t2 * city.tarifs[1]);
        }
        if (amount < 211) {// 150 - 210
            console.log('third ');
            return amount * city.tarifs[2];
            
        }
        if (amount < 311) {// 210 - 310
            console.log('forth');
            
            return amount * city.tarifs[3];
        }
        if (amount < 511) {// 310 - 510
            console.log('fifth');
            
            return amount * city.tarifs[4];
        }
        if (amount > 510) {// > 510
            console.log('sixth');
            
            return amount * city.tarifs[4];
        }
    }

    calcTva(tarifHt: number) {
        return tarifHt * 14 / 100;
    }

    calcCost(city: City, amount: number): number {
        return this.calcTarifHT(city, amount) + this.calcTva(this.calcTarifHT(city, amount));
    }

}
