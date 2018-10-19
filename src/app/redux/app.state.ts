import { Car } from "../models/car";

export interface AppState {
  carPage:{
    cars:Car[]
  }
}
