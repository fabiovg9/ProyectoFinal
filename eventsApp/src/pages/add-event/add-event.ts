import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventosServices } from './../../app/services/eventosServices';
import { CameraService } from './../../app/services/cameraServices';
import { UploaderService } from './../../app/services/uploaderService';
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
  public currentDate: string = new Date().toISOString().split('T')[0];
  public image: any;
  public prevImg: boolean = false;
  
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eventsServices: EventosServices,
              private cameraServices: CameraService,
              private uploader: UploaderService) {
  }

  ngOnInit() {
    this.evento = new Evento();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  }

  private imageChange(ev){
    this.image = ev.target.files[0];
    if(this.image){
      let type:any = this.image.type.split('/')[0];
      debugger;
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