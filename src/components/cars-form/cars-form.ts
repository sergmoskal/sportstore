import { Component, EventEmitter, Output } from '@angular/core';
import {Car} from '../../app/models/car';
import { CarService } from './../../app/services/car.service';

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

  constructor(private carService:CarService) {
    this.carModel=this.carName='';
    this.id = 0;
  }

  public onAdd():void {
     if(!this.carName || !this.carModel)
         return;

     let car:Car = new Car(this.carModel,this.carName,new Date());
     this.Clear();
     this.carService.addCar(car);
  }

  public onLoad():void {
     this.carService.loadCars();
  }

  private Clear():void {
    this.carModel='';
    this.carName='';
  }
}
