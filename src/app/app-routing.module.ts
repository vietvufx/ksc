import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeKSCComponent } from './about-me-ksc/about-me-ksc.component';
import { AdminComponent } from './admin/admin.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { FundamentalComponent } from './fundamental/fundamental.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { SentimentComponent } from './sentiment/sentiment.component';
import { TechnicalComponent } from './technical/technical.component';


const routes: Routes = [
  { path: 'homepage', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: HomepageComponent,
    data: {
      title: 'Trang chủ',
      title_element: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Ngoại hối, Forex',
      description: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.',
      keywords: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Vàng, Ngoại hối, Forex',
      url: 'https://khongsochay.com/',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.'
    },
  },
  {
    path: 'about-me', component: AboutMeKSCComponent,
    data: {
      title: 'Giới thiệu bản thân',
      title_element: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Ngoại hối, Forex',
      description: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.',
      keywords: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Vàng, Ngoại hối, Forex',
      url: 'https://khongsochay.com/about-me',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.'
    }
  },
  {
    path: 'fundamental', component: FundamentalComponent,
    data: {
      title: 'Phân tích cơ bản',
      title_element: 'Không Sợ Cháy - Phân tích cơ bản, dữ liệu kinh tế, tin tức & chính sách tiền tệ, xu hướng thị trường trong đầu tư Vàng phái sinh, ngoại hối, forex, fx',
      description: 'Không Sợ Cháy - Phân tích cơ bản, dữ liệu kinh tế, tin tức & chính sách tiền tệ, xu hướng thị trường trong đầu tư Vàng phái sinh, ngoại hối, forex, fx',
      keywords: 'Không sợ cháy, Golden fund, Vàng phái sinh, Phân tích cơ bản, Forex, ngoại hối',
      url: 'https://khongsochay.com/fundamental',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Phân tích cơ bản, dữ liệu kinh tế, tin tức & chính sách tiền tệ, xu hướng thị trường trong đầu tư Vàng phái sinh, ngoại hối, forex, fx'
    }
  },
  {
    path: 'technical', component: TechnicalComponent,
    data: {
      title: 'Phân tích kỹ thuật',
      title_element: 'Không Sợ Cháy - Phân tích kỹ thuật, xu hướng thị trường, mô hình nến nhật, sóng, kháng cự, hỗ trợ trong giao dịch Vàng phái sinh, ngoại hối, forex, fx',
      description: 'Không Sợ Cháy - Phân tích kỹ thuật, xu hướng thị trường, mô hình nến nhật, sóng, kháng cự, hỗ trợ trong giao dịch Vàng phái sinh, ngoại hối, forex, fx',
      keywords: 'Không sợ cháy, Golden fund, Vàng phái sinh, Phân tích kỹ thuật, Forex, ngoại hối',
      url: 'https://khongsochay.com/fundamental',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Phân tích kỹ thuật, xu hướng thị trường, mô hình nến nhật, sóng, kháng cự, hỗ trợ trong giao dịch Vàng phái sinh, ngoại hối, forex, fx'
    }
  },
  { path: 'details/:id', component: ArticleDetailComponent },
  {
    path: 'sentiment', component: SentimentComponent,
    data: {
      title: 'Phân tích tâm lý thị trường',
      title_element: 'Không Sợ Cháy - Phân tích tâm lý thị trường, xu hướng thị trường, báo cáo COT- CFTC, xác định risk on - risk off trong giao dịch Vàng phái sinh, ngoại hối, forex, fx',
      description: 'Không Sợ Cháy - Phân tích tâm lý thị trường, xu hướng thị trường, báo cáo COT- CFTC, xác định risk on - risk off trong giao dịch Vàng phái sinh, ngoại hối, forex, fx',
      keywords: 'Không sợ cháy, Golden fund, Vàng phái sinh, Phân tích tâm lý thị trường, Forex, ngoại hối',
      url: 'https://khongsochay.com/fundamental',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Phân tích tâm lý thị trường, xu hướng thị trường, báo cáo COT- CFTC, xác định risk on - risk off trong giao dịch Vàng phái sinh, ngoại hối, forex, fx'
    }
  },
  {
    path: 'admin', component: AdminComponent,
    data: {
      title: 'Administrator',
      title_element: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Ngoại hối, Forex',
      description: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.',
      keywords: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Vàng, Ngoại hối, Forex',
      url: 'https://khongsochay.com/',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.'
    }
  },
  {
    path: 'login', component: LoginComponent,
    data: {
      title: 'Administrator',
      title_element: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Ngoại hối, Forex',
      description: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.',
      keywords: 'Không sợ cháy, Vàng phái sinh, Phân tích cơ bản, kỹ thuật, Vàng, Ngoại hối, Forex',
      url: 'https://khongsochay.com/',
      image: '/assets/khong-so-chay-logo.png',
      image_alt: 'Không Sợ Cháy - Kinh nghiệm, kiến thức phân tích cơ bản & kỹ thuật thị trường ngoại hối Forex, Vàng phái sinh. Hướng dẫn lập trình robot tự động giao dịch.'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
