import { Component, OnInit } from '@angular/core';
import { Pokemon, PokeApiService } from '../poke-api.service';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poke-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './poke-details.component.html',
  styleUrl: './poke-details.component.css'
})

export class PokeDetailsComponent implements OnInit{
  pokemon: Pokemon = new Pokemon()
  
  constructor(
    private pokeApiService: PokeApiService,
    private route: ActivatedRoute
  ) {}
  
  // initialize with single pokemon passed by name as parameter
  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokeApiService.getPokemon(name).subscribe((body) => {
        this.pokemon = body;
      });
    }
  }

  // extracts types and returns as comma-separated string
  getTypes(): string {
    return this.pokemon.types.map(element => element.type.name).join(', ');
  }

  // extracts abilities and returns as comma-separated string
  getAbilities(): string {
    return this.pokemon.abilities.map(element => element.ability.name).join(', ');
  }
}
