import { Component, OnInit, Input } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { PortfolioService } from 'src/app/services/portfolio-service.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  


  faPencil = faPencil
  faCamera = faCamera
  faAdd = faAdd
  faRemove = faRemove

  constructor(private portfolioService:PortfolioService) { }

  ngOnInit(): void {
  }

}
