import React from 'react';
import Loginform from '../components/loginforms.jsx';
import './login.css'

function Logins() {
    return (
    <>
      
{/* <div className='form-container'> */}
  <div className='container-title'>
    <div className="row">
      <div className="col">
        <h1>Winter Wonderland</h1>
      </div>
    </div>
  </div>    
{/* </div> */}

<div className="form-container">
  <h1>Login</h1>
</div>

<Loginform />          

    </>
    );
}

export default Logins;

