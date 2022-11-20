import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { faAdd, faCamera, faPencil, faRemove } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    EditButtonComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPencil, faCamera, faAdd, faRemove);
  }
 }
