import { Routes } from '@angular/router';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeListComponent } from './poke-list/poke-list.component';

export const routes: Routes = [
  {path: "", component: PokeListComponent},
  {path: "details/:name", component: PokeDetailsComponent}
];