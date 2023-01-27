import { Component, OnInit, Input } from '@angular/core';
import { ExperienceService } from 'src/app/services/experience-service.service';
import { Experiences } from 'exp';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experiences: Experiences[] = [];

  constructor(private info:ExperienceService) { 
  }

  ngOnInit(): void {
  }

  toggleAddExp() {
    this.info.toggleAddExp();
  }

  changePicture() {
    console.log('Change Picture!')
  }

  addExp(exp: Experiences) {
    this.info.addExp(exp).subscribe((exp)=>(this.experiences.push(exp)))
    console.log(this.experiences)
    }

}
