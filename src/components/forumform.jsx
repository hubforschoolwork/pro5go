import React, { useState } from 'react';
import './forumform.css';

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
          // style={{ width: '100%', height: '100px' }}
        />
      </div>

      <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      <button type="button" className="btn btn-secondary btn-lg button-spacing" onClick={() => setText('')}>Back</button>
    </form>
  );
}

export default ForumForm;






