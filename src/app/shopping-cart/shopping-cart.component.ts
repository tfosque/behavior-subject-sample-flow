import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';
import { FilterInputComponent } from '../shared-components/filter-input/filter-input/filter-input.component';
import { SearchService } from '../services/search.service';
import { ProductsService } from '../services/products.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public cartItems = new BehaviorSubject<CartItem[]>([]);

  searchTxt: string;

  @ViewChild(FilterInputComponent) child;

  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService,
    private readonly productService: ProductsService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((items: CartItem[]) => {
      this.cartItems.next(items);
    });

    this.searchService.txtStr.subscribe(str => {
      this.searchTxt = str;
    });
  }

  fetchProducts() {
    this.modalService.title.next('Select a Product');
    this.productService.getProducts();
  }

  deleteItem(item: any) {
    // console.log('del:item', {item});
    alert(`Are you sure you want to delete item #${item.details.productId} : ${item.details.itemOrProductDescription}.`);
    this.cartService.deleteItem(item.id);
  }

}

