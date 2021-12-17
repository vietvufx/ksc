import { Component } from '@angular/core';
import { MetaService } from './metaservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Không sợ cháy';
  constructor(private meta: MetaService) {}

  ngOnInit(): void {
    this.meta.updateTitle();
  }
}
