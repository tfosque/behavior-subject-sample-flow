import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  cartPreview = new BehaviorSubject<ProductModel[]>([]);
  total = new BehaviorSubject<number>(0);

  public form: any = {};

  constructor(
    private readonly cartService: ShoppingCartService
  ) {
    this.form.searchText = '';
  }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe(cart => {
      this.cartPreview.next(cart);
      this.total.next(cart.length);
    });
  }

}
