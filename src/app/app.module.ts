import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { HomePageModule } from './../pages/home/home.module';
import { Application } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Application
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Application),
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
