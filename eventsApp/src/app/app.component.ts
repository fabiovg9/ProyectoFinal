import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Authentication } from './services/authentication';
import { EventosServices } from './services/eventosServices';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LogInPage } from './../pages/log-in/log-in';
//Component
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{icon: string, title: string, component: any}>;
  invitedPages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform,
                  public statusBar: StatusBar,
                  public splashScreen: SplashScreen,
                  public auth: Authentication,
                  public eventService: EventosServices) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Inicio', component: HomePage },
      { icon: 'calendar', title: 'Eventos', component: ListPage }
    ];

    this.invitedPages = [
      { icon: 'person', title: 'Iniciar sesión', component: LogInPage}
    ];

  }

  logOut(){
    this.auth.logOut();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
