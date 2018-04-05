import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  selectedHero: Hero;

  private heroes : Hero[];

  constructor(private heroService: HeroService) {
    // Constructor is only for
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() : void {
    this.heroService.getHeroes().subscribe(
      heroesValue => this.heroes = heroesValue
    );
  }

  onSelect(hero: Hero) {
      this.selectedHero = hero;
  }

}
