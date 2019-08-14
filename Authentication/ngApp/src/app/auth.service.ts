import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private RegURL :string ="http://localhost:8080/api/register";
  private LoginURL :string ="http://localhost:8080/api/login";

  constructor(private http : HttpClient ,
              private _router : Router) { }

  registerUser(user){
    return this.http.post<any>(this.RegURL,user);
  }

  loginUser(user){
    return this.http.post<any>(this.LoginURL,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/events']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
