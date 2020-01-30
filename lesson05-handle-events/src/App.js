import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  onClick(){
    console.log("Day la click button");
  }
  render() {
    var products = [
      {
        id: 1,
        name: 'iPhone 11 Pro Max',
        price: 15500000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        status: true,
      },
      {
        id: 2,
        name: 'iPhone 11',
        price: 15500000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        status: true,
      },
      {
        id: 3,
        name: 'iPhone 11 Pro',
        price: 15500000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/190321/iphone-xs-max-gold-600x600.jpg',
        status: false,
      },
    ];

    let elemets = products.map((product, index) => {
      let result = '';
      if(product.status){
        result =  <Product
                    key = {product.id}
                    price={product.price}
                    image={product.image}

                  >
                    {product.name}
                  </Product>
      }
      return result;
      
    });
    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
                {elemets}
              </div>
              
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-default" onClick={this.onClick}>
                  Click me!
                </button>
              </div>
              

            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default App;



