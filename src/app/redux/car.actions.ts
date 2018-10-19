import { Action } from '@ngrx/store';
import {Car} from '../models/car';

export namespace CarAction {
  export const ADD_CAR:string = 'ADD_CAR';
  export const DELETE_CAR:string = 'DELETE_CAR';
  export const UPDATE_CAR:string = 'UPDATE_CAR';
  export const LOAD_CAR:string = 'LOAD_CAR';
}

export class AddCar implements Action {
  readonly type = CarAction.ADD_CAR;
  constructor(public payload:Car[]){}

}

export class DeleteCar implements Action {
  readonly type = CarAction.DELETE_CAR;
  constructor(public payload:Car[]){}
}

export class UpdateCar implements Action {
  readonly type = CarAction.UPDATE_CAR;
  constructor(public payload:Car[]){}
}

export class LoadCar implements Action {
  readonly type = CarAction.LOAD_CAR;
  constructor(public payload:Car[]){}
}

export type CarType = AddCar | DeleteCar | UpdateCar | LoadCar;
