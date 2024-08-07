#Pokemon Backend

# Pokemon-Project Application

## Overview

This React application allows users to manage Pokémon data, including adding Pokémon users, assigning Pokémon to users, and viewing detailed Pokémon stats. It provides functionalities to view lists of Pokémon users, add and edit users, and handle Pokémon data effectively.

## Features

- **List Pokémon Users**: View a list of Pokémon users and their Pokémon.
- **Add Pokémon User**: Create a new Pokémon user.
- **Add Pokémon to User**: Assign Pokémon to an existing user.
- **Edit Pokémon User**: Modify details of an existing Pokémon user.
- **View Pokémon Stats**: Get detailed stats of a specific Pokémon.

## Technologies Used

- **React**: For building the user interface.
- **React Router DOM**: For routing and navigation.
- **Axios**: For making HTTP requests.
- **CSS**: For styling the components.
- **Express**: Allows to set up middlewares to respond to HTTP Requests.

  #Folder Structure
-src/
-components/
-Add/
-AddPokemon.js: Component to add new Pokémon users.
-List/
-PokemonList.js: Component to list Pokémon users.
-pokemonUsers/

-AddPokemonToUser.js: Component to add Pokémon to a user.
-HomePage.js: Homepage component.
-PokemonOwnerList.js: Component to list Pokémon owners.
-PokemonStats.js: Component to view Pokémon stats.
-App.js: Main application component with routing.
-index.js: Entry point of the application.
-App.css: Global styles.
#Usage
-Add a Pokémon User: Click on "Add Pokemon User" to create a new Pokémon user.
-Add Pokémon to a User: Click on "Add Pokemon to User" to assign Pokémon to an existing user.
-Edit a Pokémon User: Click on "Edit" in the list to modify user details.View Pokémon Stats: Navigate to the Pokémon stats page to view detailed information about a Pokémon.
#API Endpoints
-GET /api/pokemon: Fetch all Pokémon users.
-POST /api/pokemon: Create a new Pokémon user.
-PUT /api/pokemon/:ownerName: Update an existing Pokémon user.
-DELETE /api/pokemon/:ownerName: Delete a Pokémon user.
-GET /api/pokemon-owners: Fetch all Pokémon owners.
-GET /api/pokemon/:pokemonId/stats: Fetch stats for a specific Pokémon



#For any questions or feedback, please contact ale shirisha

-Feel free to modify this `README.md` based on any additional details specific to your project or preferences.

