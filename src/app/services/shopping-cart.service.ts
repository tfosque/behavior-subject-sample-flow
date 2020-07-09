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

  deleteItem(key: any) {
    const results = this.deleteFilter(this.cartItems.value, key);
    // console.log({key});
    // console.log({results});


    // delete from db
    localStorage.setItem('localDb', JSON.stringify(results));

    // update cartItems TODO: Remove timeout and use observable
    setTimeout(() => {
      // update localDb
      this.storageService.LOC_DATA.next(results);

      // send msg to alert service (200)
      // const alertMsg = `Cart Item ${ result.details.productId } was deleted successfully`;
      // this.alertService.send(alertMsg, 'success', result.id, result);
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



