import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-filter-input',
  templateUrl: './filter-input.component.html',
  styleUrls: ['./filter-input.component.scss']
})
export class FilterInputComponent implements OnInit {
  public form: any = {};

  constructor(private readonly searchService: SearchService) {
    this.form.searchInput = '';
  }

  ngOnInit(): void {
  }

  trackFilterStr(str: string) {
   // console.log('trackFilterStr', str);

    this.searchService.filter(this.form.searchInput);
  }

}
