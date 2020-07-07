import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertStatus = new BehaviorSubject<Alert>(this.default());

  constructor() { }


  // Custom Definitions
  // default status
  default() {
    return {
      msg: '',
      status: null
    };
  }

  send(msg: string, status: string): void {
    this.alertStatus.next({ msg, status });
    console.log('alertService:', this.alertStatus.value);
  }

  timer() {
  }
}
