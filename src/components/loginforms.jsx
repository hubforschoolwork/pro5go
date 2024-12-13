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
