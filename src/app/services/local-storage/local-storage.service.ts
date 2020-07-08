import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { size } from 'lodash';

interface Config {
  storagetype: string;
  datatype: string;
  msg: string;
  configured: boolean;
}

/* enum Storage_Type {
  local = 'local',
  session = 'session'
}

enum Data_Type {
  json = 'json',
  xml = 'xml'
} */

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  public LOC_DATA = new BehaviorSubject<any>([]);
  public currStorage = JSON.parse(localStorage.getItem('localDb'));

  constructor(
    private readonly http: HttpClient,
  ) { }

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
    // only configure if db is empty
    console.log('equation:', this.locDbExist() && this.localDbSize() > 0);

    console.log('LOC_DATA:OBSERVABLE', this.LOC_DATA);
    console.log('currStorage:ARRAY[]', this.currStorage);

    if (this.locDbExist() && this.localDbSize() > 0) {
      this.LOC_DATA.next(this.currStorage);
      setTimeout(() => {
        console.log('LOC_DATA:OBSERVABLE', this.LOC_DATA);
      }, 1000);
    }

    // TODO: test for better implementation
    if (this.locDbExist() && this.localDbSize() < 1) {
      this.initLocalDb();
    }
  }

  localDbSize(): any {
    // this will produce an error if localDb does not exist
    const storage = this.currStorage;
    const chkSize = size(storage);
    console.log({ chkSize });
    return chkSize;
  }

  initLocalDb() {
    this.http.get(this.apiBaseUrl)
      .subscribe(data => {
        // console.log({ data });
        this.LOC_DATA.next(data);
        localStorage.setItem('localDb', JSON.stringify(data));
      });
      // TODO: Remove timeout and replace with observable
    setTimeout(() => {
      console.log('98:currStorage', this.currStorage);
    }, 3000);
  }

  locDbExist() {
    const evalDb = this.currStorage;
    return evalDb;
  }

  /*  emptyDbAction(exit: boolean) {
     if db is empty send developer a message to continue with empty data or fetch fresh data;
     const msg = prompt(`Your localDb size is - ${this.localDbSize()}`, 'Hello');
   } */

}
