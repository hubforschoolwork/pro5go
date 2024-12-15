import React from 'react';
// import './cooking.css'

function Answerit() {
    return (
        <>
        <div className="form-container">
            <h2>Answer a Question</h2>
            <h4>Help others find inspiration and helpful tips.</h4>            
        </div>

        <div className='form-grid'>
                <label>Answer Question Here:
                    <textarea name="message" id='message' />
                </label>
            </div>  
        </>
    );
}

export default Answerit;

