import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable, ErrorHandler } from '@angular/core';
import * as firebase from 'firebase/app';

const identifier = "token";
@Injectable()
export class Authentication{

    public token: string;

    constructor(private angularAuth: AngularFireAuth){

        this.setUp();
    }

    setUp(){
        this.token = this.getTokenFromLS();
        console.log(this.token);
        this.angularAuth.authState.subscribe((firebaseUser)=>{
            if(firebaseUser){
                localStorage.setItem(identifier, firebaseUser.uid);
                this.token = firebaseUser.uid;
            }
            else{
                localStorage.removeItem(identifier);
                this.token = null;
            }
        })
    }

    getTokenFromLS(): string{
        return localStorage.getItem(identifier);
    }
    
    createUserWithEmailAndPassword(email,password){
        this.angularAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    createUserWithGoogle(){
        let provider = new firebase.auth.GoogleAuthProvider();

        return this.createUserWithProvider(provider);
    }

    createUserWithFace(){
        let provider = new firebase.auth.FacebookAuthProvider();

        return this.createUserWithProvider(provider);
    }

    createUserWithProvider(provider){
        return this.angularAuth.auth.signInWithRedirect(provider)
                .then(result => {
                    return firebase.auth().getRedirectResult;
                })
                .catch(error => {
                    console.log(error);
                });
    }

    logOut(){
        return this.angularAuth.auth.signOut()
                .then(()=>{
                    this.token = null;
                })
                .catch((error)=>{
                    console.log(error);
                });
    }
}