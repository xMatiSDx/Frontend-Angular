import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter();
  @Input() figure: string = "";
  @Input() type:string = "";
  

  constructor() { }

  onClick() {
    this.btnClick.emit()
  }

  ngOnInit(): void {
  }

}
