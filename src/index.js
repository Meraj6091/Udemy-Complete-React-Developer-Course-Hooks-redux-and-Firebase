import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Es6 from './playground/Es6';
import Es6_2 from './playground/Es6_2';
import Visibility_Toggle from './playground/Visibility_Toggle';
import Es6_classes from './playground/Es6_classes';

ReactDOM.render(
  <React.StrictMode>
    <Es6_classes></Es6_classes>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

