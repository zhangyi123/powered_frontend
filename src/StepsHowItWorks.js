import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
class Step extends Component {
  render() {
    return (
      <div className="product">
      <Card>
        <Card.Img variant="top" src={this.props.img} />
        <Card.Body>
          <Card.Text>
            Step: {this.props.step}
          </Card.Text>
          <Card.Text>
            {this.props.method}
          </Card.Text>
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default Step;
