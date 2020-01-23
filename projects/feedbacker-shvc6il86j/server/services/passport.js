const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { googleClientID, googleClientSecret } = require('../env/keys');

passport.use(new GoogleStrategy({
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(`AccessToken: ${accessToken}`);
  console.log(`RefreshToken: ${refreshToken}`);
  console.log(`Profile: ${JSON.stringify(profile, null, 2)}`);
}));