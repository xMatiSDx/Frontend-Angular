import { Component, OnInit } from '@angular/core';
import { Skills } from 'skills';
import { SkillService } from 'src/app/services/skill-service.service';

@Component({
  selector: 'app-skills-items',
  templateUrl: './skills-items.component.html',
  styleUrls: ['./skills-items.component.css']
})
export class SkillsItemsComponent implements OnInit {

  skills: Skills[] = [];

  constructor(private info: SkillService) { }

  ngOnInit(): void {
    this.info.getInfo().subscribe((data) => {
      this.skills = data;
      })
  }

}
