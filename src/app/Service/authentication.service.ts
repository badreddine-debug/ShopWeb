import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Model/User';
import { Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  Link = 'http://localhost:5000/api/User/AccederUSer';
  isLoginIn = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  Authentication(email: string, password: string): Observable<string> {
    var _user = new User();
    _user.Email = email;
    _user.Password = password;
    return this.http.post(this.Link, _user, { responseType: 'text' });
  }

  Logout(): void {
    sessionStorage.removeItem('SessionUser');
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
