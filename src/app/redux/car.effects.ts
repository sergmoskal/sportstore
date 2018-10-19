import { CarService } from "./../services/car.service";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { CarAction, AddCar } from "./car.actions";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/mergeMap";

@Injectable()
export class CarsEffects {
  constructor(private actions$: Actions, private carsService: CarService) {}

  @Effect()
  loadCars = this.actions$
    .ofType(CarAction.ADD_CAR)
    .switchMap((action: AddCar) => {
      return this.carsService.preLoad();
    })
    .mergeMap((cars)=>{
       return [{
         type:CarAction.LOAD_CAR,
         payload:cars
       }];
    });
}
