import React from 'react';
import Outdoorgalore from '../components/outdoorfun.jsx';
import Sidebar from '../components/sidebar.jsx';
import './outdoor.css';
import Questionbutton from '../components/questionbutton.jsx';

function Outdoor() {
    return (
        <>

        <Sidebar />

        <div className="form-container">
        <Questionbutton />
        </div>

        <Outdoorgalore />

        </>
    );
}

export default Outdoor;


