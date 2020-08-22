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
    // set disabled button???
    // this watches everytime a product is selected in the product selection modal
    this.productService.selectedProducts$.subscribe((selProducts) => {
      if (selProducts.length > 0) {
        // console.log('watching', {selProducts});
        this.selectedProducts.next(selProducts);
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    });
  }

  // continue to next modal stepper
  nextPage(nextPage: string): void {
    this.activePage.next(nextPage);
  }

  addToCart(): void {
    this.productService.resetSelectedProducts();
    setTimeout(() => {
      this.activePage.next('productGallery');
    }, 500);
    this.selectedItemsExistInCart();
  }

  selectedItemsExistInCart(): void {
    // handle duplicates by updating qty if already in cart
    const selectedItems: ProductModel[] = this.selectedProducts.value;
    const dups: ProductModel[] = [];
    const cart = this.cartService.cartItems.value;
    const addItemsToCart = [];

    // update selecteItems qty's before adding to  cart
    selectedItems.filter((product: ProductModel) => {
      if (cart.length < 1) {
        addItemsToCart.push(product);
        this.cartService.addMultipleItems(addItemsToCart);
        return;
      }

      cart.map((cartItem: ProductModel, index) => {
        if (product.id === cartItem.id) {
          product.qty = cartItem.qty + product.qty;
          // cart.push(product);
          // replace this cart Item
          cart[index] = product;

          dups.push(product);
          console.log({cart});
        } else {
          cart.push(product);
        }
      }); // end map
      this.cartService.addMultipleItems(cart);
    }); // end filter
  }

}
