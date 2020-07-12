import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Model {
  qty: number;
}
@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss'],
})
export class ItemCountComponent implements OnInit {
  @Input() qty = 0; // new BehaviorSubject<number>(0);
  @Output() updateQty = new EventEmitter<number>();

  model: Model = { qty: 0 };

  constructor() {}

  ngOnInit(): void {
    // console.log('item.qty::', this.qty, typeof this.qty);
    console.log('model:', this.model);
    this.model.qty = this.qty;
  }

  increase() {
    // console.log('increase', this.qty);
    this.model.qty = this.model.qty + 1;
    this.updateQty.emit(this.model.qty);
  }

  decrease() {
    // console.log('decrease');
    this.model.qty = this.model.qty - 1;
    this.updateQty.emit(this.model.qty);
  }
}
