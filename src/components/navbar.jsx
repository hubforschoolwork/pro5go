import React from 'react';


const Navbar = () => {

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">


            <div className="container-fluid">
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

                    </ul>
                </div>

                {/* <div className="d-flex align-items-center">
                    <span className="text-danger me-2">ENTER:</span>
                    <a href="/login" class="btn btn-secondary me-2">Login</a>
                    <a href="/register" class="btn btn-secondary me-2">Register</a>
                </div> */}


            </div>

        </nav>
    );
}

export default Navbar;
