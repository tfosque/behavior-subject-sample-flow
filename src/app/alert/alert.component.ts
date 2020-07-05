import { Component, OnInit, Input } from '@angular/core';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() alertStatus: Alert;

  constructor() { }

  ngOnInit(): void {
  }

}
