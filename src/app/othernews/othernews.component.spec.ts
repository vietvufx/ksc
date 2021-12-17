import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthernewsComponent } from './othernews.component';

describe('OthernewsComponent', () => {
  let component: OthernewsComponent;
  let fixture: ComponentFixture<OthernewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthernewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OthernewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
