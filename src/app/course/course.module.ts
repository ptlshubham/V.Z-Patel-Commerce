import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { McomComponent } from './mcom/mcom.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CourseRoutes } from './course.routing';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    McomComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    RouterModule.forChild(CourseRoutes)
  ]
})
export class CourseModule { }
