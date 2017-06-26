import { Authentication } from './../../app/services/authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private auth: Authentication) {

  }

  createAccountGoogle(){
    this.auth.createUserWithGoogle();
  }

  createAccountFace(){
    this.auth.createUserWithFace();
  }

}
