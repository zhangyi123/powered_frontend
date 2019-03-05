import React, { Component } from 'react';
import Category from './Category.js';

class CategorySection extends Component {
  render() {
    return (
      <div className="section">
        <h1>{this.props.title}</h1>
        <div className="category-list">
          {this.props.categories.map((item, i) => (
            <Category key={i} title={item.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default CategorySection;
