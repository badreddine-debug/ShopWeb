import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from '../Service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  ShowHideLogin: any | undefined;
  Email: string = '';

  constructor(
    private authenService: AuthenticationService,
    private router: Router
  ) {
    //this.ShowHideLogin = this.authenService.isLoginIn.asObservable();
  }

  ngOnInit(): void {
    var token: any = sessionStorage.getItem('SessionUser')?.toString();
    var tokenInfo = this.authenService.getDecodedAccessToken(token);
    this.Email = tokenInfo.email;
    this.ShowHideLogin = token;
  }

  Logout() {
    this.authenService.Logout();
    this.ShowHideLogin = false;
    this.router.navigate(['']);
  }
}
