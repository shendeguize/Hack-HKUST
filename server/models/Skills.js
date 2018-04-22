const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
  skillID: String,
  name: String,
  career: String,
  picID: String,
  order: Number,
  content: String
});

mongoose.model("skills", skillSchema);
