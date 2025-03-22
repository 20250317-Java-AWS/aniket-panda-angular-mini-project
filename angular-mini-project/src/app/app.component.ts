import { Component, NO_ERRORS_SCHEMA, OnInit, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeApiService, Pokemon, PokeResults } from './poke-api.service';
import { PokemonComponent } from "./pokemon/pokemon.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [PokemonComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  pokeApiService: PokeApiService;
  pokeResults: PokeResults = {results: []};
  allPokemon: any[] = [];
  //filterName: string = ""; 

  constructor(service: PokeApiService) {
    this.pokeApiService = service;
  }

  ngOnInit(): void {
    this.pokeApiService.getPokemonResults().subscribe((body) => {
      this.pokeResults = body;
      this.allPokemon = [...body.results]; // Keep a copy of all results
      
      for(let i = 0; i < this.pokeResults.results.length; i++) {
        this.pokeApiService.getPokemon(this.pokeResults.results[i].name).subscribe((body) => {
          this.allPokemon[i] = body; // Update the all pokemon array
          //this.filterPokemon(); // Apply filter after each update
          
          if (i == 0) {
            console.log(body);
          }
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
