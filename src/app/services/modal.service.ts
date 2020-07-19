import { Injectable, ElementRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public title = new BehaviorSubject<string>('');
  public item = new Subject<ProductModel>();

  // public display = false;
  constructor() { }

  public createModal(title: string, item: any) {
    this.title.next(title);
    this.item.next(item);

    // console.log({ title }, { item });
  }

}
