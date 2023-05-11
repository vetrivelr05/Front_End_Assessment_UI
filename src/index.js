import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import ListView from './components/list-view';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './css/dist/output.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Readex+Pro:wght@200;300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
