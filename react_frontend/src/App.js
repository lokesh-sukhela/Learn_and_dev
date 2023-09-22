import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './style.css';
import SignUpAndSignInCombine from './components/login/SignUpAndSignInCombine';
import TrainingTable from './components/admintrainingtable/AdminTrainingTable';
import UserTrainingTable from './components/UserTrainingTable/UserTrainingTable';
import EditTraining from './components/edittrainingtitle/EditTraining';





function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<SignUpAndSignInCombine />}></Route>
          <Route path="/adminTrainingTable" element={<TrainingTable />}></Route>
          <Route path="/edit/:id" element={<EditTraining />}></Route>
          <Route path="/userTrainingTable" element={<UserTrainingTable />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
