import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-othernews',
  templateUrl: './othernews.component.html',
  styleUrls: ['./othernews.component.css']
})
export class OthernewsComponent implements OnInit {
  otherNews: Array<CommonNews> | any [] | null = null;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getotherNews();
  }
  getotherNews(): any {
    this.http.get<any>(environment.apiURL+environment.apiOtherNews).subscribe(res => {
      this.otherNews = res.data.slice(0,6);
    });
  }
}