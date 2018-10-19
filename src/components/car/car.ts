import { CarService } from './../../app/services/car.service';
import { Component, Input} from '@angular/core';
import {Car} from '../../app/models/car';
import { DeleteCar, UpdateCar } from '../../app/redux/car.actions';

@Component({
  selector: 'car-item',
  templateUrl: 'car.html'
})
export class CarComponent {
  @Input() car:Car;
  constructor(private carService:CarService) {}

  onDelete():void{
     this.carService.deleteCar(this.car);
  }

  onBuy():void {
    this.car.isSold = true;
    this.carService.updateCar(this.car);
  }
}
