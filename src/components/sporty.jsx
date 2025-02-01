import React from 'react';
import TopicPage from '../components/outdoortop.jsx';
// import './cooking.css'

function Sportfun() {
    return (
        <>
    {/* <div className="container d-flex"> */}


        {/* <div className="content p-4" style={{ marginLeft: '250px', width: '100%' }}>
        <h2>Sports</h2>
            <h4>Enjoy the winter season's outdoor sports!</h4>
            <h4>Find a winter sport that's just your speed!</h4>
        </div>
    </div> */}

    <div className='container' style={{ marginLeft: '85px'}}>
    <div className='container-title-outdoor'>
      <div className="row">
        <div className="col">
          <h1>Sports</h1>
        </div>
      </div>
    </div>
</div>

        <div className="form-container" style={{ marginLeft: '200px'}}>
            <h4>Enjoy the outdoors with sports of the season!</h4>
            <h4>Find a sport that's just right for you!</h4>
        </div>

        <TopicPage />
        </>
    );
}

export default Sportfun;


