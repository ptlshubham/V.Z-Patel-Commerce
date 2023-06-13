import { Routes } from '@angular/router';
import { CampusComponent } from './campus/campus.component';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';
import { PaperComponent } from './paper/paper.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';

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
        },
        {
            path: 'paper',
            component: PaperComponent
        },
        {
            path: 'syllabus',
            component: SyllabusComponent
        },
        {
            path:'academic-calendar',
            component:AcademicCalendarComponent
        },
        {
            path:'scholarship',
            component:ScholarshipsComponent
        },
        {
            path:'magazine',
            component:MagazineComponent
        },
        {
            path:'news',
            component:NewsComponent
        },
        {
            path:'search',
            component:SearchComponent
        },
        {
            path: 'links/:id',
            component: SyllabusComponent
        },
]
}];