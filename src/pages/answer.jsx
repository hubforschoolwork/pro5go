import React from 'react';
import Answerit from '../components/answerform.jsx';
import Dashboard from '../components/dashboardtest.jsx';
import Sidebar from '../components/sidebar.jsx';

import Answerbutton from '../components/answerbutton.jsx';

function Answer() {
    return (
        <>
        <Dashboard />
        <Sidebar />

        <div className="form-container">

        </div>

        <Answerit />
        <Answerbutton />

        </>
    );
}

export default Answer;