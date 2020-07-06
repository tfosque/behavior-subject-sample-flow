import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() dataSrc = new BehaviorSubject<any[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
