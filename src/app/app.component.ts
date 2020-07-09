import { Component, OnInit } from '@angular/core';
import { AlertService } from './services/alert.service';
import { LocalStorageService } from './services/local-storage/local-storage.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public alertStatus = new BehaviorSubject<any>([]);

  constructor(
    private readonly locStorageService: LocalStorageService,
    private readonly alertService: AlertService
  ) {
    this.alertService.send('', '', {}, 0);
  }


  ngOnInit(): void {
    // start localDb
    this.locStorageService.startLocalDb();

    // follow alert changes
    this.alertService.alertStatus.subscribe(alert => {
      // console.log({alert});
      this.alertStatus.next(alert);
    });

    // Fake Store Api
   /*  fetch('https://roofingx.free.beeceptor.com')
      .then(res => res.json())
      .then(json => console.log(json)); */
  }
}
