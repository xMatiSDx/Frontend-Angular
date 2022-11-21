import { Component, OnInit } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoverComponent implements OnInit {

  faCamera = faCamera
  constructor() { }

  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
  }

}
