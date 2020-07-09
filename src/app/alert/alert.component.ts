import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alertList = [];
  public alertStatus = new BehaviorSubject<any>([]);

  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {}
}
