import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AlertService } from './alert.service';
import { remove } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  public products = new BehaviorSubject<ProductModel[]>([]);

  public selectedProducts$ = new BehaviorSubject<ProductModel[]>([]);
  selectedProducts = [];
  selectedP = [];

  private apiBaseUrl =
    'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: LocalStorageService,
    private readonly alertService: AlertService
  ) {}

  // Products
  getProducts(): void {
    console.log('prod:service:');
    this.http.get(this.apiBaseUrl).subscribe((productList: ProductModel[]) => {
      this.products.next(productList);
      console.log({ productList });
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
    // console.log('list:before:del', this.selectedProducts);

    const removeSelected = this.selectedProducts.filter(f => f.id !== removeProd.id);
    this.selectedProducts = removeSelected;
    // console.log('remove:selected:', removeProd.id, {removeSelected});
    this.selectedProducts$.next(removeSelected);

    // this.selectedProducts.push(...updatedSelectedProductList);
    // console.log({removeProd}, 'selectedProducts[]:del:', this.selectedProducts);
    // this.selectedProducts$.next(this.selectedProducts);
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
