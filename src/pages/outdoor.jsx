import React from 'react';
import Outdoorgalore from '../components/outdoorfun.jsx';
import '../components/outdoorfun.css';
import Sidebar from '../components/sidebar.jsx';
import Questionbutton from '../components/questionbutton.jsx';
import Questionit from '../components/questionform.jsx';
import './outdoor.css';
// import Addit from '../components/addit.jsx';
import Attitude from '../components/attitude.jsx';
import ForumForm from '../components/forumform.jsx';
import TopicPage from '../components/outdoortop.jsx';


function Outdoor() {
    return (
        <>

        <Sidebar />

        <div className="form-container">

        </div>
        <ForumForm />
        <TopicPage />
        <Outdoorgalore />
        <Questionit />
        <Questionbutton />
        {/* <Addit /> */}
        <Attitude />
        </>
    );
}

export default Outdoor;


