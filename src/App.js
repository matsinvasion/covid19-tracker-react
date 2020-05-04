import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './componets/Cards/Card';
import CountryPicker from './componets/CountryPicker/CountryPicker';
import Charts from './componets/Chart/Chart'


class App extends Component {
  state = {  }
  render() { 
    return (
      <div className="App">
        <card />
        <CountryPicker />
        <Charts />
      </div>
    );;
  }
}
 
export default App;


