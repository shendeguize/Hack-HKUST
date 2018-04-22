const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");
const { Schema } = mongoose;
const userSkillSchema = require("./userSkills");

const userSchema = new Schema({
  local: {
    username: String,
    email: String,
    password: String,
    career: String,
    skills: [userSkillSchema]
  }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

mongoose.model("users", userSchema);
