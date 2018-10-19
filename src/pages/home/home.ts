import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import {Car} from '../../app/models/car';
import { ICars } from './../../app/models/car';
import {Store} from '@ngrx/store';
import { AppState } from './../../app/redux/app.state';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  public cars:Observable<ICars>;
  constructor(public navCtrl: NavController,private store:Store<AppState>) {
  }

  ngOnInit():void {
    this.cars = this.store.select('carPage');
  }
}
