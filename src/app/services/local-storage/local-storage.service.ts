import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { size } from 'lodash';
import { ProductModel } from 'src/app/models/product';
import { ProductsService } from '../products.service';

interface Config {
  storagetype: Storage;
  datatype: Data_Type;
  msg: string;
  configured: boolean;
}

enum Storage {
  local,
  session
}

enum Data_Type {
  json = 'json',
  xml = 'xml'
}

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  // public LOC_DATA = new BehaviorSubject<any>([]);

  public PRODUCTS = new BehaviorSubject<ProductModel[]>([]);
  public SHOPPING_CART = new BehaviorSubject<ProductModel[]>([]);

  // delete ???
  public currStorage = JSON.parse(localStorage.getItem('products'));

  private products = JSON.parse(localStorage.getItem('products'));
  private shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

  constructor(private readonly http: HttpClient) { }

  /**
   * Check Local Storage to see if data exist (and if storage space is available 5MB max)
   */
    // Scan for localDbs..
  startLocalDb(): void {

      /* init SHOPPING_CART */
    if (this.shoppingCart) {
      console.log('localDb:ShoppingCart is live!', this.shoppingCart);
      console.groupEnd();
      setTimeout(() => {
        this.SHOPPING_CART.next(JSON.parse(localStorage.getItem(JSON.stringify('shopping-cart'))));
      }, 1000);
      // return;
    }
    if (!this.shoppingCart) {
      console.log('No shoppingCart found');
      this.initLocalShoppingCartDb();
      // return;
    }

    /* init PRODUCTS */
    if (this.products) {
      console.log('localDb:Products is live!', this.products);
      console.groupEnd();
      console.log('localDb logs:', 'completed');
      setTimeout(() => {
        this.PRODUCTS.next(this.currStorage);

      }, 1000);
      // return;
    }
    if (!this.products) {
      console.log('No products found');
      this.initLocalProductsDb();
      // return;
    }

    console.group('Application Logs');
    console.groupEnd();
  }

  /* localDbSize(): any {
    // this will produce an error if localDb does not exist
    const storage = this.currStorage;
    const chkSize = size(storage);
    return chkSize;
  } */

  initLocalProductsDb(): void {
    this.http.get(this.apiBaseUrl).subscribe((data: ProductModel[]) => {
      this.PRODUCTS.next(data);
      localStorage.setItem('products', JSON.stringify(data));
    });
  }
  initLocalShoppingCartDb() {
    this.SHOPPING_CART.next([]);
    localStorage.setItem('shoppingCart', JSON.stringify([]));
  }

  /**
   * Returns the total amount of disk space used (in MB) by localStorage for the current domain.
   */

}
