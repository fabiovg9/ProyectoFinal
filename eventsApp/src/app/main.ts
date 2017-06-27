import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

import * as firebase from 'firebase/app';

import { firebaseConfig } from './enviroments/firebaseconfig';

firebase.initializeApp(firebaseConfig);

firebase.auth().getRedirectResult().then(resullt => {     
});

platformBrowserDynamic().bootstrapModule(AppModule);
