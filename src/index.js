import 'babel-polyfill'; //this is the full babel-polyyfill file ... 50k .. not for prod
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import CSS files too
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('layout')
);
