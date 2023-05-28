import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent implements OnInit {
  token: any;
  message: string = '';

  userRegistrationForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });
  constructor(
    private _serviceAuth: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submitAdmin() {
    let eml = this.userRegistrationForm.value.email;
    let pwd = this.userRegistrationForm.value.password;
    this._serviceAuth.Authentication(eml, pwd).subscribe((data) => {
      if (data != '') {
        this.token = data;
        this.message = '';
        this._serviceAuth.isLoginIn.next(true);
        sessionStorage.setItem('SessionUser', data);
        this.router.navigate(['Home/Product']);
      } else {
        this.message = "L'Email ou le mots pass est incorrect.";
      }
    });
  }
}
