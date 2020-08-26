import React from 'react';
import axios from 'axios';

class PokemonShow extends React.Component{

  state = {
    imageURL: ''
  }

  componentDidMount = () => {
   axios.get(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.query}`)
   .then(respond => {
     console.log(respond.data.sprites.front_default);
     this.setState({imageURL: respond.data.sprites.front_default});
   })
   .catch(error => console.log(error));
  }

  render() {
    return(
      <div>
        <h3>{this.props.match.params.query.toUpperCase()}</h3>
        <img src={this.state.imageURL} />
      </div>
    );
  }
}

export default PokemonShow;
