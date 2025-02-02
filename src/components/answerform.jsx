import React, { useState } from 'react';

const AnswerForm = ({ onSubmit }) => {
  const [answerText, setAnswerText] = useState('');

  const handleChange = (e) => {
    setAnswerText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(answerText);
    setAnswerText(''); // Clear the textarea after submission
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <div className="form-group">
        <textarea
          className="form-control" style={{ border: '5px solid rgb(247, 128, 128)'}}
          value={answerText}
          onChange={handleChange}
          placeholder="Write your answer here..."
        />
      </div>
      <button type="submit" className="btn btn-danger btn-sm">Submit Answer</button>
    </form>
  );
};

export default AnswerForm;



