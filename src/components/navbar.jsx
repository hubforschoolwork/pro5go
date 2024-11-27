import React from 'react';
// import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Apply the fixed-top class here */}
            <div className="container">
                <a className="navbar-brand" href="/">Winter Wonderland</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Log In</a>
                        </li>
                      
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Register</a>
                        </li>
                       
                        <li className="nav-item">
                            <a className="nav-link" href="#">Test Link</a>
                        </li>

                    </ul>
                </div>

                <div class="d-flex align-items-center">
        <span class="text-danger me-2">Live Quotes:</span>
        <a href="/login" target="_blank" rel="noopener noreferrer"
          class="btn btn-outline-success me-2 btn-lg">Login</a>
        <a href="https://finance.yahoo.com/quote/GE/" target="_blank" rel="noopener noreferrer"
          class="btn btn-outline-primary me-2 btn-lg">Register</a>
      </div>


            </div>
        </nav>
    );
}

export default Navbar;