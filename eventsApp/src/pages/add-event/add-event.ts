import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ListPage } from './../list/list';

import { Evento } from './../../app/models/Evento';

/**
 * Generated class for the AddEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {

  public evento: Evento;
  public currentDate: string = new Date().toISOString();
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams
              ) {
  }

  ngOnInit() {
    console.log(this.currentDate);
    console.log(new Date());
    this.evento = new Evento();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  private add(){
    console.log(this.evento);
    this.navCtrl.setRoot(ListPage);
  }

  private cancel(){
    this.navCtrl.setRoot(ListPage);
  }

}
