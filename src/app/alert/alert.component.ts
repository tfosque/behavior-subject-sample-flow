import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from '../services/alert.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  alertList = [];
  public alertStatus = new BehaviorSubject<any>([]);
/*   public progressNow = 0; */

  // handle multiple alerts
 /*  public alertList = []; */

  constructor(
    private readonly alertService: AlertService
    ) { }

  ngOnInit(): void {
    /* this.alertService.alertStatus.subscribe(res => {
      res.msg ? this.alertList.push(res) : null;
      this.alertStatus.next(res);
      console.log('alertList:', this.alertList);

    }); */

/*     setInterval(() => {
      if (this.alertStatus.value.msg && this.progressNow < 100) {

        // alert timer
        this.progressNow = this.progressNow + 10;
      } else if (this.alertStatus.value.msg && this.progressNow === 100) {

        // dismmiss alert;
        this.alertService.send(null, '');
        this.progressNow = 0;
        this.alertService.dismiss('id:1');
      }
    }, Math.floor(Math.random() * 444) + 555); */

  }
}
