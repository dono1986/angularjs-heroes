import { Injectable } from '@angular/core';
import {Hero} from "./heroes/hero";
//import {HEROES} from "./heroes/mock-heroes";
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";

import {HttpClient, HttpHeaders} from "@angular/common/http";

import {catchError, map, tap} from 'rxjs/operators'



@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes'; // URL to web api; If the resource name (after the api base path) matches one of the configured collections, process that

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  getHeroById(id: number): Observable<Hero> {

    const url = `${this.heroesUrl}/${id}`;

    return this.http.get<Hero>(url).
        pipe(
          tap(_=>this.log(`fetched ${id}`)),
          catchError(this.handleErrors<Hero>(`getHeroById id=${id}`))

    );

    //this.messageService.add(`Fetching hero with id=${id}`); //Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.

    //return (this.http.get<Hero>(this.heroesUrl))
    //return of(HEROES.find(heroValue => heroValue.id === id));
  }

  getHeroes(): Observable<Hero[]> {

    return this.http.get<Hero[]>(this.heroesUrl).
            pipe(

              //The HeroService methods will tap into the flow of observable values and send a message (via log()) to the message area at the bottom of the page.
              // The tap operator looks at the observable values, does something with those values, and passes them along. The tap call back doesn't touch the values themselves.
              tap(heroes=>this.log(`fetched ${heroes.length} heroes`),
                catchError(this.handleErrors('getHeroes', [])))
    );
    //return of(HEROES);
  }

  // Instead of handling the error directly, it returns an error handler function to catchError that it has configured with
  // both the name of the operation that failed and a safe return value.
  handleErrors<T>(operation = 'operation', result?: T) {
    return (error:any) : Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }


  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }




}
