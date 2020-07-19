import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

interface Model {
  qty: number;
}
@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss'],
})
export class ItemCountComponent implements OnInit {
  @Input() qty = 0;
  // TODO: change do not emit use observable
  @Output() updateQty = new EventEmitter<number>();

  public qtyStartValue: number;

  model: Model = { qty: 0 };

  constructor(
    private readonly cartService: ShoppingCartService
   ) {
    // this.cartService.onUpdateBtnEmphasis('btn btn-secondary disabled');
   }

 /*  ngOnChanges(changes: SimpleChanges): void {
    // console.log({ changes });
    const QTY = changes.qty;

    // init start value
    if (QTY.previousValue === undefined) {
      this.qtyStartValue = QTY.currentValue;
      // console.log('undefined: qty:');
      // console.log('start:', this.qtyStartValue);
    }
    if (QTY.currentValue === this.qtyStartValue) {
      // console.log('This is my startValue::', QTY.currentValue, this.qtyStartValue);
      this.cartService.onUpdateBtnEmphasis('btn-secondary');
    }
    if (QTY.currentValue !== this.qtyStartValue) {
      // console.log('This is my startValue::', QTY.currentValue, this.qtyStartValue);
      this.cartService.onUpdateBtnEmphasis('btn-success');
    }
  }
 */
  ngOnInit(): void {
    this.model.qty = this.qty;
  }

  increase() {
    this.model.qty = this.model.qty + 1;
    this.updateQty.emit(this.model.qty);
    this.cartService.compareQtyState();
  }

  decrease() {
    if (this.model.qty !== 0) {
      this.model.qty = this.model.qty - 1;
      this.updateQty.emit(this.model.qty);
      this.cartService.compareQtyState();
    }
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
