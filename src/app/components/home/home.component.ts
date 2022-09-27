import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    trendingMovies : any;
    theatreMovies : any;
    popularMovies : any;

  constructor(private http : HttpClient, private route : Router) { }


  ngOnInit(): void {
    this.getTrendingMovies(); 
    this.getTheatreMovies();
    this.getPopulareMovies();
  }


  // trending movies section
  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/data/trending-movies.json').subscribe((movies)=>{
      this.trendingMovies = movies;
    })
  }


  // theatre movies section
  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json').subscribe((movies)=>{
      this.theatreMovies = movies;
    })
  }


  // popular movies section
  getPopulareMovies(){
    this.http.get('http://localhost:4200/assets/data/popular-movies.json').subscribe((movies)=>{
      this.popularMovies = movies;
    })
  }



  // to redirect to movie page
  goToMovie(type:string, id:string){
    this.route.navigate(['movie', type, id]);
  }

}