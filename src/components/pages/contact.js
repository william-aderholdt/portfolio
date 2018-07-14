import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div id="contact" className="container-fluid">
        <h3>Currently looking for employment as a full-time or part-time Web Developer.</h3>
        <ul>
            <a href="https://github.com/william-aderholdt" target="_blank"><li><i class="fab fa-github"></i></li></a>
            <a href="https://www.linkedin.com/in/david-aderholdt-m-ed-22a281a4/" target="_blank"><li><i class="fab fa-linkedin-in"></i></li></a>
        </ul>
        <div>
        <a href="mailto:william.aderholdt@gmail.com"><i class="far fa-envelope"></i></a>
        <p>William.Aderholdt@gmail.com</p>
        <p>(406) 853-8552</p>
        </div>
      </div>
    );
  }
}

export default Contact;