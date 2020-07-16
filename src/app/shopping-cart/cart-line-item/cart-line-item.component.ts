import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
})
export class CartLineItemComponent implements OnInit {
  @Input() cartItem: ProductModel; // new BehaviorSubject<ProductModel[]>([]);

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: ShoppingCartService
  ) { }

  ngOnInit(): void {
    this.cartService.initItemTotal();
  }

  /*  calcTotal() {
    if (this.cartItem.value.qty * this.cartItem.value.price.unitPrice < 1) {
      this.itemTotal = this.cartItem.value.price.unitPrice;
    } else {
      this.itemTotal = this.cartItem.value.qty * this.cartItem.value.price.unitPrice;
    }
  } */

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.productService.removeFromSelectedProducts(item);
  }

  // TODO: totals modal but not in shopping cart
  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    // use cartService
    this.cartService.softUpdateItemTotal(item, newQty);
    item.qty = newQty;
    // this.filterOnUpdateQty(newQty, item);
  }

}
