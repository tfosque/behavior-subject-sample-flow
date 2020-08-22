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
    this.productService.selectedProducts$.subscribe(r => {
      // console.log({r});
    });
  }

  validate() {
    //
  }

  addRemoveProduct() {
    // TODO: Remove item from list after deselected

    this.selected = !this.selected;

    if (this.selected === true) {
      // console.log('this.selected=:', this.selected);
      this.addProduct();
      return;
    }

    if (this.selected === false) {
      // console.log('this.selected=:', this.selected);
      this.removeProduct();
      return;
    }

  }

  addProduct() {
    this.productService.addToSelectedProducts(this.product);
  }

  removeProduct() {
    this.productService.removeFromSelectedProducts(this.product);
  }

}

// TODO: Replay Subject;
