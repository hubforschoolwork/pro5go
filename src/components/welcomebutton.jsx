import React from 'react';
import {Link} from 'react-router-dom';
import './welcomebutton.css';



// const Welcomebutton = () => {
//     return (
//         <Link to="/guestarea" className="welcome-button">
//              <button type="submit">Enter as Guest</button>
//         </Link>
//     )
// }

// export default Welcomebutton;


const Welcomebutton = () => {
    return (
        <Link to="/guestarea">
            <button type="submit" className="Welcomebutton">Enter as Guest</button>
        </Link>
    );
};

export default Welcomebutton;

