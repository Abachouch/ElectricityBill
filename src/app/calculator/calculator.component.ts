import { Component, OnInit } from '@angular/core';
import { City } from '../../models/City';
import { Serv } from '../../models/Serv';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  serv: Serv = new Serv();
  //inputs
  city: City;
  amount: number;
  fixes: number = 17.42;
  //results
  costHt: string;
  tva: string;
  cost: string;
  //btn
  btn: string;
  //transitions
  isHidePanel: boolean;

  onSelectCity($event) {
    this.city = $event;
    this.costHt = this.serv.calcTarifHT(this.city, this.amount).toFixed(2);

    this.tva = this.serv.calcTva(this.serv.calcTarifHT(this.city, this.amount)).toFixed(2);
    this.cost = (this.serv.calcCost(this.city, this.amount) + this.fixes).toFixed(2);
    console.log('costHT => ' + this.serv.calcTarifHT(this.city, this.amount));


  }

  onAmountChange($event) {
    this.amount = $event;
    this.costHt = this.serv.calcTarifHT(this.city, this.amount).toFixed(2);

    this.tva = this.serv.calcTva(this.serv.calcTarifHT(this.city, this.amount)).toFixed(2);
    this.cost = (this.serv.calcCost(this.city, this.amount) + this.fixes).toFixed(2);
    console.log('costHT => ' + this.costHt);
    return false;
  }

  onNextClick($event) {
    if (this.btn === 'NEXT') {
      this.btn = 'RETURN';
      this.isHidePanel = true;
    }
    else {
      this.btn = 'NEXT';
      this.isHidePanel = false;
    }
  }

  constructor() { }

  ngOnInit() {

    this.city = this.serv.citys[0];
    this.amount = 10;
    //btn
    this.btn = 'NEXT';
    this.isHidePanel = false;
    //result inti
    this.costHt = this.serv.calcTarifHT(this.city, this.amount).toFixed(2);

    this.tva = this.serv.calcTva(this.serv.calcTarifHT(this.city, this.amount)).toFixed(2);
    this.cost = (this.serv.calcCost(this.city, this.amount) + this.fixes).toFixed(2);
  }

}
