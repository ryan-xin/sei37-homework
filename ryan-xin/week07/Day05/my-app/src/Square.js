import React from 'react';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
} // function Square

export default Square;

// Function component
// class Square extends React.Component{

// constructor(props){
//   super(props);
//   this.state = {
//     value: null
//   };
// } // constructor

//   render(){
//     return(
//       <button 
//         className="square" 
//         onClick={()=> this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     ); // return()
//   } // render()
// } // class Square