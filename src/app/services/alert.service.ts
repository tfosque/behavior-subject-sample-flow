import { Injectable } from '@angular/core';
import { Alert } from '../models/alert';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public alertStatus = new BehaviorSubject<Alert>(null);
  public alert = new BehaviorSubject<Alert>({
    msg: '',
    status: 'info',
    token: {},
    currNow: 0,
  });

  constructor() {}

  // Custom Definitions

  // SEND: icoming message
  send(msg: string, status: string, token: any, currNow?: number): void {
    // this.alertStatus.next({ msg, status, token, currNow });
    this.alert.next({ msg, status, token, currNow });
    console.log('alertService:send:', this.alert.value);
  }

  dismiss(token: any) {
    // console.log('dismiss', {token});
  }

  timer() {}
}
