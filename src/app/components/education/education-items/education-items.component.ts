import { Component, OnInit } from '@angular/core';
import { Education } from 'edu';
import { EducationService } from 'src/app/services/education-service.service';

@Component({
  selector: 'app-education-items',
  templateUrl: './education-items.component.html',
  styleUrls: ['./education-items.component.css']
})
export class EducationItemsComponent implements OnInit {

 educations: Education[] = [];
  
  constructor(private info:EducationService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe((data) => {
    this.educations = data;
    })
  }

}
