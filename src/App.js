import React, { Component } from 'react';
import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import Section from './Section.js';
import CategorySection from './CategorySection.js';
import Howitworks from './Howitworks.js';
import Hour from './Hours.js';
import MainPic from './Jumbotron.js';
class App extends Component {
  render() {
    var product = {
      description: "Some quick example text to build on the card title " +
                    "and make up the bulk of the cards content.",
      brand: "Starbucks",
      price: 37
    };
    var products = Array(5).fill(product);
    var category = {title: "Snacks"}
    var categories = Array(8).fill(category);

    return (
      <div className="App">
        <Header />
        <MainPic />
        <Howitworks />
        <Hour />
        <Section title="Trending" products={products} />
        <Section title="Most Popular" products={products} />
        <Section title="Sale, limited time" products={products} />
        <CategorySection title="Categories" categories={categories} />
        <Footer />
      </div>
    );
  }
}

export default App;
