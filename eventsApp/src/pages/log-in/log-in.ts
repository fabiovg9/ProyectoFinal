import { Authentication } from './../../app/services/authentication';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LogInPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-log-in',
  templateUrl: 'log-in.html',
})
export class LogInPage {
  email: string;
  password: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private auth: Authentication) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  createAccount(){
    this.auth.createUserWithEmailAndPassword(this.email, this.password);
  }

  createAccountGoogle(){
    this.auth.createUserWithGoogle();
  }

  createAccountFace(){
    this.auth.createUserWithFace();
  }

}
