import React, { PropTypes } from 'react';

const Header = ({ children }) => {
  return (
    <header className="site-header">
      <div className="site-header-content">
        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.any
};

export default Header;

