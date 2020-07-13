import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLineItemComponent } from './cart-line-item.component';

describe('CartLineItemComponent', () => {
  let component: CartLineItemComponent;
  let fixture: ComponentFixture<CartLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
