import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Login from './pages/login.jsx';
import Registeruser from './pages/register.jsx';
import Welcome from './pages/welcome.jsx';
import Dashboard from './components/dashboardc';

function App() {

  return (

<Router>

<div className="App">

      <MyNavbar />
        <Routes>

          <Route path="/" element={<Welcome/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registeruser/>} />

        </Routes>

</div>

</Router>


  )
}

export default App
