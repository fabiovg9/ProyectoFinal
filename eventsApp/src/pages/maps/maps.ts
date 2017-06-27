import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  lat:number=0;
  lng:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      
      this.lat= this.navParams.get("lat"); 
      this.lng= this.navParams.get("lng");  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

}
