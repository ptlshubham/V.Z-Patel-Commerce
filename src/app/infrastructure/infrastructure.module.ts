import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RouterModule } from '@angular/router';
import { InfrastructureRoutes } from './infrastructure.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(InfrastructureRoutes),
    SharedModule
  ]
})
export class InfrastructureModule { }
