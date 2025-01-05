import express from 'express';
const router = express.Router();
import Question from '../models/Question.js';

router.post('/', (req, res) => {
  const newQuestion = new Question(req.body);

  newQuestion.save()
    .then(question => res.json(question))
    .catch(err => res.status(400).json({ error: err.message }));
});

export default router;
