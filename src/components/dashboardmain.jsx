import React from 'react';
import './dashboardmain.css';

const Dashboardmain = () => {
    return (
        <>
        <div className="container d-flex">

            <div className="content p-4">
            {/* <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>                */}
                <h1>Welcome</h1>
                <h1>to the</h1>
                <h1>Dashboard</h1>
                <h3>Choose a topic from the menu!</h3>
            </div>
        </div>

        <div className='container text-center-3' id='santaset'>
            <div className="row">
                <div className="col">
                    <img src="src/assets/snowman-9197289_1280.jpg" alt="Santa Claus"
                     className="img-fluid custom-img-outline"
                     style={{ height: '400px', width: '500px', marginLeft: '100px' }}/>
                </div>
            </div>
        </div>

        </>
    );
};

export default Dashboardmain;


