import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technical',
  templateUrl: './technical.component.html',
  styleUrls: ['./technical.component.css']
})
export class TechnicalComponent implements OnInit {
  listTechnical: Array<CommonNews> | [] | null = null;
  firstTechnical!: CommonNews;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getTechnical(this.contentLenght);
  }

  contentLenght = 6;
  showmoreOnclick() {
    this.contentLenght += 6;
    this.getTechnical(this.contentLenght);
  }

  getTechnical(size: number): any {
    this.http.get<any>(environment.apiURL + environment.apiAdvanceAnalysts + '?size=' + size + 1).subscribe(res => {
      this.listTechnical = res.data.slice(1, size + 1);
      this.firstTechnical = res.data?.[0]
    });
  }
}
