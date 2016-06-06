import React from 'react';
import { Header, Footer } from './';

const Main = () => {
  return (
    <div className="main">
      <Header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </nav>
      </Header>
      <Footer>&copy; {new Date().getFullYear()} </Footer>
    </div>
  );
};

Main.propTypes = {

};

export default Main;

