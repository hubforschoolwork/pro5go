import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        window.location.href = "/login";
    };


    return (

        <div className="sidebar">
            <h2 className="p-3">Dashboard</h2>
            <ul className="nav flex-column">

                <li className="nav-item">
                    <Link to="/outdoor" className="nav-link text-white">Outdoor Activities</Link>
                </li>
                <li className="nav-item">
                    <Link to="/indoor" className="nav-link text-white">Indoor Activities</Link>
                </li>

                <li className="nav-item">
                    <Link to="/sports" className="nav-link text-white">Sports</Link>
                </li>

                <li className="nav-item">
                    <Link to="/resorts" className="nav-link text-white">Resorts</Link>
                </li>


                <li><button onClick={handleLogout}>Logout</button></li>

            </ul>
        </div>
    );
};

export default Sidebar;
