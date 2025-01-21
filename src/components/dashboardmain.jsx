import React from 'react';
import './dashboardmain.css';

const Dashboardmain = () => {
    return (
        <>
        <div className="container-dash d-flex">

            <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>
                <h1>Welcome to the Dashboard</h1>
                <h5>Choose a topic from the dashboard to explore all things winter!</h5>
            </div>
        </div>
        </>
    );
};

export default Dashboardmain;
