import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedInSubject: Subject<boolean> = new Subject<boolean>();
  isLoggedIn = false;
  redirectUrl: string;
  constructor(private router: Router, private http: HttpClient) { }

  seConnecter(user) {
    console.log("in service ", user)
    return this.http.post(`${environment.BASE_API_URL}/login2`, user);
  }

  seDeconnecter(): void {
    this.isLoggedIn = false;
    this.emitEventLogged();
    this.router.navigate(['/accueil']);
  }

  emitEventLogged() {
    this.isLoggedInSubject.next(this.isLoggedIn);
  }
}







