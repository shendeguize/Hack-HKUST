const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSkillSchema = new Schema({
  skillID: String,
  level: { type: Number, default: 0 }
});

module.exports = userSkillSchema;
