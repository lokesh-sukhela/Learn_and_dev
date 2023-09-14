import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Sidebar from './components/admin/AdminTrainingDetails';
import './style.css';
import SignUpAndSignInCombine from './components/login/SignUpAndSignInCombine';
import TrainingTable from './components/admintrainingatble/AdminTrainingTable';



function App() {
 
    return (
      <>
      <Router>
      <Routes>
        <Route path="/" element={<SignUpAndSignInCombine/>}></Route>
       <Route path="/adminTrainingTable" element={<Sidebar/>}></Route>
      <Route path="/admin" element={<TrainingTable/>}></Route>
        </Routes>
    </Router>
      </>
  ); 
}
export default App;
