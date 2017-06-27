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
    this.navCtrl.push(AddEventPage);
  }

  private openDetail(event:string) {      
    this.navCtrl.push(EventDetailsPage, {IdEvento: event});
  }

  private splitDate(date:string){
    let fecha=[];
    var fechaarr=date.split('-');
    fecha.push(fechaarr[0]);
    fecha.push(this.getMothByNumber(fechaarr[1]));
    fecha.push(fechaarr[2]);
    return fecha;
   
  }

  private getMothByNumber(numer:string){
    let mes:string;
    switch (numer) {
      case "01":
        mes="ENE";
        break;
      case "02":
        mes="FEB";
        break;
      case "03":
        mes="MAR";
        break;
      case "04":
        mes="ABR";        
        break;
      case "05":
        mes="MAY";
        break;
      case "06":
        mes="JUN";
        break;
      case "07":
        mes="JUL";
        break;
      case "08":
        mes="AGO";
        break;
      case "09":
        mes="SEP";
        break;
      case "10":
        mes="OCT";
        break;
      case "11":
        mes="NOV";
        break;
      case "12":
        mes="DIC";
        break;              
    }

    return mes;
  }

}
