import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sentiment',
  templateUrl: './sentiment.component.html',
  styleUrls: ['./sentiment.component.css']
})
export class SentimentComponent implements OnInit {

  listSentiment: Array<CommonNews> | [] | null = null;
  firstSentiment!: CommonNews;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getSentiment(this.contentLenght);
  }
  contentLenght = 6;
  showmoreOnclick() {
    this.contentLenght += 6;
    this.getSentiment(this.contentLenght);
  }

  getSentiment(size: number): any {
    this.http.get<any>(environment.apiURL + environment.apiBusinessInfos + '?size=' + size + 1).subscribe(res => {
      this.listSentiment = res.data.slice(1, size + 1);
      this.firstSentiment = res.data?.[0]
    });
  }
}

