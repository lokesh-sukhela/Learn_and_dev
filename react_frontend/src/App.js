import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Sidebar from './components/admin/AdminTrainingDetails';
import './style.css';
import SignUpAndSignInCombine from './components/login/SignUpAndSignInCombine';


function App() {
 
    return (
      <>
    
      <Router>
      <Routes>
        <Route path="/" element={<SignUpAndSignInCombine/>}></Route>
     <Route path="/admin" element={<Sidebar/>}></Route>
      </Routes>
    </Router>
      </>
  );
   
    
  
}

export default App;
