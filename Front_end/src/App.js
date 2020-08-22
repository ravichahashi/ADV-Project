import React, { Component } from 'react'
import Header from './Header';
import Sign_up from './Sign_up';
import Sign_in from './Sign_in';
//import Menu from './Menu';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Sign_up/>
        <Sign_in/>
      </div>
    )
  }

}
