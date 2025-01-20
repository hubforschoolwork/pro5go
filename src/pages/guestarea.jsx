import React from 'react';
import Highlights from '../components/highlights.jsx';
import './guestarea.css'

function Guest() {
    return (
        <div className="form-container-1">
    
        <div>
        <h1>Hello Winter Fan!</h1>     
        <h3>Here's a sneak peak into what you can find on this website!</h3>

        </div>

        <div className="form-container-2">
            <Highlights />
        </div>

    </div>
    );
}

export default Guest;



