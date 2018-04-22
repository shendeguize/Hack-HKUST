const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  questionID: String,
  skillID: String,
  description: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  answer: String
});

mongoose.model("questions", questionSchema);
