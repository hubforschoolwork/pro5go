import React from 'react';
import Sidebar from './sidebar';

const Dashboardmain = () => {
    return (
        <>
        <Sidebar />
        <div className="d-flex">

            <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>
                <h1>Welcome to the Dashboard</h1>
                <p>Here is your main content.</p>
            </div>
        </div>
        </>
    );
};

export default Dashboardmain;
