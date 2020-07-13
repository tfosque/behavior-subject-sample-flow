import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
})
export class CartLineItemComponent implements OnInit {
  @Input() cartItem: ProductModel; // new BehaviorSubject<ProductModel[]>([]);

  constructor() { }

  ngOnInit(): void {
    // console.log('abcTTT:cartItem:from:shopping', this.cartItem.details);
  }

  updateQty(event: number, item: ProductModel) {
    //
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    //
  }

}

/* details:
{ itemOrProductDescription: '',
  catalogRefId: '',
  productId: '',
  commerceId: ''
},
price: {
unitPrice: 0,
uom: ''
},
qty: 0,
total: 0,
product: ''
} */
