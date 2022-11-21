import { Component, OnInit, Input } from '@angular/core';

import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {


  constructor(private portfolioService:PortfolioService) { }

  editContent() {
    console.log('Edit!')
  }

  changePicture() {
    console.log('Change Picture!')
  }

  ngOnInit(): void {
  }

}
