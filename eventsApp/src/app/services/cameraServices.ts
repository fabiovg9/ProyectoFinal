import { Camera, CameraOptions } from '@ionic-native/camera';
import { Injectable, ErrorHandler } from '@angular/core';

export const options ={
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
}
@Injectable()
export class CameraService{
    
    constructor(private camera: Camera){

    }
    public takePicture(){
        
        this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
       let base64Image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
       // Handle error
      });
    }
}