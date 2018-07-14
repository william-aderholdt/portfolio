import React, { Component } from 'react';
import Picture from './williamaderholdt.jpg';

class Homepage extends Component {
  render() {
    return (
      <div id="home" className="container-fluid">
        <h1>William Aderholdt</h1>
        <h2>a web developer</h2>
        <img src={Picture} alt='Picture of William Aderholdt' />
        <div>
          <a href="work"><i class="fas fa-chevron-circle-down"></i></a>
        </div>

      </div>
    );
  }
}

export default Homepage;