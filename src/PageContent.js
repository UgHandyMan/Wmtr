// PageContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PlannerPage from './pages/PlannerPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import LogoutPage from './pages/LogoutPage';

const PageContent = () => {
  return (
    <div className="page-content">
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/planner" component={PlannerPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/logout" component={LogoutPage} />
      </Routes>
    </div>
  );
};

export default PageContent;

