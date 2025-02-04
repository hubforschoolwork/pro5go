import React from 'react';
import './welcome.css';
import Welcomebutton from '../components/welcomebutton.jsx';


function Welcome() {
  return (
  <>
  <div className='container'>
    <div className='container-title'>
      <div className="row">
        <div className="col">
          <h1>Winter Wonderland</h1>
        </div>
      </div>
    </div>


      <div className='container text-center' id='santaset'>
        <div className="row">
          <div className="col">
            <img src="src/assets/santa-claus-1819933_1280.jpg" alt="Santa Claus" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
          </div>

          <div className="col-4 middle-column">
            <h3>Discover the fun!</h3>
            <h3>Enjoy the season!</h3>
          </div>
          
          <div className="col">
            <img src="src/assets/cocoa-1908020_1280.jpg" alt="Cocoa" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
          </div>
        </div>
      </div>

    <div className='container'>
      <div className="row">
        <div className="col-md-4">

      <Welcomebutton />
      
      </div>
    </div>
    </div>
</div>    
    </>
  );
} 

export default Welcome;

