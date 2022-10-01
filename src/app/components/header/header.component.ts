import { Component, OnInit, Input, EventEmitter, Output, Directive } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from  '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  
  @Directive({selector: '[ngbCollapse]', exportAs: 'ngbCollapse'})

  @Input('ngbCollapse')

  public isCollapsed : boolean = true;

  set collapsed(isCollapsed: boolean) {
    if (this.isCollapsed !== isCollapsed) {
      this.isCollapsed = isCollapsed;
    }
  }

  @Output() ngbCollapseChange = new EventEmitter<boolean>();

  faBars = faBars;
  faTwitter = faTwitter;
  faGithub = faGithub;
  faInstagram = faInstagram
  faSignIn = faSignIn
  faLinkedIn = faLinkedin

  constructor() {
   }

  ngOnInit(): void {
  }

  toggle(open: boolean = this.isCollapsed) {
    this.collapsed = !open;
    this.ngbCollapseChange.next(this.isCollapsed);
  }

}
