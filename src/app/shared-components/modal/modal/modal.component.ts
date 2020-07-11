import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductModel } from 'src/app/models/product';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  products = new BehaviorSubject<ProductModel[]>([]);
  title = new Subject<string>();
  public disabled = true;

  constructor(
    private readonly productService: ProductsService,
    private readonly modalService: ModalService
  ) { }

  ngOnInit(): void {
    this.modalService.title.subscribe(nextTitle => {
      this.title.next(nextTitle);
    });
    this.productService.products.subscribe((fetchProducts: ProductModel[]) => {
      this.products.next(fetchProducts);
      console.log({fetchProducts});
    });
    console.log('fetch:products', this.products.value);
  }

}
