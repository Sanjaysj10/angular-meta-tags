import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SEOService } from "src/app/service/seo.service";
import { pluck } from 'rxjs/operators';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class ArticlesComponent implements OnInit {
  
    readonly articles$ = this.route.data.pipe(pluck('articles'))
  
    constructor(
      private SEOService: SEOService,
      private route: ActivatedRoute,
    ) { }
  
    ngOnInit(): void {
      const { meta } = this.route.snapshot.data;
      this.SEOService.updateTitle(meta.title);
      this.SEOService.updateDescription(meta.description);
    }
  
  }