import React from 'react';
import {Link} from 'react-router-dom';



const Welcomebutton = () => {
    return (
        <Link to="/guestarea" className="welcome-button">
             <button type="submit">Enter</button>
        </Link>
    )
}

export default Welcomebutton;
