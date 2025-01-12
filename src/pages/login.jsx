import React from 'react';
import Loginform from '../components/loginforms.jsx';
import './login.css'

function Logins() {
    return (
    <>
      
       <div className="form-container">
       <h1>Login</h1>
       </div>

       <div className='container-title'>
      <div className="row">
        <div className="col">
          <h1>Winter Wonderland</h1>
        </div>
      </div>
    </div>    

       <Loginform />          


        <div className="card mb-3">
            <img src="src/assets/man-498473_1280.jpg" class="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Outdoor Activities</h5>
            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p className="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
            </div>
            </div>

    </>
    );
}

export default Logins;

