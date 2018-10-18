import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {Car} from '../../app/models/car';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public cars:Car[]=[];
  constructor(public navCtrl: NavController) {
  }

  public AddCar(car:Car):void {
     this.cars.push(car);
  }

  public delCar(car:Car):void {
     this.cars = this.cars.filter(c => c.id != car.id);
  }
}
