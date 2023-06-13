import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilitiesComponent } from './facilities/facilities.component';
import { RouterModule } from '@angular/router';
import { InfrastructureRoutes } from './infrastructure.routing';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    FacilitiesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(InfrastructureRoutes),
    SharedModule,
    NgbModule

  ]
})
export class InfrastructureModule { }
