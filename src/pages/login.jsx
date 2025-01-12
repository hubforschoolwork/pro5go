import React from 'react';
import Loginform from '../components/loginforms.jsx';
import './login.css'

function Logins() {
    return (
        
        <div className='container-title'>
                  <div className="row">
            <div className="col">
                <h1>Login</h1>
            </div>
        </div>


        <div className="form-container">            
            <Loginform />
            
        </div>
        </div>

    );
}

export default Logins;

