import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import CoursesPage from './components/course/CoursesPage';

export default (
  <Route path="/" component={Layout} >
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
