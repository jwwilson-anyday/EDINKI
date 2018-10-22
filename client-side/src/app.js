import React from 'react';
import ReactDOM from 'react-dom';

import Container from './components/container';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Container />
  </BrowserRouter>,
  document.getElementById('app')
);
