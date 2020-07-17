import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-through',
  templateUrl: './through.component.html',
  styleUrls: ['./through.component.scss']
})
export class ThroughComponent implements OnInit {
  @Input() view: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
