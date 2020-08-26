import React from 'react';

class Calculator extends React.Component {

  state = {
    firstNumber: 0,
    secondNumber: 0
  };

  updateFirstNumber = (e) => {
    this.setState({
      firstNumber: parseInt(e.target.value)
    });
  }

  updateSecondNumber = (e) => {
    this.setState({
      secondNumber: parseInt(e.target.value)
    });
  }

  render() {
    const a = this.state.firstNumber;
    const b = this.state.secondNumber;

    return (
      <div>
        <h1>React Calculator</h1>
        <input type="text" placeholder="First Number" onChange={this.updateFirstNumber} />
        <input type="text" placeholder="Second Number" onChange={this.updateSecondNumber} />
        <h3>Results</h3>
        <p>{a} + {b} = {a + b}</p>
        <p>{a} - {b} = {a - b}</p>
        <p>{a} * {b} = {a * b}</p>
        <p>{a} / {b} = {a / b}</p>
      </div>
    );
  }
}

export default Calculator;
