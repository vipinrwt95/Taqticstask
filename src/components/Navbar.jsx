import React from 'react';


const Navbar = ({ cartCount, darkMode, toggleDarkMode, opencart }) => {
  return (
    <header className={`navbar ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className="navbar__title">TaqticsStore</h1>
      <div className="navbar__controls">
        <button className="navbar__button" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="navbar__cart" data-testid="cart-button" onClick={opencart}>
          🛒 {cartCount > 0 && <span className="navbar__badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Navbar;