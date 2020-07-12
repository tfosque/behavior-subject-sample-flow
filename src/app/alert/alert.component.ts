import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { BehaviorSubject } from 'rxjs';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  public alertStatus = new BehaviorSubject<any>([]);
  public alert = new BehaviorSubject<Alert>(null);

  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.alert.subscribe((alertX) => {
      console.log({ alertX });

      this.alert.next(alertX);
      console.log('alert:', this.alert.value);
    });
  }
}
