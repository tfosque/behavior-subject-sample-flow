import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Notification {
  msg: string;
  emphasis: string;
  close: boolean;
  duration?: number;
  icon?: string;
  item?: any;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  public notification = new BehaviorSubject<Notification>({
    msg: '', emphasis: '', close: true
  });

  constructor() { }

  createNotification(newNotification: Notification) {
    this.notification.next(newNotification);
  }
}
