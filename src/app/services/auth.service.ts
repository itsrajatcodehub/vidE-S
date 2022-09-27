import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route : Router, private http : HttpClient) { }

  // for login
  login(username:any, password:any){
    if(username === 'login' && password === '12345'){
      return 200;
    }else {
      return 403;
    }
  }

  // for logout
  logout(){
    this.route.navigate(['login'])
  }

}
