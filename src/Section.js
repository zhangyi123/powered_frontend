import React, { Component } from 'react';
import Product from './Product.js'
class Section extends Component {
  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <div className="product-list">
          {this.props.products.map((item,i) => (
            <Product
              description={item.description}
              brand = {item.brand}
              price = {item.price}  />
          ))}
        </div>
      </div>
    );
  }
}

export default Section;
