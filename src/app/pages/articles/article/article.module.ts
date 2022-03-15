import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { RouterModule, Routes } from '@angular/router';

// export const articleRoutes: Routes = [
//   {
//     path: '',
//     component: ArticleComponent,
//   },
// ]

@NgModule({
  // declarations: [ArticleComponent],
  imports: [
    CommonModule,
    // RouterModule.forChild(articleRoutes),
  ]
})
export class ArticleModule { }
