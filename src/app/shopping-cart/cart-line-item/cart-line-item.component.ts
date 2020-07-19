import { Component, OnInit, Input, ViewChild } from '@angular/core';
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
  @Input() cartItem: ProductModel;
  public deleteIconAlert = false;

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: ShoppingCartService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.cartService.initItemTotal();
    this.detectQty();
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
    // TODO: ?? use cartService TODO: add the iconColor here ???

    this.cartService.softUpdateItemTotal(item, newQty);
    item.qty = newQty;
    this.detectQty();
  }

  detectQty() {
    const hasZeroQty =
      this.cartItem.qty === 0 && this.cartItem.iconColor === 'text-danger';
    hasZeroQty ? (this.deleteIconAlert = true) : (this.deleteIconAlert = false);
    console.log({ hasZeroQty });
  }
}
