import React from 'react';
import Logo from './components/logo';
import Navigation from './components/navigation';

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
