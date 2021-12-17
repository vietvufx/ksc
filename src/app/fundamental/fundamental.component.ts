import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fundamental',
  templateUrl: './fundamental.component.html',
  styleUrls: ['./fundamental.component.css']
})
export class FundamentalComponent implements OnInit {
  listFundamental: Array<CommonNews> | [] | null = null;
  firstFundamental!: CommonNews;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getFundamental(this.contentLenght);
  }
  contentLenght = 6;
  showmoreOnclick() {
    this.contentLenght += 6;
    this.getFundamental(this.contentLenght);
  }

  getFundamental(size: number): any {
    this.http.get<any>(environment.apiURL + environment.apiBaseAnalysts + '?size=' + size + 1).subscribe(res => {
      this.listFundamental = res.data.slice(1, size+1);
      this.firstFundamental = res.data?.[0];
      // console.log(this.listFundamental);
    });
  }
}