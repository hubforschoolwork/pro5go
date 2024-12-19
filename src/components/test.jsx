index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

*******or*****************

Method 2: Importing in CSS
Open your main CSS file (e.g., App.css or styles.css).

Add the @import statement at the top of the file.

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

____________________________________________________
index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React App</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" />
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>

in App.css or style.css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');


APPLYING FONT TO A SPECIFIC TITLE

// TitleComponent.js
import React from 'react';
import './styles.css';

const TitleComponent = () => {
  return (
    <h1 className="custom-title">My Custom Title</h1>
  );
};

export default TitleComponent;



/* styles.css */
.custom-title {
    font-family: 'Roboto', sans-serif;
    font-size: 2rem; /* Adjust the size as needed */
  }
  
***************************************************************************
12/18/2024

import React from 'react';
import './App.css'; // Make sure to import your CSS file
import App from '../App'

function WelcomePage() {
  return (
    <div className="background-container">
      <img src="src/assets/overlay-image.png" className="overlay-image" alt="Overlay" />
      <div className="content">
        <h1>Welcome to Our Website</h1>
        <p>This is the welcome page with a background image and an overlay image on the right-hand side.</p>
      </div>
    </div>
  );
}

export default WelcomePage;


************app.css*************

.background-container {
  position: relative;
  background-image: url('src/assets/background-image.jpg');
  background-size: cover;
  width: 100%;
  height: 100vh; /* Adjust as needed */
}

.overlay-image {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 200px; /* Adjust as needed */
  height: auto;
}

.content {
  position: relative;
  z-index: 1;
  color: white; /* Adjust text color as needed */
  text-align: center;
  padding: 20px;
}
