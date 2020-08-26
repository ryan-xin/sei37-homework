import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

class SearchByType extends React.Component{

  state = {
    pokemons: [],
    totalResults: -1
  }

  performSearch = (query) => {
    console.log(query);
    axios.get(`https://pokeapi.co/api/v2/type/${query}`)
    .then(respond => {
      console.log(respond);
      this.setState({pokemons: respond.data.pokemon})
      this.setState({totalResults: respond.data.pokemon.length})
    })
    .catch(error => console.log(error));
  }

  render() {
    return(
      <div>
        <h2>Search by Type</h2>
          <SearchForm onSearch={this.performSearch}/>
        <hr />
          {this.state.totalResults >= 0 && <h4>Total Results: {this.state.totalResults}</h4>}
          {this.state.pokemons.length > 0 && <SearchResults pokemons={this.state.pokemons} />}
      </div>
    ); // return
  } // render
} // class SearchByType

export default SearchByType;
