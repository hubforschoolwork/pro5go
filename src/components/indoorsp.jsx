import React from 'react';
import TopicPage from '../components/outdoortop.jsx';


function Indoorgalore() {
  return (
    <>

      <div className="container d-flex">

        <div className='container' style={{ marginLeft: '85px' }}>
          <div className='container-title-outdoor'>
            <div className="row">
              <div className="col">
                <h1>Indoor Fun</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="form-container" style={{ marginLeft: '200px' }}>
          <h4>Discover activities for friends and family!</h4>
          <h4>Make your snow day inside a lot more fun!</h4>
        </div>
      </div>

      <TopicPage />

    </>

  );
}

export default Indoorgalore;

