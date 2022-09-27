import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth : AuthService, private route : Router) { }

  ngOnInit(): void {
  }

  // to redirect
  goToHome(){
    this.route.navigate(['home'])
  }

  // to logout
  logout(){
    // this.route.navigate(['login'])
    this.auth.logout();
  }
}
