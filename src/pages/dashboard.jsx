import React from 'react';
import { useAuth } from '../js/AuthContext';
import Dashboard1 from '../components/dashboardtest.jsx';
import Sidebar from '../components/sidebar.jsx';
import Dashboardmain from '../components/dashboardmain.jsx';


const Dashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <Sidebar />
            <Dashboard1 />

            <div className="d-flex">
                <Dashboardmain />
            </div>
            
            <div className="d-flex">
                <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>
                {user ? <h2>Welcome {user}</h2> : <h2>Please log in</h2>} {/* Accessing user directly */}
                </div>
            </div>
        </>
    );
};

export default Dashboard;



