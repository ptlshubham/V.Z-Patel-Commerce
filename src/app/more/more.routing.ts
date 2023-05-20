import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'library',
            component: LibraryComponent
        },
        {
            path: 'result',
            component: ResultComponent
        },
        {
            path: 'campus',
            component: CampusComponent
        },
        {
            path:'search/:id',
            component:SearchComponent
        }

]
}];