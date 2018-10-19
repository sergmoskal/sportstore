import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpModule} from '@angular/http';
import { HomePageModule } from './../pages/home/home.module';
/* import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'; */

import { Application } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { carReducer } from './redux/car.reducer';
import { CarsEffects } from './redux/car.effects';

@NgModule({
  declarations: [
    Application
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EffectsModule.forRoot([CarsEffects]),
    StoreModule.forRoot({carPage:carReducer}),
    IonicModule.forRoot(Application),
   /*  StoreRouterConnectingModule,
    StoreDevtoolsModule, */
    HomePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Application
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
