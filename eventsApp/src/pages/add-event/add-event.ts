import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Authentication } from './../../app/services/authentication';
import { EventosServices } from './../../app/services/eventosServices';
import { CameraService } from './../../app/services/cameraServices';
import { UploaderService } from './../../app/services/uploaderService';
import {GeolocationService} from './../../app/services/geolocation';
import { ListPage } from './../list/list';
import {HomePage} from './../home/home';
import { Evento } from './../../app/models/Evento';

/**
 * Generated class for the AddEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


declare var google;

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})



export class AddEventPage {


  public evento: Evento;
  public currentDate: string = new Date().toISOString().split('T')[0];
  public image: any;
  public prevImg: boolean = false;
  public geolocation: string;
  public showMap: boolean = false;

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eventsServices: EventosServices,
              private cameraServices: CameraService,
              private uploader: UploaderService,
              private auth: Authentication,
              private geo: GeolocationService) {
  }

  ngOnInit() {
    let user:string= this.auth.getTokenFromLS();
      if (!user) {
        this.navCtrl.setRoot(HomePage);
      }
    this.evento = new Evento();
    this.initMap();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  private initMap(){
    this.evento.Ubiacacion = "6.256664, -75.590209";
    this.geo.getCurrentLocaction().then((resp) => {
      this.evento.Ubiacacion = resp.coords.latitude+","+resp.coords.longitude;
      }).catch((error) => {
          console.log('Error getting location', error);
      });
  }

  private imageChange(ev){
    this.image = ev.target.files[0];
    if(this.image){
      let type:any = this.image.type.split('/')[0];
      if(type === "image") {
        this.prevImg = true;
        let reader = new FileReader();
        reader.onload = this.imageOnload;
        reader.readAsDataURL(this.image);
        return;
      }
    }
    this.prevImg = false;
    ev.target.value = null;
    this.image = null;
  }

  private imageOnload(ev){
    let result=ev.target.result;
    document.getElementById("prevImg").setAttribute("src", result);
  }

  private takePicture() {
    this.cameraServices.takePicture();
  }

  private loadMap() {

    this.showMap = true;
    let lat = this.evento.Ubiacacion.split(',');
    let latLng = new google.maps.LatLng(lat[0], lat[1]);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let marker = new google.maps.Marker({
      map: this.map,
      //animation: google.maps.Animation.DROP,
      draggable: true,
      position: this.map.getCenter()
    });
    

    marker.addListener('click', () => {
      this.map.setZoom(8);
      this.map.setCenter(marker.getPosition());
      console.log(marker.getPosition());
      this.evento.Ubiacacion = marker.getPosition().lat()+","+marker.getPosition().lng();
    });
  }

  private add(){
      this.uploader.uploadFile(this.image)
            .then((url: string) =>{
              this.evento.Imagen = url;
              let event={
                  "Nombre":this.evento.Nombre,
                  "Calificacion":0,
                  "Categoria":this.evento.Categoria,
                  "Descripcion":this.evento.Descripcion,
                  "Fecha": this.evento.Fecha,
                  "Hora":this.evento.Hora,
                  "Imagen":this.evento.Imagen,
                  "Ubiacacion":this.evento.Ubiacacion
                };
      
              this.eventsServices.insert(event);
              this.navCtrl.setRoot(ListPage);
            })
            .catch((err)=>{
              console.log(err);
            });
  }

  private cancel(){
    this.navCtrl.setRoot(ListPage);
  }

}