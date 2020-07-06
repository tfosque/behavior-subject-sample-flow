import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // Store Items
  public cartItems = new BehaviorSubject<CartItem[]>([]);

  private apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(private readonly http: HttpClient) { }

  getCartsItems(): void {
    this.http.get(this.apiBaseUrl)
      .subscribe((data: CartItem[]) => {
        this.cartItems.next(data);
        // console.log({data});
      });
  }

  /* Add Product Button */
  addSingleItemToCart() {
    console.log('add item');
  }
}
