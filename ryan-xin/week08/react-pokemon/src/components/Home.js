import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Home extends React.Component{

  state = {
    pokemons: [],
    imageURL: ''
  };

  componentDidMount = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1048')
    .then(respond => {
      console.log(respond.data.results);
      this.setState({pokemons: respond.data.results});
    })
    .catch(error => console.log(error));
  };

  // getImageURL = (pokemon) => {
  //   // console.log(pokemon.url);
  //   axios.get(pokemon.url)
  //   .then(respond => {
  //     // console.log(respond.data.sprites.front_default);
  //     this.setState({imageURL: respond.data.sprites.front_default});
  //   })
  //   .catch(error => console.log(error));
  // };

  render(){
    return(
      <div>
        <h2>All Pokemons</h2>
          {
            this.state.pokemons.map(pokemon => (
              <Link to={`/pokemons/${pokemon.name}`}><p>{pokemon.name}</p></Link>
            ))
          }
      </div>
    ); // return
  } // render
} // class Home

export default Home;
