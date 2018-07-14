import React, { Component } from 'react';

class Work extends Component {
  render() {
    return (
      <div id= "work" className="container-fluid">
        <div id='workBox'>
            <h2>Solid Soap</h2>
            <img />
            <p>Description</p>
            <ul>
                <li><i class="fab fa-html5"></i><div>HTML</div></li>
                <li><i class="fab fa-css3"></i><div>CSS</div></li>
                <li><i class="fab fa-js"></i><div>JavaScript</div></li>
                <li><i class="fab fa-react"></i><div>React.js</div></li>
            </ul>
        </div>
        <div id='workBox'>
            <h2>Solid Soap</h2>
            <img />
            <p>Description</p>
        </div>
        <div id='workBox'>
            <h2>Solid Soap</h2>
            <img />
            <p>Description</p>
        </div>
        <div id='workBox'>
            <h2>Solid Soap</h2>
            <img />
            <p>Description</p>
        </div>

      </div>
    );
  }
}

export default Work;