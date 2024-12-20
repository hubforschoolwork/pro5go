//Add the timestamp code to the TopicPage

import React, { useState } from 'react';
import ForumForm from './Forumorm';

function TopicPage({ topic }) {
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = (text) => {
    const newPost = {
      text,
      timestamp: new Date().toLocaleString() // Capture the current date and time
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container">
      <h1>{topic}</h1>
      <ForumForm onSubmit={handleFormSubmit} />
      <div className="mt-4">
        {posts.map((post, index) => (
          <div key={index} className="card mb-2">
            <div className="card-body">
              <p>{post.text}</p>
              <small className="text-muted">Submitted on: {post.timestamp}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;

//Explanation
// ForumForm Component: No changes are needed here. It remains the same and handles the form submission.

// TopicPage Component: When a new post is submitted, a timestamp is captured using new Date().toLocaleString(). This timestamp is stored along with the post text in the posts state.

// Displaying the Timestamp: The timestamp is displayed below each post using a <small> tag with the class text-muted for styling.