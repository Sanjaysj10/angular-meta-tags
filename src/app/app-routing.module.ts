import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { sectionsMetadata } from './constant/app.constant';

const routes: Routes = [
  {
    path: 'home',
    data: sectionsMetadata.homePage,
    children: [
      {
        path: 'articles',
        data: sectionsMetadata.articles,
        loadChildren: () => import('./pages/articles/articles.module').then(m => m.ArticlesModule),
      },
    ]
  },
  {
    path: '', redirectTo: 'home/articles', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
