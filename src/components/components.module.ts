import { NgModule } from "@angular/core";
import { MenuComponent } from "./menu/menu";
import { IonicModule } from "ionic-angular";
import { CarsFormComponent } from './cars-form/cars-form';
import { CarComponent } from './car/car';

@NgModule({
  declarations: [MenuComponent,CarsFormComponent,CarComponent],
  imports: [IonicModule],
  exports: [MenuComponent,CarsFormComponent,CarComponent]
})
export class ComponentsModule {}
