import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosServices } from './../../app/services/eventosServices';
import {Evento} from './../../app/models/Evento';

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

public Evento:Evento=new Evento();
lat:number=51.678418;
lng:number=7.809007;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventsServices: EventosServices) {                
    this.getEventById();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');    
}


private getEventById(){
  //var id= this.navParams.get("IdEvento");
  var id="Casa Juan";

    this.eventsServices.getItem(id).subscribe(evento=>{        
        this.Evento.Nombre=evento[6].$value;
        this.Evento.Fecha=evento[3].$value;
        this.Evento.Categoria=evento[1].$value;
        this.Evento.Imagen=evento[5].$value;
        this.Evento.Hora=evento[4].$value;
        this.Evento.Descripcion=evento[2].$value;
        this.Evento.Ubiacacion=evento[7].$value;
        console.log(this.Evento);
    });

}


}
