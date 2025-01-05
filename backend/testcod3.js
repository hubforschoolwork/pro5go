// //code for q and a functionality

// Frontend (React)
// Components:

// QuestionComponent: To display individual questions and their details.

// AnswerComponent: To display and submit answers.

// Integration:

// Integrate these components into your topic files to display questions and answers for each topic.


// Backend (Node.js/Express)
// server.js:

// Add routes for submitting and fetching questions and answers.

// Implement middleware for authentication and authorization.

// Database (MongoDB)
// Schema:

// Create a schema for questions and answers within your existing MongoDB database.

// FOR QUESTIONS
// const questionSchema = new mongoose.Schema({
//     topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic', required: true },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     questionText: { type: String, required: true },
//     timestamp: { type: Date, default: Date.now }
//   });

//   FOR answers

//   const answerSchema = new mongoose.Schema({
//     questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     answerText: { type: String, required: true },
//     timestamp: { type: Date, default: Date.now }
//   });

  
//   Steps to Implement
// Frontend:

// Create QuestionComponent and AnswerComponent.

// Integrate these components into your topic files.

// Backend:

// Update server.js to include routes for questions and answers.

// Implement middleware for authentication and authorization.

// Database:

// Create schemas for questions and answers within your existing MongoDB database.


// *********************************************************

// server.js
// submit questions
// app.post('/api/questions', authenticateUser, async (req, res) => {
//     const { topicId, questionText } = req.body;
//     const userId = req.user._id;
//     const question = new Question({ topicId, userId, questionText });
//     await question.save();
//     res.status(201).json(question);
//   });

  
//   Fetch answers
//   app.get('/api/questions/:questionId/answers', async (req, res) => {
//     const { questionId } = req.params;
//     const answers = await Answer.find({ questionId }).populate('userId', 'username');
//     res.json(answers);
//   });

  
//   Submit an answer
//   app.post('/api/answers', authenticateUser, async (req, res) => {
//     const { questionId, answerText } = req.body;
//     const userId = req.user._id;
//     const answer = new Answer({ questionId, userId, answerText });
//     await answer.save();
//     res.status(201).json(answer);
//   });

  
//   middleware
//   const authenticateUser = (req, res, next) => {
//     // Your authentication logic here
//     next();
//   };

  
//   Database schemas
//   - use as Above 


