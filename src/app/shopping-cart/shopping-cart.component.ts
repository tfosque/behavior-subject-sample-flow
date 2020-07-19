import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../services/search.service';
import { ProductsService } from '../services/products.service';
import { ModalService } from '../services/modal.service';
import { ProductModel } from '../models/product';
import { GenericModalComponent } from '../modals/generic-modal/generic-modal.component';
import { AlertService } from '../services/alert.service';
import { isEmpty } from 'lodash';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);

  public View: GenericModalComponent;

  public updateBtnEmphasis = new BehaviorSubject<string>('btn btn-secondary');

  searchTxt: string;

  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService,
    private readonly productService: ProductsService,
    private readonly modalService: ModalService,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartsItems();
    this.cartService.initItemTotal();
    // this.cartService.onUpdateBtnEmphasis('btn btn-secondary');

    const state = this.cartService.defaultQtyState.value;

    if (isEmpty(state)) {
      this.cartService.getDefaultQtyState();
      console.log('OnInit:isEmpty');
    }
    if (!isEmpty(state)) {
      this.cartService.compareQtyState();
      console.log('!isEmpty:', );
    }

    this.cartService.defaultQtyState.subscribe(State => {
      // console.log({State}, );
    });
    // console.log('getDefaultQtyState:', this.cartService.getDefaultQtyState());
    // this.productService.suggestiveSelling();

    this.cartService.cartItems.subscribe((items: ProductModel[]) => {
      this.cartItems.next(items);
    });

    this.searchService.txtStr.subscribe((str) => {
      this.searchTxt = str;
    });

    this.cartService.updateBtnEmphasis.subscribe(emphasis => {
      // console.log({emphasis});
      this.updateBtnEmphasis.next(emphasis);
    });

    // chking qty
    // console.log('curr:');
  }

  updateCart() {
    const currCart = this.cartService.cartItems.value;
    this.cartService.hardUpdateCart(currCart);
    this.alertService.send(
      'Your cart was successfully updated',
      'success',
      currCart,
      0
    );
  }

  // TODO: evaluate repeated calls performance and strategy
  createProductModal() {
    this.modalService.title.next('Select Products');
    this.productService.getProducts();
  }

  deleteItem(item: any) {
    alert(
      `Are you sure you want to delete item #${item.details.productId} : ${item.details.itemOrProductDescription}.`
    );
    this.cartService.deleteItem(item.id);
  }

  removeItemFromSelectedProducts(item: ProductModel) {
    // deleteFromSelectedProducts
    this.productService.removeFromSelectedProducts(item);
  }

  // TODO: updaate globally for shopping-cart
  updateQty(newQty: number, item: ProductModel) {
    this.cartService.softUpdateItemTotal(item, newQty);
    item.qty = newQty;
  }
}
