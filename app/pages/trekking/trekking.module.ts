import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrekkingRoutingModule } from './trekking-routing.module';
import { TrekkingContentComponent } from './components/trekking-content/trekking-content.component';


@NgModule({
  declarations: [
    TrekkingContentComponent
  ],
  imports: [
    CommonModule,
    TrekkingRoutingModule
  ]
})
export class TrekkingModule { }
