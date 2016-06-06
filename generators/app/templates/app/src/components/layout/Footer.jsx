import React, { PropTypes } from 'react';

const Footer = ({ children }) => (
  <footer className="site-footer">
    <div className="site-footer-content">
      <div>{children}</div>
    </div>
  </footer>
);

Footer.propTypes = {
  children: PropTypes.any
};

export default Footer;

