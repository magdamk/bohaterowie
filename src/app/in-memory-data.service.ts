import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: "Jan III Sobieski" },
      { id: 12, name: "Jan Paweł II" },
      { id: 13, name: "Władysław II Jagiełło" },
      { id: 14, name: "św. Faustyna Kowalska" },
      { id: 15, name: "Jurand ze Spychowa" },
      { id: 16, name: "Andrzej Kmicic" },
      { id: 17, name: "Judyta" },
      { id: 18, name: "św. Małgorzata Maria Alacoque" },
      { id: 19, name: "Kazimierz Wielki" },
      { id: 20, name: "Bolesław Chrobry" },
    ];
    return { heroes };

  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }



  constructor() { }
}
