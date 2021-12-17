import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  public time_now: String = new String();
  contentLenght = 5;
  newFeeds: Array<CommonNews> | any [] | null = null;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getNewFeeds(this.contentLenght);
    this.getFormatTimeNow();
  }

  getNewFeeds(size: number): any {
    this.http.get<any>(environment.apiURL + environment.apiNewFeeds+'?size='+size).subscribe(res => {
      this.newFeeds = res.data;
      console.log(this.newFeeds);
    });
  }

  showmoreOnclick() {
    this.contentLenght += 5;
    this.getNewFeeds(this.contentLenght);
  }

  getFormatTimeNow(): void {
    setInterval(() => {
      let date = new Date();
      let current_day = date.getDay();
      let day_name = '';
      switch (current_day) {
        case 0:
          day_name = "Chủ Nhật";
          break;
        case 1:
          day_name = "Thứ 2";
          break;
        case 2:
          day_name = "Thứ 3";
          break;
        case 3:
          day_name = "Thứ 4";
          break;
        case 4:
          day_name = "Thứ 5";
          break;
        case 5:
          day_name = "Thứ 6";
          break;
        case 6:
          day_name = "Thứ 7";
      }
      this.time_now = day_name + ' - ' + date.toLocaleDateString() + ', ' + date.toLocaleTimeString();
    }, 1);
  }
}
