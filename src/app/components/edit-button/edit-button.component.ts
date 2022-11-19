import { Component, Input, OnInit, } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { Icon, icon, IconParams } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.css']
})
export class EditButtonComponent implements OnInit {

  @Input() icon: string = ""

  faPencil= faPencil

  constructor() { }

  logIcon() {
    console.log(this.icon)
  }

  ngOnInit(): void {
  }

}
