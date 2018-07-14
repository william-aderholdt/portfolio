import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    return (
      <div id='testimonial' className="container-fluid">
        <div id='quote'>
            <i id='quotes' class="fas fa-quote-right"></i>
            <p>"This website is exactly as I imagined it would be. From the colors, to the layout. It is simple, clean, and effective -- just like our product."</p>
            <p>-Solid Soap</p>
        </div>
        <div id='quote'>
            <i id='quotes' class="fas fa-quote-right"></i>
            <p>When I gave William a project he would always find ways to improve upon the idea. Researching and reading to develop a better understanding of the subject. William always delivers in an outstanding way.</p>
            <p>-Supervisor</p>
        </div>
        <div id='quote'>
            <i id='quotes' class="fas fa-quote-right"></i>
            <p>"From the start, William showed himself to be a very conscientious, hardworking, and self-aware individual."</p>
            <p>-Professor</p>
        </div>


      </div>
    );
  }
}

export default Testimonial;