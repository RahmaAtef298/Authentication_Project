import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  RegisterUserData={}
  constructor(private _auth : AuthService,
              private _router :Router) { 

  }

  ngOnInit() {
  }

  RegisterUser(){
    this._auth.registerUser(this.RegisterUserData)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token' , res.token);
          this._router.navigate(['/special']);
        },
        err => console.log(err)
      )
  }

}
