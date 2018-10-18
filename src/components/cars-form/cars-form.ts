import { Component, EventEmitter, Output } from '@angular/core';
import {Car} from '../../app/models/car';

@Component({
  selector: 'cars-form',
  templateUrl: 'cars-form.html'
})
export class CarsFormComponent {
  @Output()
  public addCar:EventEmitter<Car> = new EventEmitter<Car>();
  private id:number;
  public carModel:string;
  public carName:string;

  constructor() {
    this.carModel=this.carName='';
    this.id = 0;
  }

  public onAdd():void {
     if(!this.carName || !this.carModel)
         return;

     this.id = ++this.id;
     let car:Car = new Car(this.carModel,this.carName,new Date(),this.id);
     this.Clear();
     this.addCar.emit(car);
  }

  private Clear():void {
    this.carModel='';
    this.carName='';
  }
}
