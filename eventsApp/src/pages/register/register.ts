import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Authentication } from './../../app/services/authentication';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email: string;
  password: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private auth: Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Registrarme(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
    this.navCtrl.pop();
  }

}
