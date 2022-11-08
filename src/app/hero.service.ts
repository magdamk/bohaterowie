import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable <Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: pobrano bohaterów');
    return heroes;
  }

  getHero(id:Number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: pobrano bohatera id=${id}`);
    return of(hero);
  }

  constructor(private messageService: MessageService) { }
}
