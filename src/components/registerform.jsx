import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '', repeatpassword: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check for empty fields
        if (!formData.username || !formData.password || !formData.repeatpassword) {
            alert('All fields are required!');
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.repeatpassword) {
            alert('Passwords do not match!');
            return;
        }

// ********************************************
//         ("http://localhost:3000/api/login", formData);
        try {
            const response = await axios.post('http://localhost:3000/api/register', {
                username: formData.username,
                password: formData.password
            });
            setSubmissionStatus(response.data.message);
        } catch (err) {
            setSubmissionStatus(err.response.data.message);
        }

         // Reset form data
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
                        <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} />
                    </label>
                </div>

                <div className='form-grid'>
                    <label>Re-Enter Password:
                        <input type="password" id='repeatpassword' name="repeatpassword" value={formData.repeatpassword} onChange={handleChange} />
                    </label>
                </div>

                <div className='policy'>
                    <p>*Our terms of use and privacy policies apply to all visitors who access our website.</p>
                    <p>By submitting your registration, you are in agreement with these terms.</p>
                </div>

                <div className='form-grid'>
                    <button type="submit" id='button'>Submit</button>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>

                <div className='policy'>
                    <p>* Usernames and passwords are case sensitive.</p>
                </div>

            </form>
        </>
    );
}

export default Register;
