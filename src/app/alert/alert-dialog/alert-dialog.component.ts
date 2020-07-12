import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { BehaviorSubject } from 'rxjs';
import { Alert } from 'src/app/models/alert';

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss'],
})
export class AlertDialogComponent implements OnInit {
  @Input() alertItem = new BehaviorSubject<Alert>(null);

  // public alert = new BehaviorSubject<Alert>(null);

  public progressNow = 30;

  constructor(private readonly alertService: AlertService) {}

  ngOnInit(): void {
    console.log('alert-dialog:alertItem', this.alertItem.value);

  }
}
