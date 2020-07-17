import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { SearchService } from '../services/search.service';
import { ProductsService } from '../services/products.service';
import { ModalService } from '../services/modal.service';
import { ProductModel } from '../models/product';
import { GenericModalComponent } from '../modals/generic-modal/generic-modal.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);

  public View: GenericModalComponent;

  searchTxt: string;

  // @ViewChild(FilterInputComponent) child;

  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService,
    private readonly productService: ProductsService,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.cartService.getCartsItems();
    this.cartService.initItemTotal();
    // this.productService.suggestiveSelling();

    this.cartService.cartItems.subscribe((items: ProductModel[]) => {
      this.cartItems.next(items);
    });

    this.searchService.txtStr.subscribe((str) => {
      this.searchTxt = str;
    });
  }

  // TODO: evaluate repeated calls performance and strategy
  openProductModal() {
    this.modalService.title.next('Select Products');
    this.productService.getProducts();
    this.configureModal();
  }

  /*  openPdpModal() {
    // this.modalService.createModal('Product', this.View);
    // this.productService.getProducts();
    // this.configureModal();
  } */

  // TODO: Rework
  configureModal() {
    this.modalService.title.next('Select Products');
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
