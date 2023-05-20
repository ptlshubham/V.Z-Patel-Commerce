import { Routes } from '@angular/router';
import { FacilitiesComponent } from './facilities/facilities.component';

export const InfrastructureRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'facilities',
        component: FacilitiesComponent
    },
]
}];