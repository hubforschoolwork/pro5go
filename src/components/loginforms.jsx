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


import React, { useState } from 'react';
import axios from 'axios'; // Import axios

function Loginform() {
    const [formData, setFormData] = useState({ username: '', password: ''});
    const [submissionStatus, setSubmissionStatus] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.username || !formData.password) {
            alert('All fields are required!');
            return;
        }

        try {
            // Send username and password to backend
            const response = await axios.post('http://localhost:3000/login', formData);
            setSubmissionStatus(response.data.message); // Update status based on response
        } catch (error) {
            setSubmissionStatus('Invalid username or password');
        }

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
                    <input type="password" id='password' name="password" value={formData.password} onChange={handleChange} />
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


