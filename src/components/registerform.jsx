import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    // const [formData, setFormData] = useState({ username: '', password: '', repeatpassword: '' });
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check for empty fields
        if (!formData.username ||!formData.password) {

        // if (!formData.username || !formData.password || !formData.repeatpassword) {
            alert('All fields are required!');
            return;
        }

        // Check if passwords match
        // if (formData.password !== formData.repeatpassword) {
        //     alert('Passwords do not match!');
        //     return;
        // }

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
        setFormData({ username: '', password: '' });
        // setFormData({ username: '', password: '', repeatpassword: '' });
    };

    return (
        <>
        <div className="d-flex justify-content-center">
        <div className="card mb-3 me-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img src="src/assets/man-498473_1280.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "100%", width: "200%", objectFit: "cover" }} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <div className="card-text"></div>



        <div className="container text-center-main">
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                {/* <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>     */}
                    <label>Username:
                        <input
                            type="text" 
                            id='username' 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            required // Adds HTML5 validation for required field
                            />
                            {/* // style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }}  /> */}
                    </label>
                </div>

                <div className='form-grid'>
                {/* <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>     */}
                    <label>Password:
                        <input
                        type="password" 
                        id='password' 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        />
                        {/* style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }} /> */}
                    </label>
                </div>

                {/* <div className='form-grid' style={{ textAlign: 'left', marginLeft: '0' }}>
                    <label>Re-enter Password:
                        <input type="password" id='repeatpassword' name="repeatpassword" value={formData.repeatpassword} onChange={handleChange}
                         style={{ width: '250%', padding: '1px', boxSizing: 'border-box' }} />
                    </label>
                </div> */}

                <div className='form-grid'>
                    <button type="submit" id='button'>Submit</button>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>

                <div className='container-policy'>
                    <p>* Usernames and passwords are case sensitive.</p>
                    <p>* By submitting your registration, you are in agreement with these terms.</p>
                </div>

            </form>
        </div>


        </div>
            </div>
          </div>
        </div>

</div>


        </>
    );
}

export default Register;





