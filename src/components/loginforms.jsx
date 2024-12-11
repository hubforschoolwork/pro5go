import React, { useState } from 'react';

function Loginform() {
    const [formData, setFormData] = useState({ username: '', password: ''});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

            if (!formData.username || !formData.password) {
            alert('All fields are required!');
            return;
        }

        setSubmissionStatus('Your information has been submitted.');

        setFormData({ username: '', password: '' });
    };

    return (
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
                    <button type="submit" id='button'>Submit</button>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>
            </form>

    );
}

export default Loginform;

