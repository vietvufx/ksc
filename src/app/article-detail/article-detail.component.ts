import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  id: string | null | undefined;
  articleDetail!: CommonNews
  

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient, private titleService: Title, private metaTag: Meta) { }
  //
  ngOnInit(): void {
    this.getDetails();
  }
  chunkString(str: string, size: any) {
    return str.match(new RegExp('.{1,' + size + '}', 'g'));
  }
  getDetails(): any {
    let idRequest = this.route.snapshot.paramMap.get('id')
    if (idRequest) {
      this.http.get<any>(environment.apiURL + environment.apiDetails + encodeURIComponent(idRequest)).subscribe(res => {
        this.articleDetail = res.data;
        this.titleService.setTitle('Không Sợ Cháy - ' + this.articleDetail.title);
        this.metaTag.updateTag({ name: 'title', content: 'Không Sợ Cháy - ' + this.articleDetail.title });
        this.metaTag.updateTag({ name: 'description', content: this.articleDetail.title });
        this.metaTag.updateTag({ name: 'keywords', content: this.articleDetail.title + ' Không sợ cháy, Vàng phái sinh, Golden Fund' });
        this.metaTag.updateTag({ property: 'og:description', content: this.articleDetail.title });
        this.metaTag.updateTag({ property: 'og:title', content: 'Không Sợ Cháy - ' + this.articleDetail.title });
        this.metaTag.updateTag({ property: 'og:image', content: this.articleDetail.image });
        this.metaTag.updateTag({ property: 'og:image:alt', content: this.articleDetail.title });
        this.metaTag.updateTag({ property: 'og:url', content: 'https://khongsochay.com' + this.router.url });
      });
    }
  }
}
