import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeKSCComponent } from './about-me-ksc.component';

describe('AboutMeKSCComponent', () => {
  let component: AboutMeKSCComponent;
  let fixture: ComponentFixture<AboutMeKSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeKSCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeKSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
