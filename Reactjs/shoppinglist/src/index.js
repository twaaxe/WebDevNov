import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './component/layout'
import App from './App';
import './style/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Layout>
      <App/>
    </Layout>
  </React.StrictMode>
);


