import React from 'react';
import Outdoorgalore from '../components/outdoorfun.jsx';
import Sidebar from '../components/sidebar.jsx';
import './outdoor.css';
import Questionbutton from '../components/questionbutton.jsx';
import Questionit from '../components/questionform.jsx';

function Outdoor() {
    return (
        <>

        <Sidebar />

        <div className="form-container">

        </div>

        <Outdoorgalore />
        <Questionit />
        <Questionbutton />
        </>
    );
}

export default Outdoor;


