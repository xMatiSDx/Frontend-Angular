import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter()

  faPencil = faPencil

  constructor() { }

  onClick() {
    this.btnClick.emit()
  }

  ngOnInit(): void {
  }

}
