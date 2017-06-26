import { Authentication } from './../../app/services/authentication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ListPage} from '../list/list'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              private auth: Authentication) {

  }

   ngOnInit() { 
     /* let user:string= this.auth.getTokenFromLS();
      if (user) {
        this.navCtrl.setRoot(ListPage);
      }*/
  }

  createAccountGoogle(){
    this.auth.createUserWithGoogle();
  }

  createAccountFace(){
    this.auth.createUserWithFace();
  }

}
