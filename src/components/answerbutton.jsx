import React from 'react';
import { Link } from 'react-router-dom';



const Answerbutton = () => {
    return (
        <Link to="/answer" className="answer-button">
            <button type="submit">Submit Answer</button>
        </Link>
    )
}

export default Answerbutton;
