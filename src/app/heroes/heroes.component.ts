import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';





@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {



  heroes: Hero[] = []

  constructor(private heroService: HeroService) {

  }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  selectedhero?: Hero

  onselect(listah: Hero): void {
    this.selectedhero = listah



  }





}
