const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");

const User = mongoose.model("users");
const Skill = mongoose.model("skills");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    async (req, email, password, done) => {
      const { username, career } = req.body;
      const existingUser = await User.findOne({ "local.username": username });

      if (existingUser) {
        return done(null, existingUser, { message: "username taken" });
      }
      // if there is no user with that email
      const newUser = new User();

      // set the user's local credentials
      newUser.local.email = email;
      newUser.local.password = newUser.generateHash(password);
      newUser.local.username = username;
      newUser.local.career = career;
      const careerSkill = await Skill.find({ career }, function(err, item) {
        item.forEach(item => {
          newUser.local.skills.push({ skillID: item.skillID });
        });
      });
      // save the user
      await newUser.save(function(err) {
        if (err) throw err;
        return done(null, newUser);
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
      console.log("login-email: ", email);
      User.findOne({ "local.email": email }, function(err, user) {
        // if there are any errors, return the error before anything else
        if (err) return done(err);

        // if no user is found, return the message
        if (!user) return done(null, false, { message: "No User Found." });

        // if the user is found but the password is wrong
        if (!user.validPassword(password))
          return done(null, false, { message: "Incorrect Password." }); // create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        return done(null, user);
      });
    }
  )
);
