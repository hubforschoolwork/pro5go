import React from 'react';
import {Link} from 'react-router-dom';



const Questionbutton = () => {
    return (
        <Link to="/answer" className="question-button">
             <button type="submit">Submit Question</button>
        </Link>
    )
}

export default Questionbutton;
