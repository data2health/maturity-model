import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
import './index.css';
import './styles/fonts.css';
import './styles/button.css';
import './styles/modal.css';
import './styles/bootstrap.min.css';

ReactDOM.render(
  <Root />,
  document.getElementById('root') as HTMLElement
);