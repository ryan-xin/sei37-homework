import React from 'react'
import {Link} from 'react-router-dom';

const SearchResults = (props) => {
  return(
    <div>
      <h4>Results:</h4>
      {props.pokemons.map(pokemon => (
          <Link to={`/pokemons/${pokemon.pokemon.name}`}><p>{pokemon.pokemon.name}</p></Link>
        )
      )}
    </div>
  );
}

export default SearchResults;