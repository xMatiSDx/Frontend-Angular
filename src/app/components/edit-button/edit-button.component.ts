import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { icon, IconProp, library } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter();
  @Input() figure: string = "";
  

  constructor() { }

  onClick() {
    this.btnClick.emit()
  }

  ngOnInit(): void {
  }

}
