import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsreviewComponent } from './newsreview.component';

describe('NewsreviewComponent', () => {
  let component: NewsreviewComponent;
  let fixture: ComponentFixture<NewsreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
