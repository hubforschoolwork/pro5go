import React from 'react';
// import './cooking.css'


function Questionit() {
    return (
        <>
        <div className="form-container">
            <h2>Ask a Question</h2>
            <h4>Get great ideas, tips and inspiration from our Winter Wonderland community.</h4>            
        </div>

        <div className='form-grid'>
                <label>Enter Question Here:
                    <textarea name="message" id='message' />
                </label>
            </div>
        {/* <div className='form-grid'>
                <label>Enter Question Here:
                    <textarea name="message" id='message' value={formData.message} onChange={handleChange} />
                </label>
            </div> */}


        </>
    );
}

export default Questionit;

