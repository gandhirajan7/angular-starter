import { Injectable } from '@angular/core';
import { HEROES } from './mock-data';
import { Hero } from './hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  hero: Hero;
  getHeroesList(): Observable<Hero[]> {
    this.messageService.add("Fetched All Heroes");
    return of(HEROES);
  }

  getHero(id: Number): Observable<Hero> {
    return of(HEROES.find(item => id == item.id))
  }

  constructor(private messageService: MessageService) { }
}
