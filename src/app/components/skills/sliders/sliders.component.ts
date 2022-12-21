import { Component, OnInit } from '@angular/core';
import { Skills } from 'skills';
import { SkillService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private info: SkillService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe((data) => {
      this.skills = data;
      })
  }
}
