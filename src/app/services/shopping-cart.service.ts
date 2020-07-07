import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/shopping-cart-model';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // Store Items
  public cartItems = new BehaviorSubject<CartItem[]>([]);

  private apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: LocalStorageService,
    private readonly alertService: AlertService
  ) {
    this.storageService.LOC_DATA.subscribe(res => {
      this.cartItems.next(res);
    });
  }

  getCartsItems() {
    return this.cartItems.value;
  }

  /* Add Product Button */
  addItem() {
    console.log('add item');
  }

  deleteItem(id: number) {
    const result = this.filter(this.cartItems.value, id);

    // delete fro db
    localStorage.setItem('localDb', JSON.stringify(result));

    // update cartItems
    setTimeout(() => {
      this.cartItems.next(result);
      // need to return true;
    }, 1000);

    // msg service
    const alertStr = 'Cart Item was deleted successfully';
    this.alertService.send(alertStr, 'success');
  }



  // Helpers
  filter(items, key = 1) {
    const myFilter = items.filter(f => {
      return f.id !== key;
    });
    return myFilter;
  }

}



