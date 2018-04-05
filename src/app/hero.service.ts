import { Injectable } from '@angular/core';
import {Hero} from "./heroes/hero";
import {HEROES} from "./heroes/mock-heroes";

@Injectable()
export class HeroService {

  constructor() { }


  getHeroes(): Hero[] {
    return HEROES;
  }

}
