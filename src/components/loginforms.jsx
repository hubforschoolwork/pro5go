// import React, { useState } from 'react';

// function Loginform() {
//     const [formData, setFormData] = useState({ username: '', password: ''});
//     const [submissionStatus, setSubmissionStatus] = useState('');

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//             if (!formData.username || !formData.password) {
//             alert('All fields are required!');
//             return;
//         }

//         setSubmissionStatus('Your information has been submitted.');

//         setFormData({ username: '', password: '' });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='form-grid'>
//                 <label>Username:
//                     <input type="text" id='username' name="username" value={formData.username} onChange={handleChange} />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <label>Password:
//                     <input type="text" id='password' name="password" value={formData.password} onChange={handleChange} />
//                 </label>
//             </div>


//                 <div className='form-grid'>
//                     <button type="submit" id='button'>Submit</button>
//                     {submissionStatus && <p>{submissionStatus}</p>}
//                 </div>
//             </form>

//     );
// }

// export default Loginform;

// new version 2

// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios

// function Loginform() {
//     const [formData, setFormData] = useState({ username: '', password: ''});
//     const [submissionStatus, setSubmissionStatus] = useState('');

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!formData.username || !formData.password) {
//             alert('All fields are required!');
//             return;
//         }

//         try {
//             // Send username and password to backend
//             const response = await axios.post('http://localhost:3000/login', formData);
//             setSubmissionStatus(response.data.message); // Update status based on response
//         } catch (error) {
//             setSubmissionStatus('Invalid username or password');
//         }

//         setFormData({ username: '', password: '' });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='form-grid'>
//                 <label>Username:
//                     <input type="text" id='username' name="username" value={formData.username} onChange={handleChange} />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <label>Password:
//                     <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <button type="submit" id='button'>Submit</button>
//                 {submissionStatus && <p>{submissionStatus}</p>}
//             </div>
//         </form>
//     );
// }

// export default Loginform;

// **********************************************************************

// import React, { useState } from 'react';
// import axios from 'axios';

// function Loginform() {
//     const [formData, setFormData] = useState({ username: '', password: '' });
//     const [submissionStatus, setSubmissionStatus] = useState('');

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({ ...prevData, [name]: value.trimStart() }));
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         if (!formData.username || !formData.password) {
//             alert('All fields are required!');
//             return;
//         }

//         try {
//             console.log('Submitting:', formData);
//             const response = await axios.post('http://localhost:3000/api/login', formData);
//             setSubmissionStatus(response.data.message);

//             if (response.data.message === 'Login successful!') {
//                 setFormData({ username: '', password: '' });
//             }
//         } catch (error) {
//             if (error.response && error.response.data && error.response.data.error) {
//                 setSubmissionStatus(error.response.data.error);
//             } else {
//                 setSubmissionStatus('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div className='form-grid'>
//                 <label>Username:
//                     <input
//                         type="text"
//                         id='username'
//                         name="username"
//                         value={formData.username}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <label>Password:
//                     <input
//                         type="password"
//                         id='password'
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                     />
//                 </label>
//             </div>

//             <div className='form-grid'>
//                 <button type="submit" id='button'>Submit</button>
//                 {submissionStatus && <p>{submissionStatus}</p>}
//             </div>
//         </form>
//     );
// }

// export default Loginform;


// **********************************************************

import React, { useState } from "react";
import axios from "axios";

function Loginform() {
    const [formData, setFormData] = useState({ username: "", password: "" });

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Send login request to backend
            const response = await axios.post("http://localhost:3000/api/login", formData);
            alert(response.data.message);
            
            // Simulate token storage (replace with actual token handling for production)
            localStorage.setItem("authToken", "valid-token");

            // Redirect to dashboard
            window.location.href = "/dashboard";
        } catch (error) {
            // Display error from server or a generic message

            console.error("Error:", error.response || error.message);
            alert(error.response?.data?.error || "An error occurred. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-grid">
                <label>
                    Username:
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="form-grid">
                <label>
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div className="form-grid">
                <button type="submit" id="button">
                    Submit
                </button>
            </div>
        </form>
    );
}

export default Loginform;
