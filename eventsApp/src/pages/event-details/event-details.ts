import { Authentication } from './../../app/services/authentication';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { EventosServices } from './../../app/services/eventosServices';
import {Evento} from './../../app/models/Evento';
import {HomePage} from '../home/home';
import {MapsPage} from '../maps/maps';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html' 
})

export class EventDetailsPage {

public Evento:Evento=new Evento();
lat:number=0;
lng:number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private eventsServices: EventosServices,
              private auth: Authentication,public modalCtrl: ModalController) {  
    
    var id= this.navParams.get("IdEvento");             
    this.getEventById(id);
  }


  ngOnInit() { 
      let user:string= this.auth.getTokenFromLS();
      if (!user) {
        this.navCtrl.setRoot(HomePage);
      }     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');    
}


private getEventById(id:string){    
    this.eventsServices.getItem(id).subscribe(evento=>{        
        this.Evento.Nombre=evento[6].$value;
        this.Evento.Fecha=evento[3].$value;
        this.Evento.Categoria=evento[1].$value;
        this.Evento.Imagen=evento[5].$value;
        this.Evento.Hora=evento[4].$value;
        this.Evento.Descripcion=evento[2].$value;
        this.Evento.Ubiacacion=evento[7].$value;
        this.Evento.Calificacion=evento[0].$value;

        this.lat=Number(this.Evento.Ubiacacion.split(',')[0]);
        this.lng=Number(this.Evento.Ubiacacion.split(',')[1]);
        console.log(this.Evento);
    });

}

 presentModal() {   
    let modal = this.modalCtrl.create(MapsPage,{lat:this.lat,lng:this.lng});
    modal.present();
  }


}
