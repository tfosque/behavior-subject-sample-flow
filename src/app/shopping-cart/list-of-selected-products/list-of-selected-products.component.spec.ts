import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfSelectedProductsComponent } from './list-of-selected-products.component';

describe('ListOfSelectedProductsComponent', () => {
  let component: ListOfSelectedProductsComponent;
  let fixture: ComponentFixture<ListOfSelectedProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfSelectedProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfSelectedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
