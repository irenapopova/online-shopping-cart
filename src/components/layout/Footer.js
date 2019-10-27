import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          2018 &copy; Irena Popova{' '}
          <a
            href="https://irena-portfolio.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
          All rights reserved.
        </p>
        <p>Product's photos are from www.zalando.de</p>
      </footer>
    );
  }
}

export default Footer;
