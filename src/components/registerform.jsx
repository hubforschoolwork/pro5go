import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '', repeatpassword: ''});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

            if (!formData.username || !formData.password || !formData.repeatpassword ) {
            alert('All fields are required!');
            return;
        }

        setSubmissionStatus('Your information has been submitted.');

        setFormData({ username: '', password: '', repeatpassword: '' });
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className='form-grid'>
                <label>Username:
                    <input type="text" id='username' name="username" value={formData.username} onChange={handleChange} />
                </label>
            </div>

            <div className='form-grid'>
                <label>Password:
                    <input type="text" id='password' name="password" value={formData.password} onChange={handleChange} />
                </label>
            </div>

            <div className='form-grid'>
                <label>Re-Enter Password:
                    <input type="text" id='repeatpassword' name="repeatpassword" value={formData.repeatpassword} onChange={handleChange} />
                </label>
            </div>


            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">
                I agree to the terms and conditions of this website.
                </label>
            </div>


            <div className='form-grid'>
                <button type="submit" id='button'>Submit</button>
                {submissionStatus && <p>{submissionStatus}</p>}
            </div>
        </form>
        
             </>

    );
}

export default Register;

