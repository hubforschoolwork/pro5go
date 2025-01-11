import React, { useState } from "react";
import axios from "axios";
import { useAuth } from '../js/AuthContext'; // Without .jsx
import { useNavigate } from 'react-router-dom';
import './loginforms.css';

function Login() {
    const { login } = useAuth(); // Accessing login function from AuthContext
    const navigate = useNavigate(); // Hook for navigation
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState(""); // To handle any error messages

    // Handle form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form submitted", formData); // Debugging log

        try {
            const response = await axios.post("http://localhost:3000/api/login", formData);
            console.log("Response received:", response.data);
            alert(response.data.message);

            // Simulate token storage (replace with actual token handling)
            localStorage.setItem("authToken", response.data.token); // Assuming your backend sends a token
            localStorage.setItem("username", formData.username);

            // Use the login function from AuthContext
            login(formData.username); // Update user in context

            navigate("/dashboard"); // Redirect to dashboard using navigate
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setError(error.response?.data?.error || "An error occurred. Please try again.");
        }
    };

    return (
        <>
        <div className="container">
            <form onSubmit={handleSubmit}>
                {error && <div className="error-message">{error}</div>}

                <div className="form-grid">
                    <label>
                        Username:
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required // Adds HTML5 validation for required field
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
                            required // Adds HTML5 validation for required field
                        />
                    </label>
                </div>

                {/* <div className='container'>
                    <div className="col-md-6 offset-md-3">
                    <button type="submit" className="button1">Submit</button>
                    </div>
                </div> */}


                <div className='form-grid'>
                    <button type="submit" id='button1'>Submit</button>
                </div>

                <div className='policy'>
                    <p>*Usernames and passwords are case sensitive.</p>
                </div>
                
            </form>
            </div>
        </>
    );
}

export default Login;


