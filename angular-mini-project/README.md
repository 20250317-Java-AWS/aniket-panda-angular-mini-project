## Pokedex
#### Description
This angular SPA consumes the PokeAPI (https://pokeapi.co/) allowing users to build a 6-member Pokemon team, and quickly look up info about the team members. Initially presented with 6 blank slots for teammates, users will select Pokemon to fill those slots. There is a view for the whole team, and clicking any of the pokemon will navigate to a details page with up-to-date information retrieved from the API.

This angular SPA consumes the PokeAPI (https://pokeapi.co/) allowing users view and search for all pokemon, and quickly get more detailed info about each one. Initially presented with a grid of panels for all pokemon sprites/names, users can filter by name to narrow down the list. Clicking on a panel will navigate to a details page with up-to-date information retrieved from the API.


#### Concepts
 - SPA Route Navigation - when clicking on a pokemon in the list view, route to the individual detail view. There is also be a link to route back to the team view.
 - Consume a RESTful API - fetch up-to-date information on demand from the pokeAPI
 - User Interaction - allow users to filter pokemon by name in the list view by typing into a text input
 - Multiple Components - There are at minimum 2 components here:
   - pokemon list view
   - pokemon details

<br>

# AngularMiniProject

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.
