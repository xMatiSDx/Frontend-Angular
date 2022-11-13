import { Component, OnInit } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  faPencil = faPencil
  faCamera = faCamera
  faAdd = faAdd
  faRemove = faRemove

  constructor() { }

  ngOnInit(): void {
  }

}
