import { Component, Input, OnInit, } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Input() icon: string = '';

  faPencil = faPencil

  constructor() { }

  logIcon() {
    console.log(this.icon)
  }

  ngOnInit(): void {
  }

}
