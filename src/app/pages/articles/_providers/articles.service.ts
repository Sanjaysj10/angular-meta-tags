import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  
  export class ArticlesAPIService {

    constructor(private http: HttpClient) {

    }

    getArticle$(id) {
       return this.http.get('https://jsonplaceholder.typicode.com/todos/' + id);
    }
  }