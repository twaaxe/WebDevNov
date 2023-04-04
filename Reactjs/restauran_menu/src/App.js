import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './component/css/Style.css'
import Navigation from './component/Navigation';


import Breakfastmenu from './pages/Breakfastmenu';
import Lunchmenu from './pages/Lunchmenu';
import Rootmenu from './pages/Rootmenu';

import { Route, Routes, BrowserRouter} from 'react-router-dom'




function App() {

  

  return(
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootmenu />} />
          <Route path="/Breakfastmenu" element={<Breakfastmenu />} />
          <Route path="/Lunchmenu" element={<Lunchmenu />} />
        </Routes>
    </BrowserRouter>
      
    
  )
 
}

export default App;
