import React from 'react';
import Answerit from '../components/answerform.jsx';
import Dashboard1 from '.components/dashboardtest.jsx';
import Sidebar from '../components/sidebar.jsx';
import './answer.css'

function Answer() {
    return (
        <>
        <Dashboard1 />
        <Sidebar />

        <div className="form-container">

        </div>

        <Answerit />

        </>
    );
}

export default Answer;