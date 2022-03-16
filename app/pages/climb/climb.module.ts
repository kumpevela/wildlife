import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClimbRoutingModule } from './climb-routing.module';
import { ClimbContentComponent } from './components/climb-content/climb-content.component';


@NgModule({
  declarations: [
    ClimbContentComponent
  ],
  imports: [
    CommonModule,
    ClimbRoutingModule
  ]
})
export class ClimbModule { }
