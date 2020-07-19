import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-cart-preview',
  templateUrl: './cart-preview.component.html',
  styleUrls: ['./cart-preview.component.scss']
})
export class CartPreviewComponent implements OnInit {
  @Input() cartItems = new BehaviorSubject<ProductModel[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
