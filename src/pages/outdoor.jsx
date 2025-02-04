import React from 'react';
import Outdoorgalore from '../components/outdoorfun.jsx';
import '../components/outdoorfun.css';
import Sidebar from '../components/sidebar.jsx';
import './outdoor.css';
import TopicPage from '../components/outdoortop.jsx';


function Outdoor() {
    return (
        <>

            <Sidebar />

            <Outdoorgalore />

            <TopicPage />

        </>
    );
}

export default Outdoor;


