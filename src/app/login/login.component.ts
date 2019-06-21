import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    email: string;
    password: string;
   constructor(private authenticationService: AuthenticationService, private router: Router) {

   }
    ngOnInit() {
    }

    login() {
      this.authenticationService.login(this.email, this.password)
          .subscribe(
              data => {
                  if (data && data.token) {
                    this.router.navigate(['']);
                  } else {
                     console.log('fail');
                  }
              },
              error => {
                  console.log('error');
              });
  }
}
