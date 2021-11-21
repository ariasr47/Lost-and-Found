import passport from "passport";
import { Strategy } from "passport-google-oauth20";

import { UserModel } from "../db";
import keys from "./keys";

declare global {
  namespace Express {
    interface User {
      id: number;
      googleId: string;
      name: string;
      email: string;
    }
  }
}

passport.use(
  new Strategy(
    {
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
      callbackURL: "/auth/accepted",
    },
    (accessToken, refreshToken, profile, done) => {
      UserModel.findOne({ where: { googleId: profile.id } })
        .then((currentUser: Express.User) => {
          if (!currentUser) {
            //if not, create a new user
            UserModel.create({
              googleId: profile.id,
              name: profile._json.name,
              email: profile._json.email,
            }).then((newUser: Express.User) => {
              return done(null, newUser);
            });
          }
          //if we already have a record with the given profile ID
          return done(null, currentUser);
        })
        .catch((err: Error) => {
          return done(err);
        });
    }
  )
);

passport.serializeUser((user: Express.User, done) => {
  done(null, user.id);
});

passport.deserializeUser((id: string, done) => {
  // Retrieve user from Users table!!
  UserModel.findOne({ where: { id: id } })
    .then((user: Express.User) => {
      done(null, user);
    })
    .catch((err: Error) => {
      done(err);
    });
});

export default passport;
