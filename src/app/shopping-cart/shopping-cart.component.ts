import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';
import { FilterInputComponent } from '../shared-components/filter-input/filter-input/filter-input.component';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public cart = new BehaviorSubject<CartItem[]>([]);

  searchTxt: string;

  @ViewChild(FilterInputComponent) child;

  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((items: CartItem[]) => {
      this.cart.next(items);
    });

    this.searchService.txtStr.subscribe(str => {
      this.searchTxt = str;
    });
  }

  deleteItem(item: any) {
    // console.log('del:item', {item});
    alert(`Are you sure you want to delete item #${item.details.productId} : ${item.details.itemOrProductDescription}.`);
    this.cartService.deleteItem(item.id);
  }

}

