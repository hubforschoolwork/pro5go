import React from 'react';
import Dashboard1 from '../components/dashboardtest.jsx';
import Sidebar from '../components/sidebar.jsx';
import Dashboardmain from '../components/dashboardmain.jsx';

const Dashboard = () => {
    return (
        <>
        <Sidebar />
        <Dashboard1 />
        <div className="d-flex">
            <Dashboardmain />
        </div>
    
        </>
    );
};

export default Dashboard;


