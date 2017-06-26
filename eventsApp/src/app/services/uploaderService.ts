import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class UploaderService{
    storageRef: firebase.storage.Reference;

    constructor(){
        this.storageRef = firebase.storage().ref();
        
    }
    
public uploadFile(file: any) {
        if(file){
            let fileRef = this.storageRef.child('/images/'+file.name);
            let uploadTask = fileRef.put(file);
            return new Promise((resolve, reject)=>{
                uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
                (snapshot)=>{},
                (err)=> reject(err),
                () => {
                    let fileUrl = uploadTask.snapshot.downloadURL;
                    resolve(fileUrl);
                    });
            });
        }
    }

public uploadMultiple(files: Array<any>){
        let promises = [];
        files.forEach(file => {
            promises.push(this.uploadFile(file));
        });
        return Promise.all(promises);
    }
}