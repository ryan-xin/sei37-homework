import React from 'react';

class SearchByName extends React.Component{

  state = {
    query: ''
  };

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({state: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const path = `/pokemons/${this.state.query}`;
    this.props.history.push(path);
  };

  render() {
    return(
      <div>
        <h2>Search by Name</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} />
          <button>Search</button>
        </form>
      </div>
    ); // return
  } // render
} // class SearchByName

export default SearchByName;
