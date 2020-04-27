import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutpageRoutingModule } from './aboutpage-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutpageRoutingModule
  ]
})
export class AboutpageModule { }
