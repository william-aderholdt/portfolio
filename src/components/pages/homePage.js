import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div id="home" className="container-fluid">
        <h1>William Aderholdt</h1>
        <h2>a web developer</h2>
        <div>
          <a href="work"><i class="fas fa-chevron-circle-down"></i></a>
        </div>

      </div>
    );
  }
}

export default Homepage;