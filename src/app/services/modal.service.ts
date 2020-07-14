import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  public title = new Subject<string>();
  public display = false;

  constructor() { }

  openModal() {
    this.display = true;
  }

  closenModal() {
    this.display = false;
  }
}
