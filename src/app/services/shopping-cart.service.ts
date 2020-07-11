import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage/local-storage.service';
// import { AlertService } from './alert.service';
import { CartItem } from '../models/shopping-cart-model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartItems = new BehaviorSubject<CartItem[]>([]);

  constructor() {
    /* this.storageService.LOC_DATA.subscribe(res => {
      this.cartItems.next(res);
    }); */
  }

  getCartsItems() {
    return this.cartItems.value;
  }

  /* Add Product Button */
  addItem() {
    console.log('add item');
  }

  deleteItem(key: any) {
    const results = this.deleteFilter(this.cartItems.value, key);

    // delete from db
    localStorage.setItem('localDb', JSON.stringify(results));

    // update cartItems TODO: Remove timeout and use observable
    setTimeout(() => {
      // update localDb
      this.cartItems.next(results);
    }, 1000);

  }


  // Helpers
  deleteFilter(items: any, key: number) {
    // console.log({items}, {key});

    return items.filter((f: any) => {
      return f.id !== key;
    });
  }

}



