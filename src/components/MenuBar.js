import React from 'react';

const MenuBar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <nav className={`menu-bar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="toggle-sidebar-btn" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/planner">Planner</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <a href="/admin">Admin</a>
        </li>
        <li>
          <a href="/todo">Todo</a> {/* Add the link to the Todo page */}
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;

