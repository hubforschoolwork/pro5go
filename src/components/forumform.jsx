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
          className="form-control textarea-outline"
          value={text}
          onChange={handleChange}
          placeholder="Ask a question here..."
          style={{ width: '100%', height: '100px', marginLeft: '200px' }}
        />
      </div>


      <div className="button-container"  style={{ marginLeft: '200px'}}>
        <button type="submit" id="sub2" className="btn btn-danger btn-lg">Submit</button>
      </div>

  </form>

  );
}

export default ForumForm;


