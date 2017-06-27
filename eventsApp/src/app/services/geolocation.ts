import { Injectable, ErrorHandler } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';

@Injectable()
export class GeolocationService{

    constructor(private geolocation: Geolocation){

    }

    getCurrentLocaction() {
        return this.geolocation.getCurrentPosition();
    }
}
