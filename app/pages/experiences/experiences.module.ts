import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesContentComponent } from './components/experiences-content/experiences-content.component';


@NgModule({
  declarations: [
    ExperiencesContentComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ]
})
export class ExperiencesModule { }
