import React from 'react';
import './sidebar.css'; // Import custom styles (optional)

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column bg-dark text-white vh-100">
            <h2 className="p-3">Dashboard</h2>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Home</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Analytics</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Settings</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Logout</a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
