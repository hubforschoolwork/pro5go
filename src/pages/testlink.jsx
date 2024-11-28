import React from 'react';
import './testlink.css';
import Highlights from '../components/highlights.jsx';


function Welcome() {
    return (
        <>
        <div>
        <div className="form-container">
            <h1>Winter Wonderland</h1>
            <h2>Experience the Magic of the Season!</h2>
        </div>


        <Highlights />
           
        </div>

        </>
    );
}
export default Welcome;
