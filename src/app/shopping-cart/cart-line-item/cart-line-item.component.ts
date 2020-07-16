import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
})
export class CartLineItemComponent implements OnInit {
  @Input() cartItem: ProductModel; // new BehaviorSubject<ProductModel[]>([]);

  constructor(
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void { }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.productService.removeFromSelectedProducts(item);
  }

  // TODO: Qty updates in products selection modal but not in shopping cart
  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    item.qty = newQty;
    // this.filterOnUpdateQty(newQty, item);
  }

}
