import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AlertService } from './alert.service';
import { ShoppingCartService } from './shopping-cart.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = new BehaviorSubject<ProductModel[]>([]);
  public selectedProducts$ = new BehaviorSubject<ProductModel[]>([]);
  public suggestiveSelling$ = new BehaviorSubject<ProductModel[]>([]);

  selectedProducts = [];
  selectedP = [];

  private apiBaseUrl =
    'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient,
    private readonly alertService: AlertService,
    private readonly localStorageService: LocalStorageService,
    private readonly cartService: ShoppingCartService
  ) { }

  // Products
  getProducts(): void {
    this.localStorageService.PRODUCTS.subscribe(prod => {
      this.products.next(prod);
    });
  }

  // TODO: Maybe a settimeout issue
  // TODO: When do we clearselected products !important
  addToSelectedProducts(addProd: ProductModel) {
    this.selectedProducts.push(addProd);
    // console.log('selectedProducts[]:add', this.selectedProducts);
    this.selectedProducts$.next(this.selectedProducts);
  }

  // TODO: Maybe a settimeout issue
  removeFromSelectedProducts(removeProd: ProductModel) {
    const removeSelected = this.selectedProducts.filter(
      (f) => f.id !== removeProd.id
    );
    this.selectedProducts = removeSelected;
    this.selectedProducts$.next(removeSelected);
  }

  suggestiveSelling() {
    // filter for similar names

  /*   const cart = this.cartService.cartItems.value;
    this.localStorageService.PRODUCTS.subscribe(ab => {
      console.log({ ab });
      this.products.next(ab);
    }); */

   /*  const prod = this.products.value.map(m => {
      console.log({m});
      cart.map(x => {
        console.log({x});
        m.details.itemOrProductDescription.includes(x.details.itemOrProductDescription)
      });
    }); */

    /* this.suggestiveSelling$.next([]);
    console.log('suggestive:prods:cart:', { prod }, { cart }); */

    // console.log('filter:suggestive:', result);
  }

}



/* public cart = new BehaviorSubject<CartItem[]>([]);

  searchTxt: string;

  @ViewChild(FilterInputComponent) child;
  private apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';
  constructor(
    private readonly cartService: ShoppingCartService,
    private readonly searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.cartService.cartItems.subscribe((items: CartItem[]) => {
      this.cart.next(items);
    });

    this.searchService.txtStr.subscribe(str => {
      this.searchTxt = str;
    });
  }

  deleteItem(item: any) {
    // console.log('del:item', {item});
    alert(`Are you sure you want to delete item #${item.details.productId} : ${item.details.itemOrProductDescription}.`);
    this.cartService.deleteItem(item.id);
  }

} */
