import { Authentication } from './../../app/services/authentication';
import { EventosServices } from './../../app/services/eventosServices';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database';
import {AddEventPage} from '../add-event/add-event';
import {EventDetailsPage} from '../event-details/event-details';
import {HomePage} from '../home/home';

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
              private eventsServices: EventosServices,
              private auth: Authentication) {

    this._getEvents();
  }

  ngOnInit() { 
      let user:string= this.auth.getTokenFromLS();
      if (!user) {
        this.navCtrl.setRoot(HomePage);
      }     
  }

  private _getEvents(){
    this.eventsServices.getEvents().subscribe(eventos=>{
        this.events=eventos;
    });
  } 

  private addEvent() {
    this.navCtrl.setRoot(AddEventPage);
  }

  private openDetail(event:string) {
    //this.navCtrl.setRoot(EventDetailsPage,{IdEvento:'5'});    
    this.navCtrl.push(EventDetailsPage, {IdEvento: event});
  }

}
