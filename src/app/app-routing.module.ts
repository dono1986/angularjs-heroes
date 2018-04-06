import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.

const routes: Routes = [
  { path:'', redirectTo: '/dashboard', pathMatch: 'full' },
  { path:'heroes', component: HeroesComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ], imports: [RouterModule.forRoot(routes)] //The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
})

export class AppRoutingModule { }
