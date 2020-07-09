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

  // Incoming message
  send(msg: string, status: string, token: any, currNow?: number): void {
    this.alertStatus.next({ msg, status, token, currNow });
    // console.log('alertService:Receive:', {msg}, {token}, this.alertStatus.value);
  }

  dismiss(token: any) {
    // console.log('dismiss', {token});
  }

  timer() {
  }
}
