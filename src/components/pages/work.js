import React, { Component } from 'react';
import Random from './random.JPG';
import Solid from './solidsoap.JPG';
import Product from './product.JPG';
import Technical from './technical.JPG';

class Work extends Component {
  render() {
    return (
      <div id= "work" className="container-fluid">
        <a href='https://william-aderholdt.github.io/solidSoap/' target='_blank'><div id='workBox'>
            <h2>Solid Soap</h2>
            <div id='imgheight'>
                <img src={Solid} />
            </div>
            <ul>
                <li><i class="fab fa-html5"></i><div>HTML</div></li>
                <li><i class="fab fa-css3"></i><div>CSS</div></li>
                <li><i class="fab fa-js"></i><div>JavaScript</div></li>
                <li><i class="fab fa-react"></i><div>React.js</div></li>
            </ul>
        </div>
        </a>
        <a href='https://william-aderholdt.github.io/quoteApp/' target='_blank'>
        <div id='workBox'>
            <h2>Random Quote</h2>
            <div id='imgheight'>
                <img src={Random} />
            </div>
            <ul>
                <li><i class="fab fa-html5"></i><div>HTML</div></li>
                <li><i class="fab fa-css3"></i><div>CSS</div></li>
                <li><i class="fab fa-js"></i><div>JavaScript</div></li>
                <li><i class="fab fa-react"></i><div>React.js</div></li>
            </ul>
        </div>
        </a>
        <a href='https://william-aderholdt.github.io/productlanding/' target='_blank'>
        <div id='workBox'>
            <h2>Product Landing</h2>
            <div id='imgheight'>
                <img src={Product} />
            </div>
            <ul>
                <li><i class="fab fa-html5"></i><div>HTML</div></li>
                <li><i class="fab fa-css3"></i><div>CSS</div></li>
            </ul>
        </div>
        </a>
        <a href='https://william-aderholdt.github.io/technical/' target='_blank'>
        <div id='workBox'>
            <h2>Technical Details</h2>
            <div id='imgheight'>
                <img src={Technical} />
            </div>
            <ul>
                <li><i class="fab fa-html5"></i><div>HTML</div></li>
                <li><i class="fab fa-css3"></i><div>CSS</div></li>
            </ul>
        </div>
        </a>
      </div>
    );
  }
}

export default Work;