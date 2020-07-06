import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  public cart = new BehaviorSubject<CartItem[]>([]);

  constructor(private readonly cartService: ShoppingCartService) { }

  ngOnInit(): void {
    this.cartService.getCartsItems();

    this.cartService.cartItems.subscribe((items: CartItem[]) => {
      this.cart.next(items);
    });
  }

}
