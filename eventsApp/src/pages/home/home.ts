import { Authentication } from './../../app/services/authentication';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import {ListPage} from '../list/list';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  email: string;
  password: string;

  constructor(public navCtrl: NavController,
              private auth: Authentication,
              public modalCtrl: ModalController) {

  }

   ngOnInit() { 
     /* let user:string= this.auth.getTokenFromLS();
      if (user) {
        this.navCtrl.setRoot(ListPage);
      }*/
  }

  showEventsPage(){
    this.navCtrl.setRoot(ListPage);
  }

  createAccountGoogle(){
    this.auth.createUserWithGoogle();
  }

  createAccountFace(){
    this.auth.createUserWithFace();
  }

  login(){
    this.auth.loginUserWithEmailAndPassword(this.email, this.password);
  }

  presentModal() {   
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }

}
