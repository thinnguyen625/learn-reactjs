import React, { Component } from 'react';

class Product extends Component {
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
              <a href="https://www.facebook.com/" className="btn btn-primary">Them vao gio</a>
              <a href="https://www.facebook.com/" className="btn btn-default">Mua ngay</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;