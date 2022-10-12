import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './heroes/hero.list';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
