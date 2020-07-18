import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-cart-line-item',
  templateUrl: './cart-line-item.component.html',
  styleUrls: ['./cart-line-item.component.scss']
})
export class CartLineItemComponent implements OnInit {
  // @ViewChild('content') content: HTMLElement;

  @Input() cartItem: ProductModel; // new BehaviorSubject<ProductModel[]>([]);

  constructor(
    private readonly productService: ProductsService,
    private readonly cartService: ShoppingCartService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.cartService.initItemTotal();
  }

  sendModalContent() {
    console.log('Sending....');
    this.modalService.createModal('Product Page', this.cartItem);
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.productService.removeFromSelectedProducts(item);
  }

  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    // use cartService
    this.cartService.softUpdateItemTotal(item, newQty);
    item.qty = newQty;
  }

}
