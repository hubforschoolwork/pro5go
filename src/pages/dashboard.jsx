import React from 'react';
import Sidebar from './sidebar';

const Dashboard = () => {
    return (
        <div className="d-flex">
            <Sidebar />
            <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>
                <h1>Welcome to the Dashboard</h1>
                <p>Here is your main content.</p>
            </div>
        </div>
    );
};

export default Dashboard;
