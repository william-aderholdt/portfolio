import React, { Component } from 'react';
import './Assets/css/default.min.css';

//components
import Footer from './components/footerComponent/footer';
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Work from './components/pages/work';
import Testimonial from './components/pages/testimonial';
import Contact from './components/pages/contact';

class App extends Component {
  render() {
    return (
      <div id="app" className="App">

        <div id='wrapper'>
          <Header />
          <Homepage />
          <Work />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
