import { Component, OnInit, Input } from '@angular/core';

export interface Todo {
  title?: string;
  task?: string;
  done?: boolean;
}
@Component({
  selector: 'app-button2',
  templateUrl: './button2.component.html',
  styleUrls: ['./button2.component.scss']
})
export class Button2Component implements OnInit {
  @Input() public todo: Todo;
  form: Todo = {};
  constructor() { }

  ngOnInit(): void {
  }

}
