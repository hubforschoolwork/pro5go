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
        {/* <div className="container text-center-main">
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


                <div className="form-grid">
                    <button type="submit">Submit</button>
                </div>


                <div className="container-policy">
                    <p>*Usernames and passwords are case sensitive.</p>
                </div>


            </form>
        </div> */}

{/* ****************************************************************** */}

        <div className="d-flex justify-content-center">
        <div className="card mb-3 me-3" style={{ maxWidth: "800px" }}>
          <div className="row g-0">
            <div className="col-md-5">
              <img src="src/assets/man-498473_1280.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "100%", width: "200%", objectFit: "cover" }} />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">Login</h5>
                <div className="card-text">
                    
                <div className="container text-center-main">
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
                    
                    
                <div className="form-grid">
                    <button type="submit">Submit</button>
                </div>


                <div className="container-policy">
                    <p>*Usernames and passwords are case sensitive.</p>
                </div>   
                 
            </form>                
            
                    
                    
                    
                    </div>

              </div>
            </div>
          </div>
        </div>

</div>
</div>


        </>
    );
}

export default Login;

