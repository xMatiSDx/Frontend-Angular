import { Component, OnInit, Input, EventEmitter, Output, Directive } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faRemove } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  
  @Directive({selector: '[ngbCollapse]', exportAs: 'ngbCollapse'})

  @Input('ngbCollapse')

  public isCollapsed : boolean = true;

  faBars = faBars;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faSignIn = faSignIn;
  faLinkedIn = faLinkedin;
  faRemove = faRemove;

  constructor() {
   }

  ngOnInit(): void {
  }

}
