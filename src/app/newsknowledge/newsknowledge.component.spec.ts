import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsknowledgeComponent } from './newsknowledge.component';

describe('NewsknowledgeComponent', () => {
  let component: NewsknowledgeComponent;
  let fixture: ComponentFixture<NewsknowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsknowledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
