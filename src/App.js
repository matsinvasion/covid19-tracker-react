import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './componets/Cards/Card';
import CountryPicker from './componets/CountryPicker/CountryPicker';
import Charts from './componets/Chart/Chart';
import styles from './App.module.css';
import { fetchData } from './api';

import coronaImage from './images/image.png'; 





class App extends Component {
  state = { data:{},
  country:'' 
}
  async componentDidMount(){
    const requiredData = await fetchData();
    this.setState({ data : requiredData })
  }
  handleCountryChange = async (country) =>{
    const fetchdData = await fetchData(country);
    this.setState({data:fetchdData, country:country})

  }
  render() { 
    const {data, country} = this.state;
    return (
      <div className={styles.container}>
        <img className = {styles.image} src={coronaImage} alt="Covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Charts data={data} country={country}/>
      </div>
    );;
  }
}
 
export default App;


