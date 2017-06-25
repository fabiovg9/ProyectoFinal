import { EventosServices } from './../../app/services/eventosServices';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import {AddEventPage} from '../add-event/add-event';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public events =[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eventsServices: EventosServices) {

    this._getEvents();
  }

  private _getEvents(){
    this.eventsServices.getEvents().subscribe(eventos=>{
        this.events=eventos;
    });
  } 

  private addEvent() {
    this.navCtrl.setRoot(AddEventPage);
  }

}
