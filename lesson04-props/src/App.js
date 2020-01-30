import React, { Component } from 'react';
import './App.css'; 
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          
          <div className="container">
            <div className="row">
              
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                <Product 
                  name="Apple Iphone 6 Plus 16GB"
                  price="15999900"
                  img="https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg"
                />
               
                </div>
              </div>
              
            </div>
          </div>

      </div>
    );
  }
}

export default App;



