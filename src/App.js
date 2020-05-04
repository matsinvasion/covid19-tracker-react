import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './componets/Cards/Card';
import CountryPicker from './componets/CountryPicker/CountryPicker';
import Charts from './componets/Chart/Chart';
import styles from './App.module.css';
import { fetchData } from './api';




class App extends Component {
  state = { data:{} }
  async componentDidMount(){
    const requiredData = await fetchData();
    this.setState({ data : requiredData })
  }
  
  render() { 
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data}/>
        <CountryPicker />
        <Charts />
      </div>
    );;
  }
}
 
export default App;


