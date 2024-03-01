import { Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NouvelArticleComponent } from './nouvel-article/nouvel-article.component';

export const routes: Routes = [
    {
        path : "",
        component: HomeComponent
    },
    {
        path : "details/:id",
        component: DetailComponent
    },
    {
        path : "creer-un-article",
        component: NouvelArticleComponent
    },
    {
        path : "**",
        component: NotfoundComponent
    },
];
