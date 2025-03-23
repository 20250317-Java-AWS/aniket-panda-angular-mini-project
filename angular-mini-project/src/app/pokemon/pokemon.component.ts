import { Component, Input, OnInit } from '@angular/core';
import { PokeApiService, Pokemon } from '../poke-api.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  imports: [RouterModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent implements OnInit{
  @Input() pokemon: Pokemon = new Pokemon()

  pokeApiService: PokeApiService
  constructor(service: PokeApiService) {
    this.pokeApiService = service
  }
  
  ngOnInit(): void {
    this.pokeApiService.getPokemon(this.pokemon.name).subscribe((body)=>{
      this.pokemon = body
    })
  }
}
