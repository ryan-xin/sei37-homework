import React from 'react';
import Click from './Click';

class HistoryEraser extends React.Component {

  state = {
    clickNumber: 0,
    status: 'All good. History exists.',
    list: [
      {text: 'A'},
      {text: 'B'},
      {text: 'C'}
    ],
    list2: [
      <p key="1">a</p>,
      <p key="2">b</p>,
      <p key="3">c</p>
    ]
  }

  responseFromClick = (count) => {
    this.setState({clickNumber: count});
    if(count > 4) {
      this.setState({status: 'History erased!'})
    } else if(count === 0) {
      this.setState({status: 'All good. History exists.'})
    }
  }

  render() {
    return(
      <div className="main_wrapper">
        <h1>History Eraser</h1>
        <h3>{this.state.status}</h3>
        <Click clickHandler={this.responseFromClick}/>
        <p>Click: {this.state.clickNumber}</p>
        <hr />
        {this.state.list.map((item, index) => <p key={index}>{item.text}</p>)}
        {this.state.list2}
      </div>
    );
  }
}

export default HistoryEraser;
