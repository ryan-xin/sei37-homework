import React from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

class SearchByName extends React.Component{

  state = {
    pokemonName: '',
    imageURL: ''
  };

  performSearch = (query) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`)
    .then(respond => {
      console.log(respond);
      // this.setState({pokemonName: respond.data.name});
      // this.setState({imageURL: respond.data.sprites});
      // TODO:
      const path = `/pokemons/${respond.data.name}`;
      this.props.history.push(path);
    })
    .catch(error => console.log(error));
  };

  render() {
    return(
      <div>
        <h2>Search by Name</h2>
        <SearchForm onSearch={this.performSearch}/>
        <h3>{this.state.pokemonName}</h3>
        <img src={this.state.imageURL.front_default} />
      </div>
    ); // return
  } // render
} // class SearchByName

export default SearchByName;
