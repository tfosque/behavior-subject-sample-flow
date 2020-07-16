import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { AlertService } from './alert.service';
import { uniq, union } from 'lodash';
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

  softUpdateItemTotal(item: any, qty: number): void {
    // console.log('beginning of update.....');

    this.cartItems.value.filter((f: any) => {
      // console.log('f:', f);

      if (f.id === item.id) {
        // mutate global observable
        // this.cartItems.next(this.cartItems.value.concat(f))

        // result has to be larger than 0;
        if (item.qty * item.price.unitPrice > 0) {
          f.total = item.qty * item.price.unitPrice;
          const nextItem = union(this.cartItems.value.concat(f));
          // this.cartItems.next(nextItem);

          // this.subtotal();
          // console.log('eq:f:total', item.qty * item.price.unitPrice);
          return;
        } else {
          f.total = item.price.unitPrice;
        }
      }
    });
  }

  initItemTotal() {
    this.cartItems.value.filter((f: any) => {
      console.log('f:', f);
      // mutate global observable
      // this.cartItems.next(this.cartItems.value.concat(f))

      // result has to be larger than 0;
      if (f.qty * f.price.unitPrice > 0) {
        f.total = f.qty * f.price.unitPrice;
        const nextItem = union(this.cartItems.value.concat(f));
        this.cartItems.next(nextItem);

        // this.subtotal();
        console.log('eq:f:total', f.qty * f.price.unitPrice);
        return;
      } else {
        f.total = f.price.unitPrice;
      }
    });
  }

  /* Add CartItems */
  addItem(item: ProductModel) {
    this.cartItems.next({ ...this.cartItems.value, ...item });
  }

  // TODO: test adding single vs multiple !important
  addMultipleItems(items: ProductModel[]) {
    const getLocalStorageCart = JSON.parse(
      localStorage.getItem('shoppingCart')
    );
    // console.log({getLocalStorageCart})

    const update = getLocalStorageCart.concat(items);
    // console.log('concat::::::', update);

    this.cartItems.next(update);
    // console.log('cartItems:from"shopCart', this.cartItems.value);

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
    return items.length > 1;
  }

  // TODO: update order summary when qty changes
  subtotal() {
    /* Add all items */
    let total = 0;

    this.cartItems.value.map((m) => {
      total = total + m.total;
    });
    this.SUBTOTAL.next(total);
    console.log({ total });
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
