import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosServices } from './../../app/services/eventosServices';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

public events =[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventsServices: EventosServices) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    
}


private getEventById(){
  //var id= this.navParams.get("IdEvento");
  var id="Casa Juan";

    this.eventsServices.getItem(id).subscribe(evento=>{
        this.events=evento;
        console.log(evento);
    });

}


}
