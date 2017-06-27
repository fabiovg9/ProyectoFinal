import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddEventPage } from './add-event';
import { ListPage } from './../list/list';


@NgModule({
  declarations: [
    AddEventPage,
    ListPage
  ],
  imports: [
    IonicPageModule.forChild(AddEventPage),
  ],
  entryComponents:[
    ListPage
  ],
  exports: [
    AddEventPage
  ]
})
export class AddEventPageModule {}
