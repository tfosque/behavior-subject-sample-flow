import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  public currStorage = JSON.parse(localStorage.getItem('localDb'));

  constructor(private readonly http: HttpClient) { }

  /*   configDb() {
      const stor = JSON.parse(localStorage.getItem('localDbConfig'));
      const configValue = stor.configured;
      console.log({ configValue });

      if (configValue) {
        return;
      }

      // set config
      let localDbConfig: Config;

      const storagetype = 'local';
      const datatype = 'json';
      const msg = 'Welcome to localDb (Fake Data Persistence)';
      const configured = true;

      localDbConfig = { storagetype, datatype, msg, configured };
      // this.setConfiguration(localDbConfig);
      return localDbConfig;
    } */

  // Configuration
setConfiguration(localDbConfig: any): any {
    localStorage.setItem('localDbConfig', JSON.stringify(localDbConfig));
  }

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
          this.initLocalDb();
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

initLocalDb() {
    this.http.get(this.apiBaseUrl).subscribe((data) => {
      // console.log({ data });
      this.LOC_DATA.next(data);
      localStorage.setItem('localDb', JSON.stringify(data));
    });
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

  /*  emptyDbAction(exit: boolean) {
     if db is empty send developer a message to continue with empty data or fetch fresh data;
     const msg = prompt(`Your localDb size is - ${this.localDbSize()}`, 'Hello');
   } */
}
