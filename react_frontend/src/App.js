import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Mainfile from './components/mainfile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Sidebar from './components/admin2';
import './style.css';

function App() {
 
    return (
      <>
    
      <Router>
      <Routes>
        <Route path="/" element={<Mainfile/>}></Route>
     <Route path="/admin" element={<Sidebar/>}></Route>
      </Routes>
    </Router>
      </>
  );
   
    
  
}

export default App;
