import React from 'react';
import Highlights from '../components/highlights.jsx';
import './guestarea.css'

function Guest() {
    return (
        <div className="form-container-1">
    
        <div>
        <h1>Hello Winter Fan!</h1>     
        <h3>Welcome to Winter Wonderland's Guest Area!</h3>
        <h3>Feel free to explore and enjoy the magic of the season!</h3>
        </div>

        <div className="form-container-2">
            <Highlights />
        </div>

    </div>
    );
}

export default Guest;



