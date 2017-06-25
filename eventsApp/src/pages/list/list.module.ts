import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { AddEventPage } from '../add-event/add-event';

@NgModule({
  declarations: [
    ListPage,
    AddEventPage
  ],
  imports: [
    IonicPageModule.forChild(ListPage),
  ],
  entryComponents: [
    AddEventPage
  ],
  exports: [
    ListPage
  ]
})
export class ListPageModule {}
