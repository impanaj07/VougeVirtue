import React from 'react';
import './index.css'; // Optional: Import styles
import App from './App'; // Import the App component
import reportWebVitals from './reportWebVitals'; // Optional: Import reportWebVitals
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
