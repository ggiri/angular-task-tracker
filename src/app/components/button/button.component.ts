import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() {
    console.log("Button component constructor");
  }
  ngOnInit(): void {
    console.log("Button component onInit");
  }
  @Input() text: string = "";
  @Input() color: string = "";
  @Output() btnClick = new EventEmitter();

  onClick() {
    console.log("Button component onclick");
    this.btnClick.emit();
  }
}
