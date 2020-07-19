import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-list-of-selected-products',
  templateUrl: './list-of-selected-products.component.html',
  styleUrls: ['./list-of-selected-products.component.scss'],
})
export class ListOfSelectedProductsComponent implements OnInit {
  public selectedProducts$ = new BehaviorSubject<ProductModel[]>([]);

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: ShoppingCartService
    ) { }

  ngOnInit(): void {
    this.productService.selectedProducts$.subscribe((selectedProducts) => {
      this.selectedProducts$.next(selectedProducts);
    });
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.cartService.deleteItem(item);
  }

  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    item.qty = newQty;
  }
}
