import React, { Component } from 'react';

class Product extends Component {
  onAddToCart(text){
    alert(text);
    console.log(text);
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
              <a className="btn btn-default" onClick={() => {this.onAddToCart(this.props.children)}}>Mua ngay</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;