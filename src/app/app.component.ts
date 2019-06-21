import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';



import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService,
      private http: HttpClient,
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  OnInt() {
    this.http.get('http://localhost/lsapp/public/article');
  }
}
