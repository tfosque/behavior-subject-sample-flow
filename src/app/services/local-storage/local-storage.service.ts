import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { size } from 'lodash';

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

  public LOC_DATA = new BehaviorSubject<any>([]);
  public currStorage = JSON.parse(localStorage.getItem('products'));

  public products = JSON.parse(localStorage.getItem('products'));
  public shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));

  constructor(private readonly http: HttpClient) { }

  /**
   * Check Local Storage to see if data exist (and if storage space is available 5MB max)
   */
  startLocalDb(): void {
    // Scan for localDb..
    if (this.currStorage) {
      console.log('localDb is live!', this.currStorage);
      console.groupEnd();
      console.log('localDb logs:', 'completed');
      setTimeout(() => {
        this.LOC_DATA.next(this.currStorage);
      }, 1000);
      return;
    }
    if (!this.currStorage) {
      console.log('No localDb found');
      this.initLocalProductsDb().subscribe(sub => {
        this.initLocalShoppingCartDb();
      });

      return;
    }

    console.group('Application Logs');
    console.groupEnd();
  }

  localDbSize(): any {
    // this will produce an error if localDb does not exist
    const storage = this.currStorage;
    const chkSize = size(storage);
    return chkSize;
  }

  initLocalProductsDb(): Observable<any> {
    this.http.get(this.apiBaseUrl).subscribe((data) => {
      // console.log({ data });
      // this.LOC_DATA.next(data);
      localStorage.setItem('products', JSON.stringify(data));
      // return data;
    });
    return;
  }
  initLocalShoppingCartDb() {
    localStorage.setItem('shooppingCart', JSON.stringify([]));
  }

  /**
   * Returns the total amount of disk space used (in MB) by localStorage for the current domain.
   */
  getLocalStorage() {
    let total = 0;
    // tslint:disable-next-line: forin
    for (let x in localStorage) {
      // Value is multiplied by 2 due to data being stored in `utf-16` format, which requires twice the space.
      const amount = (localStorage[x].length * 2) / 1024 / 1024;
      // console.log({amount});

      total += amount;
    }
    return total.toFixed(2);
  }

}
