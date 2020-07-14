import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductModel } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  products = new BehaviorSubject<ProductModel[]>([]);
  title = new Subject<string>();

  public disabled = true;
  public selectedProducts = new BehaviorSubject<ProductModel[]>([]);

  // track modal activePage
  // product gallery - list of selected products - save/preview
  public activePage = new BehaviorSubject<string>('');

  constructor(
    private readonly productService: ProductsService,
    private readonly modalService: ModalService,
    private readonly cartService: ShoppingCartService,
    private readonly alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.activePage.next('productGallery');

    // fetch title for modal
    this.modalService.title.subscribe((nextTitle) => {
      this.title.next(nextTitle);
    });

    // fetch products to populate modal
    this.productService.products.subscribe((fetchProducts: ProductModel[]) => {
      this.products.next(fetchProducts);
    });
    // set disabled button
    this.productService.selectedProducts$.subscribe((selProducts) => {
      if (selProducts.length > 0) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    });
  }

  // continue to next modal stepper
  continue(nextPage: string): void {
    this.activePage.next(nextPage);
  }

  addToCart() {
    this.productService.selectedProducts$.subscribe((items: ProductModel[]) => {
      this.add(items);
    });
  }

  private add(items: ProductModel[]) {
    this.cartService.addMultipleItems(items);
    // this.dismissModal = 'modal';
    setTimeout(() => {
      this.activePage.next('productGallery');
    }, 1000);
  }
}
