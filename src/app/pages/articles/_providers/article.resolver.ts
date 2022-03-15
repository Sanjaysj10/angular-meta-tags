import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesAPIService } from "./articles.service";

@Injectable({ 
    providedIn: 'root' 
  })
  export class ArticleResolver implements Resolve<any> {
  
    constructor(private articlesService: ArticlesAPIService) {}
  
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id') || 1;
      return this.articlesService.getArticle$(id);
    }
  }