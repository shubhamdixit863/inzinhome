import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DistributorRoutingModule } from './distributor-routing.module';
import { DistributorComponent } from './distributor/distributor.component';


@NgModule({
  declarations: [DistributorComponent],
  imports: [
    CommonModule,
    DistributorRoutingModule
  ]
})
export class DistributorModule { }
