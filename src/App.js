import "./Styles/login.css";
import "./Styles/App.css";
import "./Styles/doctor.css";
import "./Styles/Patient.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Doctor from './components/Doctor.jsx'
import Login from './components/Login.jsx';
import Patient from './components/Patient.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Patient" element = {<Patient/>}/>
      </Routes>
    </Router>
    
  ); 
}

export default App;
