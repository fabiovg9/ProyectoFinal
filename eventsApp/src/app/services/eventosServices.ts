import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable, ErrorHandler } from '@angular/core';
import * as firebase from 'firebase/app';


@Injectable()
export class EventosServices{

    constructor(private db: AngularFireDatabase){

    }

    public getEvents(): FirebaseListObservable<any[]>{
        return this.db.list('/eventos');
    }
}