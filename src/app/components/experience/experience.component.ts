import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


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
