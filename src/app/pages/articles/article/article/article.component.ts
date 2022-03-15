import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { SEOService } from 'src/app/service/seo.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleComponent implements OnInit {

  readonly article$: Observable<any> = this.route.data
  .pipe(
    pluck('article'),
    tap(article => this.updatePageMeta(article))
  );

  constructor(
    private SEOSvc: SEOService,
    private route: ActivatedRoute
  ) { 
    this.route.data.subscribe(response => this.updatePageMeta(response.article));
  }

  

  private updatePageMeta(article: any) {
    console.log(article);
    this.SEOSvc.updateTitle(article.title);
    this.SEOSvc.updateDescription(article.title)
  }

  ngOnInit(): void {

  }

}
