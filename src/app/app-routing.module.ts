import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CoverComponent } from './components/cover/cover.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'about', component: CoverComponent},
  {path: 'experience', component: ExperienceComponent},
  {path: 'education', component: EducationComponent},
  {path: 'skills', component: SkillsComponent},
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
