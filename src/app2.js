import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuBar from './components/MenuBar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PlannerPage from './pages/PlannerPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';
import Login from './components/Login';
import './advanced-styles.css'; // Import the advanced CSS file

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setAuthenticated(true);
  };

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <div className="app-container">
        {!isAuthenticated && <Login onLogin={handleLogin} />}
        {isAuthenticated && (
          <>
            <Header toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <div className="content-container">
              {isSidebarOpen && <Sidebar />}
              <div className={`main-content ${isSidebarOpen ? '' : 'expanded'}`}>
                <MenuBar toggleSidebar={toggleSidebar} />
                <Routes>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/blog" component={BlogPage} />
                  <Route path="/planner" component={PlannerPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/admin" component={AdminPage} />
                </Routes>
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

