import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { PokeApiService, PokeResults } from '../poke-api.service';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-poke-list',
  imports: [PokemonComponent, CommonModule, RouterModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.css'
})

export class PokeListComponent implements OnInit {
  pokeApiService: PokeApiService;
  pokeResults: PokeResults = {results: []};
  allPokemon: any[] = [];

  // constructor takes service object to call api
  constructor(service: PokeApiService) {
    this.pokeApiService = service;
  }

  // initialize page with all pokemon
  ngOnInit(): void {
    this.pokeApiService.getPokemonResults().subscribe((body) => {
      this.pokeResults = body;
      this.allPokemon = [...body.results];
      
      for(let i = 0; i < this.pokeResults.results.length; i++) {
        this.pokeApiService.getPokemon(this.pokeResults.results[i].name).subscribe((body) => {
          this.allPokemon[i] = body;
        });
      }
    });
  }

  // event handler for name-filtering input
  onFilterChange(event: any): void {
    this.pokeResults.results = this.allPokemon.filter(pokemon => 
      pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }

}
