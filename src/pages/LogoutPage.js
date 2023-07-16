// LogoutPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  useEffect(() => {
    // Handle the logout action here
    // Remove the authentication status from local storage
    localStorage.removeItem('isAuthenticated');
  }, []);

  return (
    <div>
      <h2>Logout Successful!</h2>
      <p>You have been logged out successfully.</p>
      <Link to="/login">Click here to login again</Link>
    </div>
  );
};

export default LogoutPage;

