// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MenuBar from './components/MenuBar';
import PageContent from './PageContent'; 
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PlannerPage from './pages/PlannerPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LogoutPage from './pages/LogoutPage'; // Import the LogoutPage
import Footer from './components/Footer';
import Login from './components/Login';
import './advanced-styles.css';

const App = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleLogin = () => {
    setAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    const storedAuthStatus = localStorage.getItem('isAuthenticated');
    if (storedAuthStatus === 'true') {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {!isAuthenticated ? (
          <div className="login-page">
            <Login onLogin={handleLogin} />
          </div>
        ) : (
          <>
            <Header toggleSidebar={toggleSidebar} onLogout={handleLogout} />
            <div className="content-container">
              {isSidebarOpen && <Sidebar />}
              <div className={`main-content ${isSidebarOpen ? '' : 'expanded'}`}>
                <MenuBar toggleSidebar={toggleSidebar} />
		<PageContent />
                <Routes>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/blog" component={BlogPage} />
                  <Route path="/planner" component={PlannerPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/admin" component={AdminPage} />
                  <Route path="/logout" component={LogoutPage} /> {/* Add the route for the LogoutPage */}
                </Routes>
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
};

export default App;

