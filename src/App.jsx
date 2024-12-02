import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Login from './pages/login.jsx';
import Registeruser from './pages/register.jsx';
import Welcome from './pages/welcome.jsx';
import Guest from './pages/guestarea.jsx';
import Testlink from './pages/testlink.jsx';
import Cooking from '/src/pages/cooking.jsx';
import Dashboard from './pages/dashboard.jsx';
import Giftshopping from './pages/giftshopping.jsx'
import Indoor from '/src/pages/indoor.jsx';
// import Outdoor from './pages/outdoor.jsx';
// import Sports from './pages/sports.jsx';


function App() {

  return (

<Router>

<div className="App">

      <MyNavbar />

        <Routes>

          <Route path="/" element={<Welcome/>} />

          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Registeruser/>} />
          <Route path="/guestarea" element={<Guest/>} />
          <Route path="/testlink" element={<Testlink/>} />
          <Route path="/cooking" element={<Cooking/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/giftshopping" element={<Giftshopping/>} />
          <Route path="/indoor" element={<Indoor/>} />



          {/* <Route path="/outdoor" element={<Outdoor/>} /> */}

          {/* <Route path="/sports" element={<Sports />} /> */} */ */


        </Routes>
</div>

</Router>


  )
}

export default App
