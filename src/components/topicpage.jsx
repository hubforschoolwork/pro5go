// import React, { useState } from 'react';
// import ForumForm from './forumform';

// function TopicPage({ topic }) {
//   const [posts, setPosts] = useState([]);

//   const handleFormSubmit = (text) => {
//     const newPost = {
//       text,
//       timestamp: new Date().toLocaleString() // Capture the current date and time
//     };
//     setPosts([...posts, newPost]);
//   };

//   return (
//     <div className="container">
//       <h1>{topic}</h1>
//       <ForumForm onSubmit={handleFormSubmit} />
//       <div className="mt-4">
//         {posts.map((post, index) => (
//           <div key={index} className="card mb-2">
//             <div className="card-body">
//               <p>{post.text}</p>
//               <small className="text-muted">Submitted on: {post.timestamp}</small>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TopicPage;

// Jan 5 Part 2*****************************
import React, { useState, useEffect } from 'react';
import ForumForm from './forumform';

function TopicPage({ topic }) {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    // Fetch questions by topic from the backend
    fetch(`/questions/${topic}`)
      .then(response => response.json())
      .then(data => setQuestions(data))
      .catch(error => console.error('Error fetching questions:', error));
  }, [topic]);

  const handleQuestionSubmit = ({ text, type }) => {
    const newQuestion = {
      text,
      type,
      topic, // Include topic identifier
      timestamp: new Date().toLocaleString(),
      answers: []
    };

    fetch('/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newQuestion)
    })
      .then(response => response.json())
      .then(question => setQuestions([...questions, question]))
      .catch(error => console.error('Error submitting question:', error));
  };

  const handleAnswerSubmit = ({ text, type }) => {
    const updatedQuestions = questions.map((question) => {
      if (question === selectedQuestion) {
        return {
          ...question,
          answers: [...question.answers, { text, type, timestamp: new Date().toLocaleString() }]
        };
      }
      return question;
    });
    setQuestions(updatedQuestions);
  };

  const handleQuestionClick = (question) => {
    console.log('Question clicked:', question);
    setSelectedQuestion(question);
  };

  return (
    <div className="container">
      <h1>{topic}</h1>
      <ForumForm onSubmit={handleQuestionSubmit} placeholder="Ask a question..." type="question" />
      <div className="mt-4">
        {questions.map((question, index) => (
          <div key={index} className="card mb-2" onClick={() => handleQuestionClick(question)}>
            <div className="card-body">
              <p>{question.text}</p>
              <small className="text-muted">Submitted on: {question.timestamp}</small>
            </div>
          </div>
        ))}
      </div>
      {selectedQuestion && (
        <div className="mt-4">
          <h2>Answers</h2>
          <ForumForm onSubmit={handleAnswerSubmit} placeholder="Submit an answer..." type="answer" />
          {selectedQuestion.answers.map((answer, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">
                <p>{answer.text}</p>
                <small className="text-muted">Submitted on: {answer.timestamp}</small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TopicPage;


// Jan 5**************************
// import React, { useState, useEffect } from 'react';
// import ForumForm from './forumform';

// function TopicPage({ topic }) {
//   const [questions, setQuestions] = useState([]);
//   const [selectedQuestion, setSelectedQuestion] = useState(null);

//   useEffect(() => {
//     // Fetch questions by topic from the backend
//     fetch(`/questions/${topic}`)
//       .then(response => response.json())
//       .then(data => setQuestions(data))
//       .catch(error => console.error('Error fetching questions:', error));
//   }, [topic]);

//   const handleQuestionSubmit = ({ text, type }) => {
//     const newQuestion = {
//       text,
//       type,
//       topic, // Include topic identifier
//       timestamp: new Date().toLocaleString(),
//       answers: []
//     };

//     fetch('/questions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newQuestion)
//     })
//       .then(response => response.json())
//       .then(question => setQuestions([...questions, question]))
//       .catch(error => console.error('Error submitting question:', error));
//   };

//   const handleAnswerSubmit = ({ text, type }) => {
//     const updatedQuestions = questions.map((question) => {
//       if (question === selectedQuestion) {
//         return {
//           ...question,
//           answers: [...question.answers, { text, type, timestamp: new Date().toLocaleString() }]
//         };
//       }
//       return question;
//     });
//     setQuestions(updatedQuestions);
//   };

//   const handleQuestionClick = (question) => {
//     console.log('Question clicked:', question);
//     setSelectedQuestion(question);
//   };

//   return (
//     <div className="container">
//       <h1>{topic}</h1>
//       <ForumForm onSubmit={handleQuestionSubmit} placeholder="Ask a question..." type="question" />
//       <div className="mt-4">
//         {questions.map((question, index) => (
//           <div key={index} className="card mb-2" onClick={() => handleQuestionClick(question)}>
//             <div className="card-body">
//               <p>{question.text}</p>
//               <small className="text-muted">Submitted on: {question.timestamp}</small>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selectedQuestion && (
//         <div className="mt-4">
//           <h2>Answers</h2>
//           <ForumForm onSubmit={handleAnswerSubmit} placeholder="Submit an answer..." type="answer" />
//           {selectedQuestion.answers.map((answer, index) => (
//             <div key={index} className="card mb-2">
//               <div className="card-body">
//                 <p>{answer.text}</p>
//                 <small className="text-muted">Submitted on: {answer.timestamp}</small>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default TopicPage;
