const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./env/keys');

const PORT = process.env.PORT || 5000;
const app = express();

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken) => {
  console.log(accessToken);
}));

// app.use(passport);

app.listen(PORT, () => {
  console.log(`Running server on port ${PORT}.`);
});
