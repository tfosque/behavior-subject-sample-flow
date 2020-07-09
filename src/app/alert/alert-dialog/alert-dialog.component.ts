import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { BehaviorSubject } from 'rxjs';
import { Alert } from 'src/app/models/alert';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit {
  alertList = [];
  @Input() alertItem: any;

  public alertStatus = new BehaviorSubject<any>([]);
  public progressNow = 0;

  constructor(private readonly alertService: AlertService) { }

  ngOnInit(): void {

  }

}
