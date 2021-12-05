import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.min.css';
import ProductLayout from './Products/components/ProductLayout';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <React.StrictMode>
    <ProductLayout />
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
