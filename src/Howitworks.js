import React, { Component } from 'react';
import Step from './StepsHowItWorks.js'
import delivery from './assets/delivery_icon.png';
import venmo from './assets/venmo_logo.png';
import order from './assets/order_icon.png';
class Howitworks extends Component {
  render() {
    return (
      <div className="how-it-works section">
        <h1>How it works</h1>
        <div className="product-list">
          <Step step={1} method="Make an order" img={order} />
          <Step step={2} method="Get a courier" img={delivery} />
          <Step step={3} method="Pay with Venmo" img={venmo} />
        </div>
      </div>
    );
  }
}

export default Howitworks;
