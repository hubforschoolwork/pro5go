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
        <div className="container text-center-main">
            <form onSubmit={handleSubmit}>
                <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>
                    <label>Username:
                        <input type="text" id='username' name="username" value={formData.username} onChange={handleChange}
                         style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }}  />
                    </label>
                </div>

                <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>
                    <label>Password:
                        <input type="password" id='password' name="password" value={formData.password} onChange={handleChange}
                         style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }} />
                    </label>
                </div>

                <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>
                    <label>Re-enter Password:
                        <input type="password" id='repeatpassword' name="repeatpassword" value={formData.repeatpassword} onChange={handleChange}
                         style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }} />
                    </label>
                </div>

                <div className='form-grid'>
                    <button type="submit" id='button'>Submit</button>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>

                <div className='container-policy'>
                    <p>* Usernames and passwords are case sensitive.</p>
                    <p>* Our terms of use and privacy policies apply to all visitors who access our website.</p>
                    <p>By submitting your registration, you are in agreement with these terms.</p>
                </div>

            </form>
        </div>
        </>
    );
}

export default Register;


