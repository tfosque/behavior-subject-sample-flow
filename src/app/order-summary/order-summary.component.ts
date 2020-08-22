import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {
  subtotal = 0;

  constructor(private readonly cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartService.addSubtotal();
    this.cartService.SUBTOTAL.subscribe((total) => {
      this.subtotal = total;
    });
  }
}
