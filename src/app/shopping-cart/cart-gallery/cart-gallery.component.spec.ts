import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartGalleryComponent } from './cart-gallery.component';

describe('CartGalleryComponent', () => {
  let component: CartGalleryComponent;
  let fixture: ComponentFixture<CartGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
