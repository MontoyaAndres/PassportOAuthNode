import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,

}), () => {

});