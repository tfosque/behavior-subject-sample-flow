import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public products = new BehaviorSubject<ProductModel[]>([]);

  private apiBaseUrl = 'https://my.api.mockaroo.com/cartitem_schema.json?key=c1a35bd0';

  constructor(
    private readonly http: HttpClient,
    private readonly storageService: LocalStorageService,
    private readonly alertService: AlertService
  ) { }

  // Products
  getProducts(): void {
    console.log('prod:service:')
    this.http.get(this.apiBaseUrl)
      .subscribe((productList: ProductModel[]) => {
        this.products.next(productList);
        console.log({ productList });
      });
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

