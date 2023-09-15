import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/admin/AdminTrainingDetails';
import './style.css';
import SignUpAndSignInCombine from './components/login/SignUpAndSignInCombine';
import TrainingTable from './components/admintrainingtable/AdminTrainingTable';
import UserTrainingTable from './components/UserTrainingTable/UserTrainingTable';
import DemoTable from './components/admintrainingtable/demotable';



function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<SignUpAndSignInCombine />}></Route>
          {/* <Route path="/admin" element={<Sidebar />}></Route> */}
          <Route path="/adminTrainingTable" element={<TrainingTable />}></Route>
          <Route path="/DemoTable" element={<DemoTable />}></Route>
          <Route path="/userTrainingTable" element={<UserTrainingTable />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
