import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import BlogPage from './pages/BlogPage';

export const App: FC = () => {
  return (
    <Router>
      <>
        <NavBar />
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/resume">
            <ResumePage />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
};

export default App;
