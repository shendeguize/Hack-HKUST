const requireLogin = require("../middlewares/requireLogin");
const mongoose = require("mongoose");
const Skills = mongoose.model("skills");
const Questions = mongoose.model("questions");
const User = mongoose.model("users");

module.exports = app => {
  app.post("/skilltree", async (req, res) => {
    const { username } = req.body;
    const userProfile = await User.find({
      "local.username": username
    });
    const skilltree = {
      errCode: "0000",
      errInfo: "Success",
      body: {
        career: userProfile.career,
        learned: ["1", "2", "3", "4"]
      }
    };
    res.send(skilltree);
  });

  app.post("/ability", async (req, res) => {
    const { username } = req.body;
    const userSkill = await User.find({
      "local.username": username
    }).select("local.skills");

    const ability = {
      errCode: "0000",
      errInfo: "Success",
      body: {
        programming: "4%",
        mathematics: "3%",
        "data processing": "0%",
        "algorithms and data structures": "0%",
        "machine learning models": "0%"
      }
    };
    res.send(ability);
  });

  app.post("/test", async (req, res) => {
    const { username } = req.body;
    const userSkill = await User.find({
      "local.username": username
    }).select("local.skills");

    const question = await Questions.find({});
    res.send(question);
  });

  app.post("/result", async (req, res) => {
    res.send({
      errCode: "0000",
      errInfo: "Success",
      body: "True"
    });
  });
};
