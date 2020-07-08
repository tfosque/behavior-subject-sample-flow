import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public alertStatus = {};

  constructor(
    private readonly locStorageService: LocalStorageService,
    private readonly alertService: AlertService
  ) {
      this.alertService.default();
    }


  ngOnInit(): void {
    this.locStorageService.startLocalDb();
    // follow alert changes
    this.alertService.alertStatus.subscribe(alert => {
      this.alertStatus = alert;
    });
  }

}
