import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [
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
          status: true,
        },
      ],
      isActive : true
    };
  }
  
  onSetState = () => {
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive: false
    //   });
    // }
    // else{
    //   this.setState({
    //     isActive: true
    //   })
    // }

    this.setState({
      isActive: !this.state.isActive
    })
  }
  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result =  <tr key = {index}>
                    <td>{ index }</td>
                    <td>{ product.name }</td>
                    <td>
                      <span className="label label-success">{ product.price }</span>
                    </td>
                  </tr>
      }
      return result;
    });

    return (
      <div>
        <Header />

        <div className="container">
          <div className="row">
            <div className="row">

             <table className="table table-bordered table-hover">
               <thead>
                 <tr>
                   <th>STT</th>
                   <th>Tên sản phẩm</th>
                   <th>Giá</th>

                 </tr>
               </thead>
               <tbody>
                 { elements }
               </tbody>
             </table>

             <button type="button" className="btn btn-default" onClick = {this.onSetState}>
               Active : { this.state.isActive === true ? 'true' : 'false'}  
             </button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;



