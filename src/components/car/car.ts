import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Car} from '../../app/models/car';

@Component({
  selector: 'car-item',
  templateUrl: 'car.html'
})
export class CarComponent {
  @Input() car:Car;
  @Output() deleteCar:EventEmitter<Car> = new EventEmitter<Car>();
  constructor() {}

  onDelete():void{
     this.deleteCar.emit(this.car);
  }

  onBuy():void {
    this.car.isSold = true;
  }
}
