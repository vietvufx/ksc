import { Component, OnInit } from '@angular/core';
import { CommonNews } from '../common-interface';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newsknowledge',
  templateUrl: './newsknowledge.component.html',
  styleUrls: ['./newsknowledge.component.css']
})
export class NewsknowledgeComponent implements OnInit {
  newKnowledges: Array<CommonNews> | any [] | null = null;
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getKnowledges();
  }
  getKnowledges(): any {
    this.http.get<any>(environment.apiURL + environment.apiKnowledges).subscribe(res => {
      this.newKnowledges = res.data.slice(0,6);
    });
  }
}


