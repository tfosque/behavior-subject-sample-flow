import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AlertService } from './alert.service';
import { CartItem } from '../models/shopping-cart-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  // Store Items
  // public cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems = new BehaviorSubject<CartItem[]>([]);
  // public xItems = new BehaviorSubject<any>(this.storageService.LOC_DATA.subscribe(res => res));

  private apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: LocalStorageService,
    private readonly alertService: AlertService
  ) {
    this.storageService.LOC_DATA.subscribe(res => {
      this.cartItems.next(res);
    });

    /* this.xItems.subscribe(s => {
      this.xItems.next(s);
      console.log('ss::', s.value);
    }); */

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

    // update cartItems TODO: Remove timeout and use observable
    setTimeout(() => {
      this.storageService.LOC_DATA.next(result);

      // msg service
      const alertStr = 'Cart Item was deleted successfully';
      this.alertService.send(alertStr, 'success');
    }, 1000);


  }



  // Helpers
  filter(items, key = 1) {
    const myFilter = items.filter(f => {
      return f.id !== key;
    });
    return myFilter;
  }

}



