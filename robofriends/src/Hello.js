import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      //class vs className => jsx: virtual Dom.  NB: class is reserved in JS
      <div className='f1 tc'>
        <h1> Hello Universe !!!</h1>
        //this.props => accesses the greeting prop-erty of Hello in index.js
        <p> {this.props.greeting} </p>
        </div>
    );
  }
}

export default Hello;
