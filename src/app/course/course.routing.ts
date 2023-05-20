import { Routes } from '@angular/router';
import { McomComponent } from './mcom/mcom.component';

export const CourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'syllabus',
        component: McomComponent
    },
    ]
}];
