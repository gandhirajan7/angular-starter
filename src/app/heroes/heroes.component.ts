import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero';
// import {HEROES} from '../mock-data';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;

  heroes: Hero[];
  constructor(private heroService: HeroService) {

  }

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  //   console.log(this.selectedHero)
  //   this.messageService.add(`Selected Hero is ${hero.name}`);
  // }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesList().subscribe(heroes => this.heroes = heroes);
  }


}
