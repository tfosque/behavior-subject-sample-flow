import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-list-of-selected-products',
  templateUrl: './list-of-selected-products.component.html',
  styleUrls: ['./list-of-selected-products.component.scss'],
})
export class ListOfSelectedProductsComponent implements OnInit {
  public selectedProducts$ = new BehaviorSubject<ProductModel[]>([]);

  constructor(private readonly productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.selectedProducts$.subscribe((selectedProducts) => {
      this.selectedProducts$.next(selectedProducts);
    });
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.productService.removeFromSelectedProducts(item);
  }

  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    item.qty = newQty;
  }
}
