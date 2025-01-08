import React from 'react';
import './welcome.css';
import Welcomebutton from '../components/welcomebutton.jsx';


// function Welcome() {
//   return (
//     <>
//       <div className="container text-center">
//         <div className="row">
//           <div className="col">
//             <img src="src/assets/santa-claus-1819933_1280.jpg" alt="Santa Claus" />
//           </div>
//           <div className="col-6">
//             <h5>If you like discovering all things winter, then come and experience the magic of the season!</h5>
//           </div>
//           <div className="col">
//             <img src="src/assets/cocoa-1908020_1280.jpg" alt="Cocoa" />
//           </div>
//         </div>
//       </div>

function Welcome() {
  return (
    <>
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
          <div className="col-4">
            <h5>If you like discovering all things winter, then come and experience the magic of the season!</h5>
          </div>
          <div className="col">
            <img src="src/assets/cocoa-1908020_1280.jpg" alt="Cocoa" className="img-fluid custom-img-outline" style={{ height: '300px', width: '700px' }}/>
          </div>
        </div>
      </div>
    <div className="container" id="welcomelink">
      <Welcomebutton />
      </div>
    </>
  );
} 

export default Welcome;


// function Welcome() {
//   return (
//     <>
//       <div className="container-title">
//         <div className="row">
//           <div className="col">
//             <h1>Winter Wonderland</h1>
//           </div>
//         </div>
//       </div>
//       <div className="container text-center">
//         <div className="row">
//           <div className="col">
//             <img src="src/assets/santa-claus-1819933_1280.jpg" alt="Santa Claus" className="img-fluid custom-img-outline" style={{ width: '300px', height: '300px' }} />
//           </div>
//           <div className="col-6">
//             <h5>If you like discovering all things winter, then come and experience the magic of the season!</h5>
//           </div>
//           <div className="col">
//             <img src="src/assets/cocoa-1908020_1280.jpg" alt="Cocoa" className="img-fluid custom-img-outline" style={{ width: '300px', height: '300px' }} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
