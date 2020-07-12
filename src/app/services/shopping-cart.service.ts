import { Injectable, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// import { AlertService } from './alert.service';
import { CartItem } from '../models/shopping-cart-model';
import { ProductsService } from './products.service';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public cartItems = new BehaviorSubject<ProductModel[]>([]);

  constructor() { }

  getCartsItems() {
    return this.cartItems;
  }

  /* Add CartItems */
  addItem(item: ProductModel) {
    this.cartItems.next({...this.cartItems.value, ...item});
    console.log('add item');
  }

  addMultipleItems(items: ProductModel[]) {
    // this.cartItems.next({...this.cartItems.value, ...items});
    this.cartItems.next(items);
    console.log('addMultiplItems:...', {...this.cartItems.value, ...items});
  }

  /* Delete CartItems */
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


  /* Helper Functions */
  deleteFilter(items: any, key: number) {
    return items.filter((f: any) => {
      return f.id !== key;
    });
  }

}



