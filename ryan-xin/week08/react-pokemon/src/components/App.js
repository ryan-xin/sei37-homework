import React from 'react';
import {Route, Link, HashRouter as Router} from 'react-router-dom';
import Home from './Home';
import SearchByName from './SearchByName';
import SearchByType from './SearchByType';
import PokemonShow from './PokemonShow';


class App extends React.Component{
  render() {
    return(
      <div>
        <h1>Pokemon Search</h1>
        <hr />

        <Router>
          <nav>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/searchbyname">Search by Name</Link> | &nbsp;
            <Link to="/searchbytype">Search by Type</Link> | &nbsp;
          </nav>

          <Route exact path="/" component={Home} />
          <Route exact path="/searchbyname" component={SearchByName} />
          <Route exact path="/searchbytype" component={SearchByType} />
          <Route exact path="/pokemons/:query" component={PokemonShow} />

        </Router>

        <hr />
        <p>&copy; 2020 copyright pokemon.</p>

      </div>
    ); // return
  } // render
} // class App

export default App;
