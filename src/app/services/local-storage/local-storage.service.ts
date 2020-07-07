import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

interface Config {
  storagetype: string;
  datatype: string;
  msg: string;
  configured: boolean;
}

enum Storage_Type {
  local = 'local',
  session = 'session'
}

enum Data_Type {
  json = 'json',
  xml = 'xml'
}

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

  configDb() {
    const stor = JSON.parse(localStorage.getItem('localDbConfig'));
    const configValue = stor.configured;
    console.log({ configValue });

    if (configValue) {
      // this.hasLocalData();
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
  }


  // Configuration
  setConfiguration(localDbConfig: any): any {
    localStorage.setItem('localDbConfig', JSON.stringify(localDbConfig));
  }

  /**
   * Check Local Storage to see if data exist (and if storage space is available 5MB max)
   */
  startLocalDb() {
    // only configure if db is empty
    if (this.locDbExist()) {
      console.log('localDb successfully started....', this.currStorage);
      this.LOC_DATA.next(this.currStorage);
    } else {
      console.log('No Db was found Initializing localDb....');
      this.initLocalDb();
    }
  }

  localDbSize() {
    // this will produce an error if localDb does not exist
    const storage = JSON.parse(localStorage.localDb);
    const chkSize = storage.db.length;
    console.log({ chkSize });
    return chkSize;
  }

  initLocalDb() {
    console.log('init:LOC:DATA');

    this.http.get(this.apiBaseUrl)
      .subscribe(data => {
        console.log({ data });
        this.LOC_DATA.next(data);
        localStorage.setItem('localDb', JSON.stringify(data));
      });

    setTimeout(() => {
      console.log('timeout:loc:data', this.LOC_DATA);
    }, 2000);
  }

  locDbExist() {
    const evalDb = JSON.parse(localStorage.getItem('localDb'));
    return evalDb;
  }

  emptyDbAction(exit: boolean) {
    // if db is empty send developer a message to continue with empty data or fetch fresh data;
    // const msg = prompt(`Your localDb size is - ${this.localDbSize()}`, 'Hello');
  }

}
