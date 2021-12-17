import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newsreview',
  templateUrl: './newsreview.component.html',
  styleUrls: ['./newsreview.component.css']
})
export class NewsreviewComponent implements OnInit {
  newReviews: Array<CommonNews> | any [] | null = null;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getReviews();
  }
  getReviews(): any {
    this.http.get<any>(environment.apiURL + environment.apiReviews).subscribe(res => {
      this.newReviews = res.data.slice(0,6);
      // console.log(this.newReviews)
    });
  }
}
