import React from 'react';
import Loginform from '../components/loginform.jsx';
import './login.css'

function Login() {
    return (
        <div className="form-container">
            <h3>Login</h3>
            
            <Loginform />
        </div>
    );
}

export default Login;
