import express from 'express';
const router = express.Router();
import Question from '../models/Question.js';

// Get questions by topic
router.get('/:topic', (req, res) => {
  const { topic } = req.params;
  Question.find({ topic })
    .then(questions => res.json(questions))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Create a new question
router.post('/', (req, res) => {
  const newQuestion = new Question(req.body);

  newQuestion.save()
    .then(question => res.json(question))
    .catch(err => res.status(400).json({ error: err.message }));
});

export default router;
