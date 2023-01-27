import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { CoverComponent } from './components/cover/cover.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { faAdd, faBars, faCamera, faPencil, faRemove, faSignIn } from '@fortawesome/free-solid-svg-icons';
import { ExperienceItemsComponent } from './components/experience/experience-items/experience-items.component';
import { AppRoutingModule } from './app-routing.module';
import { EducationItemsComponent } from './components/education/education-items/education-items.component';
import { IndexComponent } from './components/index/index.component';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { LoginModalComponent } from './components/login/login-modal/login-modal.component';
import { LoginButtonComponent } from './components/login/login-button/login-button.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { SkillsItemsComponent } from './components/skills/skills-items/skills-items.component';
import { SlidersComponent } from './components/skills/sliders/sliders.component';
import { ExperienceAddComponent } from './components/experience/experience-add/experience-add.component';
import { AutosizeModule } from 'ngx-autosize';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoverComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    EditButtonComponent,
    ExperienceItemsComponent,
    EducationItemsComponent,
    IndexComponent,
    LoginModalComponent,
    LoginButtonComponent,
    SkillsItemsComponent,
    SlidersComponent,
    ExperienceAddComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbCollapseModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    AutosizeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPencil, faCamera, faAdd, faRemove, faBars, faGithub, faTwitter, faLinkedin, faInstagram, faSignIn);
  }
 }
