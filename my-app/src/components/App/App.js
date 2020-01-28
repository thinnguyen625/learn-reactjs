import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Middle from '../Middle/Middle'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Middle />
        <Footer />
      </div>
    );
  }
}

export default App;

