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
    this.model.qty = this.qty;
  }

  increase() {
    this.model.qty = this.model.qty + 1;
    this.updateQty.emit(this.model.qty);
  }

  decrease() {
    this.model.qty = (this.model.qty) - 1;
    this.updateQty.emit(this.model.qty);
  }

  change() {
    this.model.qty = this.model.qty;
    this.updateQty.emit(this.model.qty);
    console.log('a change has occured.......');
  }
}

// TODO: subtotal cart view
// TODO: express lane hours
// TODO: need price in Products modal
