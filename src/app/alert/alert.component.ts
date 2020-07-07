import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../models/alert';
import { AlertService } from '../services/alert.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  public alertStatus = new BehaviorSubject<any>([]);
  // public alertStatus = this.alertService.alertStatus.subscribe();

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {
    this.alertService.alertStatus.subscribe(res => {
      this.alertStatus.next(res);
      // console.log({res});
      console.log('this:::', this.alertStatus);
    });

    setTimeout(() => {
      console.log('timeout:::', this.alertStatus);
    }, 2500);
  }

}
