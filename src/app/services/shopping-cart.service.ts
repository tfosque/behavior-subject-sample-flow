import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { AlertService } from './alert.service';
import { union, uniq } from 'lodash';
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  public cartItems = new BehaviorSubject<ProductModel[]>([]);
  public SUBTOTAL = new BehaviorSubject<number>(0);
  public ITEM_TOTAL = new BehaviorSubject<number>(0);

  public updateBtnEmphasis = new BehaviorSubject<string>('');
  public defaultQtyState = new BehaviorSubject<any>({});
  public COMPAREQTYSTATE = new BehaviorSubject<any>({});
  public QtyState = new BehaviorSubject<boolean>(true);

  constructor(
    private readonly alertService: AlertService,
    ) {}

  getCartsItems(): void {
    const localCart = JSON.parse(localStorage.getItem('shoppingCart'));
    this.cartItems.next(localCart);
  }

  onUpdateBtnEmphasis(emphasis: string): void {
    // build the defaultQty state, {first: true, emphasis: { startValue: emphasis, currValue: currentValue }}
    this.updateBtnEmphasis.next(emphasis);
  }

  compareQtyState(): void {
    // compare qty state vs currState
    const compareState: any = [];

    this.cartItems.value.map(m => {
      compareState.push({ first: false, defaultQty: m.qty, currentQty:  m.qty});
   });
    this.COMPAREQTYSTATE.next(compareState);
    // console.log({compareState});
    // console.log('default:', this.defaultQtyState.value);
  }

  // default qty state (defaultQtyState)
  getDefaultQtyState(): void {
    const defaultState: any = [];

    this.cartItems.value.map(m => {
      defaultState.push({ first: true, defaultQty: m.qty, currentQty:  m.qty});
    });
    this.defaultQtyState.next(defaultState);
    console.log({defaultState});
  }

  // pertains to qty increments
  softUpdateItemTotal(item: any, newQty: number): void {
    console.log({item}, {newQty});

    this.cartItems.value.filter((f: any) => {
      if (f.id === item.id) {
        // update global(in-memory) observable
        // result has to be larger than 0;
        // here we insert the new ('newQty')
        if (newQty * item.price.unitPrice > 0) {
          f.total = newQty * item.price.unitPrice;
          this.addSubtotal();
          // console.log('f.total=', f.total);
          // console.log('subtotal', this.addSubtotal());
        } else {
          // equals zero
          f.total = 0;
          f.iconColor = 'text-danger';
          this.addSubtotal();
          // console.log('prepare:', this.cartItems.value, {f});
          // this.cartItems.next(this.cartItems.value);

        }
      }
    });
  }

  initItemTotal(): void {

    this.cartItems.value.filter((f: any) => {
      // result has to be larger than 0;
      if (f.qty < 1) {
        f.total = 0;
        f.iconColor = 'text-danger';
      }
      if (f.qty >= 1) {
        f.total = f.qty * f.price.unitPrice;

        const nextItem = union(this.cartItems.value.concat(f));
        this.cartItems.next(nextItem);
        // remove iconColor
        f.iconColor = 'text-secondary';
        this.addSubtotal();
      }
    });
  }

  hardUpdateCart(items: ProductModel[]): void {
    // console.log({items})
    localStorage.setItem('shoppingCart', JSON.stringify(this.cartItems.value));
  }

  // TODO: test adding single vs multiple !important
  addMultipleItems(items: ProductModel[]): void {
    console.log({items});

    const uniqItems = uniq(items);
    console.log({uniqItems});

    this.cartItems.next(uniqItems);
    this.hardUpdateCart(uniqItems);
    this.addSubtotal();

    // send user notificatioin
    this.alertService.send(
      `${items.length} items were added to the cart`,
      'success',
      items,
      0
    );
    // TODO: How to return 200 from observable !important
  }

  addProductsToCart(items: ProductModel[]): void {
    const getLocalStorageCart = JSON.parse(
      localStorage.getItem('shoppingCart')
    );

  }

  // TODO: update order summary when qty changes
  addSubtotal() {
    /* Add total unitPrice of all items */

    if (this.cartItems.value.length < 1) {
      return false;
    } else {
      let total = 0;

      setTimeout(() => {
        // console.log('value', this.cartItems.value, typeof this.cartItems.value);

        this.cartItems.value.map((m) => {
          // console.log({m});
          if (m.qty === 0) {
            total = total;
          } else {
            total = total + m.total;
          }
        });
        // console.log({total});
        this.SUBTOTAL.next(total);
      }, 1000);

    }
  }

  /* Delete CartItems */
  deleteItem(item: any) {
    // TODO: user prompt
    // on page reload detect if items need to be saved, if so display user prompt

    const results = this.deleteFilter(this.cartItems.value, item.id);
    // delete from shopping-cart Observable
    // delete from localDb - shoppingCart ;

    // update cartItems // TODO: Remove timeout and use observable
    setTimeout(() => {
      // update localDb
      this.cartItems.next(results);
      this.addSubtotal();
      // TODO: Observable
      setTimeout(() => {
        localStorage.setItem('shoppingCart', JSON.stringify(results));
      }, 1200);
    }, 1000);
  }

  /* Helper Functions */
  deleteFilter(items: any, key: number) {
    return items.filter((f: any) => {
      return f.id !== key;
    });
  }
}
