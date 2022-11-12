import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './heroes/hero.list';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {


  constructor(private messageService: MessageService) {


  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Obitida de HeroesService');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(hero => hero.id == id)!;
    this.messageService.add(`heroService: Fetched hero id=${id}`);
    return of(hero);
  }
}
