import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';
import './style/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);



// THIS IS REACT ROUTING NOT ALERT 2, CAN'T RENAME IT
//we see HEADER and FOOTER because there are used in LAYOUT already
//fuck