import { NgModule } from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import { HomePage } from './home';
import { ComponentsModule } from './../../components/components.module';
import { CarService } from './../../app/services/car.service';

@NgModule( {
  declarations:[HomePage],
  imports:[IonicPageModule.forChild(HomePage),ComponentsModule],
  exports:[HomePage],
  providers:[CarService]
})
export class HomePageModule{}
