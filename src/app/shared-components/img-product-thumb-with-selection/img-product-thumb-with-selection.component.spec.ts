import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgProductThumbWithSelectionComponent } from './img-product-thumb-with-selection.component';

describe('ImgProductThumbWithSelectionComponent', () => {
  let component: ImgProductThumbWithSelectionComponent;
  let fixture: ComponentFixture<ImgProductThumbWithSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgProductThumbWithSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgProductThumbWithSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
