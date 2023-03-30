import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './component/Layout';
import './style/style.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './component/Contact';
import About from './component/About';
import Header from './component/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <Layout>
        <App />
      </Layout> */}

    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<App />} /> 
        {/* home page */}

        <Route path="/contact" element={<Contact />} />  
        {/* contact page */}

        <Route path="/about" element={<About />} />
        {/* about page */}
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);



// THIS IS REACT ROUTING NOT ALERT 2, CAN'T RENAME IT
//we see HEADER and FOOTER because there are used in LAYOUT already
//fuck