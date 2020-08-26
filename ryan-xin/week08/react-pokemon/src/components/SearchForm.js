import React from 'react';

class SearchForm extends React.Component{

  state = {
    query: ''
  };

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({
      query: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.query);
    this.props.onSearch(this.state.query);
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleInput} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
