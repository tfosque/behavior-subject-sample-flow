import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  model: any = {};

  constructor() {
    this.model.filterItem = '';
   }

  ngOnInit(): void {
  }

}
