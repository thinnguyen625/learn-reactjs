import React, { Component } from 'react';

class Product extends Component {
  // constructor(props){
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }
  // onAddToCart(){
  //   alert(this.props.children + ' - ' + this.props.price);
  // }
  //Su dung arrow function
  onAddToCart2 = () =>{
    alert(this.props.children + ' - ' + this.props.price);
  }
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img src={this.props.image} alt="images"></img>
          <div className="caption">
            <h3>
              {this.props.children}
            </h3>
            <p>
              {this.props.price} VNĐ
            </p>
            <p>
              <a href="http://localhost:3000/"className="btn btn-default" onClick={this.onAddToCart2 }>Mua ngay</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;