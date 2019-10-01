import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.services";
import { Router } from '@angular/router'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[] = []

  constructor( private _heroesService: HeroesService, private router: Router ) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes()
    // console.log(this.heroes)
  }
  //navegación con rutas usando button
  
  // verHeroe(idx:number) { 
  //   // console.log(id)
  //   this.router.navigate(['/heroe', idx])
  // }
}
