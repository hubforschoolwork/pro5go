import React from 'react';
import Sidebar from '../components/sidebar.jsx';
import './resorts.css';
import TopicPage from '../components/outdoortop.jsx';
import Resortfun from '../components/resortfun.jsx';


function Resorts() {
    return (
        <>

            <Sidebar />

            <Resortfun />

            <TopicPage />

        </>
    );
}

export default Resorts;


