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
                    <Link to="giftshopping" className="nav-link text-white">Gift Shopping</Link>
                </li>
                <li className="nav-item">
                    <Link to="/sports" className="nav-link text-white">Sports</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;


// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-item">Item 1</div>
//       <div className="sidebar-item">Item 2</div>
//       <div className="sidebar-item">Item 3</div>
//       {/* Add more items as needed */}
//     </div>
//   );
// };

// export default Sidebar;
