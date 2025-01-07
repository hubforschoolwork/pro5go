import React from 'react';
import './welcome.css';
import Welcomebutton from '../components/welcomebutton.jsx';



// function Welcome() {
//     return (
//         <>
//         <div>
//         <div className="form-container">
//             <h1>Winter Wonderland</h1>
//             <h2>Experience the Magic of the Season!</h2>
//         </div>

//         <Welcomebutton />
           
//         </div>
//         </>
//     );
// }
// export default Welcome;

function Welcome() {
    return (
        <>
      <div className="background-container">
        <img src="src/assets/santa-claus-1819933_1280.jpg" className="overlay-image" alt="Overlay" />
        <div className="content">
          <h1>Welcome to Winter Wonderland</h1>
          <p>If you like discovering all things winter, then this is the place for you!</p>
        </div>
      </div>

        <Welcomebutton />
</>
    );
  }

  export default Welcome;

  