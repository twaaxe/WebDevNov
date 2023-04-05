import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from './component/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Style.css'
// import {} from "react-router";
import { BrowserRouter,  Route, Routes  } from "react-router-dom";

import Project1 from './component/pages/Project1';
import Project2 from './component/pages/Project2';
import Project3 from './component/pages/Project3';
import Project4 from './component/pages/Project4';
import Footer from './component/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/Project2" element={<Project2 />} />
        <Route path="/Project3" element={<Project3 />} />
        <Route path="/Project4" element={<Project4 />} />
      </Routes>
    </Layout>
    <Footer />
  </BrowserRouter>
);

