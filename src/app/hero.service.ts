import { Injectable } from '@angular/core';
import {Hero} from "./heroes/hero";
import {HEROES} from "./heroes/mock-heroes";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";
import {forEach} from "@angular/router/src/utils/collection";

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroById(id: number): Observable<Hero> {

    this.messageService.add(`Fetching hero with id=${id}`); //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.

    return of(HEROES.find(heroValue => heroValue.id === id));
  }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add("HeroService: fetched heroes");

    return of(HEROES);
  }

}
