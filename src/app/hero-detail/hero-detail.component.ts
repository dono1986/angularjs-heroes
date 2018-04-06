import { Component, OnInit, Input } from '@angular/core';
import { Hero} from "../heroes/hero";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

import {HeroService} from "../hero.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor
  (
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {  }

  ngOnInit() {
    this.getHero();
  }

  getHero() :void {

    const id = +this.route.snapshot.params['id']; // Route parameters are always strings. The JavaScript (+) operator converts the string to a number, which is what a hero id should be.

    this.heroService.getHeroById(id).subscribe(heroValue => this.hero = heroValue)

  }

  goBack():void {
    this.location.back();
  }

}
