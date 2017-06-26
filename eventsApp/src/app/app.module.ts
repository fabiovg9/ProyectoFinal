import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Authentication } from './services/authentication';
import { EventosServices } from './services/eventosServices';
import { CameraService } from './services/cameraServices';
import { UploaderService } from './services/uploaderService';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from './enviroments/firebaseconfig';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LogInPage } from './../pages/log-in/log-in';
import { EventDetailsPage } from './../pages/event-details/event-details';
import { AddEventPage } from './../pages/add-event/add-event';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Mapas
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    EventDetailsPage,
    AddEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
      monthShortNames: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
      dayNames: ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sab'],
      dayShortNames: ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab' ]
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDBQ1u-cOk_phZnFssDHNxw2d-PJ4Coffo'
    })    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LogInPage,
    EventDetailsPage,
    AddEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Authentication,
    EventosServices,
    CameraService,
    Camera,
    UploaderService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
