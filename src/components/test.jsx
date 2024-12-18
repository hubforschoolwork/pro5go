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
  

