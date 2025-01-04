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
            <div>
                {user ? <h1>Welcome {user}</h1> : <h1>Please log in</h1>} {/* Accessing user directly */}
            </div>
        </>
    );
};

export default Dashboard;



// import React from 'react';
// import Dashboard1 from '../components/dashboardtest.jsx';
// import Sidebar from '../components/sidebar.jsx';
// import Dashboardmain from '../components/dashboardmain.jsx';
// import Dashboardgreeting from '../components/dashgreeting.jsx';

// const Dashboard = ({ user }) => {
//     return (
//         <>
//         <Sidebar />
//         <Dashboard1 />
//         <div className="d-flex">
//             <Dashboardmain />
//         </div>
//         <div className="greeting-container">
//             <Dashboardgreeting user={user} />
//         </div>
//         </>
//     );
// };

// export default Dashboard;





// ****************************************************
// import React from 'react';
// import Dashboard1 from '../components/dashboardtest.jsx';
// import Sidebar from '../components/sidebar.jsx';
// import Dashboardmain from '../components/dashboardmain.jsx';
// import Dashboardgreeting from '../components/dashgreeting.jsx';

// const Dashboard = () => {
//     return (
//         <>
//         <Sidebar />
//         <Dashboard1 />
//         <div className="d-flex">
//             <Dashboardmain />
//         </div>
//         <div className="greeting-container">
//             <Dashboardgreeting />
//         </div>

//         </>
//     );
// };

// export default Dashboard;


