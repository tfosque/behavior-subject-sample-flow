import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../models/product';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-cart-gallery',
  templateUrl: './cart-gallery.component.html',
  styleUrls: ['./cart-gallery.component.scss'],
})
export class CartGalleryComponent implements OnInit {
  @Input() products = new BehaviorSubject<ProductModel[]>([]);

  public selectedProducts = new BehaviorSubject<ProductModel[]>([]);

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.selectedProducts$.subscribe((updateSelProducts) => {
      this.selectedProducts.next(updateSelProducts);
    });
  }
}
