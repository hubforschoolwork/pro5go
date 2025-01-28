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
          placeholder="Ask or answer a question here..."
          style={{ width: '200%', height: '100px' }}
        />
      </div>



      <div className="button-container">
      {/* <button type="submit" className="btn btn-primary btn-lg">Submit</button>
      <button type="button" className="btn btn-secondary btn-lg button-spacing" onClick={() => setText('')}>Back</button> */}

      <button type="submit" id="sub2" className="btn btn-primary btn-lg">Submit</button>
      {/* <button type="button" className="btn btn-secondary btn-lg" onClick={() => setText('')}>Back</button> */}
    </div>

  //  </form>
  );
}

export default ForumForm;


