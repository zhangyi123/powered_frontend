import React, { Component } from 'react';
import prod from './assets/prod.png';
import Card from 'react-bootstrap/Card';
class Product extends Component {
  render() {
    return (
      <div className="product">
      <Card >
        <Card.Img variant="top" src={prod} />
        <Card.Body>
          <Card.Text>
            Description: {this.props.description}
          </Card.Text>
          <Card.Text>
            Brand: {this.props.brand}
          </Card.Text>
          <Card.Text>
            Price: {this.props.price}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Product;
