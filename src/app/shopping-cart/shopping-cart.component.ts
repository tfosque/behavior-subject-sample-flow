import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { FilterInputComponent } from '../shared-components/filter-input/filter-input/filter-input.component';
import { SearchService } from '../services/search.service';
import { ProductsService } from '../services/products.service';
import { ModalService } from '../services/modal.service';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);

  searchTxt: string;

  // @ViewChild(FilterInputComponent) child;

  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService,
    private readonly productService: ProductsService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.cartService.getCartsItems();
    // this.productService.suggestiveSelling();

    this.cartService.cartItems.subscribe((items: ProductModel[]) => {
      this.cartItems.next(items);
    });

    this.searchService.txtStr.subscribe(str => {
      this.searchTxt = str;
    });
  }

  // TODO: evaluate repeated calls performance and strategy
  openProductModal() {
    this.modalService.title.next('Select Products');
    this.productService.getProducts();
    this.configureModal();
  }

  configureModal() {
    this.modalService.title.next('Select Products');
  }

  deleteItem(item: any) {
    alert(`Are you sure you want to delete item #${item.details.productId} : ${item.details.itemOrProductDescription}.`);
    this.cartService.deleteItem(item.id);
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

