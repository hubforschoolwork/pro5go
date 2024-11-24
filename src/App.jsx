import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Login from './pages/login.jsx';
import Registeruser from './pages/register.jsx';

{/* <div>
      <h1>Winter Wonderland</h1>
      <h2>Experience the Magic of the Season!</h2>
</div> */}


function App() {

  return (

<Router>

<div className="App">



      <MyNavbar />

        <Routes>

          {/* <Route path="/" element={<Todo/>} /> */}


          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registeruser/>} />

        </Routes>

</div>

</Router>


  )
}

export default App
