import React, { Component } from 'react';
import snacks from './assets/snacks-flat-icon.jpg';
import Card from 'react-bootstrap/Card';

class Category extends Component {
  render() {
    return (
      <div className="category">
        <Card className="bg-dark">
          <Card.Img src={snacks} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default Category;
