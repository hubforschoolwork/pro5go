import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginform from '../components/loginform.jsx';


<div>
      <h1>Winter Wonderland</h1>
      <h2>Experience the Magic of the Season!</h2>
</div>


function App() {

  return (

<Router>

<div className="App">



      {/* <MyNavbar /> */}

        <Routes>

          <Route path="/" element={<Todo/>} />


          <Route path="/login" element={<Login/>} />


        </Routes>

</div>

</Router>


  )
}

export default App
