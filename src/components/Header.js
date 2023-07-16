import React from 'react';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="header">
      <div className="community-name">
        <h1>Worth More Than Rubies</h1>
      </div>
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};

export default Header;

