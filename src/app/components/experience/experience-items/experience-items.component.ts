import { Component, OnInit, } from '@angular/core';
import { Experiences } from 'exp';
import { ExperienceService } from 'src/app/services/experience-service.service';


@Component({
  selector: 'app-experience-items',
  templateUrl: './experience-items.component.html',
  styleUrls: ['./experience-items.component.css']
})
export class ExperienceItemsComponent implements OnInit {

  experiences: Experiences[] = [];

  constructor(private info:ExperienceService) { }

  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
    this.info.getInfo().subscribe((data) => {
    this.experiences = data;
    })
  }

}
