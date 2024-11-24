import React from 'react';
import {Link} from 'react-router-dom';


// const Welcomebutton = () => {
//     return (

// <div className='form-grid'>
// <button type="submit" class="btn btn-primary btn-lg" id='button'>Submit</button>
// {/* {submissionStatus && <p>{submissionStatus}</p>} */}
// </div>



const Welcomebutton = () => {
    return (
        <Link to="/welcome" className="welcome-button">
            <AddIcon />
        </Link>
    )
}

export default Welcomebutton;