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
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              ) {
  }

  ngOnInit() {
    this.evento = new Evento('','','','','','','');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  private add(){
    console.log(this.evento.nombre + "\n" + this.evento.descripcion);
    this.navCtrl.setRoot(ListPage);
  }

  private cancel(){
    this.navCtrl.setRoot(ListPage);
  }

}
