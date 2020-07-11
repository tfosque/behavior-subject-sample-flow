import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-gallery',
  templateUrl: './cart-gallery.component.html',
  styleUrls: ['./cart-gallery.component.scss']
})
export class CartGalleryComponent implements OnInit {
  @Input() products = new BehaviorSubject<ProductModel[]>([]);

  constructor() { }

  ngOnInit(): void {
  }

}
