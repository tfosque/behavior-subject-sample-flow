import { Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';
// import { FilterInputComponent } from '../shared-components/filter-input/filter-input/filter-input.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public cart = new BehaviorSubject<CartItem[]>([]);

  // @ViewChild('FilterInputComponent') FilterInputComponent: any;
  // filterIComp: FilterInputComponent;

  constructor(private readonly cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getCartsItems();

    this.cartService.cartItems.subscribe((items: CartItem[]) => {
      this.cart.next(items);
    });

    // console.log('comp:', this.FilterInputComponent);
  }

}
