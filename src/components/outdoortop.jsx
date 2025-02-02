import React, { useState } from 'react';
import ForumForm from './forumform';
import AnswerForm from './answerform';

function TopicPage({ topic }) {
  const [posts, setPosts] = useState([]);

  const handleFormSubmit = (text) => {
    const newPost = {
      text,
      timestamp: new Date().toLocaleString(),
      answers: [] // Initialize answers for each post
    };
    setPosts([...posts, newPost]);
  };

  const handleAnswerSubmit = (postIndex, answerText) => {
    const updatedPosts = posts.map((post, index) => {
      if (index === postIndex) {
        return {
          ...post,
          answers: [...post.answers, { text: answerText, timestamp: new Date().toLocaleString() }]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container-top">
      <h1>{topic}</h1>
      <ForumForm onSubmit={handleFormSubmit} />

      {/* Include the AnswerForm for submitting answers */}
      <div className="mt-4" style={{ width: '50%', marginLeft: '310px'}}>
        {posts.map((post, index) => (
          <div key={index} className="card mb-2" style={{ border: '5px solid rgb(247, 128, 128)',
           boxShadow: '0 0 0 5px white, 0 0 10px 10px darkolivegreen' }}>
            <div className="card-body">
              <p>{post.text}?</p>
              <small className="text-muted">Submitted on: {post.timestamp}</small>

              {/* Include the AnswerForm for submitting answers */}
              <AnswerForm onSubmit={(answerText) => handleAnswerSubmit(index, answerText)} />
              {post.answers.length > 0 && (
                <div className="mt-2" style={{ border: '5px solid rgb(247, 128, 128)'}}>
                  <h5>Answers:</h5>
                  {post.answers.map((answer, answerIndex) => (
                    <div key={answerIndex} className="border p-2 mt-1">
                      <p>{answer.text}</p>
                      <small className="text-muted">Answered on: {answer.timestamp}</small>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicPage;

