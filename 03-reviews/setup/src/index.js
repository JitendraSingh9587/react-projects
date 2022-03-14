// importing react from react module
import React from 'react';
// importing reactDom from react module
import ReactDOM from 'react-dom';
// importing index.css for the css
import './index.css';
// importing App component from app.js
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* importing App component from the app.js file */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
