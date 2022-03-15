import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticleResolver } from './_providers/article.resolver';
import { ArticlesComponent } from './articles.component';
import { ArticlesAPIService } from './_providers/articles.service';
import { ArticleComponent } from './article/article/article.component';

export const articlesRoutes: Routes = [
  {
    path: '',
    component: ArticlesComponent,
  },
  {
    path: ':id',
    resolve: { article: ArticleResolver },
    // loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
    component: ArticleComponent
  }

]

@NgModule({
  declarations: [ArticlesComponent, ArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(articlesRoutes),
  ],
  providers: [ArticleResolver, ArticlesAPIService]
})
export class ArticlesModule { }