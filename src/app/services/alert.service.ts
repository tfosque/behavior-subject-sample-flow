import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public alertStatus = new BehaviorSubject<Alert>(null);

  constructor() { }


  // Custom Definitions
  // default status

  send(msg: string, status: string): void {
    this.alertStatus.next({ msg, status });
    // console.log('alertService:', this.alertStatus.value);
  }

  timer() {
  }
}
