import React from 'react';
import '../pages/sidebar.css'; // Import custom styles (optional)

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column bg-dark text-white vh-100">
            <h2 className="p-3">Dashboard</h2>
            <ul className="nav flex-column">

                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Outdoor Activities</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Indoor Activities</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Cooking/Recipes</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Gift Shopping</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link text-white">Sports</a>
                </li>

            </ul>
        </div>
    );
};

export default Sidebar;
