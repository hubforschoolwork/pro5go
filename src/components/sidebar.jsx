import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        // <div className="sidebar d-flex flex-column bg-primary bg-opacity-50 text-white vh-100">

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
                    <Link to="/cooking" className="nav-link text-white">Cooking/Recipes</Link>
                </li>
                <li className="nav-item">
                    <Link to="/giftshopping" className="nav-link text-white">Gift Shopping</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sports" className="nav-link text-white">Sports</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
