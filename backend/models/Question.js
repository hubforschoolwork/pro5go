import mongoose from 'mongoose';
const { Schema } = mongoose;

const answerSchema = new Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },

});

const questionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  topic: { type: String, required: true }, // Add topic field
  answers: [answerSchema],

});

const Question = mongoose.model('Question', questionSchema);

export default Question;
