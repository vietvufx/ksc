import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsreviewComponent } from './newsreview/newsreview.component';
import { NewsknowledgeComponent } from './newsknowledge/newsknowledge.component';
import { OthernewsComponent } from './othernews/othernews.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TechnicalComponent } from './technical/technical.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { AboutMeKSCComponent } from './about-me-ksc/about-me-ksc.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    NewsfeedComponent,
    NewsreviewComponent,
    NewsknowledgeComponent,
    OthernewsComponent,
    SentimentComponent,
    TechnicalComponent,
    FundamentalComponent,
    ArticleDetailComponent,
    AboutMeKSCComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
