import React, { Component } from 'react';

class Product extends Component {
  render() {
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div className="thumbnail">
          <img src={this.props.img} alt="images"></img>
          <div className="caption">
            <h3>
              {this.props.name}
            </h3>
            <p>
              {this.props.name} VNĐ
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