const passport = require("passport");
const mongoose = require("mongoose");
const Skill = mongoose.model("skills");
module.exports = app => {
  app.post(
    "/login",
    passport.authenticate("local-login", {
      successRedirect: "/main",
      failureRedirect: "/error"
    })
  );
  //Helper Function
  app.post("/addskill", (req, res) => {
    const { skillID, career, picID, order, content } = req.body;
    const skill = new Skill({
      skillID,
      career,
      picID,
      order,
      content
    }).save();
    res.send("done");
  });

  app.get("/login", (req, res) => {
    res.send("login page");
  });

  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/signup", (req, res) => {
    res.send("signup page");
  });

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/skilltree", // redirect to the secure profile section
      failureRedirect: "/signup" // redirect back to the signup page if there is an error
    })
  );
};
