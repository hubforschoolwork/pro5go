// *****************************FORM COMPONENT*********************************

import React, { useState } from 'react';

function ForumForm({ onSubmit }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          className="form-control"
          value={text}
          onChange={handleChange}
          placeholder="Ask or answer a question..."
        />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button type="button" className="btn btn-secondary" onClick={() => setText('')}>Back</button>
    </form>
  );
}

export default ForumForm;


// *******************************MAIN COMPONENT***********************************

import React, { useState } from 'react';
import ForumForm from './ForumForm';

function Forum() {
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = (text) => {
    setPosts([...posts, text]);
  };

  return (
    <div className="container">
      <h1>Forum</h1>
      <ForumForm onSubmit={handleFormSubmit} />
      <div className="mt-4">
        {posts.map((post, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              {post}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;



// ****************************************STYLING*************************
// Add to App.jsx or index.js

  import 'bootstrap/dist/css/bootstrap.min.css';

// ************************INTEGRATE COMPONENTS****************************

import React from 'react';
import ReactDOM from 'react-dom';
import Forum from './Forum';

ReactDOM.render(<Forum />, document.getElementById('root'));

// ********************************************FORM FOR EACH PAGE (SEPARATE)***************
//*************************************************************************************** */

import React, { useState } from 'react';
import ForumForm from './ForumForm';

function TopicPage({ topic }) {
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = (text) => {
    setPosts([...posts, text]);
  };

  return (
    <div className="container">
      <h1>{topic}</h1>
      <ForumForm onSubmit={handleFormSubmit} />
      <div className="mt-4">
        {posts.map((post, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              {post}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;

// **************************************INTEGRATE TOPICS******************************
// Integrating Components: You can integrate the TopicPage component in your main application file. Here's an example of how you can set up routing to handle different topics:

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopicPage from './TopicPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/topic1">
          <TopicPage topic="Topic 1" />
        </Route>
        <Route path="/topic2">
          <TopicPage topic="Topic 2" />
        </Route>
        {/* Add more routes for additional topics */}
        <Route path="/">
          <h1>Welcome to the Forum</h1>
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// *******************************FILE STRUCTURE**********************************
/src
  /components
    ForumForm.js
    TopicPage.js
  App.js
  index.js

