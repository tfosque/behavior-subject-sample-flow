import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from 'src/app/models/product';
import { BehaviorSubject } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-img-product-thumb-with-selection',
  templateUrl: './img-product-thumb-with-selection.component.html',
  styleUrls: ['./img-product-thumb-with-selection.component.scss']
})
export class ImgProductThumbWithSelectionComponent implements OnInit {
  @Input() product: ProductModel;

  public selected = false;

  public selectedProducts = new BehaviorSubject<ProductModel[]>([]);

  constructor(
    private readonly productService: ProductsService
  ) { }

  ngOnInit(): void {
  }

  validate() {
    //
  }

  trackSelection() {
    // TODO: Remove item from list after deselected
    if (this.selected) {
      // remove item
      this.productService.removeFromSelectedProducts(this.product);
      this.selected = !this.selected;
    } else if (!this.selected) {
      this.productService.addToSelectedProducts(this.product);
      this.selected = !this.selected;
    }

  }

}

// TODO: Replay Subject;
