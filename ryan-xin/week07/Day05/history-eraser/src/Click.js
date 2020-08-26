import React from 'react';

class Click extends React.Component {

  state = {
    number: 0
  }

  clearHistory = () => {
    this.setState({
      number: this.state.number + 1
    });
    this.props.clickHandler(this.state.number + 1);
  }

  backupHistory = () => {
    this.setState({
      number: 0
    });
    this.props.clickHandler(0);
  }

  render() {
    return(
      <div className="button">
        <button onClick={this.clearHistory}>Clear History</button>
        <button onClick={this.backupHistory}>Back Up</button>
      </div>
    );
  }
}

export default Click;
