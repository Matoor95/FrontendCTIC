import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean;
  constructor(public loginService: LoginService) {


  }

  ngOnInit() {
    this.loginService.isLoggedInSubject.subscribe(
      (isLoggedIn: boolean) => {
        this.isLoggedIn = isLoggedIn;
      }
    )
  }

  seDeconnecter() {
    this.loginService.seDeconnecter();
  }
}

