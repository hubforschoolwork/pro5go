import React, { useState } from 'react';
import ForumForm from './forumform';

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
