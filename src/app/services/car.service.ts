import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Store } from "@ngrx/store";
import { ServiceBase } from "./base.service";
import { AppState } from "./../redux/app.state";
import "rxjs/add/operator/map";
import { Car } from "../models/car";
import { LoadCar,AddCar, DeleteCar, UpdateCar } from "../redux/car.actions";

@Injectable()
export class CarService extends ServiceBase {
  constructor(private http: Http, private store: Store<AppState>) {
    super();
  }

  public preLoad():Observable<Car[]> {
   return this.http
      .get(`${this.baseUrl}/cars`)
      .map((resp: Response) => resp.json());
  }

  public loadCars(): void {
      this.preLoad()
      .subscribe((data: Car[]) => {
        this.store.dispatch(new LoadCar(data));
      });
  }

  public addCar(car: Car): void {
    this.http
      .post(`${this.baseUrl}/cars`, car)
      .map((response: Response) => response.json())
      .subscribe((car:Car) => {
        this.store.dispatch(new AddCar([car]));
      });
  }

  public deleteCar(car:Car):void {
    this.http.delete(`${this.baseUrl}/cars/${car.id}`)
             .map((response:Response)=>response.json())
             .subscribe((_)=>this.store.dispatch(new DeleteCar([car])));
  }

  public updateCar(car:Car):void {
    this.http.put(`${this.baseUrl}/cars/${car.id}`,car)
             .map((response:Response)=> response.json())
             .subscribe((car:Car)=>this.store.dispatch(new UpdateCar([car])));
  }
}
