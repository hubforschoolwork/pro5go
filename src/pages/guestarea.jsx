import React from 'react';
import Highlights from '../components/highlights.jsx';
import './guestarea.css'

function Guest() {
    return (
        <div className="form-container">
    
        <div>
        <h1>Hello Winter Fan!</h1>
        
        <h2>Welcome to Winter Wonderland's Guest Area!</h2>

        <h3>Feel free to explore and enjoy the magic of the season!</h3>
            
            <Highlights />
        </div>
        </div>
    );
}

export default Guest;



