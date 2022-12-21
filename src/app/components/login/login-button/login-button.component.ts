import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent implements OnInit {

  @Output() btnClick = new EventEmitter();

  faSignIn = faSignIn;

  constructor() { }

  onClick() {
    this.btnClick.emit()
  }

  openLoginModal() {
    console.log('Edit!')
  }

  ngOnInit(): void {
  }

}
