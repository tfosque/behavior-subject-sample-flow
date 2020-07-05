import { Component } from '@angular/core';
import { Alert } from './models/alert';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  alertStatus: Alert;

  constructor(alertService: AlertService) {
    this.alertStatus = {
      show: false,
      msg: '',
      category: 'primary'
    };
  }
}
