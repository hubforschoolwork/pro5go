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
      <div className='container text-center' id='santaset'>
        <div className="row">
          <div className="col">
            <img src="src/assets/santa-claus-1819933_1280.jpg" alt="Santa Claus" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
          </div>
          </div>
          </div>

          <div className="col-8 middle-column">
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
        </>
    );
}

export default Login;



// ********************************************************
// *****************************************************************

// import React from 'react';
// import './login.css';
// import Welcomebutton from '../components/welcomebutton.jsx';


// function Welcome() {
//   return (
//   <>
//   <div className='container'>
//     <div className='container-title'>
//       <div className="row">
//         <div className="col">
//           <h1>Winter Wonderland</h1>
//         </div>
//       </div>
//     </div>


//       <div className='container text-center' id='santaset'>
//         <div className="row">
//           <div className="col">
//             <img src="src/assets/santa-claus-1819933_1280.jpg" alt="Santa Claus" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
//           </div>

//           <div className="col-4 middle-column">
//             <h3>Discover the fun!</h3>
//             <h3>Enjoy the season!</h3>
//           </div>
          
//           <div className="col">
//             <img src="src/assets/cocoa-1908020_1280.jpg" alt="Cocoa" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
//           </div>
//         </div>
//       </div>

//     <div className='container'>
//       <div className="row">
//         <div className="col-md-4">
//           {/* <img src="src/assets/man-498473_1280.jpg" alt="Man" className="img-fluid rounded-start" style={{ height: "100%", objectFit: "cover" }}/>
//         </div>
//       <div className="col-md-6 offset-md-3"> */}
//       <Welcomebutton />
//       </div>
//     </div>
//     </div>
// </div>    
//     </>
//   );
// } 

// export default Welcome;
