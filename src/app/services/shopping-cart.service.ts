import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);

  constructor(private readonly alertService: AlertService) {}

  getCartsItems() {
    return this.cartItems;
  }

  /* Add CartItems */
  addItem(item: ProductModel) {
    this.cartItems.next({ ...this.cartItems.value, ...item });
  }

  // TODO: test adding single vs multiple !important
  addMultipleItems(items: ProductModel[]) {
    this.cartItems.next(items);

    // send user notificatioin
    this.alertService.send(
      `${items.length} items were added to the cart`,
      'success',
      items,
      0
    );

    // TODO: How to return 200 from observable !important
    return items.length > 1;
  }

  /* Delete CartItems */
  deleteItem(key: any) {
    const results = this.deleteFilter(this.cartItems.value, key);

    // delete from shopping-cart
    // - no need to delete from localDb -:localStorage.setItem('localDb', JSON.stringify(results));
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
