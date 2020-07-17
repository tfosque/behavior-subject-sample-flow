import {
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewInit,
  ElementRef,
} from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductModel } from 'src/app/models/product';

@Component({
  selector: 'app-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss'],
})
export class GenericModalComponent implements OnInit, AfterViewInit {
  body: ProductModel;
  title: string;
  footer: any = {};
  actions: any = {};

  constructor(private readonly modalService: ModalService) {}

  ngOnInit(): void {
    // options: w: h: title: item:{}
    this.modalService.title.subscribe((Title) => {
      this.title = Title;
    });
    this.modalService.item.subscribe((Item) => {
      this.body = Item;
    });
  }

  ngAfterViewInit(): void {}
}
