import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check for empty fields
        if (!formData.username ||!formData.password) {


            alert('All fields are required!');
            return;
        }


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

    };

    return (
        <>
        <div className="d-flex justify-content-center" style={{ marginTop: "25px "}}>
        <div className="card mb-3 me-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img src="src/assets/man-498473_1280.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "98%", width: "200%", objectFit: "cover" }} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <div className="card-text"></div>



        <div className="container text-center-main">
            <form onSubmit={handleSubmit}>
                <div className='form-grid'>
                    <label>Username:
                        <input
                            type="text" 
                            id='username' 
                            name="username" 
                            value={formData.username} 
                            onChange={handleChange}
                            required // Adds HTML5 validation for required field
                            />
                    </label>
                </div>

                <div className='form-grid'>

                    <label>Password:
                        <input
                        type="password" 
                        id='password' 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange}
                        required // Adds HTML5 validation for required field
                        />

                    </label>
                </div>


                <div className='form-grid'>
                    <button type="submit" id='button'>Submit</button>
                    {submissionStatus && <p>{submissionStatus}</p>}
                </div>

                <div className='container-policy'>
                    <p>*Submitting this registration is an agreement to terms.</p>
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





