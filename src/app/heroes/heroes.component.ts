import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Heroes: wybrano bohatera id=${hero.id}`);
  }

  onUnSelect(): void {
    this.selectedHero = undefined;
    this.messageService.add('Heroes: wyczyszczono wybór');
  }

  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  getHeroes(): void {
   this.heroService.getHeroes().subscribe((heroes): Hero[] => {
     return this.heroes = heroes;
   });
  }

  // getHeroes(): void { to samo tylko uproszczony zapis
  //   this.heroService.getHeroes()
  //       .subscribe(heroes => this.heroes = heroes);
  // }

  ngOnInit(): void {
    this.getHeroes();
  }

}
