import React from 'react';
import './welcome.css';
import Welcomebutton from '../components/welcomebutton.jsx';




function Welcome() {
    return (
        <>
        <div>
        <div className="form-container">
            <h1>Winter Wonderland</h1>
            <h2>Experience the Magic of the Season!</h2>
        </div>

        <Welcomebutton />
           
        </div>
        </>
    );
}

export default Welcome;

