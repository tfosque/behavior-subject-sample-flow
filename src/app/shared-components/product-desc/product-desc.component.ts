import { Component, OnInit, Input } from '@angular/core';
import { ProductModalComponent } from 'src/app/modals/product-modal/product-modal.component';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent implements OnInit {
  @Input() body: ProductModel;

  constructor() { }

  ngOnInit(): void {
    console.log('body:', this.body);
  }

}
