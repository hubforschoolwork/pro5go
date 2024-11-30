import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/navbar';
import './App.css';
import Login from './pages/login.jsx';
import Registeruser from './pages/register.jsx';
import Welcome from './pages/welcome.jsx';
import Guest from './pages/guestarea.jsx';
import Testlink from './pages/testlink.jsx';
import Cookingb from './pages/cooking.jsx';
// import Indoor from './pages/indoor.jsx';
// import Outdoor from './pages/outdoor.jsx';
import Giftshopping from './pages/giftshopping.jsx';
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

          <Route path="/indoor" element={<Indoor/>} />
          <Route path="/outdoor" element={<Outdoor/>} />
          <Route path="/giftshopping" element={<Giftshopping/>} />


          <Route path="/sports" element={<Sports/>} />


          <Route path="/cooking" element={<Cookingb/>} />
          <Route path="/cooking" element={<cooking/>} />

        </Routes>
</div>

</Router>


  )
}

export default App
