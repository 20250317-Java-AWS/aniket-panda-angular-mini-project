import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PokeApiService{
  client: HttpClient;
  constructor(client: HttpClient) { 
    this.client = client;
  }

  getPokemonResults(): Observable<PokeResults> {
    return this.client.get<PokeResults>('https://pokeapi.co/api/v2/pokemon/')
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.client.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/' + name)
  }

}

export class PokeResults {
  results: Pokemon[] = []
}

export class Pokemon {
  id: number = 0
  name: string = ""
  height: number = 0
  weight: number = 0
  url: string = ""
  sprites: Sprites = new Sprites(); 
  types: Type[] = []
  abilities: Ability[] = []
}

export class Sprites {
  front_default: string = "";
}

export class Type {
  type: {name: string} = {name: ""}
}

export class Ability {
  ability: {name: string} = {name: ""}
}
