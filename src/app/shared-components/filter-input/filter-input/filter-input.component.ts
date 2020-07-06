import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  form: any = {};

  constructor() {
    this.form.searchInput = '';
   }

  ngOnInit(): void {
  }

}
