// import React from 'react';
// // import './cooking.css'

// function Answerit() {
//     return (
//         <>
//         <div className="form-container">
//             <h2>Answer a Question</h2>
//             <h4>Help others find inspiration and helpful tips.</h4>            
//         </div>

//         <div className='form-grid'>
//                 <label>Answer Question Here:
//                     <textarea name="message" id='message' />
//                 </label>
//             </div>  
//         </>
//     );
// }

// export default Answerit;


//new jan 6

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
          className="form-control"
          value={answerText}
          onChange={handleChange}
          placeholder="Write your answer here..."
        />
      </div>
      <button type="submit" className="btn btn-success btn-sm">Submit Answer</button>
    </form>
  );
};

export default AnswerForm;



