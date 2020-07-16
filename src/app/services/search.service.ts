import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  public txtStr = new BehaviorSubject<string>('');

  constructor() { }

  filter(str: string) {
    // console.log('from:filter:', {str});
    this.txtStr.next(str);
  }
}
