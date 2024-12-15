import React from 'react';
import Questionit from '../components/questionform.jsx';
import Dashboard from '../components/dashboardtest.jsx';
import Sidebar from '../components/sidebar.jsx';
import './question.css'

function Question() {
    return (
        <>
        <Dashboard />
        <Sidebar />

        <div className="form-container">

        </div>

        <Questionit />

        </>
    );
}

export default Question;

