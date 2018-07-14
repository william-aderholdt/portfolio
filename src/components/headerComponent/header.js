import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
            <div><strike>WA</strike></div>
        </div>

        <nav>
            <ul>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Work</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>    
      </header>
    );
  }
}

export default Header;