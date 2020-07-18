import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { AlertService } from './alert.service';
import { union } from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);
  public SUBTOTAL = new BehaviorSubject<number>(0);
  public ITEM_TOTAL = new BehaviorSubject<number>(0);

  constructor(private readonly alertService: AlertService) {}

  getCartsItems(): void {
    const localCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.cartItems.next(localCart);
  }

  softUpdateItemTotal(item: any, newQty: number): void {
    this.cartItems.value.filter((f: any) => {
      if (f.id === item.id) {
        // mutate global observable
        // result has to be larger than 0;
        // here we insert the new ('newQty')
        if (newQty * item.price.unitPrice > 0) {
          f.total = newQty * item.price.unitPrice;
          this.subtotal();
        }
      }
    });
  }

  initItemTotal() {
    this.cartItems.value.filter((f: any) => {
      // result has to be larger than 0;
      if (f.qty < 1) {
        f.total = 0;
      }
      if (f.qty >= 1) {
        f.total = f.qty * f.price.unitPrice;
        const nextItem = union(this.cartItems.value.concat(f));
        this.cartItems.next(nextItem);
        this.subtotal();
      }
    });
  }

  hardUpdateCart(items: ProductModel[]) {
    // console.log({items})
    localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems.value));
  }

  // TODO: test adding single vs multiple !important
  addMultipleItems(items: ProductModel[]): void {
    const getLocalStorageCart = JSON.parse(
      localStorage.getItem('shoppingCart')
    );

    const update = getLocalStorageCart.concat(items);

    this.cartItems.next(update);

    localStorage.setItem('shoppingCart', JSON.stringify(update));

    this.subtotal();

    // send user notificatioin
    this.alertService.send(
      `${items.length} items were added to the cart`,
      'success',
      items,
      0
    );
    // TODO: How to return 200 from observable !important
  }

  // TODO: update order summary when qty changes
  subtotal() {
    /* Add total unitPrice of all items */
    let total = 0;

    setTimeout(() => {
      this.cartItems.value.map((m) => {
        if (m.qty === 0) {
          total = total;
        } else {
          total = total + m.total;
        }
      });
      this.SUBTOTAL.next(total);
    }, 500);
  }

  /* Delete CartItems */
  deleteItem(key: any) {
    const results = this.deleteFilter(this.cartItems.value, key);

    // delete from shopping-cart
    // - no need to delete from localDb -:localStorage.setItem('localDb', JSON.stringify(results));
    // update cartItems // TODO: Remove timeout and use observable
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
