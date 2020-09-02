import { CartItem } from './../../models/cart-item';
import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss'],
})
export class CartLineItemComponent implements OnInit {
  // @Input() cartItem = new BehaviorSubject<CartItem>({id: 0, price: {unitPrice: 0, uom: ''}});
  @Input() cartItem: CartItem;
  cartItem$ = this.cartItem;
  public deleteIconAlert = false;

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: ShoppingCartService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.cartService.initItemTotal();
    this.detectQty();
    this.cartItem$ = this.cartItem;
  }

  sendModalContent() {
    this.modalService.createModal('Product Page', this.cartItem);
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.cartService.deleteItem(item);
  }

  // TODO: update globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    console.log({item});

    // TODO: ?? use cartService TODO: add the iconColor here ???
    if (item) {
      console.log('empty:::::::');
    }
    this.cartService.softUpdateItemTotal(item, newQty);
    item.qty = newQty;
    this.detectQty();
  }

  detectQty() {
    // const hasZeroQty =
     // this.cartItem.qty === 0 && this.cartItem.iconColor === 'text-danger';
    // hasZeroQty ? (this.deleteIconAlert = true) : (this.deleteIconAlert = false);
    // console.log({ hasZeroQty });
  }
}
