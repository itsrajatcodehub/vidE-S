import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {path: "", redirectTo : "login", pathMatch: "full"},
  {path : "home", component : HomeComponent},
  {path : "login", component : LoginComponent},
  {path : "movie/:type/:id", component : MovieComponent},
  {path: "**", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
